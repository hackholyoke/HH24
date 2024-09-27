import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import './speakerCarousel.css'
import {
  NextButton,
  //PrevButton,
  usePrevNextButtons
} from './speakerButtons'
//import { DotButton, useDotButton } from './EmblaCarouselDotButton'

const SpeakerCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])
  
    // const { selectedIndex, scrollSnaps, onDotButtonClick } =
    //   useDotButton(emblaApi)
  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="speaker-embla">
          <div className="speaker-embla__viewport" ref={emblaRef}>
            <div className="speaker-embla__container">
              {slides.map((slide, index) => (
                <div className="speaker-embla__slide" key={index}>
                    {slide}
                </div>
              ))}
            </div>
          </div>
    
          <div className="speaker-embla__controls">
            <div className="speaker-embla__buttons">
              {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
    
            {/* <div className="speaker-embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'speaker-embla__dot'.concat(
                    index === selectedIndex ? 'speaker-embla__dot--selected' : ''
                  )}
                />
              ))}
            </div> */}
          </div>
        </div>
      )

}

export default SpeakerCarousel