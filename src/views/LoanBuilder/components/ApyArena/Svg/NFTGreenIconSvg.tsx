const NFTGreenIconSvg = (props) => {
    const { apy } = props;
  
    return (
        <svg width="230" height="167" viewBox="0 0 230 167" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 10C6.7103 10.0054 0 16.7191 0 25V152C0 160.284 6.71573 167 15 167H215C223.284 167 230 160.284 230 152V25C230 16.7157 223.284 10 215 10H195.141C189.731 10.0037 184.552 12.1993 180.788 16.0862L158.68 38.9138C154.913 42.8039 149.729 45 144.313 45L85.9149 45C80.4995 45 75.3155 42.8039 71.5481 38.9138L49.4401 16.0862C45.6727 12.1961 40.4887 10 35.0733 10L14.99 10Z" fill="#081129"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 10C6.7103 10.0054 0 16.7191 0 25V152C0 160.284 6.71573 167 15 167H215C223.284 167 230 160.284 230 152V25C230 16.7157 223.284 10 215 10H195.141C189.731 10.0037 184.552 12.1993 180.788 16.0862L158.68 38.9138C154.913 42.8039 149.729 45 144.313 45L85.9149 45C80.4995 45 75.3155 42.8039 71.5481 38.9138L49.4401 16.0862C45.6727 12.1961 40.4887 10 35.0733 10L14.99 10Z" fill="url(#paint0_linear_851_572)" fill-opacity="0.1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 10C6.7103 10.0054 0 16.7191 0 25V152C0 160.284 6.71573 167 15 167H215C223.284 167 230 160.284 230 152V25C230 16.7157 223.284 10 215 10H195.141C189.731 10.0037 184.552 12.1993 180.788 16.0862L158.68 38.9138C154.913 42.8039 149.729 45 144.313 45L85.9149 45C80.4995 45 75.3155 42.8039 71.5481 38.9138L49.4401 16.0862C45.6727 12.1961 40.4887 10 35.0733 10L14.99 10Z" fill="url(#paint1_linear_851_572)" fill-opacity="0.02"/>
            <text fill="#75C724" font-family="Geist" font-size="12" font-weight="600" letter-spacing="-0.02em"><tspan x="86.1874" y="22.2">Best Offer</tspan></text>
            <g filter="url(#filter0_d_851_572)">
            <text fill="#75C724" font-family="Geist" font-size="24" font-weight="500" letter-spacing="-0.02em">
                <tspan x="80.0264" y="110.4" data-tip={apy + "%"}>
                    {apy?.toString().length > 5
                    ? apy?.toString().slice(0, 5) + ".."
                    : apy}%
                </tspan>
            </text>
            </g>
            <g filter="url(#filter1_di_851_572)">
            <path d="M54.8579 17H51L73.5759 40.412C76.403 43.3438 80.3007 45 84.3736 45H87L61.9289 19.9289C60.0536 18.0536 57.51 17 54.8579 17Z" fill="#75C724"/>
            </g>
            <g filter="url(#filter2_di_851_572)">
            <path d="M176.642 17H180.5L157.924 40.412C155.097 43.3438 151.199 45 147.126 45H144.5L169.571 19.9289C171.446 18.0536 173.99 17 176.642 17Z" fill="#75C724"/>
            </g>
            <defs>
            <filter id="filter0_d_851_572" x="55.6504" y="67.5762" width="119.242" height="67.7109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="12.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.780392 0 0 0 0 0.141176 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_572"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_572" result="shape"/>
            </filter>
            <filter id="filter1_di_851_572" x="38" y="0" width="66" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="-2"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.780392 0 0 0 0 0.141176 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_572"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_572" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="1" dy="-1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_851_572"/>
            </filter>
            <filter id="filter2_di_851_572" x="131.5" y="0" width="66" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="-2"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.780392 0 0 0 0 0.141176 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_572"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_572" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="1" dy="-1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_851_572"/>
            </filter>
            <linearGradient id="paint0_linear_851_572" x1="112.5" y1="89" x2="112.5" y2="167" gradientUnits="userSpaceOnUse">
            <stop stop-color="#75C724" stop-opacity="0"/>
            <stop offset="1" stop-color="#75C724"/>
            </linearGradient>
            <linearGradient id="paint1_linear_851_572" x1="112.5" y1="89" x2="112.5" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
        </svg>
    );
  };
  
  export default NFTGreenIconSvg;