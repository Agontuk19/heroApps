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