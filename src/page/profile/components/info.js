import React from 'react'
import { Prompt } from 'react-router-dom'
import useFormValides from '../../../hook/useFormValides'

export default function Info() {

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
          },
          skype : {
            required : true
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
          },
          skype : {
            required : "skype không được để trống" 
          }
        }
      })
      function _btnClick() {
          let error = submit();
          if(Object.keys(error).length == 0 ) {
              alert('thanh cong')
          }
      }
    return (

        <div className="tab1" style={{ display: 'block' }}>
            <Prompt message="bạn có chắc muốn rời khỏi trang"/>     
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Nguyễn Văn A" name="userName" onChange={inputChange} value={form.userName}/>
                {
                    error.userName && <p className="error-text">{error.userName}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" placeholder="0949******" name="phone" onChange={inputChange} value={form.phone}/>
                {
                    error.phone && <p className="error-text">{error.phone}</p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue="vuong.dang@dna.vn"  type="text" name="email" onChange={inputChange} value={form.email} />
                {
                    error.email && <p className="error-text">{error.email}</p>
                }
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" placeholder="Facebook url" name="fb" onChange={inputChange} value={form.fb}/>
                {
                    error.fb && <p className="error-text">{error.fb}</p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" name="skype" onChange={inputChange} value={form.skype}/>
                {
                    error.skype && <p className="error-text">{error.skype}</p>
                }
            </label>
            <div className="btn main rect" onClick={_btnClick}>LƯU LẠI</div>
        </div>
    )
}
