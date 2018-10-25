import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <div className="modal fade" id="login">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                <button type="button" className="close float-right" data-dismiss="modal">×</button>
                <div className="login-container fullwidth">
                    <form action="true" className="form-login">
                    <ul className="login-nav">
                        <li className="login-nav__item active">
                        <a href="true">Đăng nhập</a>
                        </li>
                    </ul>
                    <label htmlFor="login-input-user" className="login__label">
                        Tên đăng nhập
                    </label>
                    <input className="login__input" type="text" />
                    <label htmlFor="login-input-password" className="login__label">
                        Mật khẩu
                    </label>
                    <input className="login__input" type="password" />
                    <label htmlFor="login-sign-up" className="login__label--checkbox">
                        <input type="checkbox" className="login__input--checkbox" />
                        Ghi nhớ tài khoản
                    </label>
                    <button className="login__submit" disabled>Đăng nhập</button>
                    </form>
                    <div className="text-center fullwidth login-icon">
                    <ul>
                        <li><i className="fa fa-facebook-square" aria-hidden="true" /></li>
                        <li><i className="fa fa-google-plus-square" aria-hidden="true" /></li>
                    </ul>
                    </div>
                    <a href="true" className="login__forgot float-left" data-dismiss="modal" data-toggle="modal" data-target="#dangky">Đăng ký</a>
                    <a href="true" className="login__forgot float-right">Bạn quên mật khẩu?</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default login;