// import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import axios from 'axios'

const KEY = 'toys_db'

const labels = [
  'On wheels',
  'Box game',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
]

_createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
  getLabels,
}

function _getUrl(id = '') {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/toy'
      : '//localhost:3030/api/toy'

  return `${BASE_URL}/${id}`
}

function query(filterBy, sortBy) {
  const query = { filterBy, sortBy }
  return axios.get(_getUrl(), { params: query }).then(res => res.data)
}

function getById(toyId) {
  return axios.get(_getUrl(toyId)).then(res => res.data)
}

function remove(toyId) {
  return axios.delete(_getUrl(toyId))
}

function save(toy) {
  if (toy._id) {
    return axios.put(_getUrl(toy._id), toy).then(res => res.data)
  }
  return axios.post(_getUrl(), toy).then(res => res.data)
}

function getEmptyToy() {
  return {
    name: '',
    price: 0,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: Date.now(),
    inStock: false,
  }
}

function getLabels() {
  return labels
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      _createToy('Superman', utilService.getRandomIntInc(20, 100)),
      _createToy('Batman', utilService.getRandomIntInc(20, 150)),
      _createToy('Ironman', utilService.getRandomIntInc(20, 100)),
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}

function _createToy(name, price) {
  return {
    _id: utilService.makeId(),
    name,
    price,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: Date.now(),
    inStock: true,
  }
}
