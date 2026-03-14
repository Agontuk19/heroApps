import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstallApp, uninstallFromDB } from '../../utility/addToDB';
import InstallApp from '../../components/InstallApp/InstallApp';


const InstallApps = () => {
    const [installApps, setInstallApps] = useState([]);
    const allApps = useLoaderData();

    useEffect(() => {
        const storedApps = getInstallApp();
        const storedAppsInt = storedApps.map(id => parseInt(id));
        const installedApps = allApps.filter(app => storedAppsInt.includes(app.id));
        setInstallApps(installedApps);
    }, [allApps])

    return (
        <div className='min-h-full pt-7 pb-10 md:py-15 flex flex-col space-y-1 px-5 md:px-25'>
            <h2 className='font-bold text-4xl text-center '>Your Installed Apps</h2>
            <p className='text-[0.9rem] px-8 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='pt-3'>
                {
                    installApps.map(app =>
                        <InstallApp key={app.id} app={app} installApps={installApps} setInstallApps={setInstallApps}></InstallApp>
                    )
                }  
            </div>
        </div>
    );
};

export default InstallApps;