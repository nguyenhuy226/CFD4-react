import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useFormValides from '../../hook/useFormValides'

export default function Register() {
  let [laoding, setLoading] = useState(false)

  let {form ,error,inputChange,submit } = useFormValides({
    userName: '',
    phone: '',  
    email: '',
    fb: ''
  }, {
    rule: {
      userName: {
        required: true
      },
      phone: {
        pattern: 'phone'
      },
      email: {
        pattern: 'email'
      },
      fb: {
        pattern: 'fb'
      }
    },
    massage: {
      userName: {
        required: "họ và tên không được để trống"
      },
      phone: {
        pattern: "sdt không đúng định dạng"
      },
      email: {
        pattern: "email không đúng định dạng"
      },
      fb: {
        pattern: "fb không đúng định dạng"
      }
    }
  })
  // const [form, setForm] = useState({
  //   userName: '',
  //   phone: '',
  //   email: '',
  //   fb: ''
  // })

  // useEffect(() => {
  //   function danh() {
  //     console.log(form)
  //   }
  //   console.log('sẽ render 1 lần khi khởi tạo component')
  //   window.addEventListener('click', danh
  //   )
  //   return () => {
  //     console.log('sẽ render 1 lần khi hủy hoại component')
  //     window.removeEventListener('click', danh)
  //   }
  // }, [form]) //khi mà tham số phụ thuộc thay đôi thì sẽ chạy lại useEffect một lần


  // let [error, setError] = useState({})

  // function inputChange(event) {
  //   // let target = event.target;
  //   // let val = target.value;
  //   // let name = target.getAttribute('name');
  //   // form[name] = val
  //   setForm({
  //     ...form,
  //     [event.target.getAttribute('name')]: event.target.value  //""cách viết ngắn hơn""

  //   })
  // }
  function inputSubmit() {
    
    // if (laoding) {
    //   alert('bạn không thể gửi liên tục')
    //   return;
    // }
    // let error = {}
    // if (!form.userName) {
    //   error['userName'] = "Uesername không được để  trống "
    // }
    // if (!form.phone) {
    //   error['phone'] = "phone không được để  trống "
    // } else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(form.phone)) {
    //   error['phone'] = "phone không đúng định dạng"
    // }
    // if (!form.email) {
    //   error['email'] = "email không được để  trống "
    // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
    //   error['email'] = "email không đúng định dạng"
    // }
    // if (!form.fb) {
    //   error['fb'] = "fb không được để  trống "
    // } else if (!/(?:https?:\/\/)?(?:www\.)?facebook\.com\/.(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/.test(form.fb)) {
    //   error['fb'] = "fb không đúng định dạng"
    // }
    // setError(error)
    let error = submit();
    
    if (Object.keys(error).length == 0) {
      setLoading(true)
      setTimeout(() => {
        alert('đăng ký thành công')
        setLoading(false)
      }, 1000)

    }

  }
  return (
    <>
      <div className="overlay_nav" />
      <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến front-end căn bản </h1>
              <div className="main-info">
                <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
              </div>
              <div className="form">
                <label>
                  <p>Họ và tên<span>*</span></p>
                  <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} name="userName" value={form.userName} />
                </label>
                {
                  error.userName && <p className="error" style={{ 'color': 'red' }}>{error.userName}</p>
                }
                <label>
                  <p>Số điện thoại<span>*</span></p>
                  <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={form.phone} />
                </label>
                {
                  error.phone && <p className="error" style={{ 'color': 'red' }}>{error.phone}</p>
                }
                <label>
                  <p>Email<span>*</span></p>
                  <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={form.email} />
                </label>
                {
                  error.email && <p className="error" style={{ 'color': 'red' }}>{error.email}</p>
                }
                <label>
                  <p>URL Facebook<span>*</span></p>
                  <input type="text" placeholder="https://facebook.com" onChange={inputChange} name="fb" value={form.fb} />
                </label>
                {
                  error.fb && <p className="error" style={{ 'color': 'red' }}>{error.fb}</p>
                }
                <label className="disable">
                  <p>Sử dụng COIN</p>
                  <div className="checkcontainer">
                    Hiện có <strong>300 COIN</strong>
                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                    {/* Cần ít nhất 200 COIN để giảm giá */}
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </div>
                </label>
                <label>
                  <p>Hình thức thanh toán</p>
                  <div className="select">
                    <div className="head">Chuyển khoản</div>
                    <div className="sub">
                      <a href="#">Chuyển khoản</a>
                      <a href="#">Thanh toán tiền mặt</a>
                    </div>
                  </div>
                </label>
                <label>
                  <p>Ý kiến cá nhân</p>
                  <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </label>
                <div className="btn main rect" onClick={inputSubmit}>đăng ký {laoding && <CircularProgress size={20} style={{ marginLeft: 20 }} />}</div>
              </div>
            </div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
      </main>
    </>
  )
}
