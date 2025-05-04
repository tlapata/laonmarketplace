import AlertMessageModal from 'components/AlertMessageModal'
import PopupModal from 'components/PopupModal'
import Sidebar from 'components/Sidebar'
import { useEffect, useMemo, useState } from 'react'
import PasswordProtect from './PasswordProtect'
import { useModal, useSetLoanState, useLoanData } from "state/hooks";
import useSubscriptionCall from 'utils/subscriptions/loanSubscription'
import { PublishLoanSubscriptionType, SubscriptionType } from 'config/constants/subscriptions'

import { loanCreated } from './Marketplace/api/getLoanOffers'
import { setActivateLoader, resetLoans } from './Marketplace/loansSlice'
import { useWeb3React } from "@web3-react/core";
import { useAppDispatch } from "state";
import { configGraphQL as config } from "config/constants/config";
import { useSelector } from "react-redux";
import { State } from "state/types";
import AlertModal from 'components/AlertModal'
import useScrollControl from 'hooks/useScrollControl'
import useViewport from 'hooks/useViewport'
import { setNetwork } from "state/actions";
import useAuth from "hooks/useAuth";
import history from 'routerHistory'
import { LoanTxMsgs, LoanTxTriggers } from 'config/constants/loans'
import Networks from 'config/constants/networks'
import useLoanPublishSubscriptionCall from 'utils/subscriptions/loanPublishSubscription'


const DashboardLanding = () => {
    const { width } = useViewport();
    const condition = useMemo(() => width > 768, [width]);
    const [location, setLocation] = useState(history.location);

    const { setAlert } = useModal();
    const dispatch = useAppDispatch();
    const { account } = useWeb3React();
    const { loanState } = useLoanData();
    const { message, alertData } = loanState;
    const hasPasswordBypassed = useSelector(
        (state: State) => state.app.hasPasswordBypassed
    );
    const showCustomToast = (message: string, loanType = "") => {
        setAlert(message, true, loanType);
    };
    const { setLoanBuilderState } = useSetLoanState();
    const { data, error, loading } = useSubscriptionCall(account);
    const { data: loanPublishData, error: loanPublishError, loading: loanPublishLoading } = useLoanPublishSubscriptionCall();
    const { loanActivated, loanAdjusted, loanPayback, loanLiquidated, loanPublished } = loanState.queriesList;
    const [createdLoan, setCreatedLoan] = useState<loanCreated>({
        type: "",
        loan: null,
    });


    useScrollControl(condition);
    const { login } = useAuth();
    const isWalletConnected = useSelector(
        (state: State) => state.wallet.isWalletConnected
    );
    const onNetworkChanged = (chainId: string) => {
        const network = Networks.find((n) => n.chainId === parseInt(chainId));
        network && dispatch(setNetwork(network));
    };
    useEffect(() => {
        try {
            const { ethereum } = window as any;
            ethereum.on("networkChanged", onNetworkChanged);
        } catch (error) { console.log(error) }
        isWalletConnected && location.pathname !== "/" && login();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        setLocation(history.location);
        history.listen((location) => setLocation(location));
    }, []);


    const handleCreateLoan = () => {
        showCustomToast(
            LoanTxMsgs.LOAN_CREATED,
            LoanTxTriggers.LOAN_CREATED,
        );
        setCreatedLoan({
            type: data.loanTransactionListener.type,
            loan: data.loanTransactionListener.loan,
        });
    };

    const handleLoanActivated = () => {
        setLoanBuilderState({
            ...loanState,
            queriesList: {
                ...loanState.queriesList,
                loanActivated: !loanActivated,
            },
        });
        dispatch(setActivateLoader(false));
        dispatch(resetLoans());
        showCustomToast(LoanTxMsgs.LOAN_ACTIVATED, "success");
    };
    const handleLoanPublished = () => {
        setLoanBuilderState({
            ...loanState,
            queriesList: {
                ...loanState.queriesList,
                loanPublished: !loanPublished,
            },
        });
        dispatch(setActivateLoader(false));
        dispatch(resetLoans());
    };

    const handleLoanAdjusted = () => {
        setLoanBuilderState({
            ...loanState,
            queriesList: {
                ...loanState.queriesList,
                loanActivated: !loanAdjusted,
            },
        });
    };

    const handleLoanPaybacked = () => {
        setLoanBuilderState({
            ...loanState,
            queriesList: {
                ...loanState.queriesList,
                loanActivated: !loanPayback,
            },
        });
    };
    const handleLoanLiquidated = () => {
        setLoanBuilderState({
            ...loanState,
            queriesList: {
                ...loanState.queriesList,
                loanLiquidated: !loanLiquidated,
            },
        });
    };
    useEffect(() => {
        if (account && !loading && !error && data) {
            const { loanTransactionListener } = data;
            switch (loanTransactionListener?.type) {
                case SubscriptionType.CREATE_LOAN:
                    handleCreateLoan();
                    break;
                case SubscriptionType.LOAN_ACTIVATED:
                    handleLoanActivated();
                    break;
                case SubscriptionType.LOAN_ADJUSTED:
                    handleLoanAdjusted();
                    break;
                case SubscriptionType.LOAN_PAYBACKED:
                    handleLoanPaybacked();
                    break;
                case SubscriptionType.LOAN_LIQUIDATED:
                    handleLoanLiquidated();
                    break;
                default:
                    break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error, account, loading]);

    useEffect(() => {
        //Publish loan subscription
        if (account && !loanPublishLoading && !loanPublishError && loanPublishData) {
            const { publishLoanTransaction } = loanPublishData;
            switch (publishLoanTransaction?.type) {
                case PublishLoanSubscriptionType.PUBLISH_LOAN:
                    handleLoanPublished();
                    break;

                default:
                    break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loanPublishData, loanPublishError, account, loanPublishLoading]);
    return (
        <>
            <AlertModal />
            {alertData.showModal && (
                <AlertMessageModal
                    createdLoan={createdLoan}
                    setCreatedLoan={setCreatedLoan}
                    open={alertData.showModal}
                    msg={alertData.alertMessage}
                    type={alertData.type}
                />
            )}
            {message && <PopupModal content={message} />}
            {hasPasswordBypassed ? (
                <Sidebar />
            ) : (
                <PasswordProtect appPassword={config.appPassword} />
            )}

        </>
    )
}

export default DashboardLanding