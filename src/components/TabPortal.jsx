import React from 'react'
import ReactDOM from 'react-dom'

function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
    if (styleSheet.cssRules) { // for <style> elements
      const newStyleEl = sourceDoc.createElement('style');

      Array.from(styleSheet.cssRules).forEach(cssRule => {
        // write the text of each rule into the body of the style element
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    } else if (styleSheet.href) { // for <link> elements loading CSS from a URL
      const newLinkEl = sourceDoc.createElement('link');

      newLinkEl.rel = 'stylesheet';
      newLinkEl.href = styleSheet.href;
      targetDoc.head.appendChild(newLinkEl);
    }
  });
}

class TabPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.outerWindow = null;
    this.container = document.createElement('div')
    this.state = {};
  }

  componentDidMount() {
    this.outerWindow = window.open('', '', 'width=500, height=500,left=200,top=300')
    this.outerWindow.document.body.appendChild(this.container)

    copyStyles(document, this.outerWindow.document);
    this.setState({outerWindow: this.outerWindow})
  }

  componentWillUnmount() {
    this.state.outerWindow.close()
  }

  render() {
    const {outerWindow} = this.state;
    if(!outerWindow) {
      return null;
    }
    return ReactDOM.createPortal(this.props.children, this.container)
  }
}

export default TabPortal;