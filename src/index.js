import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
//import Normalize from 'normalize.css';
import TetrisGame from './components/TetrisGame';
import TetrisApp from './reducers/index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = createStore(
	TetrisApp,
	applyMiddleware(ReduxThunk)
);

const App = () => (
	<MuiThemeProvider>
	<Provider store={store}>
		<div>
			<TetrisGame />
		</div>
	</Provider>
	</MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('react-app'));