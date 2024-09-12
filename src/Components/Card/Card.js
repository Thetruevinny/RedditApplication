import React from "react";
import upVote from '../../imgs/Votes/upVote.png';
import downVote from '../../imgs/Votes/downVote.png';
import commentsImg from '../../imgs/Comments.png';
import Styles from '../../Styles/Card.module.css';

function Card({ info }) {
    const {votes, img, description, author, time, comments} = info;
    
    return(
        <div name='comment' className={Styles.comment}>
            <div name='votes' className={Styles.votes}>
                <img src={upVote} alt="Up arrow" />
                <p>{votes}</p>
                <img src={downVote} alt="Down arrow" />
            </div>
            <div name='Content' className={Styles.content}>
                <img src={img} alt='Flame' />
                <p>{description}</p>
                <hr></hr>
                <div name='user interactions' className={Styles.info}>
                    <p>Posted by: {author}</p>
                    <p>{time}hrs ago</p>
                    <div name='comments'>
                        <img src={commentsImg} alt="comment icon" />
                        <p>{comments}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;