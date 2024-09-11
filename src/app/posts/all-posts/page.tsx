import React from 'react';

const Page: React.FC = () => {
    // TODO: replace fake data with real data from prisma
    return (
        <div className="bg-black-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mt-8">All Posts</h1>
            <p className="text-lg text-center mt-4">This Page Shows All Posts</p>
        </div>
    );
};

export default Page;