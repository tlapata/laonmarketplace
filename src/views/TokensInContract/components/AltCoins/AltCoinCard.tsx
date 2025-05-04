import { useEffect, useState } from 'react'
import { walletAddressFormatter } from 'utils/conversion'
import { Card, Key, Value } from 'views/LoanBuilder/components/ChooseCollaterals'
import CopyDataToClipBoard from "components/CopyToClipBoard/CopyToClipBoard";
import { getAltcoinMaxAmt, getDecimals } from 'utils/contracts/contractCalls';
import { IconBox } from 'components/IconBox/IconBox';

const AltCoinCard = ({ contract, token }) => {
    const [scaledAmt, setScaledAmt] = useState(0)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getTokenDecimals = async () => {
            setLoading(true)
            const res = await getDecimals(token?.tokenAddress);
            const maxAmt = await getAltcoinMaxAmt(contract, token?.tokenAddress);
            if (res && maxAmt) {
                setScaledAmt((+maxAmt ?? 0) / 10 ** +res)
            } else {
                setScaledAmt(0)
            }
            setLoading(false)
        }
        getTokenDecimals()
    }, [contract, token])
    return (
        <Card className=" pointer position-relative mb-3">

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <div style={{ textAlign: "left" }}>
                            {
                                token?.icon ? <img
                                    height="37"
                                    width="37"
                                    src={
                                        token.icon ??
                                        `assets/tokenIcons/${token?.symbol}.svg`
                                    }
                                    alt=""
                                    className="mb-2"
                                /> : <IconBox></IconBox>
                            }

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
                                {loading ? 'Loading...' : (scaledAmt * token.price).toFixed(2).toLocaleString()}
                            </Value>
                        </div>
                    </div>

        </Card>
    )
}

export default AltCoinCard