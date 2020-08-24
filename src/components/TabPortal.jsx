import React from 'react'
import ReactDOM from 'react-dom'

class TabPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {triggerPortalRender: false}
  }

  render() {
    return this.props.renderedInPortal && this.state.triggerPortalRender
      ? ReactDOM.createPortal(this.props.children, document.getElementById('nonReactDiv'))
      : <div>{this.props.children}</div>
  }
}

export default TabPortal;