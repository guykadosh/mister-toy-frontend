import Axios from 'axios'
const axios = Axios.create({ withCredentials: true })
const STORAGE_KEY = 'loggedinUser'

export const userService = {
  login,
  logout,
  signup,
  getLoggedInUser,
}

function _getUrl(id = '') {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/user'
      : '//localhost:3030/api/user'

  return `${BASE_URL}/${id}`
}

function getAuthUrl() {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/auth'
      : '//localhost:3030/api/auth'

  return `${BASE_URL}/`
}

async function login(credentials) {
  const res = await axios.post(getAuthUrl() + 'login', credentials)
  const user = res.data
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  return user
}

async function signup(signupInfo) {
  const res = await axios.post(_getUrl(), signupInfo)
  const user = res.data
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  return user
}

function logout() {
  sessionStorage.removeItem(STORAGE_KEY)
  return axios.post(getAuthUrl() + 'logout')
}

function getLoggedInUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
}
