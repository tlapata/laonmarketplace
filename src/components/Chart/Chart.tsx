import { useEffect, useState } from "react";

import {
  ChartingLibraryWidgetOptions,
  IChartingLibraryWidget,
  ResolutionString,
  Timezone,
  widget,
} from "../../assets/charting_library";
import { getAddress } from "utils/addressHelpers";
import tokens from "../../config/constants/tokens";
import { useWeb3React } from "@web3-react/core";
import {
  GET_PAIR_ADDRESS,
  GRAPH_QUERY,
  TokenSymbols,
} from "utils/graphQueries/queries";
import { useApolloClient } from "@apollo/client";
import { TokenTypes } from "config/constants/loans";
import { WBNB } from "config/constants/addresses";

const Chart = ({ loan, collateral }) => {
  const wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
  const ethPairAddress = "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852";
  const baseAddress = loan?.collateralType === TokenTypes.NETWORK_TOKEN
    ? wethAddress
    : collateral?.address
  const pairAddress = loan?.collateralType === TokenTypes.NETWORK_TOKEN
    ? ethPairAddress
    : collateral.approvedToken === null ? '' : collateral?.approvedToken[0]?.pairedAddress
  const stableCoin = loan?.borrowedCoin?.tokenAddress;
  const client = useApolloClient();
  const context = useWeb3React();
  const { chainId } = context;
  const quoteToken = tokens.wrappedToken;
  // JS API FUnctions for
  const configurationData = {
    exchanges: [
      {
        name: "Gov",
        value: "",
        desc: "Gov token tool",
      },
    ],
    supported_resolutions: [
      "1",
      "5",
      "15",
      "30",
      "60",
      "240",
      "720",
      "1D",
      "1W",
    ],
    supports_group_request: false,
    supports_marks: false,
    supports_search: true,
    supports_timescale_marks: false,
    supports_time: true,
    currency_codes: ["WBNB"],
  };

  const lastBarsCache = new Map();
  const JS_API_CALLBACKS = {
    onReady: (callback) => {
      setTimeout(() => callback(configurationData));
    },
    searchSymbols: async () => { },
    resolveSymbol: async (
      symbolName,
      onSymbolResolvedCallback,
      onResolveErrorCallback
    ) => {
      const { data } = await client.query({
        query: TokenSymbols,
        variables: {
          symbolInputField: {
            pairedAddress: pairAddress,
            network: "BSC",
            tokenAddress: stableCoin,
          },
        },
      });

      onSymbolResolvedCallback(data.getSybmolDetails);
    },

    getBars: async (
      symbolInfo,
      resolution,
      periodParams,
      onHistoryCallback,
      onErrorCallback
    ) => {
      const { from, to, firstDataRequest, countBack } = periodParams;
      let pairs;
      if (loan?.collateralType !== TokenTypes.NETWORK_TOKEN) {
        pairs = await client.query({
          query: GET_PAIR_ADDRESS,
          variables: {
            queryInput: {
              exchangeName: `PancakeSwap`,
              baseCurrency: collateral?.address,
              network: "bsc",
            },
          },
        });
      }
      const { data } = await client.query({
        query: GRAPH_QUERY,
        variables: {
          queryInput: {
            since: from,
            till: to,
            network: "bsc",
            exchangeName: "PancakeSwap",
            quoteCurrency: WBNB, //wbnb, // borrowedCoin
            baseCurrency:
              loan?.collateralType === TokenTypes.NETWORK_TOKEN || collateral?.address === WBNB
                ? stableCoin
                : pairs?.data?.getPairsBitQuery[0]?.baseCurrency?.address,
            window: resolution.toLowerCase(),
            limit: countBack,
          },
        },
      });

      try {
        if (data.bitQueryClient.length === 0) {
          // "noData" should be set if there is no datCharta in the requested period.
          onHistoryCallback([], {
            noData: true,
          });
          return;
        }

        let bars = [];

        data.bitQueryClient.forEach((bar) => {
          const time = bar.timeInterval.minute;
          bars = [
            ...bars,
            {
              time: new Date(time).getTime(),
              low: Number(bar.minimum_price),
              high: Number(bar.maximum_price),
              open: Number(bar.open_price),
              close: Number(bar.close_price),
              volume: bar.volume,
            },
          ];
        });
        if (firstDataRequest) {
          lastBarsCache.set(symbolInfo.full_name, {
            ...bars[bars.length - 1],
          });
        } else {
          onHistoryCallback([], {
            noData: true,
          });
        }
        onHistoryCallback(bars.length > 0 ? bars : [], {
          noData: bars.length === 0 ? true : false,
        });
      } catch (error) {
        onErrorCallback(error);
      }
    },

    subscribeBars: (
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscribeUID
    ) => {
      const subscriptionItem = {
        symbolInfo,
        subscribeUID,
        callback: onRealtimeCallback,
      };
      lastBarsCache.set("resolution", resolution);
      lastBarsCache.set("subscriptionItem", subscriptionItem);
    },

    unsubscribeBars: () => { },
  };
  // End of JS API FUNCTIONS

  const [tradingViewWidget, setTradingViewWidget] =
    useState<IChartingLibraryWidget | null>(null);

  useEffect(() => {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: `${baseAddress?.toLowerCase()}-${stableCoin?.toLowerCase()}`,
      // tslint:disable-next-line:no-any
      datafeed: JS_API_CALLBACKS,
      theme: "Dark",
      interval: "60" as ResolutionString,
      library_path: "../../assets/charting_library/",
      container: "tv_chart_container",
      locale: "en",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone as Timezone,
      disabled_features: ["header_symbol_search", "study_templates"],
      enabled_features: ["hide_left_toolbar_by_default"],
      charts_storage_url: "https://saveload.tradingview.com",
      charts_storage_api_version: "1.1",
      client_id: "0",
      user_id: "0",
      fullscreen: false,
      autosize: false,
      overrides: {
        "mainSeriesProperties.minTick": "1000000,0,false" // use this for decimal places on y-axis (price axis)
      },
      studies_overrides: {
      },
      debug: false,
      custom_css_url: "./index.css",
      settings_adapter: {
        initialSettings: {
          "trading.orderPanelSettingsBroker": JSON.stringify({
            showRelativePriceControl: false,
            showCurrencyRiskInQty: false,
            showPercentRiskInQty: false,
            showBracketsInCurrency: false,
            showBracketsInPercent: false,
          }),
          // "proterty"
          "trading.chart.proterty":
            localStorage.getItem("trading.chart.proterty") ||
            JSON.stringify({
              hideFloatingPanel: 1,
            }),
          "chart.favoriteDrawings":
            localStorage.getItem("chart.favoriteDrawings") ||
            JSON.stringify([]),
          "chart.favoriteDrawingsPosition":
            localStorage.getItem("chart.favoriteDrawingsPosition") ||
            JSON.stringify({}),
        },
        setValue: (key, value) => {
          localStorage.setItem(key, value);
        },
        removeValue: (key) => {
          localStorage.removeItem(key);
        },
      },
    };

    if (tradingViewWidget) {
      tradingViewWidget.setSymbol(
        `${baseAddress.toLowerCase()}-${getAddress(
          quoteToken.address,
          chainId
        ).toLowerCase()}`,
        "60" as ResolutionString,
        () => { }
      );
    } else {
      setTradingViewWidget(new widget(widgetOptions));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseAddress, pairAddress]);

  useEffect(() => {
    if (tradingViewWidget) {
      tradingViewWidget.onChartReady(() => {
        tradingViewWidget.headerReady().then(() => { });
      });
    }

    return () => {
      if (tradingViewWidget !== null) {
        tradingViewWidget.remove();
        setTradingViewWidget(null);
      }
    };
  }, [tradingViewWidget]);
  useEffect(() => {
    if (collateral === null) {
      tradingViewWidget?.remove();
    } else {
      setTimeout(() => {
        if (tradingViewWidget) {
          tradingViewWidget.onChartReady(() => {
            tradingViewWidget.headerReady().then(() => { });
          });
        }

        return () => {
          if (tradingViewWidget !== null) {
            tradingViewWidget.remove();
            setTradingViewWidget(null);
          }
        };
      }, 1000);

    }
  }, [collateral, tradingViewWidget]);

  return (
    <div>
      <div id="tv_chart_container" className="TVChartContainer" />
    </div>
  );
}; // end of function component

export default Chart;
