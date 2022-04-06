import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
	sidemenuOpen: boolean;
	isAddingNewEntry: boolean;
	isDraggingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false,
	isAddingNewEntry: false,
	isDraggingEntry: false,
};

export const UIProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });
	const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

	const setIsAddingNewEntry = (isAdding: boolean) =>
		dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });

	const setIsDraggingEntry = (isDragging: boolean) => {
		dispatch({ type: 'UI - Set isDraggingEntry', payload: isDragging });
	};
	return (
		<UIContext.Provider
			value={{
				...state,
				openSideMenu,
				closeSideMenu,
				setIsAddingNewEntry,
				setIsDraggingEntry,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
