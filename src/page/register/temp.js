import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect, useReducer } from 'react'
import Reducer from './reducer'


export default function Register() {
  // let [loading, setLoading] = useState(false)

  // const [form, setForm] = useState({
  //   userName: '',
  //   phone: '',
  //   email: '',
  //   fb: ''
  // })

  let [state, dispatch] = useReducer(Reducer, {
    loading: false,
    form: {
      userName: '',
      phone: '',
      email: '',
      fb: ''
    },
    error: {}
  })

  useEffect(() => {
    function danh() {
      console.log(state.form)
    }
    console.log('sẽ render 1 lần khi khởi tạo component')
    window.addEventListener('click', danh
    )
    return () => {
      console.log('sẽ render 1 lần khi hủy hoại component')
      window.removeEventListener('click', danh)
    }
  }, [state.form]) //khi mà tham số phụ thuộc thay đôi thì sẽ chạy lại useEffect một lần


  // let [error, setError] = useState({})

  function onchange(event) {
    // let target = event.target;
    // let val = target.value;
    // let name = target.getAttribute('name');
    // state.form[name] = val
    // setForm({
    //   ...state.form,
    // [event.target.getAttribute('name')]: event.target.value  ""cách viết ngắn hơn""

    // })
    dispatch({
      type: 'FORM_INPUT_CHANGE',
      form: {
        ...state.form,
        [event.target.getAttribute('name')]: event.target.value
      }
    })
  }
  function submit() {

    // setError(state.error)
    dispatch({ type: 'LOADING', loading: true })
    setTimeout(() => {
      alert('đăng ký thành công')
      // setLoading(false)
      dispatch({ type: 'LOADING', loading: false })
    }, 1000)
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
                  <input type="text" placeholder="Họ và tên bạn" onChange={onchange} name="userName" value={state.form.userName} />
                </label>
                {
                  state.error.userName && <p className="error" style={{ 'color': 'red' }}>{state.error.userName}</p>
                }
                <label>
                  <p>Số điện thoại<span>*</span></p>
                  <input type="text" placeholder="Số điện thoại" onChange={onchange} name="phone" value={state.form.phone} />
                </label>
                {
                  state.error.phone && <p className="error" style={{ 'color': 'red' }}>{state.error.phone}</p>
                }
                <label>
                  <p>Email<span>*</span></p>
                  <input type="text" placeholder="Email của bạn" onChange={onchange} name="email" value={state.form.email} />
                </label>
                {
                  state.error.email && <p className="error" style={{ 'color': 'red' }}>{state.error.email}</p>
                }
                <label>
                  <p>URL Facebook<span>*</span></p>
                  <input type="text" placeholder="https://facebook.com" onChange={onchange} name="fb" value={state.form.fb} />
                </label>
                {
                  state.error.fb && <p className="error" style={{ 'color': 'red' }}>{state.error.fb}</p>
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
                <div className="btn main rect" onClick={() => dispatch({ type: 'BTN_REGISTER_CLICK', successCallback: submit })}>đăng ký {state.loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />}</div>
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
