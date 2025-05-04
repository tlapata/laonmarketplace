import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg  {...props} onClick={props.onClick} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" stroke="white" stroke-width="2" />
            <circle cx="13" cy="13" r="12" stroke="url(#paint0_linear_10183_784)" stroke-width="2" />
            <rect x="11.8516" y="12.9053" width="1.6309" height="1.6309" rx="0.25" transform="rotate(-45 11.8516 12.9053)" fill="white" />
            <rect x="11.8516" y="12.9053" width="1.6309" height="1.6309" rx="0.25" transform="rotate(-45 11.8516 12.9053)" fill="url(#paint1_linear_10183_784)" />
            <g filter="url(#filter0_i_10183_784)">
                <path d="M13.0081 3.12012C7.54872 3.11904 3.12218 7.52366 3.12109 12.9581C3.1204 16.508 5.04055 19.7832 8.14589 21.5286C8.24076 21.583 8.35371 21.5969 8.45906 21.5671C8.56366 21.5381 8.65251 21.4691 8.70628 21.3752L11.7554 16.011C11.8672 15.8138 11.7976 15.5638 11.5997 15.4523C10.2108 14.6758 9.71725 12.9254 10.4974 11.5429C11.2775 10.1603 13.0358 9.66905 14.4247 10.4456C15.8135 11.2222 16.3071 12.9725 15.527 14.355C15.2677 14.8146 14.8863 15.1942 14.4247 15.4523C14.2268 15.5638 14.1571 15.8138 14.2689 16.011L17.3098 21.3752C17.3634 21.4694 17.4523 21.5387 17.557 21.5679C17.5929 21.5783 17.6301 21.5836 17.6675 21.5835C17.7386 21.5834 17.8084 21.5651 17.8702 21.5302C22.625 18.8598 24.3048 12.8581 21.6223 8.12491C19.8688 5.03122 16.5764 3.11835 13.0081 3.12012Z" fill="url(#paint2_radial_10183_784)" />
            </g>
            <defs>
                <filter id="filter0_i_10183_784" x="3.12109" y="3.12012" width="19.7793" height="21.5474" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="5.13996" />
                    <feGaussianBlur stdDeviation="1.54199" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10183_784" />
                </filter>
                <linearGradient id="paint0_linear_10183_784" x1="-4.33206" y1="13.004" x2="26" y2="13.004" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F1C6FF" />
                    <stop offset="0.348958" stop-color="#BD0AF8" />
                    <stop offset="0.994097" stop-color="#365CFC" />
                </linearGradient>
                <linearGradient id="paint1_linear_10183_784" x1="11.5798" y1="13.721" x2="13.4825" y2="13.721" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F1C6FF" />
                    <stop offset="0.348958" stop-color="#BD0AF8" />
                    <stop offset="0.994097" stop-color="#365CFC" />
                </linearGradient>
                <radialGradient id="paint2_radial_10183_784" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.8451 16.5201) rotate(-138.116) scale(17.5593 17.9199)">
                    <stop stop-color="#0031FF" />
                    <stop offset="0.0001" stop-color="#0C3AFF" />
                    <stop offset="0.273" stop-color="#3A2FFA" />
                    <stop offset="1" stop-color="#FF00E5" />
                </radialGradient>
            </defs>
        </Svg>



    );
};

export default Icon;
