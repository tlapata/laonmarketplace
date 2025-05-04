import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { formatDistanceToNow } from 'date-fns';
import { Dialog, DialogContent, DialogTitle, DialogTrigger, } from "components/Dialog";
import { LinkIcon, TransferIcon, SaleIcon } from "components/Svg";
import { toCommas } from "utils/conversion";


type Props = {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    trigger?: React.ReactElement;
    address?: string;
    image?: string;
    name?:string;
    creator?: string;
    owner?: string;
    description?: string;
    plateform?: string;
    marketURL?: string;
    nftID?: string;
    items?: number;
    owners?: number;
    last_activity?: string;
    chainId?: number;
    traits?: any;
    activity?: any;
};

const NFTDetails = ({ trigger, open, setOpen, address, image, name, creator, owner, description, plateform, marketURL, nftID, items, owners, last_activity, traits, activity }: Props) => {

    const [openBlock, setOpenBlock] = useState(null);

    const handleBlockClick = (index) => {
        setOpenBlock(index === openBlock ? null : index);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };

    return (
        <Dialog open={open}>
            <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
                {trigger}
            </DialogTrigger>
            <DialogContent
                onInteractOutside={() => open && setOpen(false)}
                onClick={(e) => e.stopPropagation()}
                size="large"
                className="nft-details"
                type="nftdetail"
            >
                <NFTImage>
                    <div className="picinfo">
                        <img src={image} alt="" />
                        <div className="address">
                            <a href={`https://bscscan.com/address/${address}`} target="_blank">{`${address.slice(0, 6)}...${address.slice(address.length - 5)}`}</a>
                            <span>#{nftID}</span>
                        </div>
                    </div>
                    <div className="picinfo">
                        <h5>Collection</h5>
                        <p>{name}</p>
                        <p>
                            <span>Creator:</span> <a href={`https://bscscan.com/address/${creator}`} target="_blank">{`${creator.slice(0, 6)}...${creator.slice(creator.length - 5)}`}</a><br/>
                            <span>Owner:</span> <a href={`https://bscscan.com/address/${owner}`} target="_blank">{`${owner.slice(0, 6)}...${owner.slice(owner.length - 5)}`}</a>
                        </p>
                        <br/>
                        <h5>Description</h5>
                        <p>{description}</p>
                        <div className="floors">
                            <div>
                                <p>
                                    <label className="default">Items</label> 
                                    <span>{items}</span>
                                </p>
                                <p>
                                    <label className="default">Owners</label> 
                                    <span>{owners}</span>
                                </p>
                                
                            </div>
                            <div>
                                <h5>Markets</h5>
                                <div>
                                    <a href={marketURL} target="_blank">{plateform}</a>
                                    <LinkIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </NFTImage>
                <NFTContent>
                    <div className="block">
                        <h5 onClick={() => handleBlockClick(0)}>Traits</h5>
                        <div className={`content traits ${openBlock === 0 ? 'open' : ''}`}>
                            {traits?.length > 0 && traits.map((trait, index) => (
                                <div className="trait" key={index}>
                                    <p>{trait.trait_type}</p>
                                    <div>{trait.trait_value} <span>{toCommas(trait.percentage)}%</span></div>
                                    <p>Trait Floor: {trait.floor_price} {trait.symbol}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="block">
                        <h5 onClick={() => handleBlockClick(1)}>Offers</h5>
                        <div className={`content ${openBlock === 1 ? 'open' : ''}`}>
                        </div>
                    </div>
                    <div className="block">
                        <h5 onClick={() => handleBlockClick(2)}>Activity</h5>
                        <div className={`content activity ${openBlock === 2 ? 'open' : ''}`}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Event</th>
                                        <th>Price</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activity?.length > 0 && activity.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                {item.event === "sale" ? (<SaleIcon />) : (<TransferIcon />)}
                                                {item.event}
                                            </td>
                                            <td>{item.price} {item.symbol}</td>
                                            <td>
                                                {item.from ? (
                                                    <a href={`https://bscscan.com/address/${item.from}`} target="_blank">{`${item.from.slice(0, 6)}...${item.from.slice(item.from.length - 5)}`}</a>
                                                ) : ""}
                                            </td>
                                            <td>
                                                {item.to ? (
                                                    <a href={`https://bscscan.com/address/${item.to}`} target="_blank">{`${item.to.slice(0, 6)}...${item.to.slice(item.to.length - 5)}`}</a>
                                                ) : ""}
                                            </td>
                                            <td>
                                                <a href={`https://bscscan.com/tx/${item.transaction}`} target="_blank">
                                                    {formatDate(item.date)}
                                                    <LinkIcon />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </NFTContent>
            </DialogContent>
        </Dialog>
    );
};


const NFTImage = styled.div`
    display: flex;
    font-size: ${(props) => props.theme.fonts.sm}rem;
    gap: 28px;

    .picinfo {
        flex: 1 1 0;

        .address {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            padding-top: 5px;
            color: ${({ theme }) => theme.colors.purple};

            a {
                color: ${({ theme }) => theme.colors.purple};
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        p {
            margin: 10px 0 0;

            span {
                opacity: 0.5;
            }

            a {
                color: ${({ theme }) => theme.colors.purple};
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .floors {
        display: flex;
        justify-content: space-between;
        padding: 20px 0 0;

        p{
            margin: 0;
            display: flex;
            justify-content: space-between;
            gap: 10px;

            label {
                min-width: 64px;
            }

            span {
                text-align: right;
                opacity: 1;
            }
        }

        h5 {
            padding-top: 3px;
        }

        a {
            color: ${({ theme }) => theme.colors.purple};
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }

        svg {
            fill: ${({ theme }) => theme.colors.purple};
            margin-left: 3px;
        }
    }
`;

const NFTContent = styled.div`
    padding: 0;

    .block {
        background: rgba(217, 217, 217, 0.02);
        padding: 25px 27px;
        margin-top: 20px;

        h5 {
            cursor: pointer;
        }

        .content {
            display: none;
            padding-top: 20px;

            &.open {
                display: block;
            }

            &.traits {
                gap: 20px;
                flex-wrap: wrap;

                &.open {
                    display: flex;
                }
            }
        }
    }

    .trait {
        text-align: center;
        width: calc(33.3333% - 14px);
        font-weight: 600;
        background: rgba(217, 217, 217, 0.02);
        padding: 10px 0;

        p {
            font-size: ${(props) => props.theme.fonts.xs}rem;
            margin-bottom: 0;
            opacity: 0.6;
        }
        div {
            font-size: 1rem;
            padding: 5px 0;

            span {
                font-weight: 400;
            }
        }
    }

    .activity {
        thead {
            opacity: 0.4;

            th {
                padding: 5px 10px;
            }
        }
        tbody tr {
            border-bottom: 1px dashed rgba(255, 255, 255, 0.06);

            td {
                padding: 5px 10px;
                white-space: nowrap;
                opacity: 0.7;
                font-size: ${(props) => props.theme.fonts.sm}rem;

                svg {
                    display: inline;
                    margin-right: 12px;
                }
                
                a {
                    color: ${({ theme }) => theme.colors.textAccent};
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                &:last-child {
                    text-align: right;

                    svg {
                        fill: ${({ theme }) => theme.colors.textAccent};
                        opacity: 1;
                        margin-left: 12px;
                    }
                }
            }
        }
    }
`;

export default NFTDetails;  