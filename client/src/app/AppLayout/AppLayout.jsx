import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import { Header } from './Header'
import { ScrollContext } from './context'
import './styles.css'

function AppLayout({ children }) {
  const contentRef = useRef()
  const { isDrawerOpened } = useSelector(state => state.drawer)
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
        <div className={getClassName('app-layout__content', { 'app-layout__content_shifted': isDrawerOpened })}>
          {children}
        </div>
      </div>
    </ScrollContext.Provider>
  )
}

AppLayout.propTypes = { children: PropTypes.node }

export default AppLayout
