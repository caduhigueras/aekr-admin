import type { ReduxState } from '../../store'

export const isMenuOpen = (state: ReduxState) => state.menu.isOpen
export const selectMenuItems = (state: ReduxState) => state.menu.menuItems