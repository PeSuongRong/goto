import React, { Component } from 'react';

class introduce extends Component {
    render() {
        return (
            <div className="col-sm-12 col-12" id="introduce">
            <div className="row text-center">
            <div className="col-12 col-sm-12">
                <h2 className="title">
                <span className="bg-fff">
                    <span>V</span><span>Ề</span>
                    <span>C</span><span>H</span><span>Ú</span><span>N</span><span>G</span>
                    <span>T</span><span>Ô</span><span>I</span>
                </span>
                </h2>
            </div>
            <div className="col-4 col-sm-4">
                <div className="icon-green">
                <span className="introduce"><i className="fa fa-handshake-o" aria-hidden="true" /></span>
                </div>
                <h4>Tin tưởng</h4>
                <p>Bạn sẽ biết tài xế và bạn đồng hành của bạn là ai.
                Điều đó giúp bạn có những trải nghiệm tốt hơn trên hành trình của mình.
                </p>
            </div>
            <div className="col-4 col-sm-4">
                <div className="icon-green">
                <span className="introduce"><i className="fa fa-paper-plane-o" aria-hidden="true" /></span>
                </div>
                <h4>Chủ động</h4>
                <p>Thời gian chờ, số ghế trống, giá cả, chất lượng tài xế, các đánh giá, …
                tất cả sẽ được hiển thị rõ ràng để bạn yên tâm đặt chuyến đi.</p>
            </div>
            <div className="col-4 col-sm-4">
                <div className="icon-green">
                <span className="introduce"><i className="fa fa-life-ring" aria-hidden="true" /></span>
                </div>
                <h4>Thân thiện</h4>
                <p>Mỗi 2 người đi chung một xe tương đương với việc trồng 4 cây xanh cho việc hấp thụ khí C02 trong vòng 1 năm.</p>
            </div>
            </div>
        </div>
        );
    }
}

export default introduce;