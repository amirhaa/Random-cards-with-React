import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RandomCards from './components/RandomCards';
import './styles/styles.scss';

const App = () => (
    <MuiThemeProvider>
        <RandomCards />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);