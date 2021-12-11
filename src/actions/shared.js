import { showLoading, hideLoading } from 'react-redux-loading'

import { receiveQuestions, addQuestionToList, addQuestionAnswerToList } from "./questions";
import { receiveUsers, addQuestionToUser, addQuestionAnswerToUser } from "./users";

import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api"


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
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

export function handleAddQuestionAnswer(questionId, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return saveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer: option
        })
            .then(() => {
                dispatch(addQuestionAnswerToList(questionId, authedUser, option));
                dispatch(addQuestionAnswerToUser(questionId, authedUser, option));
            })
            .then(() => dispatch(hideLoading()))
    }
}