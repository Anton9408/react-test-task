import React, {Component} from 'react';
import FormRegistration from '../FormRegistration/FormRegistration';
import './App.post.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<h1 className="app-title">Тестовое задание</h1>
				</header>
				<FormRegistration/>
			</div>
		);
	}
}

export default App;
