import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const todoList = ['learn React', 'learn Redux'];
        const isLogin = false;
        return (
            <div>
                <h1> Hello React! </h1>
                <ul>
                    {
                        todoList.map(item =>
                        <li>{item}</li>
                    )
                    }
                </ul>
                {
                    isLogin ? <p>已经登录</p> : <p>请登录</p>
                }
            </div>
        )
    }
}

export default Welcome
