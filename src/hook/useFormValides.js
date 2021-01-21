import  {useState} from 'react'
let patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let patternPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
let patternFb = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/.(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/



export default function useFormValides(initiaValue, validate) {
    let [form, setForm] = useState(initiaValue)
    function inputChange(event) {
        setForm({
            ...form,
            [event.target.getAttribute('name')]: event.target.value  //""cách viết ngắn hơn""

        })
    }
    let [error, setError] = useState({})
    function submit() {
        let {rule, message} =validate;
        let errorObject = {};
        for (let i in rule) {
            let r =rule[i] ;
            if(r.required) {
                if(!form[i]) {
                    errorObject[i] = message?.[i]?.required || 'truong nay khong duoc de trong'
                }
            }
            if(r.pattern) {
                let pattern = r.pattern
                if(pattern === 'email') pattern =patternEmail
                if(pattern === 'phone') pattern =patternPhone
                if(pattern === 'fb') pattern =patternFb
                if(!pattern.test(form[i])) {
                    errorObject[i] = message?.[i]?.pattern || 'truong nay khong dung dinh dang'
                }
            }
        }
        setError(errorObject);  
        return errorObject
    }



    return {
        form ,
        inputChange,
        error,
        submit
    }
}
