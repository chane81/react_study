//import Document, { Head, Main, NextScript } from 'next/document';
import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
//import flush from 'styled-jsx/server'


export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    //const styles = flush();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
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

  render () {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <Head>
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js" /> */}
          <style>{`body { margin: 15px; } /* custom! */`}</style>
          <title>타이틀임</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

