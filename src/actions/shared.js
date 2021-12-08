import { getInitialData } from "../utils/api";
// import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_ID = 'tylermcginnis';

export function handleInitialData(AUTHED_ID = null) {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                // dispatch(receiveTweets(questions));
                dispatch(receiveUsers(users));
                // dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
}

export function receiveUsersToLogin() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users }) => {
                dispatch(receiveUsers(users));
            })
    }
}
