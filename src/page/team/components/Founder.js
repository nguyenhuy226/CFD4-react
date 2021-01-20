import React from 'react'

export default function Founder(props) {
    return (
        <>
            <div className="item col-md-6 col-sm-6">
                <div className="wrap">
                  <div className="cover">
                    <img src="/img/thumb-member.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      {props.name}
                    </div>
                    <p className="title">{props.specialized}</p>
                  </div>
                </div>
              </div>
              
        </>
    )
}
