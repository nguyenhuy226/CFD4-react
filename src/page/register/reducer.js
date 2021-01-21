export default function Reducer(state, action) {
    console.log(state)
    switch (action.type) {
      case 'FORM_INPUT_CHANGE':
        return {
          ...state,
          form: action.form
        }
      case 'LOADING' :
        return {
          ...state,
          loading : action.loading
        }
      case 'ERROR' :
        return {
          ...state,
          error : action.error
        }
      case 'BTN_REGISTER_CLICK' :
        if (state.loading) {
          alert('bạn không thể gửi liên tục')
          return state;
        }
        let error = {}
        if (!state.form.userName) {
          error['userName'] = "Uesername không được để  trống "
        }
        if (!state.form.phone) {
          error['phone'] = "phone không được để  trống "
        } else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(state.form.phone)) {
          error['phone'] = "phone không đúng định dạng"
        }
        if (!state.form.email) {
          error['email'] = "email không được để  trống "
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(state.form.email)) {
          error['email'] = "email không đúng định dạng"
        }
        if (!state.form.fb) {
          error['fb'] = "fb không được để  trống "
        } else if (!/(?:https?:\/\/)?(?:www\.)?facebook\.com\/.(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/.test(state.form.fb)) {
          error['fb'] = "fb không đúng định dạng"
        }
        if(Object.keys(error).length === 0) {
            action.successCallback();
        }
        return {
          ...state,
          error
        }
    }
    return state;
  
  }