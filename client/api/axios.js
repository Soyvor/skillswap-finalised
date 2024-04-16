import axios from 'axios'

const baseURL = '10.24.70.104:3011'

export default axios.create({
  baseURL: 'http://10.24.70.104:3011',
  // baseURL: '',
})

export { baseURL }