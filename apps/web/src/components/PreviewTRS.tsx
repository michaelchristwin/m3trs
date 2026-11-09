import { TRS } from '@/config/smart-contracts/TRS/TRS'
import { MyToken } from '@/config/smart-contracts/MyToken/MyToken'

interface PreviewProps {
  name: string
  meterId?: string
  readableStopTime?: string
  imageUrl?: string
}
export function PreviewTRS({
  name,
  imageUrl,
  meterId,
  readableStopTime,
}: PreviewProps) {
  return (
    <svg
      width="290"
      height="500"
      viewBox="0 0 290 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        <clipPath id="corners">
          <rect x="0" y="0" width="290" height="500" rx="42" ry="42" />
        </clipPath>
        <filter id="f1" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="saturate"
            values="0"
            result="destat"
          />
          <feBlend in="SourceGraphic" in2="destat" mode="multiply" />
        </filter>
        <filter
          id="top-region-blur"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        </filter>
        <path
          id="text-path-a"
          d="M 12 42 A 30 30 0 0 1 42 12 H 248 A 30 30 0 0 1 278 42 V 458 A 30 30 0 0 1 248 488 H 42 A 30 30 0 0 1 12 458 Z"
        />
        <mask id="imagine-text-gaps-hna66e" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="425" height="760" fill="white" />
          <rect
            x="-6.999425172805786"
            y="-9.503448486328125"
            width="296.615966796875"
            height="507.1407470703125"
            fill="black"
            rx="2"
          />
          <rect
            x="68.01148986816406"
            y="5.485057830810547"
            width="95.52801513671875"
            height="46.51953887939453"
            fill="black"
            rx="2"
          />
          <rect
            x="55.06608963012695"
            y="49.24597930908203"
            width="119.86781311035156"
            height="16.505746841430664"
            fill="black"
            rx="2"
          />
          <rect
            x="-4"
            y="-9.503448486328125"
            width="51.16436767578125"
            height="15.255172729492188"
            fill="black"
            rx="2"
          />
          <rect
            x="-4"
            y="6.243677139282227"
            width="72.73677825927734"
            height="24.00919532775879"
            fill="black"
            rx="2"
          />
          <rect
            x="-4"
            y="-9.503448486328125"
            width="29.59195327758789"
            height="15.255172729492188"
            fill="black"
            rx="2"
          />
          <rect
            x="-4"
            y="2.4919533729553223"
            width="180.57931518554688"
            height="27.76091957092285"
            fill="black"
            rx="2"
          />
          <rect
            x="-4"
            y="-9.503448486328125"
            width="56.557472229003906"
            height="15.255172729492188"
            fill="black"
            rx="2"
          />
          <rect
            x="-4"
            y="9.995401382446289"
            width="176.27516174316406"
            height="19.00689697265625"
            fill="black"
            rx="2"
          />
        </mask>
      </defs>

      <g
        clipPath="url(#corners)"
        style={{
          fill: 'rgb(0, 0, 0)',
          stroke: 'none',
          color: 'rgb(255, 255, 255)',
          strokeWidth: '1px',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          opacity: 1,
          fontFamily: `&quot;Anthropic Sans&quot;,
          -apple-system,
          BlinkMacSystemFont,
          &quot;Segoe UI&quot;,
          sans-serif`,
          fontSize: '16px',
          fontWeight: 400,
          textAnchor: 'start',
          dominantBaseline: 'auto',
        }}
      >
        <rect
          fill="#1f9840"
          x="0"
          y="0"
          width="290"
          height="500"
          style={{
            fill: 'rgb(31, 152, 64)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: ` &quot;Anthropic Sans&quot;,
            -apple-system,
            BlinkMacSystemFont,
            &quot;Segoe UI&quot;,
            sans-serif`,
            fontSize: '16px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
        />
        <rect
          style={{
            filter: `url(#f1)`,
            fill: 'rgb(0, 0, 0)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 0.4,
            fontFamily: `"Anthropic Sans",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif`,
            fontSize: '16px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
          x="0"
          y="0"
          width="290"
          height="500"
          opacity="0.4"
        />
        <g
          style={{
            filter: 'url(#top-region-blur)',
            transform: 'scale(1.5)',
            transformOrigin: 'center top',
            fill: 'rgb(0, 0, 0)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: `"Anthropic Sans",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif`,
            fontSize: '16px',
            fontWeight: 400,
            textAnchor: `start`,
            dominantBaseline: 'auto',
          }}
        >
          <rect
            fill="none"
            x="0"
            y="0"
            width="290"
            height="500"
            style={{
              fill: 'none',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: `"Anthropic Sans",
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          />
          <ellipse
            cx="50%"
            cy="0"
            rx="180"
            ry="120"
            fill="#000"
            opacity="0.85"
            style={{
              fill: 'rgb(0, 0, 0)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 0.85,
              fontFamily: `"Anthropic Sans",
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          />
        </g>
      </g>
      {imageUrl && (
        <image
          x="-30"
          y="150"
          width="500"
          height="250"
          href={imageUrl}
          transform="rotate(-33 180 270)"
        />
      )}

      <text
        textRendering="optimizeSpeed"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontSize="10px"
        style={{
          fill: 'rgb(255, 255, 255)',
          stroke: 'none',
          color: 'rgb(255, 255, 255)',
          strokeWidth: '1px',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          opacity: 1,
          fontFamily: '"Courier New", monospace',
          fontSize: '10px',
          fontWeight: 400,
          textAnchor: 'start',
          dominantBaseline: 'auto',
        }}
      >
        <textPath
          startOffset="-100%"
          xlinkHref="#text-path-a"
          style={{
            fill: 'rgb(255, 255, 255)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: '"Courier New", monospace',
            fontSize: '10px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
        >
          {MyToken.address} • M3TER
          <animate
            additive="sum"
            attributeName="startOffset"
            from="0%"
            to="100%"
            begin="0s"
            dur="30s"
            repeatCount="indefinite"
            style={{
              fill: 'rgb(255, 255, 255)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: '"Courier New", monospace',
              fontSize: '10px',
              fontWeight: 400,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          />
        </textPath>
        <textPath
          startOffset="0%"
          xlinkHref="#text-path-a"
          style={{
            fill: 'rgb(255, 255, 255)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: '"Courier New", monospace',
            fontSize: '10px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
        >
          {MyToken.address} • M3TER
          <animate
            additive="sum"
            attributeName="startOffset"
            from="0%"
            to="100%"
            begin="0s"
            dur="30s"
            repeatCount="indefinite"
            style={{
              fill: 'rgb(255, 255, 255)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: '"Courier New", monospace',
              fontSize: '10px',
              fontWeight: 400,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          />
        </textPath>
        <textPath
          startOffset="50%"
          xlinkHref="#text-path-a"
          style={{
            fill: 'rgb(255, 255, 255)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: '"Courier New", monospace',
            fontSize: '10px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
        >
          {TRS.address} • TRS
          <animate
            additive="sum"
            attributeName="startOffset"
            from="0%"
            to="100%"
            begin="0s"
            dur="30s"
            repeatCount="indefinite"
            style={{
              fill: 'rgb(255, 255, 255)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: '"Courier New", monospace',
              fontSize: '10px',
              fontWeight: 400,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          />
        </textPath>
        <textPath
          startOffset="-50%"
          xlinkHref="#text-path-a"
          style={{
            fill: 'rgb(255, 255, 255)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: '"Courier New", monospace',
            fontSize: '10px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
        >
          {TRS.address} • TRS
          <animate
            additive="sum"
            attributeName="startOffset"
            from="0%"
            to="100%"
            begin="0s"
            dur="30s"
            repeatCount="indefinite"
            style={{
              fill: 'rgb(255, 255, 255)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: "'Courier New', monospace",
              fontSize: '10px',
              fontWeight: 400,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          />
        </textPath>
      </text>

      <rect
        x="16"
        y="16"
        width="258"
        height="468"
        rx="26"
        ry="26"
        fill="rgba(0,0,0,0)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        style={{
          fill: 'rgba(0, 0, 0, 0)',
          stroke: 'rgba(255, 255, 255, 0.2)',
          color: 'rgb(255, 255, 255)',
          strokeWidth: '1px',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          opacity: 1,
          fontFamily: `'Anthropic Sans', -apple-system,  BlinkMacSystemFont, 'Segoe UI', sans-serif`,
          fontSize: '16px',
          fontWeight: 400,
          textAnchor: 'start',
          dominantBaseline: 'auto',
        }}
      />

      <g
        transform="translate(30, 60)"
        style={{
          fill: 'rgb(0, 0, 0)',
          stroke: 'none',
          color: 'rgb(255, 255, 255)',
          strokeWidth: '1px',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          opacity: 1,
          fontFamily: `"Anthropic Sans",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          sans-serif`,
          fontSize: '16px',
          fontWeight: 400,
          textAnchor: 'start',
          dominantBaseline: 'auto',
        }}
      >
        <text
          x="115"
          y="40"
          textAnchor="middle"
          fill="white"
          fontFamily="system-ui, sans-serif"
          fontWeight="900"
          fontSize="32"
          letterSpacing="-2"
          style={{
            fill: 'rgb(255, 255, 255)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: 'system-ui, sans-serif',
            fontSize: '32px',
            fontWeight: 900,
            textAnchor: 'middle',
            dominantBaseline: 'auto',
          }}
        >
          M3TRS
        </text>
        <text
          x="115"
          y="60"
          textAnchor="middle"
          fill="rgba(255,255,255,0.6)"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="500"
          letterSpacing="1"
          style={{
            textTransform: 'uppercase',
            fill: 'rgba(255, 255, 255, 0.6)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: 'system-ui, sans-serif',
            fontSize: '10px',
            fontWeight: 500,
            textAnchor: 'middle',
            dominantBaseline: 'auto',
          }}
        >
          Revenue Position
        </text>

        <line
          x1="0"
          y1="90"
          x2="230"
          y2="90"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          mask="url(#imagine-text-gaps-hna66e)"
          style={{
            fill: 'rgb(0, 0, 0)',
            stroke: 'rgba(255, 255, 255, 0.15)',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: ` "Anthropic Sans",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif`,
            fontSize: '16px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
        />
        <rect
          x="-10"
          y="220"
          width="250"
          height="190"
          rx="20"
          fill="rgba(0,0,0,0.55)"
          style={{
            fill: 'rgba(0, 0, 0, 0.55)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: `"Anthropic Sans",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif`,
            fontSize: '16px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
        />
        <g
          transform="translate(10, 255)"
          style={{
            fill: 'rgb(0, 0, 0)',
            stroke: 'none',
            color: 'rgb(255, 255, 255)',
            strokeWidth: '1px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            opacity: 1,
            fontFamily: `"Anthropic Sans",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif`,
            fontSize: '16px',
            fontWeight: 400,
            textAnchor: 'start',
            dominantBaseline: 'auto',
          }}
        >
          <text
            fill="rgba(255,255,255,0.5)"
            fontFamily="system-ui, sans-serif"
            fontSize="9"
            fontWeight="700"
            style={{
              textTransform: 'uppercase',
              fill: 'rgba(255, 255, 255, 0.5)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: 'system-ui, sans-serif',
              fontSize: '9px',
              fontWeight: 700,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          >
            Meter ID
          </text>
          <text
            y="22"
            fill="white"
            fontFamily="'Courier New', monospace"
            fontSize="18"
            fontWeight="bold"
            style={{
              fill: 'rgb(255, 255, 255)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: '"Courier New", monospace',
              fontSize: '18px',
              fontWeight: 700,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          >
            #{meterId}
          </text>
          <g
            transform="translate(0, 50)"
            style={{
              fill: 'rgb(0, 0, 0)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: `"Anthropic Sans",
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          >
            <text
              fill="rgba(255,255,255,0.5)"
              fontFamily="system-ui, sans-serif"
              fontSize="9"
              fontWeight="700"
              style={{
                textTransform: 'uppercase',
                fill: 'rgba(255, 255, 255, 0.5)',
                stroke: 'none',
                color: 'rgb(255, 255, 255)',
                strokeWidth: '1px',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                opacity: 1,
                fontFamily: ' system-ui, sans-serif',
                fontSize: '9px',
                fontWeight: '700',
                textAnchor: 'start',
                dominantBaseline: 'auto',
              }}
            >
              Name
            </text>
            <text
              y="22"
              fill="white"
              fontFamily="system-ui, sans-serif"
              fontSize="18"
              fontWeight="600"
              style={{
                fill: 'rgb(255, 255, 255)',
                stroke: 'none',
                color: 'rgb(255, 255, 255)',
                strokeWidth: '1px',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                opacity: 1,
                fontFamily: 'system-ui, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                textAnchor: 'start',
                dominantBaseline: 'auto',
              }}
            >
              {name}
            </text>
          </g>
          <g
            transform="translate(0, 100)"
            style={{
              fill: 'rgb(0, 0, 0)',
              stroke: 'none',
              color: 'rgb(255, 255, 255)',
              strokeWidth: '1px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              opacity: 1,
              fontFamily: `"Anthropic Sans",
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              textAnchor: 'start',
              dominantBaseline: 'auto',
            }}
          >
            <text
              fill="rgba(255,255,255,0.5)"
              fontFamily="system-ui, sans-serif"
              fontSize="9"
              fontWeight="700"
              style={{
                textTransform: 'uppercase',
                fill: 'rgba(255, 255, 255, 0.5)',
                stroke: 'none',
                color: 'rgb(255, 255, 255)',
                strokeWidth: '1px',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                opacity: 1,
                fontFamily: 'system-ui, sans-serif',
                fontSize: '9px',
                fontWeight: 700,
                textAnchor: 'start',
                dominantBaseline: 'auto',
              }}
            >
              Stop Time
            </text>
            <text
              y="22"
              fill="white"
              fontFamily="'Courier New', monospace"
              fontSize="14"
              fontWeight="bold"
              style={{
                fill: 'rgb(255, 255, 255)',
                stroke: 'none',
                color: 'rgb(255, 255, 255)',
                strokeWidth: '1px',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                opacity: 1,
                fontFamily: "'Courier New', monospace",
                fontSize: '10px',
                fontWeight: 400,
                textAnchor: 'start',
                dominantBaseline: 'auto',
              }}
            >
              {readableStopTime}
            </text>
          </g>
        </g>
      </g>
    </svg>
  )
}
