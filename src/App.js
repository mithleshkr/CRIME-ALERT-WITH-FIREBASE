import React from 'react'
import SignInOutContainer from './combine'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Timeline from './screens/Timeline';



function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path='/' element={<SignInOutContainer />} />
					<Route path='/home' element={<Dashboard />} />
					<Route path='/timeline' element={<Timeline />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
