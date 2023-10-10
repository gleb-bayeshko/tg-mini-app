import { createContext, useContext } from 'react'

export const ScrollContext = createContext(null)
export function useScrollContext() { return useContext(ScrollContext) }

export const ColorThemeContext = createContext(null)
export function useColorTheme() { return useContext(ColorThemeContext) }
