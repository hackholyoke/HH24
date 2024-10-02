import React, { useCallback, useEffect, useState } from 'react'
import la_a from '../../assets/buttons/la_a.png'
import la_b from '../../assets/buttons/la_b.png'
import ra_b from '../../assets/buttons/ra_b.png'
import ra_a from '../..//assets/buttons/ra_a.png'

import Image from 'next/image'

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="speaker-embla__button speaker-embla__button--prev"
      type="button"
      {...restProps}
    >
      <Image src={la_b} className='speaker-embla__button__img' alt="Normal Image"/>
      <Image src={la_a} className='speaker-embla__button__hover' alt="Hover Image"/>
      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="speaker-embla__button speaker-embla__button--next"
      type="button"
      {...restProps}
    >
      <Image src={ra_b} className="speaker-embla__button__img"/>
      <Image src={ra_a} className="speaker-embla__button__hover"/>
      {children}
    </button>
  )
}
