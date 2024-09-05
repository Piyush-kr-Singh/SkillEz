import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../public/blogdata.js';

const AllArticlesPresent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBlogData, setFilteredBlogData] = useState(blogData);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredData = blogData.filter(ele =>
            ele.topic.toLowerCase().includes(query)
        );
        setFilteredBlogData(filteredData);
    };

    return (
        <section className='bg-[#EEF5FF] dark:bg-slate-900 dark:text-white duration-300 pt-5'>
            <div className='max-w-[1000px] pl-10'>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                    <div className="flex justify-start mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="p-7  mr-2 px-2 py-1 border border-gray-300 rounded-sm w-[40%]"
                        />
                    </div>
                    {filteredBlogData.map((ele, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="p-8 dark:bg-slate-700 bg-[#ffffff]">
                                <h2 className="text-4xl font-extrabold mb-2 font-monts">{ele.topic}</h2>
                                <div className='flex items-center gap-2 pt-2'>
                                    <div className='flex items-center gap-2'>
                                        <img src={ele.thumbnailImageOfUser} alt="thumbnail image" className='h-10 w-10 rounded-full' />
                                        <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">{ele.writtenBy}</p>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{ele.createdAt}</p>
                                </div>

                                <h1 className='text-[20px] text-gray-500 dark:text-gray-400 pt-2 text-karla font-normal'>{ele.smallDescription}</h1>

                                <div className='pt-4 w-[20%]'>
                                    <button onClick={handleClick}>
                                        <Link to={`/blog/${ele.topic.replace(/\s+/g, "-")}`} className="block w-full text-center bg-purple-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-purple-600">
                                            Read More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllArticlesPresent;
