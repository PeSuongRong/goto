import React from 'react';

const footer = () => {
    return (
        <section className="fullwidth" id="footer">
            <div className="container">
            <div className="row">
                <div className="col-sm-4 col-12">
                <p><a href={"index.html"} title="trang chủ"><img src="img/logo.png" className="logo" alt="goto.vn" /></a></p>
                <p>Hỗ trợ: <a href={`callto:0339034971`}>0339034971</a></p>
                <p>Email: <a href={`mailto:Fiststar1995@gmail.com`}>Fiststar1995@gmail.com</a></p>
                </div>
                <div className="col-sm-4 col-12">
                <h5><b>Thông tin</b></h5>
                <p><a href="true">Điều khoản sử dụng</a></p>
                <p><a href="true">Chính sách bảo mật</a></p>
                <p><a href="true">Giải quyết tranh chấp</a></p>
                </div>
                <div className="col-sm-4 col-12">
                <h5><b>Hỗ trợ</b></h5>
                <p><a href="true">Đăng ký làm tài xế</a></p>
                <p><a href="true">Đăng ký khách hàng</a></p>
                <p><a href="true">Thất lạc hành lý</a></p>
                </div>
                <div className="col-12 col-sm-12 text-center border-top">
                <span>Bản quyền © 2018 Trần Hải Yến. Giữ toàn quyền.</span>
                </div>
            </div>
            </div>
        </section>
    );
};

export default footer;