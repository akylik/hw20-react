import { CHANGE_MESSAGE, CHANGE_RETWEET, CHANGE_LIKE, ADD_POST } from "./types";

const changeMessage = text => {
  return { type: CHANGE_MESSAGE, payload: text }
}

const changeReTweet = text => {
  return { type: CHANGE_RETWEET, payload: text }
}

const changeLike = text => {
  return { type: CHANGE_LIKE, payload: text }
}

const addPost = obj => {
  return { type: ADD_POST, payload: obj }
}

export { changeMessage, changeReTweet, changeLike, addPost };
