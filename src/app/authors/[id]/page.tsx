import React from 'react';
import './author.css';

const AuthorPage: React.FC = () => {
    // TODO: replace fake data with real data from prisma
    return (
        <div className='container'>
            <h1>Author Name: John Doe</h1>
            <p>Member Since: January 2022</p>
            <p>Type: Fiction</p>
            <p>Hometown: New York City</p>
            <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris euismod, aliquam nunc id, ultricies nunc. Nulla facilisi. Sed euismod, nisl id tincidunt lacinia, nunc nunc tincidunt justo, at lacinia eros nunc id nunc.</p>
        </div>
    );
};

export default AuthorPage;