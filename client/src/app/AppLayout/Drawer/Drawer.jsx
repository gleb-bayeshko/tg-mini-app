import { useDispatch, useSelector } from 'react-redux'
import Overlay from 'shared/ui/Overlay/Overlay'
import { getClassName } from 'shared/utils'
import { closeDrawer } from './drawerSlice'
import './styles.css'

function Drawer() {
  const { isDrawerOpened } = useSelector(state => state.drawer)
  const dispatch = useDispatch()

  const handleOverlayClick = () => {
    dispatch(closeDrawer())
  }

  return (
    <>
      <div className={getClassName('drawer', { 'drawer_open': isDrawerOpened })}>
        gfh
      </div>
      <Overlay
        isOpen={isDrawerOpened}
        onClick={handleOverlayClick}
      />
    </>
  )
}

export default Drawer
