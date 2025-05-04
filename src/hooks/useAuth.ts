import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
import { injected } from "../connectors";
import { setIsWalletConnected, resetWallet } from "state/actions";
import { useAppDispatch } from "state";
import { useApolloClient } from "@apollo/client";
import { GET_TIER_LEVEL, Signing } from "utils/graphQueries/queries";
import { setupNetwork } from "utils/wallet";
import { NetWorkChainId, TierLevelEnum, TierTypeEnum } from "config/constants/types";
import { useLoanData, useSetLoanState } from "state/hooks";
import { setTiers } from "state/loanBuilder";

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
  const dispatch = useAppDispatch();
  const client = useApolloClient();
  const context = useWeb3React();
  const { account, chainId } = context;
  const { setLoanBuilderState } = useSetLoanState();
  const { loanState } = useLoanData();

  const getTierLevel = () => {
    client
      .query({
        query: GET_TIER_LEVEL,
        variables: { chainId },
      })
      .then((res) => {
        const tiers = res.data.getTierLevel;
        dispatch(setTiers(tiers));
        setLoanBuilderState({
          ...loanState,
          tier: tiers[0],
          walletConnectionLoader: false,
        });
        dispatch(setIsWalletConnected(true));
      })
      .catch((err) => {});
  };

  const signInOnWalletConnection = (account) => {
    localStorage.clear();
    try {
      client
        .query({
          query: Signing,
          variables: { walletAddress: account },
        })
        .then((result) => {
          localStorage.setItem("callSecret", result.data.signing.callSecret);
          localStorage.setItem("walletAddress", account);
          if (result.data.signing.email) {
            localStorage.setItem("email", result.data.signing.email);
          }
          if (result.data.signing.isSkiped) {
            localStorage.setItem("isSkiped", result.data.signing.isSkiped);
          }
          if (result.data.signing.isTermSkiped) {
            localStorage.setItem("isTermSkiped", result.data.signing.isTermSkiped);
          }
          getTierLevel();
        });
    } catch (err) {}
  };
  useEffect(() => {
    if (account || chainId) {
      signInOnWalletConnection(account);
      setLoanBuilderState({
        ...loanState,
        walletConnectionLoader: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId]);
  const login = useCallback(async () => {
    const hasSetup = await setupNetwork(NetWorkChainId.BSC);
    if (hasSetup) {
      activate(injected);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    deactivate();
    dispatch(resetWallet());
    setLoanBuilderState({
      ...loanState,
      tier: {
        tierLevel: TierLevelEnum.NA,
        tierType: TierTypeEnum.NA,
      },
    });
    localStorage.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deactivate, loanState]);

  return { login, logout };
};

export default useAuth;
