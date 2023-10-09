import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatches } from 'react-router-dom'
import { resetFilters } from 'features/products/ProductCatalog/productCatalogSlice'
import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import { Header } from './Header'
import { ScrollContext } from './context'
import './styles.css'

function AppLayout({ children }) {
  const contentRef = useRef()
  const { isDrawerOpened } = useSelector(state => state.drawer)
  const dispatch = useDispatch()
  const [isScrollLocked, setIsScrollLocked] = useState(false)

  const match = useMatches()

  useEffect(() => {
    if (match.length === 0) {
      return
    }

    const currentPath = match.at(-1)

    if (!currentPath.params.category) {
      dispatch(resetFilters())
    }
  }, [match, dispatch])

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
        <div className="app-layout__content">
          <div className={getClassName('app-layout__container', { 'app-layout__container_shifted': isDrawerOpened })}>
            {children}
          </div>
        </div>
      </div>
    </ScrollContext.Provider>
  )
}

AppLayout.propTypes = { children: PropTypes.node }

export default AppLayout
