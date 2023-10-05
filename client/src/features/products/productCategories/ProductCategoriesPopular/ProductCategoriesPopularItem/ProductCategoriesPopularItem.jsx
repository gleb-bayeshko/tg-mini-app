import PropTypes from 'prop-types'
import { Card } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text'
import { getClassName } from 'shared/utils'
import './styles.css'

function ProductCategoriesPopularItem({
  height,
  color,
  type,
  title,
  description,
  className,
  imgSrc,
  children,
}) {
  return (
    <Card
      className={getClassName('product-categories-popular-item', { [`${className}`]: !!className })}
      styles={{ minHeight: height }}
      color={color}
      type={type}
    >
      {title && (
        <Text color="white" className="h3" tag="h3">
          {title}
        </Text>
      )}
      {description && (
        <Text color="white" className="text-m-extra font-weight-3">
          {description}
        </Text>
      )}
      {imgSrc && (
        <img
          className="product-categories-popular-item__image"
          src={imgSrc}
          alt={`${title} category`}
        />
      )}
      {children}
    </Card>
  )
}

ProductCategoriesPopularItem.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
}

export default ProductCategoriesPopularItem
