import React from 'react';
import style from '../styles/styles.css';
import { loadMenu } from '../actions/index.js';

class Menu extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadMenu());
    }
    render() {
        return (
            <div>
                <h1
            </div>
        )
    }
}

export default Menu;