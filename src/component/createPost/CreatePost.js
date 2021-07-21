import React, {Component} from "react";
import './CreatePost.css';
import store from '../../redux/store';
import {connect, useDispatch} from 'react-redux';
import reducer from '../../redux/reducer.js';
import { changeMessage, changeReTweet, changeLike, addPost } from "../../redux/actions";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      avatar: "",
      nickname: "",
      date: "",
      content: "",
      image: "",
      message: 0,
      messageIsPressed: false,
      reTweet: 0,
      reTweetIsPressed: false,
      like: 0,
      likeIsPressed: false,
    };
  };

  avatarID = 3;
  nameDropDown = ['Dart Weider', 'Sky Walker', 'Sheev Palpatine', 'Leia Organa'];

  componentWillMount() {
    console.log('componentWillUnmount');
    this.storeUnsubscribe = store.subscribe(() => {
      this.updateData();
    });
  }

  componentDidMount() {
    this.updateData();
  };

  componentWillUnmount() {
    this.storeUnsubscribe();
    this.setState({name: this.nameDropDown[0]});
    this.setState({nickname: ''});
    this.setState({content: ''});
    this.setState({image: ''});
  };

  updateData = () => {
    const getRnd = (min, max) => { return (Math.round(Math.random() * (max - min) + min)) };
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const strMonth = ['jan.', 'feb.', 'mar.', 'apr.', 'may', 'jun.', 'jul.', 'aug.', 'sep.', 'oct.', 'nov.', 'dec.'];
    const st = store.getState();
    this.setState({id: st.length + 1});
    this.setState({avatar: "https://github.com/akylik/hw18-react2/blob/gh-pages/img/dartWeider-ava.jpg?raw=true"});
    this.setState({date: day + ' ' + strMonth[month]});
    };

  handleAvatar = async (e) => {
    if (this.avatarID >= 3) this.avatarID = 0;
      else this.avatarID += 1;
    const avasURL = [
      "https://github.com/akylik/hw18-react2/blob/gh-pages/img/skywalker-ava.jpg?raw=true",
      "https://github.com/akylik/hw18-react2/blob/gh-pages/img/sheevPalpatine-ava.jpg?raw=true",
      "https://github.com/akylik/hw18-react2/blob/gh-pages/img/leiaOrgana-ava.jpg?raw=true",
      "https://github.com/akylik/hw18-react2/blob/gh-pages/img/dartWeider-ava.jpg?raw=true",
    ];
    await this.setState({avatar: avasURL[this.avatarID]});
  };

  handleDropDown = async (e) => {
    this.setState({name: e.target.value});
  }

  render() {
    const path = 'https://github.com/akylik/hw18-react2/blob/gh-pages/img/';
    return (
      <div className={"background"}>
        <div className="create_card">
          <div className="create_card_header">
            <span className="create_card_header_avatar" onClick={this.handleAvatar}>
              <img src={this.state.avatar} />
            </span>
            <span className="create_card_header_textBox">
              <div className="create_card_header_textBox_name">
                <form id="add_post">
                  <select className="create_hero_name"
                          value={this.state.name}
                          onChange={this.handleDropDown}>
                    <option value={this.nameDropDown[0]}>Dart Weider</option>
                    <option value={this.nameDropDown[1]}>Sky Walker</option>
                    <option value={this.nameDropDown[2]}>Sheev Palpatine</option>
                    <option value={this.nameDropDown[3]}>Leia Organa</option>
                  </select>
                  <img src={`${path}` + "star-active.png?raw=true"} className="star-active" alt="Active Button"/>
                  <span>&nbsp; </span>
                  <input className="create_hero_nick"
                         placeholder="Nickname..."
                         defaultValue={this.state.nickname}
                         onChange={e => this.state.nickname = e.target.value}
                  >
                  </input>
                  &bull; {this.state.date}
                  <input className="create_hero_text"
                         placeholder="Text..."
                         onChange={e => this.state.content = e.target.value}
                  >
                  </input>
                  <input className="create_card_url"
                         placeholder="Picture URL..."
                         onChange={e => this.state.image = e.target.value}
                  >
                  </input>
                </form>
              </div>
              <div className="create_card_header_textBox_status">
                <span></span>
              </div>
            </span>
          </div>

          <div className="create_card_center">
          </div>

          <div className="create_card_footer">
          </div>
        </div>

        <div>
            <button className="create_publish_btn"
                    type="submit"
                    onClick={async () => { await this.setState({nickname: '@'+this.state.nickname})
                                           await this.props.addPost(this.state)
                                           await this.setState({nickname: ''})
                                           await this.setState({name: this.nameDropDown[0]})
                                           await this.setState({image: ''})
                                           document.getElementById("add_post").reset()
                    }}
            >
              Publish
            </button>
        </div>
      </div>
    )
  }
}

const getStateToProps = (state) => {
  console.log(state);
  return {
 //   message: state.message,
  }
}

const getDispatchToProps = (dispatch) => {
  return {
    addPost: (arg) => dispatch(addPost(arg)),
  }
}

export default connect(getStateToProps, getDispatchToProps)(CreatePost);
