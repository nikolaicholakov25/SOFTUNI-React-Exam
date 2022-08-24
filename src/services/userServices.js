import { 
signInWithEmailAndPassword, 
createUserWithEmailAndPassword,
signOut } from "firebase/auth"
import { auth } from "./firebaseConfig"

export const showSession = () => {
    return JSON.parse(sessionStorage.getItem('user'))
}

export const login = async (email,password) => {
    return await signInWithEmailAndPassword(auth , email,password)
    .then(res => sessionStorage.setItem('user' , JSON.stringify(res.user)))
    .catch(error => alert(error.message))

}


export const logout = async () => {
    return await signOut(auth)
    .then(res => sessionStorage.clear())
}

export const register = async (email,password) => {
    return await createUserWithEmailAndPassword (auth , email,password)
    .then(res => sessionStorage.setItem('user' , JSON.stringify(res.user)))
    .catch(error => alert(error.message))
}

