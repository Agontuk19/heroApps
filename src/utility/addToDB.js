export const getInstallApp = () => {
    const storedAppString = localStorage.getItem('appList');
    if(storedAppString) {
        const storedApp = JSON.parse(storedAppString);
        return storedApp;
    }
    else {
        return [];
    }
}
export const addToInstallDB = (id) => {
    const storedApp = getInstallApp();
    if(storedApp.includes(id)) {
        return;
    }
    else {
        storedApp.push(id);
        const data = JSON.stringify(storedApp);
        localStorage.setItem('appList', data);
    }
}
export const uninstallFromDB = (id) => {
    const storedApp = getInstallApp();
    const storedAppUpdate = storedApp.filter(appId => appId !== String(id));
    const data = JSON.stringify(storedAppUpdate);
    localStorage.setItem('appList', data);
    console.log('After removal:', getInstallApp());
}