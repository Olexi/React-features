import React, { useState, useEffect } from 'react'

function CustomStackHook(props) {
  const [customValue, setCustomValue] = useState('');

  useEffect(() => {
    props.value.length > 0 && setCustomValue(props.value)
    console.log('Last value: ', customValue)
  })

  return null
}

export default CustomStackHook