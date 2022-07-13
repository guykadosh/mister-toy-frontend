// import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import axios from 'axios'

const KEY = 'toys_db'

// const labels = [
//   'On wheels',
//   'Box game',
//   'Art',
//   'Baby',
//   'Doll',
//   'Puzzle',
//   'Outdoor',
// ]

// '#dc2626',
// '#f59e0b',
// '#047857',
// '#2563eb',
// '#4338ca',
// '#be185d',
// '#71717a',

const labels = [
  { title: 'On wheels', color: '#dc2626' },
  { title: 'Board', color: '#f59e0b' },
  { title: 'Art', color: '#047857' },
  { title: 'Baby', color: '#2563eb' },
  { title: 'Puzzle', color: '#4338ca' },
  { title: 'Outdoor', color: '#be185d' },
  { title: 'Battery Powered', color: '#71717a' },
  { title: 'Doll', color: '#6d28d9' },
  { title: 'Anime', color: '#fbbf24' },
  { title: 'Lego', color: '#6366f1' },
  { title: 'Superhero', color: '#ef4444' },
  { title: 'Strategy', color: '#34d399' },
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
    labels: [],
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
    labels: [
      { title: 'Doll', color: '#6d28d9' },
      { title: 'Battery Powered', color: '#71717a' },
      { title: 'Baby', color: '#2563eb' },
    ],
    createdAt: Date.now(),
    inStock: true,
  }
}
