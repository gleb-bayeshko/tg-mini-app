import { createContext, useContext } from 'react'

export const TelegramContext = createContext(null)
export default function useTelegramContext() { return useContext(TelegramContext) }
