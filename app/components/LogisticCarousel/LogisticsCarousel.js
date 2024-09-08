'use client'

import React from "react"
import {DotButton, useDotButton} from './logisticDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './logisticButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './logCarousel.css'

const LogisticsCarousel = (props) => {
    const {slides, options} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {selectedIndex, scrollSnaps, onDotButtonClick} = 
    useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return(
        <section className="logistics-embla">
            <div className="log-embla-viewport" ref={emblaRef}>
                <div className="log-embla-container">
                    {slides.map((slide, index) =>(
                        <div className="log-embla-slide" key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <div className="log-embla-controls">
                <div className="log-embla-buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                </div>
                <div className="log-embla-dots">
                    {scrollSnaps.map((_,index) => (
                        <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'log-embla-dot'.concat(
                            index === selectedIndex ? ' log-embla-dot--selected' : ''
                          )}
                        />
                    ))}
                </div>
                <div className="log-embla-buttons">
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}
export default LogisticsCarousel;