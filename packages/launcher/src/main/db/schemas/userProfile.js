// @flow

import ethAddress from './ethAddress'

export default {
  title: 'user profile',
  version: 0,
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    avatar: {
      type: 'string',
    },
    ethAddress,
  },
}