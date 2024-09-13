import React from "react";
import flame from '../imgs/Flame.png';
import Card from '../Components/Card/Card';
import Styles from '../Styles/CardList.module.css';

function CardList() {
    const cards = [{
        votes: '72k',
        img: flame,
        description: 'What an amzing flame this is.',
        author: 'Jesus',
        time: '7',
        comments: '789'
    }];

    return (
        <div className={Styles.list} name='commentList'>
            {cards.map(card => <Card info={card} />)}
        </div >
    );
}

export default CardList;