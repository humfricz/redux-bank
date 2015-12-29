import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import TransactionForm from './TransactionForm';

class TransactionModal extends Component {
  handleSubmit(data) {
    this.props.addTransaction("Withdrawal", data.amount, this.props.accountId);
    this.props.hideTransactionModal();
  }

  render() {
    return(
      <div className="ui small modal active" style={{ top: '30%' }}>
        <div className="header">Withdrawal</div>
        <div className="content">
          <TransactionForm
            onSubmit={this.handleSubmit.bind(this)}
            hideTransactionModal={this.props.hideTransactionModal}/>
        </div>
      </div>
    );
  }
}

export default connect()(TransactionModal);
