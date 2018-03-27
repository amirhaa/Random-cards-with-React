import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditTitle = this.handleEditTitle.bind(this);
        this.handleEditDescription = this.handleEditDescription.bind(this);
    }
    handleEditTitle() {
        alert('edit title');
    }
    handleEditDescription() {
        alert('edit description');
    }
    render() {
        return !!this.props.currentCard ? 
            (
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
                    <CardActions>
                        <FlatButton 
                            label="Edit Title" 
                            primary={true}
                            onClick={this.handleEditTitle}
                        /> 
                        <FlatButton 
                            label="Edit Description" 
                            secondary={true}
                            onClick={this.handleEditDescription}
                        /> 
                    </CardActions>
                </Card> 
            ) : <h1>press the button to show a card.</h1>
    }
}