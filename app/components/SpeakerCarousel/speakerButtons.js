import React, { useCallback, useEffect, useState } from 'react'
import next_a from '../../assets/buttons/next_a.png'
import next_b from '../../assets/buttons/next_b.png'
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

// export const PrevButton = (props) => {
//   const { children, ...restProps } = props

//   return (
//     <button
//       className="embla__button embla__button--prev"
//       type="button"
//       {...restProps}
//     >
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
//         />
//       </svg>
//       {children}
//     </button>
//   )
// }

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="speaker-embla__button speaker-embla__button--next"
      type="button"
      {...restProps}
    >
      <Image src={next_b} className="speaker-embla__button__img"/>
      <Image src={next_a} className="speaker-embla__button__hover"/>
      {children}
    </button>
  )
}