import { STARTERS_DISHES } from '../shared/Starters'
import { MAIN_COURSE } from '../shared/MainCourse';
import { DESSRETS } from '../shared/Desserts'

const initState = {
    starters: STARTERS_DISHES,
    maincourse: MAIN_COURSE,
    desserts: DESSRETS
}

const Reducers = (state=initState, action) => {
    return state;
}

export default Reducers;