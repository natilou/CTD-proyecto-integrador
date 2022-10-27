import { passwordValidLength, usersRegistered } from './constants'

export function validateEmail(email){
    let regex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, 'i');
    return regex.test(email);
}

export function validatePasswordLength(password){
    return password.length > passwordValidLength;
}

export function validatePasswordRegistered(password){
   return usersRegistered.find(user => user.password === password)
}

export function validateEmailRegistered(email){
    return usersRegistered.find(user => user.email === email)
}