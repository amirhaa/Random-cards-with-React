import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardButtons = (props) => (
    <CardActions>
        <FlatButton 
            label="Edit Title" 
            primary={true}
            name="editTitle"
            onClick={props.handleClickEdit}
        /> 
        <FlatButton 
            label="Edit Description" 
            secondary={true}
            name="editDescription"
            onClick={props.handleClickEdit}
        /> 
    </CardActions>
);

export default CardButtons;