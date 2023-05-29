import React from 'react';
import { useParams} from "react-router-dom";
import posts from '../../data/posts.json'

function Blogpost(props) {

    const { id } = useParams()
    // finds the requested post
    const post = posts.find( post => post.id === id)
    return (
        <article>
            <h1>{ post.title }</h1>
            <p>{ post.content}</p>
            <p> { post.date }</p>
        </article>
    );
}

export default Blogpost;