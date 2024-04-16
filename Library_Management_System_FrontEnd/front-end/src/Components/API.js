import axios from 'axios'

const BASE_URL="http://localhost:8081/books-api"

const LEARNER_URL="http://localhost:8081/learner-api"

export const fetchBooks=() => axios.get(BASE_URL);

export const addBooks=(addBooks) => axios.post(BASE_URL,addBooks)

export const findById=(booId) => axios.get(BASE_URL+"/"+booId)

export const modifyBooks=(bookId,books) => axios.put(BASE_URL+"/"+bookId,books)

export const deleteBooks=(bookId) => axios.delete(BASE_URL+"/"+bookId)

export const fetchAvailableBooks=() => axios.get(BASE_URL+"/available")

export const findByName=(name) => axios.get(BASE_URL+"/book-search/"+name)

export const learnerBooking= (bookId,learner) => axios.post(LEARNER_URL+"/"+bookId,learner)

export const getLearner=(bookId) => axios.get(LEARNER_URL+"/"+bookId)

export const learnerDeleted=(bookId) => axios.delete(LEARNER_URL+"/"+bookId)