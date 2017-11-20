import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class LoginComponent extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
        this.state = {
            username: ''
        }
    }

    render () {
        return(
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="fa fa-tablet fa-2x" aria-hidden="true"/>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="fa fa-keyboard-o fa-2x" aria-hidden="true"/>
                    <input type="text" placeholder="输入验证码"/>
                    <button>发送验证码</button>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }
    changeHandle(e){
        this.setState({
            username: e.target.value
        })
    }
    clickHandle(){
        const username  = this.state.username;
        const loginHandle = this.props.loginHandle;
        loginHandle(username);
    }
}

export default LoginComponent;