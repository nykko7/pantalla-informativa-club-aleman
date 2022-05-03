// Native
import { join } from 'path';
import { format } from 'url';

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent } from 'electron';
import isDev from 'electron-is-dev';
import prepareNext from 'electron-next';

// Prepare the renderer once the app is ready
app.on('ready', async () => {
	await prepareNext('./');

	const mainWindow = new BrowserWindow({
		autoHideMenuBar: true,
		width: 1920,
		height: 1080,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: false,
			preload: join(__dirname, 'preload.js'),
		},
	});

	const url = isDev
		? 'http://localhost:8000/'
		: format({
				pathname: join(__dirname, '../out/index.html'),
				protocol: 'file:',
				slashes: true,
		  });

	mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event: IpcMainEvent, message: any) => {
	console.log(message);
	setTimeout(() => event.sender.send('message', 'hi from electron'), 500);
});
