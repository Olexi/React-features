import React from 'react'
import { SuperContext } from '../App'

const SuperText = React.forwardRef((props, ref) => (
  <div ref={ref}>
    {props.children}
    <SuperContext.Consumer>
      {ctx => <p>{ctx}</p>}
    </SuperContext.Consumer>
  </div>
))

export default SuperText