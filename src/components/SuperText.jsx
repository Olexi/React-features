import React from 'react'
import { SuperContext } from '../App'

const SuperText = React.forwardRef((props, ref) => (
  <p ref={ref}>
    {props.children}
    <SuperContext.Consumer>
      {ctx => <p>{ctx}</p>}
    </SuperContext.Consumer>
  </p>
))

export default SuperText