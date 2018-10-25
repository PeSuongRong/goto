import React, { Component } from 'react';

class registration extends Component {
    render() {
        return (
            <div className="modal fade" id="dangky">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                <button type="button" className="close float-right" data-dismiss="modal">×</button>
                <div className="login-container fullwidth">
                    <form action="true" className="form-login">
                    <ul className="login-nav">
                        <li className="login-nav__item active">
                        <a href="true">Đăng ký</a>
                        </li>
                    </ul>
                    <label htmlFor="login-input-user" className="login__label">
                        Tên người dùng
                    </label>
                    <input id="login-input-user" className="login__input" type="text" />
                    <label htmlFor="login-input-password" className="login__label">
                        Mật khẩu
                    </label>
                    <input id="input-password" className="login__input" type="password" />
                    <label htmlFor="login-input-password" className="login__label">
                        Mật khẩu
                    </label>
                    <input id="input-re-password" className="login__input" type="password" />
                    <label htmlFor="login-sign-up" className="login__label--checkbox">
                        <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
                        Bạn đồng ý với các điều khoản của goto.vn
                    </label>
                    <button className="login__submit" disabled>Đăng ký</button>
                    </form>
                    <a href="true" className="login__forgot float-right" data-dismiss="modal" data-toggle="modal" data-target="#login">Đăng nhập</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default registration;