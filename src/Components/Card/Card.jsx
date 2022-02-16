import React from 'react'

export const Card = ({name,src,idCard}) => {
	return (
		<div className='card'>
			<h1>{name}</h1>
			<img className="" id={idCard} src={src} alt={name} />
		</div>
	)
}
