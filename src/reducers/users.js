import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_QUESTION_ANSWER_TO_USER } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            const { questionId, userId } = action;
            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    questions: state[userId].questions.concat([questionId])
                }

            }
        case ADD_QUESTION_ANSWER_TO_USER:
            const { _questionId, _userId, option } = action;
            return {
                ...state,
                [_userId]: {
                    ...state[_userId],
                    answers: {
                        ...state[_userId].answers,
                        [_questionId]: option
                    }
                }
            }
        default:
            return state
    }
}