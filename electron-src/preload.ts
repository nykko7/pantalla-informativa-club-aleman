import { ipcRenderer, IpcRenderer } from 'electron';

// declare global {
// 	namespace NodeJS {
// 		interface Global {
// 			ipcRenderer: IpcRenderer;
// 		}
// 	}
// }

declare module global {
	var ipcRenderer: IpcRenderer;
}

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
	global.ipcRenderer = ipcRenderer;
});
