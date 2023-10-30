import type { ReduxState } from '../../store'

export const selectIsMenuOpen = (state: ReduxState) => state.menu.isOpen
export const selectMenuItems = (state: ReduxState) => state.menu.menuItems