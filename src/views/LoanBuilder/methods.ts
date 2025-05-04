
import { LoanTxMsgs } from "config/constants/loans";
import { Validations } from "config/constants/validations";
import { WalletConnectMsgs } from "config/constants/walletEnums";

export enum FormValidations {
    REQUIRED_FIELDS = "All Fields are required",
    CHOOSE_LOAN_TYPE = "Choose Loan Type",
    CHOOSE_COLLATERAL_TYPE = "Choose Collateral Type",
    CHOOSE_COLLATERAL = "Select Collateral",
    CHOOSE_COLLATERAL_AMOUNT = "Enter tokens amount",
    NO_TIER = "No Tier",
  
  }

export const showToastByType = (type:string ,maxTokenAmount) => {
    switch (type) {
      case Validations.SelectLoan:
        return FormValidations.CHOOSE_LOAN_TYPE;
      case Validations.CollateralType:
        return FormValidations.CHOOSE_COLLATERAL_TYPE;
      case Validations.AllowedSingleNft:
        return LoanTxMsgs.SINGLE_NFT_LOAN_TIER_ERROR;
      case Validations.AllowedMultiNft:
        return LoanTxMsgs.MULTI_NFT_LOAN_TIER_ERROR;
      case Validations.AllowedSingleToken:
        return LoanTxMsgs.SINGLE_TOKEN_LOAN_TIER_ERROR;
      case Validations.AllowedMultiToken:
        return LoanTxMsgs.MULTI_TOKEN_LOAN_TIER_ERROR;
      case Validations.Collateral:
        return FormValidations.CHOOSE_COLLATERAL;
      case Validations.Amount:
        if (maxTokenAmount.flag !== "") {
          return LoanTxMsgs.INSUFFICENT_TOKENS;
        }
        return FormValidations.CHOOSE_COLLATERAL_AMOUNT;
      case Validations.Wallet:
        return WalletConnectMsgs.CONNECT_WALLET;
      case Validations.WalletConnectionProgress:
        return WalletConnectMsgs.CONNECTION_PROGRESS;
      case Validations.ChainID:
        return WalletConnectMsgs.SWITCH_NETWORK;
      case Validations.NoTier:
        return FormValidations.NO_TIER;
      case Validations.GovTier:
        return LoanTxMsgs.NETWORK_TOKEN_LOAN_TIER_ERROR;
      default:
        return maxTokenAmount.valid ? null : LoanTxMsgs.MAX_TOKEN_AMT_EXCEEDS;
    }
  };