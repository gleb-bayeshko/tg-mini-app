import { createContext, useContext } from 'react'

export const DropdownContext = createContext(null)
export function useDropdownContext() { return useContext(DropdownContext) }
