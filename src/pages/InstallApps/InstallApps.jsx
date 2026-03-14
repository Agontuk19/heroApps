import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstallApp, uninstallFromDB } from '../../utility/addToDB';
import InstallApp from '../../components/InstallApp/InstallApp';


const InstallApps = () => {
    const [installApps, setInstallApps] = useState([]);
    const allApps = useLoaderData();
    const [sort, setSort] = useState('')

    useEffect(() => {
        const storedApps = getInstallApp();
        const storedAppsInt = storedApps.map(id => parseInt(id));
        const installedApps = allApps.filter(app => storedAppsInt.includes(app.id));
        setInstallApps(installedApps);
    }, [allApps])

    const handleSort = (type) => {
        setSort(type);
        if (type === 'Rating') {
            const sortedByRating = [...installApps.sort((a, b) => a.ratingAvg - b.ratingAvg)]
            setInstallApps(sortedByRating);
        }
        else if (type === 'Size') {
            const sortedBySize = [...installApps.sort((a, b) => a.size - b.size)]
            setInstallApps(sortedBySize);
        }
    }

    return (
        <div className='min-h-full pt-7 pb-10 md:py-12 flex flex-col space-y-1 px-5 md:px-25'>
            <h2 className='font-bold text-4xl text-center '>Your Installed Apps</h2>
            <p className='text-[0.9rem] px-8 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center pt-2'>
                <div className='flex gap-1 font-semibold'>
                    <p>({installApps.length})</p>
                    <p>App found</p>
                </div>
                {
                    installApps.length > 0
                        ? <div className="dropdown dropdown-left text-gray-600">
                            <div tabindex="0" role="button" class="btn px-3 py-0 rounded-md border-gray-500">{sort ? `Sorted By (${sort})` : "Sort By"}</div>
                            <ul tabindex="-1" class="dropdown-content menu bg-white rounded-md z-1 w-52 p-2 shadow-sm">
                                <li><a onClick={() => handleSort('Rating')}>Rating</a></li>
                                <li><a onClick={() => handleSort('Size')}>Size</a></li>
                            </ul>
                        </div>
                        : ""
                }
            </div>
            <div className='pt-1'>
                {
                    installApps.length > 0
                        ? installApps.map(app =>
                            <InstallApp key={app.id} app={app} installApps={installApps} setInstallApps={setInstallApps}></InstallApp>
                        )
                        : <div className='flex justify-center items-center'>
                            <h1 className='text-center text-gray-500 text-2xl md:text-6xl lg:text-8xl xl:text-9xl py-20 md:py-15 lg:py-20 xl:py-30'>No Installed App Found!</h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default InstallApps;