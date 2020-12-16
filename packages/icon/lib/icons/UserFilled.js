import React from 'react'
import { createSvgIcon } from './base'

export const UserFilled = createSvgIcon(({ color }) => (
  <path
    clipRule="evenodd"
    d="M8 16A8 8 0 108 0a8 8 0 000 16zm4-5.836a.929.929 0 00-.365-.746 5.945 5.945 0 00-3.647-1.06A5.913 5.913 0 004.374 9.41a.933.933 0 00-.374.753v1.532c0 .168.128.304.286.304h7.428c.158 0 .286-.136.286-.304v-1.532zm-7.307-.25a5.385 5.385 0 013.295-.95 5.417 5.417 0 013.328.957c.067.05.113.144.113.243v1.229H4.57v-1.229c0-.1.046-.192.122-.25zm5.593-5.2c0-1.34-1.024-2.428-2.286-2.428S5.714 3.373 5.714 4.714c0 1.342 1.024 2.429 2.286 2.429s2.286-1.087 2.286-2.429zm-4 0c0-1.006.767-1.821 1.714-1.821s1.714.815 1.714 1.821S8.947 6.536 8 6.536 6.286 5.72 6.286 4.714z"
    fill={color}
    fillRule="evenodd"
  />
))

UserFilled.displayName = 'UserFilled'
