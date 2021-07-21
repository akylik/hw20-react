import React, {Component} from "react";
import {connect, useDispatch} from 'react-redux';
import reducer from '../../redux/reducer.js';
import store from '../../redux/store';
import { changeMessage, changeReTweet, changeLike, addPost } from "../../redux/actions";


const Post = (props) => {
  const path = 'https://github.com/akylik/hw18-react2/blob/gh-pages/img/';
  return (
    <div className={"background"}>
      <div className="card">
        <div className="card__header">
          <span className="card__header_avatar">
            <img src={props.avatar} />
          </span>
          <span className="card__header__textBox">
            <div className="card__header__textBox_name">
              <span className="bold">{props.name}</span>
              <img src={`${path}`+"star-active.png?raw=true"} className="star-active" alt="Active Button" />
              <span className="gray"><a>{props.nickname}</a> &bull; {props.date}</span>
            </div>
            <div className="card__header__textBox_status">
              <span>{props.content}</span>
            </div>
          </span>
          <span className="card__header__textBox_dw_Arrow"><img src={`${path}`+"down-arrow.png?raw=true"} width="14px" alt="Down Arrow"/></span>
        </div>

        <div className="card__center">
          <img src={props.image} />
        </div>

        <div className="card__footer">
        <span>
          <a src="#"><img src={`${path}`+"tw-message.png?raw=true"} alt="Message Icon"/><span className="icon2text">{props.message}</span></a>
        </span>
        <span className="leftTab">
          <a src="#"><img src={`${path}`+"tw-retweet.png?raw=true"} alt="Retweet Icon"/><span className="icon2text">{props.reTweet}</span></a>
        </span>
        <span className="leftTab" onClick={(e) => props.changeLike(e.target)}>
          <a src="#"><img src={`${path}`+"tw-like.png?raw=true"} alt="Like Icon"/>
          <span className="icon2text">
            {props.like}
          </span>
          </a>
        </span>
        <span className="leftTab">
          <a src="#"><img src={`${path}`+"tw-share.png?raw=true"} alt="Share Icon" /></a>
        </span>
        </div>
      </div>
    </div>
  )
}

const getStateToProps = (state) => {
  return {
    // message: state.message,
    // reTweet: state.reTweet,
    // like: state.like,
  }
}

const getDispatchToProps = (dispatch) => {
  return {
    changeMessage: e => dispatch(changeMessage(e)),
    changeReTweet: e => dispatch(changeReTweet(e)),
    changeLike: e => dispatch(changeLike(e)),
  }
}

export default connect(getStateToProps, getDispatchToProps)(Post);
