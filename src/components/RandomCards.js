import React from 'react';
import Cards from './Cards';

export default class RandomCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Cards />
            </div>
        );
    }
}