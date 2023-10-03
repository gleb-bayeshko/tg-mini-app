import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from './Drawer'
import { Header } from './Header'
import { ScrollContext } from './context'
import './styles.css'

function AppLayout({ children }) {
  const contentRef = useRef()
  const [isScrollLocked, setIsScrollLocked] = useState(false)

  useEffect(() => {
    if (isScrollLocked) {
      document.body.classList.add('scroll-locked')
    } else {
      document.body.classList.remove('scroll-locked')
    }
  }, [isScrollLocked])

  return (
    <ScrollContext.Provider
      value={{
        setIsScrollLocked,
        isScrollLocked
      }}
    >
      <div className="app-layout" ref={contentRef}>
        <Header />
        <Drawer />
        {children}
      </div>
    </ScrollContext.Provider>
  )
}

AppLayout.propTypes = { children: PropTypes.node }

export default AppLayout
