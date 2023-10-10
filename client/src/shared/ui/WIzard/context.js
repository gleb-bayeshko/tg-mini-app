import { createContext, useContext } from 'react'

export const WizardContext = createContext(null)
export function useWizardContext() { return useContext(WizardContext) }
