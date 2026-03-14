import React, { Suspense, use, useState } from 'react';
import App from '../../components/App/App';
import { FaSearch } from "react-icons/fa";

const appsPromise = fetch('/apps.json')
    .then(res => res.json())

const AllApps = () => {
    const [search, setSearch] = useState('');
    const allApps = use(appsPromise);
    const searchedApps = allApps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );
    const searchField = (e) => {
        const searchedString = e.target.value;
        setSearch(searchedString);
    }

    return (
        <div className='bg-[#f1f1f1] pt-7 pb-10 md:py-15 flex flex-col justify-center space-y-1 px-5 md:px-25'>
            <h2 className='font-bold text-4xl text-center '>Our All Applications</h2>
            <p className='text-[0.9rem] px-8 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-1 md:gap-10 pt-4'>
                <div className='flex gap-1 font-semibold'>
                    <p>({searchedApps.length})</p>
                    <p>Apps Found</p>
                </div>
                <div className='flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1'>
                    <FaSearch className='text-gray-400'></FaSearch>
                    <input type="text" onChange={(e) => searchField(e)} placeholder='Search Apps' />
                </div>
            </div>
            <Suspense>
                {
                    searchedApps.length > 0
                        ? <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-8 pt-4 items-stretch'>
                            {
                                searchedApps.map(app => {
                                    return <App key={app.id} app={app}></App>
                                })
                            }
                        </div>
                        : <div className='flex justify-center items-center'>
                            <h1 className='text-center text-gray-500 text-2xl md:text-6xl lg:text-8xl xl:text-9xl py-20 md:py-15 lg:py-20 xl:py-30'>No Apps Found!</h1>
                        </div>
                }

            </Suspense>
        </div>
    );
};

export default AllApps;