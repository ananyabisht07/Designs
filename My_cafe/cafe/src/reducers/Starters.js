import { STARTERS_DISHES1, STARTERS_DISHES2 } from '../shared/Starters'

const initState = {
    starters1: STARTERS_DISHES1,
    starters2:STARTERS_DISHES2
}

const Starters = (state=initState, action) => {
    return state;
}

export default Starters;