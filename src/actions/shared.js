import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from 'react-redux-loading'

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
