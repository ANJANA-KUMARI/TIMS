import { SubjectActionTypes } from "../ClassMng/actions/subjectActions";


const defaultState = {
    subjectList: [

    ]
}

export const subjects = (state = defaultState, action) => {
    switch (action.type) {
        case SubjectActionTypes.ADD_SUBJECT:
            return {
                subjectList: [
                    ...state.subjectList,
                    action.payload
                ]
            }
            break;
        default:
            return state;
    }
}