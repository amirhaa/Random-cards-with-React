import React from 'react';
import { CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const CardEditPart = (props) => (
    <CardActions>
        <form onSubmit={props.handleSaveItem}>
        <TextField
            hintText="new title"
            name={props.editType}
            fullWidth={true}
        />
        <br />
        <FlatButton 
            label="Save" 
            primary={true}
            type="submit"
        /> 
        <FlatButton 
            label="Cancel" 
            secondary={true}
            onClick={props.handleClickCancel}
        />
        </form>
    </CardActions>
);

export default CardEditPart;