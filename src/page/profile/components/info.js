import React from 'react'
import { Prompt } from 'react-router-dom'

export default function Info() {
    return (
        
        <div className="tab1" style={{ display: 'block' }}>
            <Prompt message="bạn có chắc muốn rời khỏi trang"/>     
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" placeholder="Nguyễn Văn A" />
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" placeholder="0949******" />
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" placeholder="Facebook url" />
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" placeholder="Skype url" />
            </label>
            <div className="btn main rect">LƯU LẠI</div>
        </div>
    )
}
