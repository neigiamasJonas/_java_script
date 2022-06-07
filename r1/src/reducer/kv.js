function kvReducer (state, action) {
    let newState

    switch(action.type){
        case 'kvkv':
        newState = [...state, '']
        break;

        default:
            newState = state
    }

    return newState
}

export default kvReducer;