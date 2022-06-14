
function typeReducer (state, action) {

    let newState;

    switch (action.type) {

        case 'get-type-from-server':
            newState = action.payload.map(type => ({...type}))

            break;

    
        
        default:
            newState = [...state];
    }


    return newState;
}

export default typeReducer;