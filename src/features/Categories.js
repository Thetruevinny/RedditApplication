import React from "react";
import { selectTopics, select, selectTopic, categories } from "../Components/Topics/topicsSlice";
import { useSelector, useDispatch } from "react-redux";
import Topics from "../Components/Topics/Topics";
import Styles from '../Styles/Categories.module.css';

function Categories() {
    // Pulls list of category names from store
    const names = useSelector(selectTopics);
    const dispatch = useDispatch();
    const currentTopic = useSelector(selectTopic);
    
    // Handles the Button Click for each Category
    function onClickHandler(event) {
        const topic = event.target.value;
        dispatch(select(topic));
    }

    return (
        <div className={Styles.topicList}>
            {names.map(
                topic => <Topics name={topic} onClickHandler={onClickHandler} selected={currentTopic} link={categories[topic]}/>
            )}
        </div>
    );
}

export default Categories;