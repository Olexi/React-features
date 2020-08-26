import React from 'react'

import TabPortal from './TabPortal'
import SuperText from './SuperText'

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {renderedInPortal: false};
    this.divRef = React.createRef();
    this.triggerPortalRender = this.triggerPortalRender.bind(this);
  }

  triggerPortalRender(value) {
    console.log(value)
    this.setState(state => ({...state, renderedInPortal: value ? value : !state.renderedInPortal}))
  }

  closeWindowPortal() {
    this.setState({renderedInPortal: false})
  }

  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      this.closeWindowPortal();
    });
  }

  render() {
    return this.state.renderedInPortal 
    ?
      <TabPortal ref={this.portalRef} renderedInPortal={this.state.renderedInPortal}>
        <div className="tab">
          <button onClick={() => this.closeWindowPortal()}>{this.state.renderedInPortal ? 'Прикрепить' : 'Открепить'}</button>
          <SuperText ref={this.divRef}>{this.props.text}</SuperText>
        </div>
      </TabPortal>
    : <div className="tab">
        <button onClick={() => this.triggerPortalRender()}>{this.state.renderedInPortal ? 'Прикрепить' : 'Открепить'}</button>
        <SuperText ref={this.divRef}>{this.props.text}</SuperText>
      </div>
  }
}

export default Tab;