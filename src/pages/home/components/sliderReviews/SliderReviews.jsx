import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
  @media (min-width: 1280px) {
    padding-bottom: 50px;
  }
`

const ReviewCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5px;
`

const ReviewCard = styled.div`
  width: 280px !important;
  height: 410px;
  background: #111;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  margin: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 1280px) {
    width: 280px !important;
    height: 420px;
  }
`

const VideoWrapper = styled.div`
  width: 100%;

  background: #222;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 1280px) {
  }
`

const Name = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 0.5px;
  margin-top: 20px;
  @media (min-width: 1280px) {
  }
`

const Position = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 0.08px;
  margin-top: 10px;
`

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`

const ProgressItem = styled.div`
  width: 30px;
  height: 4px;
  background: ${({ active }) => (active ? '#fff' : '#444')};
  border-radius: 2px;
`

const PageCounter = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`

const ArrowButton = styled.button`
  position: absolute;
  top: 87%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &.prev {
    left: 25%;
  }
  &.next {
    right: 25%;
  }

  @media (max-width: 1279px) {
    display: none;
  }
`
import Video1 from '../../../../assets/videos/reviews/1_video.mp4'
import Video2 from '../../../../assets/videos/reviews/2_video.mp4'
import Video3 from '../../../../assets/videos/reviews/3_video.mp4'
import Video4 from '../../../../assets/videos/reviews/4_video.mp4'
import Video5 from '../../../../assets/videos/reviews/5_video.mp4'

const reviews = [
  {
    name: 'Алексей Бугров',
    position: 'IT-директор в компании ITL Team',
    video: Video1,
  },
  {
    name: 'Марина Лисенко',
    position: 'CEO в Digital Agency',
    video: Video2,
  },
  {
    name: 'Іван Петров',
    position: 'CMO в Startup Hub',
    video: Video3,
  },
  {
    name: 'Анастасия Филипова',
    position: 'Head of Sales в FinTech',
    video: Video4,
  },
  {
    name: 'Дмитрий Завадов',
    position: 'IT-директор в компании ITL Team',
    video: Video5,
  },
]

const SliderReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  let sliderRef = null

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '40px',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1600, // Для великих екранів (1600px+)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1280, // Десктоп (1280px+)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1024, // Планшети (1024px+)
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          arrows: false,
        },
      },
      {
        breakpoint: 768, // Маленькі планшети
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
          arrows: false,
        },
      },
      {
        breakpoint: 576, // Великі мобільні
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
          arrows: false,
        },
      },
      {
        breakpoint: 450, // Середні мобільні
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '50px',
          arrows: false,
        },
      },
      {
        breakpoint: 375, // Маленькі мобільні
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
          arrows: false,
        },
      },
    ],
  }

  return (
    <SliderWrapper>
      <h2>Что о нас говорят наши партнеры?</h2>
      <ArrowButton className="prev" onClick={() => sliderRef.slickPrev()}>
        ‹
      </ArrowButton>
      <ArrowButton className="next" onClick={() => sliderRef.slickNext()}>
        ›
      </ArrowButton>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {reviews.map((review, index) => (
          <ReviewCardWrapper key={index}>
            <ReviewCard>
              <VideoWrapper>
                <video
                  src={review.video}
                  controls
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover' }}
                  onContextMenu={(e) => e.preventDefault()}
                  playsInline
                />
              </VideoWrapper>
              <Name>{review.name}</Name>
              <Position>{review.position}</Position>
            </ReviewCard>
          </ReviewCardWrapper>
        ))}
      </Slider>

      <PaginationWrapper>
        <ProgressBar>
          {reviews.map((_, index) => (
            <ProgressItem key={index} active={index === currentSlide} />
          ))}
        </ProgressBar>

        <PageCounter>
          {currentSlide + 1} / {reviews.length}
        </PageCounter>
      </PaginationWrapper>
    </SliderWrapper>
  )
}

export default SliderReviews
