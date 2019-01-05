
const MENU_TOGGLE = 'MENU_TOGGLE';
const MENU_HIDE = 'MENU_HIDE';

const menuState = {
    sideShow: false
}

export function SideReducer(state=menuState, action) {
    switch (action.type){
        case MENU_TOGGLE:
            return {...state, sideShow:!state.sideShow}
        case MENU_HIDE:
            return {...state, sideShow:false}
        default:
            return state;
    }
}

export function toggleDispatch(){ 
    return {type: MENU_TOGGLE}
}

export function hideDispatch(){ 
    return {type: MENU_HIDE}
}