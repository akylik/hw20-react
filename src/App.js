import React, { useState } from 'react';
import CreatePost from './component/createPost/CreatePost';
import Post from './component/post/post';
import './component/post/post.css';
import {Provider} from 'react-redux';
import store from './redux/store';

function useForceUpdate(){
  const [value, setValue] = useState(0); 
  return () => setValue(value => ++value); 
}

function App() {
  const forceUpdate = useForceUpdate();

  store.subscribe(() => {
    forceUpdate();
  });

  return (
    <Provider store={store}>
      <div>
        <div>
          <CreatePost />
        </div>
        <div>
          { store.getState().map((post, index) => <Post {...post} key={index} /> )}
        </div>
      </div>
    </Provider>
  );
}

export default App;

