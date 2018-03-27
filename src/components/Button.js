import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Button = (props) => (
    <div className="button-container">
        <RaisedButton 
            label="Show a random card !" 
            primary={true}
            className="btn"
            onClick={props.handleRandomCard}
        />
    </div>
);

export default Button;