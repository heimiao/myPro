import React, {
	Component
} from 'react';

import logo from './logo.svg';

import Hello, {
	Toggle,
	List,
	Form,
	Calculator,
	SignUpDialog
} from './component/es6';

import  SwiperTest from './component/swiper';

import './App.css';

class App extends Component {
	render() {
		return(
			<div className="App">
        <div className="App-intro">
   				<Hello /> 
   				<Toggle />
   				<List/>	
   				<Form/>
   				<SignUpDialog/>
   				<Calculator/>
   				
   				<SwiperTest/>
        </div>
      </div>
		);
	}
}

export default App;