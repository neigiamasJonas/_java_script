import rand from '../Functions/randNumber'


function NumberReducer(state, action) {

    let newState;

    //
    switch(action.type){
        case 'change_number':
            newState = ('' + rand(0, 1000)).padStart(4, '0');
            break;

        case 'change_number2':
            newState = ('' + action.payload).padStart(4, '0');
            break;
        case 'nr_to_text':
            newState = action.payload
            break;
            

        default:
            newState = state;
    }

    console.log(action.payload);
    return newState;
}

export default NumberReducer;