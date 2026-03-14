import React, { Suspense, use } from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const appsPromise = fetch('/apps.json')
    .then(res => res.json())

const TrendingApps = () => {
    const allApps = use(appsPromise);
    const trendingApps = allApps.filter(app => app.isPopular === true);
    return (
        <div className='bg-[#f1f1f1] py-10 md:py-15 flex flex-col justify-center items-center space-y-1'>
            <h2 className='font-bold text-4xl'>Trending Apps</h2>
            <p className='text-[0.9rem] px-8 text-center'>Explore All Trending Apps on the Market developed by us.</p>
            <Suspense>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-5 md:px-10 py-4 items-stretch'>
                    {
                        trendingApps.map(app => {
                            return <App key={app.id} app={app}></App>
                        })
                    }
                </div>
            </Suspense>
            <Link to={'/allApps'} onClick={() => window.scrollTo(0,0)}>
                <button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white inter px-3 py-2 rounded-md mt-2'>
                    Show All
                </button>
            </Link>
        </div>
    );
};

export default TrendingApps;