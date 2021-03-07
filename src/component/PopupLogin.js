import React, { useContext } from 'react'
import reactDOM from 'react-dom'
import { Context } from '../App'
import { useAuth } from '../core/hook/useAuth'
import useFormValidate from '../core/hook/useFormValides'



const styles = {
  errorText: {
    paddingLeft: 0,
    fontWeight: 400,
    color: 'red'
  }
}

function PopupLogin(props, ref) {
  let { form, inputChange, error, submit } = useFormValidate({
    email: '',
    password: ''
  }, {
    rule: {
      email: {
        required: true,
        pattern: 'email'
      },
      password: {
        required: true,
        min: 6,
        max: 32
      }
    },
    message: {
      email: {
        pattern: 'email không đúng định dạng'
      },
      password: {
        max: 'password không được trên 32 kí tự',
        min: 'password không được dưới 6 kí tự',

      }
    }

  })
  let context = useContext(Context);
  let auth = useAuth();
  function _btnClick(e) {
    // e.prevenDefault();
    let error = submit();
    if (Object.keys(error).length === 0) {
      fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(res => {
          if (res.data) {
            auth.loginAction(res.data)
            context.closePopupLogin()
          }
        })
    }
  }




  return reactDOM.createPortal(
    <>
      <div className="popup-video" style={{ display: 'none' }}>
        <div className="wrap">
          <div className="video-src" />
        </div>
        <div className="close" />
      </div>
      <div className="popup-form popup-login" ref={ref} style={{ display: 'none' }}>
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login" style={{ display: 'block' }}>
            <h2 className="title">Đăng nhập</h2>
            <input type="text" placeholder="Email / Số điện thoại" name="email" onChange={inputChange} value={form.email} />
            {error.email && <p className="error-text" style={styles.errorText}>{error.email}</p>}
            <input type="password" placeholder="Mật khẩu" name="password" onChange={inputChange} value={form.password} />
            {error.password && <p className="error-text" style={styles.errorText}>{error.password}</p>}
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="javascript: void(0)" className="forget" onClick={context.openPOpupRegister}>Đăng ký</a>
            </div>
            <div className="btn rect main btn-login" onClick={_btnClick}>Đăng nhập</div>
            <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="/img/google.svg" alt="" />
                  Google
                </div>
            </div>
            <div className="close" onClick={context.closePopupLogin}>
              <img src="/img/close-icon.png" alt="" />
            </div>
          </div>
          {/* email form */}
          {/* <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
              <img src="/img/close-icon.png" alt="" />
            </div>
          </div> */}
        </div>
      </div>
      <div className="popup-form popup-login" style={{ display: 'none' }}>
        <div className="wrap">
          <h2 className="title">Đăng ký</h2>
          <div className="btn btn-icon rect white btn-google">
            <img src="/img/google.svg" alt="" />
              Google
            </div>
          <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
            </p>
          <div className="close">
            <img src="/img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </>,
    document.getElementById('root2')
  )
}
export default React.forwardRef(PopupLogin)