import React from "react";
import Styles from '../Styles/Banner.module.css';

function Banner() {
    return (
        <header className={Styles.header}>
                <button className={Styles.options}>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>
                </button>
                <h1 className={Styles.title}>RedditEpsilon</h1>
        </header>
    );
};

export default Banner;