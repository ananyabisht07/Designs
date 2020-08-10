import { STARTERS_DISHES } from '../shared/Starters'
import { MAIN_COURSE } from '../shared/MainCourse';

const initState = {
    starters: STARTERS_DISHES,
    maincourse: MAIN_COURSE
}

const Reducers = (state=initState, action) => {
    return state;
}

export default Reducers;