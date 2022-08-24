import { showSession } from "./userServices"
import {
addDoc,
deleteDoc,
doc,
getDoc, 
getDocs, 
setDoc, 
updateDoc,

} from 'firebase/firestore'
import { dataBase } from "./firebaseConfig"

export const getAll = async () => {
    let films = await getDocs(dataBase)
    let arr = []
    films.forEach(film => arr.push({
        film: film.data(),
        id: film.id
    }))
    return arr
}

export const getFilm = async (id) => {
    let docRef = doc(dataBase , id)
    return await getDoc(docRef)
}

export const editFilm = async (id , body) => {
    let docRef = doc(dataBase , id)
    return await setDoc(docRef,body)

}

export const createFilm = async (film) => {

    return await addDoc(dataBase , film)

}


export const deleteFilm = async (filmId) => {
    let docRef = doc(dataBase , filmId)
    return await deleteDoc(docRef)
}

export const addLikes = async (id,body) => {
    let docRef = doc(dataBase , id)

   return await setDoc(docRef , body)
}

export const reserveSeat = async (id,body) => {
    let docRef = doc(dataBase , id)

   return await setDoc(docRef , body)
}