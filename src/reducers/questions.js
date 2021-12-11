import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id]: question
            }
        case ADD_QUESTION_ANSWER:
            const { _questionId, _userId, option } = action;
            return {
                ...state,
                [_questionId]: {
                    ...state[_questionId],
                    optionOne: {
                        ...state[_questionId].optionOne,
                        votes: option === 'optionOne' ? state[_questionId].optionOne.votes.concat([_userId]) : state[_questionId].optionOne.votes
                    },
                    optionTwo: {
                        ...state[_questionId].optionTwo,
                        votes: option === 'optionTwo' ? state[_questionId].optionTwo.votes.concat([_userId]) : state[_questionId].optionTwo.votes
                    }
                }
            }
        default:
            return state
    }
}