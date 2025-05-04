const ApyArenaSvg = (props) => {
  const { box1, box2, box3, box4, box5, box6 } = props;

  return (
    <svg
      width="1293"
      height="558"
      viewBox="0 0 1293 558"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        fill="url(#paint0_linear_9601_380)"
        font-size="54.75"
        font-weight="800"
      >
        <tspan x="350" y="54.42">
          APY
        </tspan>
      </text>
      <text
        fill="url(#paint0_linear_9601_380)"
        font-size="54.75"
        font-weight="800"
      >
        <tspan x="550.832" y="54.42">
          %
        </tspan>
      </text>
      <text
        fill="url(#paint0_linear_9601_380)"
        font-size="54.75"
        font-weight="800"
      >
        <tspan x="625.832" y="54.42">
          ARENA
        </tspan>
      </text>
      <text
        fill="url(#paint1_linear_9601_380)"
        font-size="32.848"
        font-weight="800"
      >
        <tspan x="440.032" y="505.052">
          COMPETITORS
        </tspan>
      </text>
      <text
        fill="white"
        font-size="32.848"
        font-weight="800"
      >
        <tspan x="216" y="285.052">
          Tokens
        </tspan>
      </text>
      <text
        fill="white"
        font-size="32.848"
        font-weight="800"
      >
        <tspan x="982" y="285.052">
          NFTs
        </tspan>
      </text>
      <text
        fill="white"
        font-size="32.85"
        font-weight="800"
      >
        <tspan x="472" y="204.052">
          Enter Your Best Offer
        </tspan>
      </text>

      <path
        d="M206.811 71.4983L111.635 144.81C107.643 147.884 104.578 152.001 102.776 156.706L56.2598 278.164L102.848 395.929C104.606 400.373 107.497 404.279 111.233 407.259L220.497 494.411L320.409 494.411L330 494.411"
        stroke="url(#paint2_linear_9601_380)"
        stroke-width="7"
      />
      <path
        d="M1088.05 71.4983L1183.22 144.81C1187.21 147.884 1190.28 152.001 1192.08 156.706L1238.6 278.164L1192.01 395.929C1190.25 400.373 1187.36 404.279 1183.62 407.259L1074.36 494.411L974.448 494.411L965 494.411"
        stroke="url(#paint3_linear_9601_380)"
        stroke-width="7"
      />
      <g filter="url(#filter0_f_9601_380)">
        <circle
          cx="215.703"
          cy="99.5563"
          r="85.5404"
          transform="rotate(-90 215.703 99.5563)"
          fill="url(#paint4_linear_9601_380)"
        />
      </g>
      <circle
        cx="229.391"
        cy="113.242"
        r="85.5404"
        transform="rotate(180 229.391 113.242)"
        fill="#121212"
      />
      <g filter="">
        <text
          fill="#F80A0A"
          font-size="41.059"
          font-weight="500"
          letter-spacing="1.232px"
          data-tip={box1 + "%"}
        >
          <tspan x="170.223" y="130.42" data-tip={box1 + "%"}>
            {box1?.toString().length > 5
              ? box1?.toString().slice(0, 5) + ".."
              : box1}
            %
          </tspan>
        </text>
      </g>
      <g filter="url(#filter2_f_9601_380)">
        <circle
          cx="215.703"
          cy="455.403"
          r="85.5404"
          transform="rotate(-90 215.703 455.403)"
          fill="url(#paint5_linear_9601_380)"
        />
      </g>
      <circle
        cx="229.391"
        cy="441.717"
        r="85.5404"
        transform="rotate(180 229.391 441.717)"
        fill="#121212"
      />
      <g filter="">
        <text
          fill="#0FDC9F"
          font-size={box3?.toString().length > 5 ? "35px" : "41.06px"}
          font-weight="500"
          data-tip={box3}
        >
          <tspan x="160" y="465" data-tip={box3 + "%"}>
            {box3?.toString().length > 5
              ? box3?.toString().slice(0, 5) + ".."
              : box3}
            %
          </tspan>
        </text>
      </g>
      <g filter="url(#filter4_f_9601_380)">
        <circle
          cx="99.3705"
          cy="277.48"
          r="85.5404"
          transform="rotate(-90 99.3705 277.48)"
          fill="url(#paint6_linear_9601_380)"
        />
      </g>
      <circle
        cx="113.059"
        cy="277.48"
        r="85.5404"
        transform="rotate(180 113.059 277.48)"
        fill="#121212"
      />
      <g filter="">
        <text
          fill="#FFCE20"
          font-size={box2?.toString().length > 5 ? "35px" : "41.06px"}
          font-weight="500"
        >
          <tspan x="45" y="297" data-tip={box2 + "%"}>
            {box2?.toString().length > 5
              ? box2?.toString().slice(0, 5) + ".."
              : box2}
            %
          </tspan>
        </text>
      </g>
      <g filter="url(#filter6_f_9601_380)">
        <circle
          cx="85.5404"
          cy="85.5404"
          r="85.5404"
          transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 1162.12 185.097)"
          fill="url(#paint7_linear_9601_380)"
        />
      </g>
      <circle
        cx="1062.9"
        cy="113.243"
        r="85.5404"
        transform="rotate(180 1062.9 113.243)"
        fill="#121212"
      />
      <g filter="">
        <text
          fill="#F80A0A"
          font-size={box5.toString().length > 5 ? "35px" : "41.06px"}
          font-weight="500"
        >
          <tspan x="1010" y="133" data-tip={box5 + "%"}>
            {box5?.toString().length > 5
              ? box5?.toString().slice(0, 5) + ".."
              : box5}
            %
          </tspan>
        </text>
      </g>
      <g filter="url(#filter8_f_9601_380)">
        <circle
          cx="85.5404"
          cy="85.5404"
          r="85.5404"
          transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 1162.12 540.944)"
          fill="url(#paint8_linear_9601_380)"
        />
      </g>
      <circle
        cx="1062.9"
        cy="441.717"
        r="85.5404"
        transform="rotate(180 1062.9 441.717)"
        fill="#121212"
      />
      <g filter="">
        <text
          fill="#0FDC9F"
          font-size={box4?.toString().length > 5 ? "35px" : "41.06px"}
          font-weight="500"
        >
          <tspan x="1013" y="465" data-tip={box4 + "%"}>
            {box4?.toString().length > 5
              ? box4?.toString().slice(0, 5) + ".."
              : box4}
            %
          </tspan>
        </text>
      </g>
      <g filter="url(#filter10_f_9601_380)">
        <circle
          cx="85.5404"
          cy="85.5404"
          r="85.5404"
          transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 1278.46 363.021)"
          fill="url(#paint9_linear_9601_380)"
        />
      </g>
      <circle
        cx="1179.23"
        cy="277.48"
        r="85.5404"
        transform="rotate(180 1179.23 277.48)"
        fill="#121212"
      />
      <g filter="">
        <text
          fill="#FFCE20"
          font-size={box6?.toString().length > 5 ? "35px" : "41.06px"}
          font-weight="500"
        >
          <tspan x="1130" y="300" data-tip={box6 + "%"}>
            {box6?.toString().length > 5
              ? box6?.toString().slice(0, 5) + ".."
              : box6}
            %
          </tspan>
        </text>
      </g>
      <path d="M390 494L412.5 476.679V511.321L390 494Z" fill="#39FFC5" />
      <path d="M364 494L386.5 476.679V511.321L364 494Z" fill="#39FFC5" />
      <path d="M904 494L881.5 476.679V511.321L904 494Z" fill="#39FFC5" />
      <path d="M932 494L909.5 476.679V511.321L932 494Z" fill="#39FFC5" />
      <text
        fill="white"
        font-size="22"
        font-weight="500"
      >
        <tspan x="1010" y="410">
          Best Offer
        </tspan>
      </text>

      <text
        fill="white"
        font-size="22"
        font-weight="500"
      >
        <tspan x="1148" y="240.5">
          Top 10
        </tspan>
      </text>

      <text
        fill="white"
        font-size="22"
        font-weight="500"
      >
        <tspan x="1020" y="70.052">
          Top 25
        </tspan>
      </text>

      <text
        fill="white"
        font-size="22"
        font-weight="500"
      >
        <tspan x="175" y="410">
          Best Offer
        </tspan>
      </text>

      <text
        fill="white"
        font-size="22"
        font-weight="500"
      >
        <tspan x="72" y="240.052">
          Top 10
        </tspan>
      </text>

      <text
        fill="white"
        font-size="22"
        font-weight="500"
      >
        <tspan x="189" y="70.052">
          Top 25
        </tspan>
      </text>
      <defs>
        <filter
          id="filter0_f_9601_380"
          x="116.477"
          y="0.329648"
          width="198.454"
          height="198.453"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.84323"
            result="effect1_foregroundBlur_9601_380"
          />
        </filter>
        <filter
          id="filter1_i_9601_380"
          x="193.518"
          y="104.818"
          width="80.7617"
          height="30.8844"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.03434" />
          <feGaussianBlur stdDeviation="1.55151" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_9601_380"
          />
        </filter>
        <filter
          id="filter2_f_9601_380"
          x="116.477"
          y="356.177"
          width="198.454"
          height="198.453"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.84323"
            result="effect1_foregroundBlur_9601_380"
          />
        </filter>
        <filter
          id="filter3_i_9601_380"
          x="176.688"
          y="436.03"
          width="110.451"
          height="30.8844"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.03434" />
          <feGaussianBlur stdDeviation="1.55151" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_9601_380"
          />
        </filter>
        <filter
          id="filter4_f_9601_380"
          x="0.143613"
          y="178.253"
          width="198.454"
          height="198.453"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.84323"
            result="effect1_foregroundBlur_9601_380"
          />
        </filter>
        <filter
          id="filter5_i_9601_380"
          x="64.4336"
          y="268.141"
          width="101.817"
          height="30.8844"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.03434" />
          <feGaussianBlur stdDeviation="1.55151" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_9601_380"
          />
        </filter>
        <filter
          id="filter6_f_9601_380"
          x="977.357"
          y="0.329648"
          width="198.454"
          height="198.453"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.84323"
            result="effect1_foregroundBlur_9601_380"
          />
        </filter>
        <filter
          id="filter7_i_9601_380"
          x="1028.62"
          y="104.818"
          width="80.8613"
          height="30.8844"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.03434" />
          <feGaussianBlur stdDeviation="1.55151" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_9601_380"
          />
        </filter>
        <filter
          id="filter8_f_9601_380"
          x="977.357"
          y="356.177"
          width="198.454"
          height="198.453"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.84323"
            result="effect1_foregroundBlur_9601_380"
          />
        </filter>
        <filter
          id="filter9_i_9601_380"
          x="1013.36"
          y="438.293"
          width="105.566"
          height="30.8844"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.03434" />
          <feGaussianBlur stdDeviation="1.55151" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_9601_380"
          />
        </filter>
        <filter
          id="filter10_f_9601_380"
          x="1093.69"
          y="178.253"
          width="198.454"
          height="198.453"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.84323"
            result="effect1_foregroundBlur_9601_380"
          />
        </filter>
        <filter
          id="filter11_i_9601_380"
          x="1132.55"
          y="273.247"
          width="103.421"
          height="30.8844"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.03434" />
          <feGaussianBlur stdDeviation="1.55151" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_9601_380"
          />
        </filter>
        <linearGradient
          id="paint0_linear_9601_380"
          x1="203.4"
          y1="56.5017"
          x2="977.794"
          y2="56.4851"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1C6FF" />
          <stop offset="0.348958" stopColor="#BD0AF8" />
          <stop offset="0.994097" stopColor="#365CFC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9601_380"
          x1="374.687"
          y1="494.045"
          x2="853"
          y2="494.034"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1C6FF" />
          <stop offset="0.348958" stopColor="#BD0AF8" />
          <stop offset="0.994097" stopColor="#365CFC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_9601_380"
          x1="157.54"
          y1="84.5005"
          x2="157.54"
          y2="437.611"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0677083" stopColor="#FF1405" />
          <stop offset="0.234375" stopColor="#FFCE20" />
          <stop offset="0.697917" stopColor="#FFCE20" />
          <stop offset="0.913232" stopColor="#2FE2AD" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_9601_380"
          x1="1137.32"
          y1="84.5005"
          x2="1137.32"
          y2="437.611"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0677083" stopColor="#FF1405" />
          <stop offset="0.234375" stopColor="#FFCE20" />
          <stop offset="0.697917" stopColor="#FFCE20" />
          <stop offset="0.913232" stopColor="#2FE2AD" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_9601_380"
          x1="71.3249"
          y1="99.5842"
          x2="312.11"
          y2="99.5835"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC3636" />
          <stop offset="1" stopColor="#FC3636" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_9601_380"
          x1="141.797"
          y1="458.825"
          x2="295.728"
          y2="426.494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D395" />
          <stop offset="1" stopColor="#85FFDB" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_9601_380"
          x1="25.4636"
          y1="280.902"
          x2="179.395"
          y2="248.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC700" />
          <stop offset="1" stopColor="#FFCE20" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_9601_380"
          x1="-58.8382"
          y1="85.5683"
          x2="181.947"
          y2="85.5676"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC3636" />
          <stop offset="1" stopColor="#FC3636" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_9601_380"
          x1="11.6335"
          y1="88.962"
          x2="165.565"
          y2="56.6305"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D395" />
          <stop offset="1" stopColor="#85FFDB" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_9601_380"
          x1="11.6335"
          y1="88.962"
          x2="165.565"
          y2="56.6305"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC700" />
          <stop offset="1" stopColor="#FFCE20" stopOpacity="0.62" />
        </linearGradient>
        <clipPath id="clip0_9601_380">
          <rect
            x="461.835"
            y="241.837"
            width="368.948"
            height="70.6967"
            rx="0.859163"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ApyArenaSvg;