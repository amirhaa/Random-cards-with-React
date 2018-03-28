import React from 'react';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CardButtons from './CardButtons';
import CardEditPart from './CardEditPart';

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
        return !!this.props.currentCard ? (
                <Card className={this.props.isAnimation ? 'card bounceIn' : 'card'} id="card">
                    <CardHeader 
                        title={this.props.currentCard.title}
                        subtitle={this.props.currentCard.tag}
                        avatar={this.props.cardAvatar}
                    />
                    <CardText> 
                        {this.props.currentCard.description}
                    </CardText>
                    <CardMedia>
                        { 
                            !!this.props.currentCard.image && (
                                <img src={this.props.currentCard.image} />
                            )
                        }
                        {
                            !!this.props.currentCard.sound && (
                                <audio autoPlay>
                                    <source src={this.props.currentCard.sound} type="audio/mpeg" />
                                </audio>
                            )
                        }
                    </CardMedia>
                    // Card Buttons And Actions
                    {
                        this.state.editMode ? (
                            <CardEditPart 
                                handleSaveItem = {this.handleSaveItem}
                                handleClickCancel = {this.handleClickCancel}
                                editType = {this.state.editType}
                            />
                        ) :
                            <CardButtons 
                                handleClickEdit = {this.handleClickEdit}
                            />
                    }
                </Card> 
                // When no card is available
            ) : <h1>press the button to show a card.</h1>
    }
}