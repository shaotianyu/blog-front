
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const initState = {
    isAuth: false,
}

//登录注册reduce
export function admin(state=initState, action) {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {...state, isAuth:true};
        default:
            return state;
    }
}
