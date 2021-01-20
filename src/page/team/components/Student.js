import React from 'react'

export default function Student(props) {
    return (
        <>
            <div className="item col-md-3 col-sm-4 col-xs-6">
                <div className="wrap">
                  <div className="cover">
                    <span className="text">H</span>
                    <img src="/img/thumb-member.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      {props.name}
                    </div>
                    <p className="title">CFD1-Offline</p>
                  </div>
                </div>
              </div>
        </>
    )
}
