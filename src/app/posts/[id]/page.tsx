import React from 'react';
import './post.css';

const Post: React.FC = () => {
    return (
        // TODO: replace fake data with real data from prisma
        <div className="container">
            <div className="post">
                <h1 className="title">Example Blog Post</h1>
                <p className="author">Author: John Doe</p>
                <p className="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    consectetur, nunc id aliquam tincidunt, nunc nunc tincidunt urna, id
                    lacinia enim nunc id nunc. Sed auctor, nunc id aliquam tincidunt, nunc
                    nunc tincidunt urna, id lacinia enim nunc id nunc.
                </p>
                <p className="category">Category: Technology</p>
                <p className="metadata">
                    Created at: 2022-01-01 | Updated at: 2022-01-02
                </p>
            </div>
        </div>
    );
};

export default Post;