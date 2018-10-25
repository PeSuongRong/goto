import React from 'react';

const quisle = () => {
    return (
        <div className="col-sm-12 col-12" id="car">
        <div className="row text-center">
          <div className="col-12 col-sm-12">
            <h2 className="title">
              <span className="bg-fff">
                <span>C</span><span>Ù</span><span>N</span><span>G</span>
                <span>H</span><span>Ợ</span><span>P</span>
                <span>T</span><span>Á</span><span>C</span>
              </span>
            </h2>
          </div>
          <div className="col-12 col-sm-5">
            <img src="img/drive.png" className="height200" alt="lái xe" />
          </div>
          <div className="col-12 col-sm-7">
            <h3>Bắt đầu chuyến xe của bạn</h3>
            <p>Là người sẽ mang những chuyến xe cũng như những trải nghiệm cho Khách hàng.
              Các tài xế luôn là những người hiểu rõ Khách hàng cần những gì là tốt nhất.
              Tất nhiên, chúng tôi có những Quy định cụ thể để đảm bảo lợi ích lớn nhất cho tất cả các bên.
            </p>
            <button className="btn btn-success text-white" data-toggle="modal" data-target="#dangky">Đăng ký làm tài xế</button>
          </div>
        </div>
      </div>
    );
};

export default quisle;