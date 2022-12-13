import React, { useContext } from 'react'

export type ModeContextProps = {
  mode: 'local' | 'online'
}

export const ModeContext = React.createContext<ModeContextProps>({ mode: 'local' })

export const useModeContext = () => useContext(ModeContext)

export const ModeProvider: React.FC<Partial<ModeContextProps> & { children: React.ReactNode }> = ({ children, ...props }) => (
  <ModeContext.Provider value={{ mode: 'local', ...props }}>{children}</ModeContext.Provider>
)
