import randColor from "../Functions/randColor";
import rand from "../Functions/randNumber";

function randListReducer(state, action) {

    let newState;

    switch(action.type){
        case 'listas':
            // newState = {number:[...Array(10)].map((_, i) => ('' + rand(0, 9999)).padStart(4, 0))};

            newState = [...Array(10)].map((_, i) => ({
                number: ('' + rand(0, 9999)).padStart(4, 0), 
                color: randColor(), 
                show: true, 
                row: i
            }));

            // FOR CIKLAS

            // newState = [];
            // for (let i = 0; i < 10; i++){
            //     newState.push(('' + rand(0, 9999)).padStart(4, 0))
            // }
            break;
        
    ////        
        case 'sort':
            
            // newState = [...state].sort((a.number, b.number) => (b.number - a.number))
            newState = [...state].sort((a, b) => {
                if(a.number > b.number) return -1;
                if(a.number < b.number) return 1;
                return 0;
            })
            break;
    
    ////
        case 'filterH':
            newState = state.map(v => v.number > 5000 ? {...v, show: true} : {...v, show: false})   // show&row show:true/false

            break;

    ////
        case 'filterL':
            newState = state.map(v => v.number < 4000? {...v, show: true} : {...v, show: false})

            break;

    ////
        case 'filterReset':
            newState = state.map(v => ({...v, show: true}))

            break;
      
    ////
        case 'sortReset':
            newState = [...state].sort((a, b) => (a.row - b.row))


            break;

    ////
        case 'addNumber':
            newState = [...state, {
                number: ('' + rand(0, 9999)).padStart(4, 0), 
                color: '#000000', 
                show: true, 
                row: state.length
            }]

            break;
    ////
        case 'delKv':
            // newState = state.filter(v => v.number !== action.payload)
            // newState = state.map(v => {
            //     if(v.number === action.payload){
            //         v.show = false
            //     }
            // return v})

            newState = state.map(v => v.number === action.payload ? {...v, show: false} : {...v});
            

            break;
    ////
        case 'range':
            newState = state.map(v => v.number > action.payload ? {...v, show: true} : {...v, show: false})

            break;


        default:
            newState = [...state];
    }

    return newState;
}

export default randListReducer;


// SHOW & ROW

// show:true/false
// row: i(index)