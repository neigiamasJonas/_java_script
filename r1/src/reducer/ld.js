import rand from "../Functions/randNumber";

function ld(state, action){

    const newState = [...state];

    switch(action.type) {
        
        case 'bid_dsc':
            newState.sort((a, b) => b.bid - a.bid);
        break;
////
        case 'bid_asc':
            newState.sort((a, b) => a.bid - b.bid);
        break;
////
        case 'name_asc':
            newState.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });
        break;
////
        case 'name_dsc':
            newState.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            });
        break;
////
        case 'name_asc_local':
            newState.sort((a, b) => a.name.localeCompare(b.name))
        break;
////
        case 'date_asc':
            newState.sort((a, b) => {
                if (a.date < b.date) return 1;
                if (a.date > b.date) return -1;
                return 0;
            });
        break;
////
        case 'date_dsc':
            newState.sort((a, b) => {
                const ad = new Date(a.date).toISOString()
                const bd = new Date(b.date).toISOString()

                if (ad > bd) return 1;
                if (ad < bd) return -1;
                return 0;
            });
        break;
////
        case 'random':
            newState.sort((_) => rand(0, 1) ? 1 : -1)
        break;
////
        default:
    }

    return newState
}

export default ld;

