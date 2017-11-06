import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import ResponsiveProvider from 'hsl-shared-components/lib/Utils/ResponsiveProvider';
import Theme from 'hsl-shared-components/lib/Theme';

ReactDOM.render(
	(
		<ResponsiveProvider>
			<ThemeProvider theme={Theme}>
				<App />
			</ThemeProvider>
		</ResponsiveProvider>
	),
	document.getElementById('root'));
registerServiceWorker();
