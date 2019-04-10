import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Musicplayer from './Components/audioplayer';
import * as serviceWorker from './serviceWorker';
//import Search1 from './Components/searchedm';
//import Search3 from './Components/searchrock';
//import Search2 from './Components/searchpop';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Search1 />, document.getElementById('play-music'));
//ReactDOM.render(<Search2 />, document.getElementById('play-music'));
//ReactDOM.render(<Search3 />, document.getElementById('play-music'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
