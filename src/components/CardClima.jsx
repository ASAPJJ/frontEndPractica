import React from 'react'

export default function CardClima({title ,temp, humedad, precipitacion} ) {
  return (
    <div>
        <h3>{title}</h3>
        <p>{temp}C°</p>
        <p>{humedad}</p>
        <p>{precipitacion}</p>
    </div>
  )
}
