import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import './scroll-arrow.scss'

// https://medium.com/better-programming/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false)

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true)
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false)
		}
	}

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	window.addEventListener('scroll', checkScrollTop)

	return (
		<FaArrowCircleUp
			className='scrollTop'
			onClick={scrollTop}
			style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
		/>
	)
}

export default ScrollArrow
