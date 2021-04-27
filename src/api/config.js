const devBaseURL = 'http://123.207.32.32:9001'
const prodBaseURL = 'http://123.207.32.32:9001'
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : prodBaseURL

const TIMEOUT = 8000 

export {
  BASE_URL,
  TIMEOUT
}