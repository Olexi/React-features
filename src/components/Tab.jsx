import React from 'react'

import TabPortal from './TabPortal'
import SuperText from './SuperText'
import { SuperContext } from '../App';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {renderedInPortal: false};
    this.portalRef = React.createRef();
    this.divRef = React.createRef();
  }

  triggerPortalRender(value) {
    this.portalRef.current.setState({triggerPortalRender: value})
    this.setState({renderedInPortal: value})

    console.log(this.divRef.current.innerText)
  }

  componentWillUnmount() {
    this.triggerPortalRender(false)
  }

  render() {
    return (
      <TabPortal ref={this.portalRef} renderedInPortal={this.state.renderedInPortal}>
        <div className="tab">
          <button onClick={() => this.triggerPortalRender(!this.state.renderedInPortal)}>{this.state.renderedInPortal ? 'Прикрепить' : 'Открепить'}</button>
          <SuperText ref={this.divRef}>{this.props.text}</SuperText>
        </div>
      </TabPortal>
    )
  }
}

export default Tab;