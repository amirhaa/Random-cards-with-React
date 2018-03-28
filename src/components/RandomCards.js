import React from 'react';
import Cards from './Cards';
import Button from './Button';

export default class RandomCards extends React.Component {
    constructor(props) {
        super(props);
        this.handleAvatar = this.handleAvatar.bind(this);
        this.handleRandomCard = this.handleRandomCard.bind(this);
        this.handleSaveUserChanges = this.handleSaveUserChanges.bind(this);
        this.handleRandNum = this.handleRandNum.bind(this);
        this.state = {
            tag: '',
            cardAvatar: {
                sport: './images/sport.png',
                art: './images/art.png',
                fun: './images/fun.png'
            },
            url: 'https://static.pushe.co/challenge/json',
            cards: [],
            currentCard: undefined,
            isAnimation: false,
            randNum: undefined
        }
    }
    componentDidMount() {
        try {
            // get json file from the url
            const request = new XMLHttpRequest();
            request.open('GET', this.state.url);
            request.responseType = 'json';
            request.send();
            request.onload = () => {
                const cardsArr = request.response.cards;
                this.setState(() => ({
                    cards: cardsArr
                }));
            }
        } catch(error) {
            // can show error when server is not accessible
        }
    }
    // return card icon based on the card tag
    handleAvatar(tag) {
        switch(tag) {
            case 'sport':
                return this.state.cardAvatar.sport;
                break;
            case 'art':
                return this.state.cardAvatar.art;
                break;     
            case 'fun':
                return this.state.cardAvatar.fun;
                break; 
        }
    }
    // make a random number
    handleRandNum() {
        const randNum =  Math.floor(Math.random() * this.state.cards.length);
        if( randNum === this.state.randNum ) {
            return this.handleRandNum();
        }
        return randNum;
    }
    // for simplicity make a state current object
    // set state of current card tag
    // and check if it should have animation 
    handleRandomCard() {
        const randNum = this.handleRandNum();
        const cardObj = this.state.cards[randNum];
        this.setState((prevState) => ({
            randNum: randNum,
            currentCard: cardObj,
            tag: cardObj.tag,
            isAnimation: cardObj.code === 1,
        }));
    }
    // save new title and description to cards state
    handleSaveUserChanges(value, editType) {
        let cards = this.state.cards;
        if(editType === 'title') {
            cards[this.state.randNum]['title'] = value;
            this.setState(() => ({
                cards: cards
            }));
        }
        else if(editType === 'description') {
            cards[this.state.randNum]['description'] = value;
            this.setState(() => ({
                cards: cards
            }));
        }
    }
    render() {
        return (
            <div className="container">
                <Cards 
                    currentCard = {this.state.currentCard}
                    cardAvatar = {this.handleAvatar(this.state.tag)}
                    isAnimation = {this.state.isAnimation}
                    handleSaveUserChanges = {this.handleSaveUserChanges}
                />
                <Button 
                    handleRandomCard = {this.handleRandomCard}
                />
            </div>
        );
    }
}
