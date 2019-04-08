import React from 'react';


interface State {
  hasError: Boolean
}

class ErrorBoundry extends React.Component<any, State> {
  state = {
    hasError: false
  }

  componentDidCatch(error: Error) {
    this.setState({ hasError: true });
  }
  render() {
    return (
      <div className="flex flex-grow w-full m-4">
        {!this.state.hasError ? this.props.children : <p>I'm super sad that something broke. Please forgive me!<br />
          If you need to look at cute pictures to feel better visit <strong><a href="https://www.redditp.com/r/aww">aww</a></strong></p>
        }
      </div>
    )
  }
}

export default ErrorBoundry;