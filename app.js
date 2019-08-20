const btnW2m = document.getElementById('btnW2m');
btnW2m.addEventListener('click', (evt) => {
    // Windows用のパスをMac用に変換
    const elMPath = document.getElementById('txtMPath');
    let txtWPath = document.getElementById('txtWPath').value;

    if (txtWPath) {
        txtWPath = txtWPath.replace(new RegExp(/\\/, 'g'), '/');
        txtWPath = txtWPath.replace(new RegExp(/:/), '');

        const txtMntPath = document.getElementById('txtMntPath').value + '/';

        elMPath.value = txtMntPath + txtWPath;
    }
});

const btnM2w = document.getElementById('btnM2w');
btnM2w.addEventListener('click', (evt) => {
    // Mac用のパスをWindows用に変換
    const elWPath = document.getElementById('txtWPath');
    let txtMPath = document.getElementById('txtMPath').value;

    if (txtMPath) {
        const txtMntPath = document.getElementById('txtMntPath').value + '/';

        txtMPath = txtMPath.replace(new RegExp(txtMntPath), '');
        txtMPath = txtMPath.replace(new RegExp('/', 'g'), '\\');

        const driveName = txtMPath.substr(0, 1);
        txtMPath = txtMPath.replace(driveName, driveName + ':');

        elWPath.value = txtMPath;
    }
});

const {ipcRenderer} = require('electron');
window.addEventListener('load', function () {
    ipcRenderer.send('async-message', 'homeDir');
});

ipcRenderer.on('replyHomeDir', function (event, arg) {
    const txtMntPath = arg + '/mnt';
    document.getElementById('txtMntPath').value = txtMntPath;
});
