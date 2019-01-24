// @flow

import React, { Component } from 'react'
import { Button, Row } from '@morpheus-ui/core'

import WalletCreateModal from '../wallets/WalletCreateModal'
import OnboardContainer from './OnboardContainer'

type Props = {
  onSetupWallet: () => void,
  userID: string,
}

type State = {
  view: 'start' | 'create' | 'create-bakcup' | 'import' | 'ledger',
}

export default class OnboardWalletView extends Component<Props, State> {
  state = {
    view: 'start',
  }

  onPressCreate = () => {
    this.setState({
      view: 'create',
    })
  }

  onSetupWallet = () => {
    this.props.onSetupWallet()
  }

  renderStart() {
    return (
      <Row>
        <Button title="Create" onPress={this.onPressCreate} />
        <Button title="Import" />
        <Button title="Connect Ledger" />
      </Row>
    )
  }

  renderCreate() {
    return (
      <WalletCreateModal
        onSetupWallet={this.onSetupWallet}
        userID={this.props.userID}
      />
    )
  }

  renderContent() {
    switch (this.state.view) {
      case 'start':
        return this.renderStart()
      case 'create':
      default:
        return this.renderCreate()
    }
  }

  render() {
    return (
      <OnboardContainer
        title="Welcome"
        description="Let’s quickly secure your MainframeOS vault.">
        {this.renderContent()}
      </OnboardContainer>
    )
  }
}
