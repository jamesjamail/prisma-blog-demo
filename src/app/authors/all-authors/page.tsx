import React from 'react';
import './all-authors.css';


const AllAuthorsPage: React.FC = () => {
    // TODO: replace fake data with real data from prisma
    const authors = [
        { name: 'Author 1', id: 1 },
        { name: 'Author 2', id: 2 },
        { name: 'Author 3', id: 3 },
    ];

    return (
        <div className={"container"}>
            <h1>All Authors</h1>
            <ul>
                {authors.map((author) => (
                    <li key={author.id}>{author.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AllAuthorsPage;