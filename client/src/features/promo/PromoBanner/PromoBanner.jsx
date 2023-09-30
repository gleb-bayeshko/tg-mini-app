import { Card } from 'shared/ui/Card'
import { Wrapper } from 'shared/ui/Wrapper'
import './styles.css'

function PromoBanner() {
  return (
    <div className="promo-banner">
      <Wrapper>
        <Card color="pink" className="promo-banner-card">
          <div className="promo-banner-card__text-content">
            <div className="promo-banner-card__text">
              Up to
            </div>
            <div className="promo-banner-card__discount">
              80% off
            </div>
            <div className="promo-banner-card__text-code">
              with promo-code
            </div>
          </div>
        </Card>
      </Wrapper>
    </div>
  )
}

export default PromoBanner
