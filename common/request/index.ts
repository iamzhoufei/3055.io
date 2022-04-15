import axios, { AxiosRequestConfig } from 'axios'
import dotenv = require('dotenv')
dotenv.config()

export const request = async (config: AxiosRequestConfig<any>) => {
  console.log(process.env.REQUEST_PREFIX)
  return await axios(config)
}
