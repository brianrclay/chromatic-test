import React from 'react'
import { createSvgIcon } from './base'

export const MXLogoCopyright = createSvgIcon(
  ({ color }) => (
    <React.Fragment>
      <path
        d="M15.86 14l1.742-2.247c.02-.02.02-.04.02-.061L16.085 1.08c0-.04-.04-.081-.081-.081h-2.005c-.02 0-.06.02-.081.04l-4.8 9.781c-.02.06-.12.06-.141 0l-4.84-9.78c-.02-.02-.04-.041-.08-.041H2.03c-.04 0-.08.02-.08.081L.004 14.426c-.02.04.02.08.081.08h2.35c.04 0 .08-.02.08-.08L3.691 5.88c.02-.08.121-.101.162-.02l4.272 8.606c.02.02.04.04.081.04h1.66c.021 0 .062-.02.082-.04l4.212-8.505c.04-.08.142-.06.162.02l1.154 8.283c.02.08.101.1.142.04L15.86 14z"
        fill={color}
      />
      <path
        d="M30.157 1h-2.956c-.009 0-.017.003-.027.008-.014.005-.03.012-.054.012l-3.544 4.637c-.02.04-.101.04-.142 0L19.891 1.02C19.87 1 19.85 1 19.81 1h-2.957c-.08 0-.101.081-.08.142l5.082 6.58c.02.021.02.082 0 .102l-5.042 6.561c-.04.06 0 .142.08.142h2.957a.073.073 0 00.027-.008.132.132 0 01.054-.012l3.544-4.638c.02-.04.101-.04.142 0l3.543 4.638c.02.02.04.02.081.02h2.936c.082 0 .102-.081.082-.142l-5.083-6.581c-.02-.02-.02-.081 0-.101l5.083-6.582c0-.04-.02-.121-.102-.121z"
        fill={color}
      />
      <path
        clipRule="evenodd"
        d="M31.332 13.94l.202.283h.122l-.203-.304a.22.22 0 00.182-.222c0-.142-.121-.223-.243-.223h-.303v.75h.121v-.284h.122zm-.102-.365h.183c.06 0 .121.06.141.142 0 .08-.08.121-.141.121h-.183v-.263z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M30.704 13.859a.64.64 0 00.648.648.64.64 0 00.648-.648.64.64 0 00-.648-.648.64.64 0 00-.648.648zm.101 0c0-.304.243-.547.547-.547.304 0 .547.243.547.547a.544.544 0 01-.547.546.544.544 0 01-.547-.546z"
        fill={color}
        fillRule="evenodd"
      />
    </React.Fragment>
  ),
  { height: 16, width: 32, viewBox: '0 0 32 16' },
)

MXLogoCopyright.displayName = 'MXLogoCopyright'
