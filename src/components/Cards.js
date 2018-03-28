import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.handleSaveItem = this.handleSaveItem.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.state = {
            editMode: false, // for showing the input or hiding it
            editType: '', // title or description
        }
    }
    // get new values and send them to
    // RandomCards component to save them 
    // to state
    handleSaveItem(e) {
        e.preventDefault();
        let value = '';
        if(this.state.editType === 'title') {
            value = e.target.elements.title.value;
        }
        else if(this.state.editType === 'description') {
            value = e.target.elements.description.value;
        }
        if(value.length) {
            // send new values to RandomCards value
            this.props.handleSaveUserChanges(value, this.state.editType);
            this.setState(() => ({
                editMode: false
            }));
        }
    }
    // recognize which button clicked
    handleClickEdit(e) {
        let editType;
        if(e.currentTarget.name === 'editTitle') {
            editType = 'title';
        }
        else if(e.currentTarget.name === 'editDescription') {
            editType = 'description';
        }
        this.setState((prevState) => ({
            editMode: true,
            editType: editType
        }));
    }
    // handle cancel button
    handleClickCancel() {
        this.setState((prevState) => ({
            editMode: false,
            editType: ''
        }));
    }
    render() {
        return !!this.props.currentCard ? 
            (
                <Card className={this.props.isAnimation ? 'card bounceIn' : 'card'} id="card">
                    // Card Header
                    <CardHeader 
                        title={this.props.currentCard.title}
                        subtitle={this.props.currentCard.tag}
                        avatar={this.props.cardAvatar}
                    />
                    // Card Description
                    <CardText> 
                        {this.props.currentCard.description}
                    </CardText>
                    // Card Image or Sound
                    <CardMedia>
                        {
                            !!this.props.currentCard.image &&
                            (
                                <img src={this.props.currentCard.image} alt="" />
                            )
                        }
                        
                        {
                            !!this.props.currentCard.sound && 
                            (
                                <audio autoPlay>
                                    <source src={this.props.currentCard.sound} type="audio/mpeg" />
                                </audio>
                            )
                        }
                    </CardMedia>
                    // Card Buttons And Actions
                    {
                        this.state.editMode ?
                        (
                            // Edit Mode (input and save button)
                            <CardActions>
                                <form onSubmit={this.handleSaveItem}>
                                <TextField
                                    hintText="new title"
                                    name={this.state.editType}
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
                                    onClick={this.handleClickCancel}
                                />
                                </form>
                            </CardActions>
                        )
                        :
                        (
                            // Show Buttons
                            <CardActions>
                                <FlatButton 
                                    label="Edit Title" 
                                    primary={true}
                                    name="editTitle"
                                    onClick={this.handleClickEdit}
                                /> 
                                <FlatButton 
                                    label="Edit Description" 
                                    secondary={true}
                                    name="editDescription"
                                    onClick={this.handleClickEdit}
                                /> 
                            </CardActions>
                        )
                    }

                </Card> 
                // When no card is available
            ) : <h1>press the button to show a card.</h1>
    }
}