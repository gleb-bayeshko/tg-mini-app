import { useState } from 'react'
import { Button } from 'shared/ui/Button'
import { Card } from 'shared/ui/Card'
import { Wrapper } from 'shared/ui/Wrapper'
import { PromoBannerModal } from './PromoBannerModal'
import './styles.css'

function PromoBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="promo-banner">
      <PromoBannerModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
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
              with code
            </div>
          </div>
          <Button
            className="promo-banner-card__button"
            color="white"
            onClick={handleButtonClick}
          >
            Get it now
          </Button>
        </Card>
      </Wrapper>
    </div>
  )
}

export default PromoBanner
