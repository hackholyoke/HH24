import React, {useCallback, useEffect, useState } from 'react'

import la_a from '../../assets/buttons/la_a.png'
import la_b from '../../assets/buttons/la_b.png'
import ra_b from '../../assets/buttons/ra_b.png'
import ra_a from '../../assets/buttons/ra_a.png'

import Image from 'next/image'

export const usePrevNextButtons = (emblaApi) =>{
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if(!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if(!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if(!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return{
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
        className="log-embla-button log-embla-button--prev"
        type="button"
        {...restProps}
      >
        <Image src={la_b} className='log-embla-button__norm' alt="Normal Image"/>
        <Image src={la_a} className='log-embla-button__norm_hover' alt="Hover Image"/>
        {children}
      </button>
    )
  }
  
export const NextButton = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="log-embla-button log-embla-button--next"
        type="button"
        {...restProps}
      >
        <Image src={ra_b} className='log-embla-button__norm' alt="Normal Image"/>
        <Image src={ra_a} className='log-embla-button__norm_hover' alt="Hover Image"/>
        {children}
      </button>
    )
  }