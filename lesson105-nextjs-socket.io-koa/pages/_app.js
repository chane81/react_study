import App, { Container } from 'next/app'
import React from 'react'
import io from 'socket.io-client'
import PropTypes from 'prop-types';

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  // IE10 대응
  static childContextTypes = {
    router: PropTypes.object,
  };

  // IE10 대응
  getChildContext() {
    const { router } = this.props;
    return { router };
  }

  state = {
    socket: null
  }

  componentDidMount () {
    // connect to WS server and listen event
    const socket = io()
    this.setState({ socket })
  }

  // close socket connection
  componentWillUnmount () {
    this.state.socket.close()
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} socket={this.state.socket} />        
      </Container>
    )
  }
}

export default MyApp
