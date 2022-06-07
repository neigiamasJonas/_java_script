function colorReducer (state, action) {

    let newState;

    //
    switch(action.type) {
        case 'go_pink':
            newState = 'pink';
            break;

        case 'go_red':
            newState = 'red';
            break;
        
        case 'change_color':
            newState = state === 'red' ? 'pink' : 'red';
            break;


        case 'change_background':
            newState = action.payload
            break;

        default:
            newState = state;
    }
    //

    return newState;
}

export default colorReducer;