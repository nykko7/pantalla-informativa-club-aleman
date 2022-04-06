import { createContext } from 'react';

export interface ContextProps {
	sidemenuOpen: boolean;
	isAddingNewEntry: boolean;
	isDraggingEntry: boolean;
	//Methods
	openSideMenu: () => void;
	closeSideMenu: () => void;
	setIsAddingNewEntry: (isAdding: boolean) => void;
	setIsDraggingEntry: (isAdding: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
