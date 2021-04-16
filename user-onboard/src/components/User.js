import React from 'react'

export default function user(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.first_name} {details.last_name}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}