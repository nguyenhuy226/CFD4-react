import React from 'react'


export default function Fales() {
  function huy() {
    alert('huyashdkasdhasd')
  }
  return (
    <>
      <div className="overlay_nav" />
      <main className="notfound" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">404</h2>
            <p>Không tìm thấy trang</p>
            <a href="sdsdsd" className="btn main round" onDoubleClick={huy}>Trang chủ</a>
          </section>
        </div>
      </main>
    </>
  )
}
