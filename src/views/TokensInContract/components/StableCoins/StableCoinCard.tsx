import { useEffect, useState } from 'react'
import { Card, Key, Value } from 'views/LoanBuilder/components/ChooseCollaterals'
import { networkTokenFormatter, walletAddressFormatter } from 'utils/conversion'
import CopyDataToClipBoard from "components/CopyToClipBoard/CopyToClipBoard";
import ReactTooltip from "react-tooltip";
import { getStablecoinMaxAmt } from 'utils/contracts/contractCalls';

const StableCoinCard = ({ contract, token }) => {
    const [scaledAmt, setScaledAmt] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getTokenDecimals = async () => {
            setLoading(true)
            const maxAmt = await getStablecoinMaxAmt(contract, token?.tokenAddress);
            if (maxAmt) {
                setScaledAmt((+maxAmt ?? 0) / 10 ** +token.decimal)
            } else {
                setScaledAmt(0)
            }
            setLoading(false)
        }
        getTokenDecimals()
    }, [contract, token])
    return (
        <Card className=" pointer position-relative mb-3">

                    <ReactTooltip />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <div style={{ textAlign: "left" }}>
                            <img
                                height="37"
                                width="37"
                                src={
                                    token.icon ??
                                    `assets/tokenIcons/${token?.symbol}.svg`
                                }
                                alt=""
                                className="mb-2"
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <Key>Coin:</Key>
                            <Value>{token?.symbol}</Value>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <Key>Contract:</Key>
                            <Value className='address-value'>
                                {walletAddressFormatter(token?.tokenAddress)}
                                <CopyDataToClipBoard textToCopy={token?.tokenAddress} />
                            </Value>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <Key>#:</Key>

                            <Value>{loading ? 'Loading...' : scaledAmt.toFixed(2)}</Value>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4" >
                            <Key>USD Value:</Key>

                            <Value data-tip={token?.price}>
                                {loading ? 'Loading...' : networkTokenFormatter(token?.price)}
                            </Value>
                        </div>

                    </div>

        </Card>
    )
}

export default StableCoinCard