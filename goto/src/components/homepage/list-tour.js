import React from 'react';

const listtour = () => {
    return (
        <div className="list-item">
            <div className="row">
            <div className="col-12 col-sm-4">
                <p>Thừa Thiên Huế <i className="fa fa-arrow-right" aria-hidden="true" /> Nha Trang</p>
                <p><i className="fa fa-calendar-check-o" aria-hidden="true" />22/10/2018 18:30</p>
            </div>
            <div className="col-12 col-sm-3">
                <div className="row">
                <div className="col-12 col-sm-12 p"><i className="fa fa-car" aria-hidden="true" /> Toyota Innova 2013</div>
                <div className="col-5 col-sm-5"><i className="fa fa-users" aria-hidden="true" />0/7</div>
                <div className="col-7 col-sm-7"><i className="fa fa-taxi" aria-hidden="true" /><span>Tận Nơi</span></div>
                </div>
            </div>
            <div className="col-12 col-sm-3">
                <div className="fullwidth p">
                <span><img src="img/user.png" alt="user1" className="user" /></span>
                <span>Trần Hải Yến</span>
                </div>
                <div className="fullwidth star">
                <i className="fa fa-star active" aria-hidden="true" />
                <i className="fa fa-star active" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <span>(54)</span>
                </div>
            </div>
            <div className="col-12 col-sm-2">
                <p>120000<sup>đ</sup></p>
                <a href="true" className="btn btn-success text-white btn-sm">Xem chi tiết</a>
            </div>
            </div>
        </div>
    );
};

export default listtour;