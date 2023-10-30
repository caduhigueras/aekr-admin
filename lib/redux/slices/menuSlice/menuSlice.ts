import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface SubMenuItem {
    name: string,
    url: string,
    order: number,
}

export interface MenuItem {
    name: string,
    icon: string,
    order: number,
    subMenuItems: SubMenuItem[],
}
export interface MenuSliceState {
    isOpen: boolean,
    menuItems: null|MenuItem[],
}

const initialState: MenuSliceState = {
    isOpen: true,
    menuItems: null,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen
        },
        setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
            state.menuItems = action.payload
        }
    }
})