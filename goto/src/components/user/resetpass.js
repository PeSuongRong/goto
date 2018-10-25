import React from 'react';

const resetpass = () => {
    return (
        <div className="modal fade" id="resetpass">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                <button type="button" className="close float-right" data-dismiss="modal">×</button>
                <div className="login-container fullwidth">
                    <form action="true" className="form-login">
                    <ul className="login-nav">
                        <li className="login-nav__item active">
                        <a href="true">Quên mật khẩu</a>
                        </li>
                    </ul>
                    <label htmlFor="login-input-user" className="login__label">
                        Email
                    </label>
                    <input className="login__input" type="email" />
                    <span className="text-white">Vui lòng nhập mail bạn đã đăng ký để đặt lại mật khẩu</span>
                    <button className="login__submit" disabled>Gửi</button>
                    </form>
                    <a href="true" className="login__forgot float-left" data-dismiss="modal" data-toggle="modal" data-target="#dangky">Đăng ký</a>
                    <a href="true" className="login__forgot float-right" data-dismiss="modal" data-toggle="modal" data-target="#login">Đăng nhập</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default resetpass;