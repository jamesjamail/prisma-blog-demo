import Link from 'next/link';
import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-black-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mt-8">Prisma Blog Demo</h1>
            <p className="text-lg text-center mt-4">Welcome to the Prisma Blog Demo homepage!</p>
            <p className="text-lg text-center mt-2">We'll use a basic blog to demonstrate how Prisma works</p>
            <hr style={{ margin: '2rem 0' }} />
            <h2>This project features 4 straight foward pages:</h2>
            <br />
            <ul>
                <li><Link href={'/posts/all-posts'}><h2>All Posts</h2></Link></li>
                <li><Link href={'/posts/xyz'}><h2>Individual Post</h2></Link></li>
                <li><Link href={'/authors/all-authors'}><h2>All Authors</h2></Link></li>
                <li><Link href={'/authors/all-authors'}><h2>Individual Author</h2></Link></li>
            </ul>
        </div>
    );
};

export default Page;