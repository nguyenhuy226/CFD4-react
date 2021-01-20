import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="tab-title">
        <NavLink to="/thông-tin-cá-nhân/" exact>Thông tin tài khoản</NavLink>
        <NavLink to="/thông-tin-cá-nhân/khóa-học">Khóa học của bạn</NavLink>
        <NavLink to="/thông-tin-cá-nhân/dự-án">Dự án đã làm</NavLink>
        <NavLink to="/thông-tin-cá-nhân/thanh-toán">Lịch sử thanh toán</NavLink>
        <NavLink to="/thông-tin-cá-nhân/giá">Quản lý COIN của tôi</NavLink>
      </div>
    )
}
