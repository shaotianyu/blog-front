
const TOGGLE_TITLE = 'TOGGLE_TITLT';

const titleState = {
    currentTitle: '邵天宇的个人网站'
}

export function TitleReducer(state=titleState, action) {
    switch (action.type){
        case TOGGLE_TITLE:
            return {...state, currentTitle: action.title}
        default:
            return state;
    }
}

export function toggleDispatch(title = titleState.currentTitle){ 
    return {type: TOGGLE_TITLE, title}
}
