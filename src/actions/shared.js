import { getInitialData } from "../utils/api";
import { receiveQuestions, addQuestionToList } from "./questions";
import { receiveUsers, addQuestionToUser } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion } from "../utils/api"

// const AUTHED_ID = 'tylermcginnis';

export function handleInitialData(AUTHED_ID = null) {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                // dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => {
                dispatch(addQuestionToList(question));
                dispatch(addQuestionToUser(question.id, authedUser));
            })
            .then(() => dispatch(hideLoading()))
    }
}