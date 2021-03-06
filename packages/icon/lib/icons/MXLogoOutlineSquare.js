import React from 'react'
import { createSvgIcon } from './base'

export const MXLogoOutlineSquare = createSvgIcon(
  ({ color }) => (
    <React.Fragment>
      <path d="M1 1h30v30H1z" fill="transparent" stroke={color} strokeWidth="2" />
      <path
        d="M23.444 11.946h1.88c.028 0 .043.033.024.052l-3.179 4.038c-.01.01-.01.03 0 .038l3.18 4.039a.032.032 0 01-.026.053h-1.879a.027.027 0 01-.023-.015L21.2 17.27c-.01-.014-.034-.014-.048 0l-2.22 2.881a.025.025 0 01-.023.015h-1.88c-.024 0-.037-.035-.024-.053l3.179-4.039c.008-.008.008-.028 0-.038l-3.18-4.039a.032.032 0 01.025-.051h1.88c.01 0 .018.005.023.015l2.22 2.88c.01.015.033.015.048 0l2.22-2.88a.027.027 0 01.023-.015z"
        fill={color}
      />
      <path
        d="M16.269 19.985l1.237-1.515a.055.055 0 00.013-.033l-.948-6.443c-.005-.024-.025-.043-.049-.043h-1.251c-.02 0-.038.01-.043.028L12.255 18c-.018.038-.072.038-.085 0l-3.002-6.02c-.01-.018-.024-.028-.042-.028H7.86c-.025 0-.045.02-.05.043l-1.197 8.119a.05.05 0 00.048.056h1.461c.025 0 .05-.018.05-.041l.721-5.277c.005-.048.073-.057.093-.014l2.65 5.31c.01.019.024.027.043.027h1.036c.018 0 .038-.008.043-.028l2.617-5.28c.019-.044.087-.034.092.013l.713 5.082c.005.043.063.056.088.024z"
        fill={color}
      />
    </React.Fragment>
  ),
  { size: 32, viewBox: '0 0 32 32' },
)

MXLogoOutlineSquare.displayName = 'MXLogoOutlineSquare'
