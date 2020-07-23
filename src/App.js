import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Navigation, Footer } from './components'

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Home} />
      </Switch>
      <Footer />
		</BrowserRouter>
	);
}

export default App;
