import React, { Component } from 'react';
import Introduce from './introduce';
import Achievement from './achievement';
import Quisle from './quisle';
import Listtour from './list-tour';
class home extends Component {
    render() {
        return (
            <section className="fullwidth" id="home">
                <div className="fullwidth bannar">
                    <img src="img/bannar.jpg" alt="bannar trang chủ" />
                </div>
                <div className="fullwidth">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-12">
                                <ul className="menu fullwidth d-none d-sm-block">
                                    <li className="text-center"><a className="fullwidth" href={"#list-tour"}>Danh sách chuyến</a></li>
                                    <li className="text-center"><a className="fullwidth" href={"#introduce"}>Về chúng tôi</a></li>
                                    <li className="text-center"><a className="fullwidth" href={"#achievement"}>Thành tựu</a></li>
                                    <li className="text-center"><a className="fullwidth" href={"#car"}>Cùng hợp tác</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row list-task">
                            <Introduce />
                            <div className="col-sm-12 col-12" id="achievement">
                                <div className="row text-center">
                                    <div className="col-12 col-sm-12">
                                        <h2 className="title">
                                        <span className="bg-fff">
                                            <span>T</span><span>H</span><span>À</span><span>N</span><span>H</span>
                                            <span>T</span><span>Ự</span><span>U</span>
                                        </span>
                                        </h2>
                                    </div>
                                    <div className="col-12 col-sm-3 d-none d-sm-block">
                                        <img src="img/public.jpg" alt="cộng đồng" />
                                    </div>
                                    <div className="col-12 col-sm-9">
                                        <div className="row text-center">
                                            <Achievement />
                                            <Achievement />
                                            <Achievement />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Quisle />
                            <div className="col-sm-12 col-12" id="list-tour">
                                <div className="row">
                                    <div className="col-12 col-sm-12">
                                        <h2 className="title">
                                            <span className="bg-fff">
                                                <span>C</span><span >Á</span><span>C</span>
                                                <span>C</span><span>H</span><span >U</span><span>Y</span><span>Ế</span><span>N</span>
                                                <span>Đ</span><span>I</span>
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <Listtour />
                                <Listtour />
                                <Listtour />
                                <Listtour />
                                <Listtour />
                                <Listtour />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default home;