import { CHANGE_MESSAGE, CHANGE_RETWEET, CHANGE_LIKE, ADD_POST } from "./types";
import store from "./store";

const initialStore = [
  {
    id: 3,
    name: "Anakin Skywalker",
    avatar: "https://github.com/akylik/hw18-react2/blob/gh-pages/img/skywalker-ava.jpg?raw=true",
    nickname: "@anakin-skywalker",
    date: "14 mar.",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    message: 482,
    messageIsPressed: false,
    reTweet: 146,
    reTweetIsPressed: false,
    like: 529,
    likeIsPressed: false,
  },
];

function reducer (store = initialStore, action) {
  switch(action.type) {
    case ADD_POST: {
      console.log([...store, {...action.payload}]);
      return [{...action.payload}, ...store];
    }
  }
  return store;
}

export default reducer;
