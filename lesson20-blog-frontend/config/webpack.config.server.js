const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const getClientEnvironment = require('./env');

// 환경변수를 설정합니다.
const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
