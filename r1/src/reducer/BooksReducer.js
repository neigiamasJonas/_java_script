
function booksReducer(state, action) {

    let newState;

    switch(action.type){

        case 'get_from_server':
        newState = action.payload.map((b, i) => ({ ...b, row: i }));

        break;
        ////
        case 'sortBooks':
            // newState = [...state].sort((a, b) => (a.title - b.title)) =>>>>>> tik su skaiciais

            newState = [...state].sort((a, b) => {
                if (a.title > b.title) return 1;
                if (b.title > a.title) return -1;
                return 0;
              });
    
        break;
        ////
        case 'unsortBooks':
            newState = [...state].sort((a, b) => (a.row - b.row))
            
        break;
             
        default:
            newState = [...state]
    }


    return newState;
}

export default booksReducer;