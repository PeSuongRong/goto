import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <section className="fullwidth" id="header">
                <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-3">
                    <a href="index.html" title="homepage">
                        <img src="img/logo.png" alt="logo goto" className="logo" />
                    </a>
                    </div>
                    <div className="col-sm-9 col-9">
                    <ul className="float-right">
                        <li>
                        <button type="button" className="btn" data-toggle="modal" data-target="#login">
                            Đăng nhập
                        </button>
                        </li>
                        <li>
                        <button type="button" className="btn" data-toggle="modal" data-target="#dangky">
                            Đăng ký
                        </button>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default header;