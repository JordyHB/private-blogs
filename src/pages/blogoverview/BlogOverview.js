import React from 'react';
import { Link } from "react-router-dom";
import posts from '../../data/posts.json'



function BlogOverview({}) {

    return (
        <>
            <h1>Post Overview</h1>
            <h3>Total posts: {posts.length}</h3>
            {/*maps over all the post objects adding a key for React magic*/}
            <ul>
                { posts.map(post => {
                return <li key={`${post.id}`}>
                    <Link
                        to={`/blogposts/${post.id}`}
                    >
                        {post.title}
                    </Link>
                </li>
                }
            )}
            </ul>
        </>
    );
}

export default BlogOverview;