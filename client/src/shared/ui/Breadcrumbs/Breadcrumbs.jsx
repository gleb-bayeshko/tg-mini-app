import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { NavigationArrowRightIcon } from 'shared/icons'
import { Text } from 'shared/ui/Text'
import { Wrapper } from 'shared/ui/Wrapper'
import { capitalizeString, getClassName } from 'shared/utils'
import './styles.css'

function Breadcrumbs({ showCurrentBreadcrumb = true }) {
  const { pathname } = useLocation()

  const retrieveBreadcrumbsFromPath = () => {
    const breadcrumbs = pathname
      .split('/')
      .map((name, i, arr) => ({
        name: name === '' ? 'Home' : capitalizeString(name),
        link: arr.slice(0, i + 1).join('/')
      }))

    return showCurrentBreadcrumb
      ? breadcrumbs
      : breadcrumbs.slice(0, breadcrumbs.length - 1)
  }

  const renderBreadcrumbs = breadcrumbs => {
    return breadcrumbs.map(({ name, link }, i, arr) => {
      const isLast = i === arr.length - 1

      return (
        <li className="breadcrumbs-list__item" key={i}>
          <Link to={link || '/'} className="breadcrumbs-list__item-link">
            <Text className={getClassName('text-m font-weight-4', { 'font-weight-6': isLast })}>
              {name}
            </Text>
            {!isLast && (
              <NavigationArrowRightIcon className="breadcrumbs-list__item-icon" />
            )}
          </Link>
        </li>
      )
    })
  }

  const breadcrumbs = retrieveBreadcrumbsFromPath()

  if (breadcrumbs.length === 0) {
    return null
  }

  return (
    <div className="breadcrumbs">
      <Wrapper>
        <ul className="breadcrumbs-list">
          {renderBreadcrumbs(breadcrumbs)}
        </ul>
      </Wrapper>
    </div>
  )
}

Breadcrumbs.propTypes = { showCurrentBreadcrumb: PropTypes.bool }

export default Breadcrumbs
