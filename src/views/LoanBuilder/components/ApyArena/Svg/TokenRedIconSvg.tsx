const TokenRedIconSvg = (props) => {
    const { apy } = props;
  
    return (
        <svg width="230" height="167" viewBox="0 0 230 167" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 10C6.7103 10.0054 0 16.7191 0 25V152C0 160.284 6.71573 167 15 167H215C223.284 167 230 160.284 230 152V25C230 16.7157 223.284 10 215 10H195.141C189.731 10.0037 184.552 12.1993 180.788 16.0862L158.68 38.9138C154.913 42.8039 149.729 45 144.313 45L85.9149 45C80.4995 45 75.3155 42.8039 71.5481 38.9138L49.4401 16.0862C45.6727 12.1961 40.4888 10 35.0733 10L14.99 10Z" fill="#081129"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 10C6.7103 10.0054 0 16.7191 0 25V152C0 160.284 6.71573 167 15 167H215C223.284 167 230 160.284 230 152V25C230 16.7157 223.284 10 215 10H195.141C189.731 10.0037 184.552 12.1993 180.788 16.0862L158.68 38.9138C154.913 42.8039 149.729 45 144.313 45L85.9149 45C80.4995 45 75.3155 42.8039 71.5481 38.9138L49.4401 16.0862C45.6727 12.1961 40.4888 10 35.0733 10L14.99 10Z" fill="url(#paint0_linear_851_545)" fill-opacity="0.1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 10C6.7103 10.0054 0 16.7191 0 25V152C0 160.284 6.71573 167 15 167H215C223.284 167 230 160.284 230 152V25C230 16.7157 223.284 10 215 10H195.141C189.731 10.0037 184.552 12.1993 180.788 16.0862L158.68 38.9138C154.913 42.8039 149.729 45 144.313 45L85.9149 45C80.4995 45 75.3155 42.8039 71.5481 38.9138L49.4401 16.0862C45.6727 12.1961 40.4888 10 35.0733 10L14.99 10Z" fill="url(#paint1_linear_851_545)" fill-opacity="0.02"/>
            <text fill="#E83232" font-family="Geist" font-size="12" font-weight="600" letter-spacing="-0.02em"><tspan x="96.182" y="22.2">Top 25</tspan></text>
            <g filter="url(#filter0_d_851_545)">
            <text fill="#E83232" font-family="Geist" font-size="24" font-weight="500" letter-spacing="-0.02em">
                <tspan x="77.0889" y="110.4" data-tip={apy + "%"}>
                    {apy?.toString().length > 5
                    ? apy?.toString().slice(0, 5) + ".."
                    : apy}%
                </tspan>
            </text>
            </g>
            <g filter="url(#filter1_di_851_545)">
            <path d="M54.3579 17H50.5L73.0759 40.412C75.903 43.3438 79.8007 45 83.8736 45H86.5L61.4289 19.9289C59.5536 18.0536 57.01 17 54.3579 17Z" fill="#E83232"/>
            </g>
            <g filter="url(#filter2_di_851_545)">
            <path d="M176.142 17H180L157.424 40.412C154.597 43.3438 150.699 45 146.626 45H144L169.071 19.9289C170.946 18.0536 173.49 17 176.142 17Z" fill="#E83232"/>
            </g>
            <defs>
            <filter id="filter0_d_851_545" x="53.2168" y="67.5762" width="123.613" height="67.8086" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="12.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_545"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_545" result="shape"/>
            </filter>
            <filter id="filter1_di_851_545" x="37.5" y="0" width="66" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="-2"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_545"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_545" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="1" dy="-1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_851_545"/>
            </filter>
            <filter id="filter2_di_851_545" x="131" y="0" width="66" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="-2"/>
            <feGaussianBlur stdDeviation="7.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_545"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_545" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="1" dy="-1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_851_545"/>
            </filter>
            <linearGradient id="paint0_linear_851_545" x1="117.5" y1="89" x2="117.5" y2="167" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF0000" stop-opacity="0"/>
            <stop offset="1" stop-color="#FF2626"/>
            </linearGradient>
            <linearGradient id="paint1_linear_851_545" x1="117.5" y1="89" x2="117.5" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
        </svg>
    );
  };
  
  export default TokenRedIconSvg;