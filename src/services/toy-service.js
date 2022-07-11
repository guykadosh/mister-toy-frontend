import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

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
}

function query() {
  return storageService.query(KEY)
}

function getById(toyId) {
  return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy.id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    name: '',
    price: 0,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: Date.now(),
    inStock: true,
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      _createToy('Superman', utilService.getRandomIntInc(20, 100)),
      _createToy('Batman', utilService.getRandomIntInc(20, 100)),
      _createToy('Ironman', utilService.getRandomIntInc(20, 100)),
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}

function _createToy(name, price) {
  return {
    _id: utilService.makeId(),
    name: 'Talking Doll',
    price: 123,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: Date.now(),
    inStock: true,
  }
}
