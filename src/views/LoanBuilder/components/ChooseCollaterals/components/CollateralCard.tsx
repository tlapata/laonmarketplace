import React from 'react'
import ReactTooltip from "react-tooltip";
import { CardsWrapper, Card, Key, Value, InputWrapper, StyledInput, MaxButton, CheckMark } from '..';
import { ConvertToExponential, toCommas } from "utils/conversion";
import { Switch, SwitchThumb } from "components/Form/Switch";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import selectedTick from "assets/images/loanbuilder/selectedTick.svg";

interface ICollateralCard {
    token: any;
    index: number;
    selectTokenHandler?: (token: any, index: number) => void;
    collateralValue: any
    style?: any;
    handleOnChange?: Function;
    maxHandler?: Function;
    selfType: any
}

const CollateralCard: React.FC<ICollateralCard> = ({ token, index, selectTokenHandler, collateralValue, style, handleOnChange, maxHandler, selfType }) => {
    return (
        <CardsWrapper key={index} className={token.active ? "token-card-wrapper choosen" : "token-card-wrapper"}>
            <Card>
                <div style={{ width: "100%" }}>
                    <div className="logo-name" onClick={() => selectTokenHandler(token, index)}>
                        <img
                            height="38"
                            width="38"
                            src={ token.icon ?? `/assets/tokenIcons/${token?.symbol}.svg`}
                            alt=""
                        />
                        <h3>{token?.name} <span>{token?.symbol}</span></h3>
                    </div>
                    <div 
                        className="switch-choose" 
                        onClick={() => selectTokenHandler(token, index)}                     
                    >
                        <Switch checked={token.active}>
                            <SwitchThumb />
                        </Switch>
                    </div>
                    <div className="input-builder-wrapper">
                        <div className="qty" onClick={() => selectTokenHandler(token, index)}>
                            <h4>Tokens</h4>
                        </div>
                        <div className="qty" onClick={() => selectTokenHandler(token, index)}>
                            <h4>${toCommas((token.active ? collateralValue : token?.amount) * token?.price)}</h4>
                        </div>
                        <InputWrapper active={false}>
                            <StyledInput
                                type="number"
                                value={token.active ? collateralValue : token?.amount}
                                inputbg={true}
                                containerClassName="token-loan"
                                style={style}
                                sizeVariant="xs"
                                placeholder={toCommas(token?.amount)}
                                onChange={(e) =>
                                    handleOnChange(
                                        token,
                                        e,
                                        index,
                                        token.price,
                                        token.amount,
                                    )
                                }
                                rightIcon={
                                    <MaxButton
                                        onClick={() =>
                                            maxHandler(
                                                selfType,
                                                token,
                                                token.amount,
                                                token.price,
                                                index
                                            )
                                        }
                                    >
                                        MAX
                                    </MaxButton>
                                }
                            />
                        </InputWrapper>
                    </div>
                    <div className="token-quantity" onClick={() => selectTokenHandler(token, index)}>
                        <div className="qty">
                            <h4>Value:</h4>
                            <div>${toCommas(token?.amount*token?.price)}</div>
                        </div>
                        <div className="qty">
                            <h4>Coins:</h4>
                            <Value>
                                {ConvertToExponential(
                                    parseFloat(token?.amount.toString()) || 0,
                                    0
                                )}
                            </Value>
                        </div>
                        {/*<div className="qty">
                            <h4>Price:</h4>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    <Tooltip placement="top" id="button-tooltip1">
                                        ${token?.price}
                                    </Tooltip>
                                }
                            >
                                <Value>$
                                    {ConvertToExponential(
                                        parseFloat(token?.price.toString()) || 0,
                                        0
                                    )}
                                </Value>
                            </OverlayTrigger>
                        </div>*/}
                    </div>
                    <div className="token-quantity addresses">
                        <div className="qty">
                            <h4>Contract:</h4>
                            <div onClick={() => window.open(`https://bscscan.com/address/${token?.token_address}`)}>
                                {`${token?.token_address.slice(0, 7)}...${token?.token_address.slice(token?.token_address.length - 3)}`}
                            </div>
                        </div>
                        <div className="qty">
                            <h4>VIP Synthetic</h4>
                        </div>
                        <div className="qty">
                            <h4>Partner Type:</h4>
                        </div>
                    </div>
                </div>
            </Card>
        </CardsWrapper>
    )
}

export default CollateralCard;