import React from 'react';
import Cards from './Cards';
import Button from './Button';

export default class RandomCards extends React.Component {
    constructor(props) {
        super(props);
        this.handleAvatar = this.handleAvatar.bind(this);
        this.handleRandomCard = this.handleRandomCard.bind(this);
        this.state = {
            tag: '',
            cardAvatar: {
                sport: '/images/sport.png',
                art: '/images/art.png',
                fun: 'images/fun.png'
            },
            url: 'http://static.pushe.co/challenge/json',
            cards: [],
            currentCard: undefined,
            isAnimation: false
        }
    }
    componentDidMount() {
        try {
            const request = new XMLHttpRequest();
            request.open('GET', this.state.url);
            request.responseType = 'json';
            request.send();
            request.onload = () => {
                const cardsArr = request.response.cards;
                this.setState(() => ({
                    cards: cardsArr
                }));
                const newCardsArr = cardsArr.map((obj) => JSON.stringify(obj));
                // localStorage.setItem('cards', newCardsArr);
            }
        } catch(error) {

        }
    }
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
    handleRandomCard() {
        const randNum = Math.floor(Math.random() * this.state.cards.length);
        const cardObj = this.state.cards[randNum];
        this.setState((prevState) => ({
            currentCard: cardObj,
            tag: cardObj.tag,
            code: cardObj.code,
            isAnimation: cardObj.code === 1
        }));
    }
    render() {
        return (
            <div className="container">
                <Cards 
                    currentCard = {this.state.currentCard}
                    cardAvatar = {this.handleAvatar(this.state.tag)}
                    isAnimation = {this.state.isAnimation}
                />
                <Button 
                    handleRandomCard = {this.handleRandomCard}
                />
            </div>
        );
    }
}
