import React, { useState, useRef, useImperativeHandle } from 'react'

export default function Demo() {
    let [tien, setTien] = useState(0);
    let [val, setVal] = useState(1);
    let inputRef = useRef();
    let troc2Ref = useRef()
    let troc3Ref = useRef()

    function huy2() {
        tien += val;
        setTien(tien)
    }
    function huy3() {
        tien -= val;
        setTien(tien)
    }
    function bao() {
        setVal(parseInt(inputRef.current.value))
    }
    function doimau2() {
        troc2Ref.current.style.background = 'red'
    }
    function doimau3() {
        troc3Ref.current.danh()
    }

    return (
        <>
            <input type='number' ref={inputRef} />
            <p style={{ 'fontSize': '30px' }}> tien : {tien} </p> <br />
            <button onClick={huy2} style={{ 'fontSize': '30px' }}>cộng </button>
            <button onClick={huy3} style={{ 'fontSize': '30px' }}>tru</button>
            <button onClick={bao} style={{ 'fontSize': '30px' }}>lấy giá trị</button>
            <Troc2Ref step={10} ref={troc2Ref} />
            <button style={{ 'fontSize': '30px' }} onClick={doimau2}>đổi màu</button>
                <Troc3Ref step={10} ref={troc3Ref} />
            <button style={{ 'fontSize': '30px' }} onClick={doimau3}>đổi màu</button>
        </>
    )
}
//ref level2
function Troc2({ step = 1 }, cRef) {
    let [count, setCount] = useState(0)
    function huy() {
        count += step;
        setCount(count)
    }
    function huy1() {
        count -= step;
        setCount(count)
    }

    return <>
        <p style={{ 'fontSize': '30px' }}> count : {count} </p> <br />
        <button ref={cRef} onClick={huy} style={{ 'fontSize': '30px' }}>cộng </button>
        <button onClick={huy1} style={{ 'fontSize': '30px' }}>tru</button>
    </>
}
const Troc2Ref = React.forwardRef(Troc2)



// level3
function Troc3({ step = 1 }, cRef) {
    let [count, setCount] = useState(0)
    let huy = useRef()
    let khai = useRef()
    function huy4() {
        count += step;
        setCount(count)
    }
    function huy5() {
        count -= step;
        setCount(count)
    }
    useImperativeHandle(
        cRef,
        () => ({
            danh: () => {
                huy.current.style.background = 'yellow'
                khai.current.style.background = 'green'
            }
        }),
    )
    return <>
        <p style={{ 'fontSize': '30px' }}> count : {count} </p> <br />
        <button ref={huy} onClick={huy4} style={{ 'fontSize': '30px' }}>cộng </button>
        <button ref={khai} onClick={huy5} style={{ 'fontSize': '30px' }}>tru</button>
    </>
}
const Troc3Ref = React.forwardRef(Troc3)