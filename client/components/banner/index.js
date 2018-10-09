import React from 'react';
import './style.css';

export default class Rel extends React.Component{
  constructor(props){
    super(props);

  }
  yesClick(){
    this.props.history.push('payout');
  }
    render(){
        return(
          <div className="row">
            <div className="title">
              <p className = 'My-financials'>My financials</p>
            </div>
            <div className = 'Rectangle-3'>
              <div  style = {{display:'flex'}}>
                <div  style = {{display:'flex',width : '179px',flexDirection:'column',borderRight :'2px solid rgba(255, 255, 255, .5)',paddingRight :'11%'}}>
                <span className = 'Savings-accounts' style ={{whiteSpace: 'nowrap',display: 'block'}}>Debit Accounts</span>
                <span className = 'layer'>{this.props.accSumary.noOfDebitAccounts}</span>
                <span className = 'Credit-Accounts' style ={{whiteSpace: 'nowrap'}}>Credit Accounts</span>
                <span className = 'layer'>{this.props.accSumary.noOfCreditAccounts}</span>
                </div>
                <div  style = {{display:'flex',flexDirection:'column',paddingLeft :'11%',width:'258px'}}>
                <span className = 'Savings-accounts'  style ={{whiteSpace: 'nowrap'}}>Debit Balance</span>
                <span className = 'layer' style ={{whiteSpace: 'nowrap'}}>£ {this.props.accSumary.totalAvailableDebitBalance}</span>
                <span className = 'Credit-Accounts'  style ={{whiteSpace: 'nowrap'}}>Credit outstanding</span>
                <span className = 'layer' style ={{whiteSpace: 'nowrap'}}>£ {this.props.accSumary.totalAvailableCreditBalance}</span>
                </div>
                <div  style = {{display:'flex',flexDirection:'column',paddingLeft :'11%',width:'377px'}}>
                <span className = 'Want-to-reduce-your'>Want to reduce your credit outstanding balance by £ 4301?</span>
                  <div className = 'Rectangle-4' style = {{padding:"16px 45px 16px 36px",
                  display:'flex',marginTop:'16px',cursor:'pointer'}}
                   onClick = {this.yesClick.bind(this)} tabIndex = '1'>
                    <span className = 'YES' >YES</span><i style = {{ color:'white'}} class="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
