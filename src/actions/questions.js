export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestionToList(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addQuestionAnswerToList(_questionId, _userId, option) {
    return {
        type: ADD_QUESTION_ANSWER,
        _questionId,
        _userId,
        option
    }
}