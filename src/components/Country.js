import React from 'react'
export default function Country(props) {
  return (
    <div>
      <h2>{props.country.name}</h2>
      <h3>{props.country.capital}</h3>
    </div>
  )
}