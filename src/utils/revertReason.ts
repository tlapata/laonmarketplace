export  enum REVERT_REASON  {
  //here values
  INSUFFICENT_FUNDS = -32000,
  TRANSACTION_ERROR =4001,
  CHAIN_NOT_ADDED  = 4902
} 
export const revertReason = (reason) => {
    let message:string;
    if (reason["code"] === REVERT_REASON.INSUFFICENT_FUNDS) {
        message ="Insufficent funds";
      } else if (reason["code"] === REVERT_REASON.TRANSACTION_ERROR) {
        message = reason["message"];
      } else {
        message = reason["message"]?.split('"message": "')[1]?.split('"')[0] ;
      }
      if(message === undefined){
      message = "Something went wrong,Please try again!";
      }
    return message;
  };