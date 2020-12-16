import React from 'react'
import { createSvgIcon } from './base'

export const Subscription = createSvgIcon(({ color }) => (
  <React.Fragment>
    <g clipPath="url(#subscription)">
      <path
        d="M9.911 8.098c-.398-.301-.934-.473-1.407-.602l-.043-.012v-1.95l.07.016c.419.093.81.277 1.138.535a.168.168 0 00.129.035.171.171 0 00.117-.066l.348-.45a.173.173 0 00-.027-.242c-.473-.383-1.052-.621-1.72-.711l-.05-.008v-.72a.175.175 0 00-.177-.175H7.66a.175.175 0 00-.176.176v.735l-.05.007c-.556.086-1.025.301-1.353.63-.324.324-.5.738-.5 1.203 0 .942.52 1.45 1.856 1.818l.043.011v2.17l-.07-.016a3.131 3.131 0 01-1.325-.669.192.192 0 00-.137-.043.163.163 0 00-.12.07l-.34.474a.174.174 0 00.023.23c.48.45 1.129.727 1.922.825l.051.008v.703c0 .098.078.176.176.176h.63a.175.175 0 00.175-.176v-.68l.05-.004c.634-.066 1.134-.273 1.49-.613.356-.34.547-.813.547-1.36-.004-.567-.211-.997-.64-1.325zm-1.454.48l.078.024c.466.148.997.39.997.93a.896.896 0 01-.227.594c-.175.2-.437.332-.777.395l-.07.011V8.579zM6.605 6.413c0-.434.293-.758.801-.883l.074-.02v1.7l-.078-.027c-.34-.11-.797-.316-.797-.77z"
        fill={color}
      />
      <path
        clipRule="evenodd"
        d="M2.31 3.9A7.033 7.033 0 00.967 8.032H0l1.319 1.759 1.318-1.759H1.67a6.33 6.33 0 0111.451-3.72l.569-.414a7.033 7.033 0 00-11.38 0zM15.034 8.033h.967l-1.319-1.758-1.319 1.758h.968A6.33 6.33 0 012.88 11.754l-.57.413a7.034 7.034 0 0012.724-4.134z"
        fill={color}
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="subscription">
        <path d="M0 0h16v16H0z" fill="#fff" />
      </clipPath>
    </defs>
  </React.Fragment>
))

Subscription.displayName = 'Subscription'
