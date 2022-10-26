import { passwordValidLength, usersRegistrated } from './constants'

export function validateEmail(email){
    let regex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, 'i');
    return regex.test(email);
}

export function validatePasswordLength(password){
    return password.length > passwordValidLength;
}

export function validatePasswordRegistrated(password){
   return usersRegistrated.find(userRegistrated => userRegistrated.password === password)
}

export function validateEmailRegistrated(email){
    return usersRegistrated.find(userRegistrated => userRegistrated.email === email)
}