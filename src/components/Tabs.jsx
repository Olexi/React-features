import React, {useState, useEffect} from 'react'
import Tab from './Tab.jsx'
import CustomStackHook from './CustomHook'

function Tabs(props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.getElementById('counter').innerText = count
  })

  CustomStackHook({value: '29'})

  return (
    <>
      <div className="tabs">
        {props.items.map((item, index) => {
          return <Tab text={item.text} key={index} />
        })}
      </div>
      <div>
        <button onClick={() => {setCount(count + 1)}}>Инкремент</button>
        <div id='counter'></div>
      </div>
    </>
  )
}

 export default Tabs;