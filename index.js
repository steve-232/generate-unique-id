'use strict'

function generateUniqueId ({
  length = 20,
  useLetters = true,
  useNumbers = true,
  includeSymbols = [],
  excludeSymbols = []
} = {}) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '0123456789'
  let availableChars = []
  let lettersArr = []
  let numbersArr = []

  if (useLetters) {
    if (excludeSymbols.length) letters = filterSymbols(excludeSymbols, letters)
    lettersArr = letters.split('')
  }

  if (useNumbers) {
    if (excludeSymbols.length) numbers = filterSymbols(excludeSymbols, numbers)
    numbersArr = numbers.split('')
  }

  availableChars = [...lettersArr, ...numbersArr, ...includeSymbols]

  return createId(availableChars, length)
}

function createId (availableChars, idLength) {
  let id = ''

  for (let i = 0; i < idLength; i++) {
    id += availableChars[getRandomNumber(availableChars.length)]
  }

  return id
}

function filterSymbols (excludeSymbols, group) {
  excludeSymbols.forEach(symbol => (group = group.replace(symbol, '')))

  return group
}

function getRandomNumber (limit) {
  return Math.floor(Math.random() * limit).toString()
}

module.exports = generateUniqueId
