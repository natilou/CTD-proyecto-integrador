import { passwordValidLength, usersRegistered } from './constants'

export function validateEmailRegex(email){
    let regex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, 'i');
    return regex.test(email);
}

export function validatePasswordLength(password){
    return password.length > passwordValidLength;
}

export function validateEmailAndPassword(email, password){
   let user = usersRegistered.find(user => user.email === email && user.password === password)
   return  user ? true : false
}

export function getUser(email){
    let user = usersRegistered.find(user => user.email === email)
    return user
}

export function validatePasswordConfirmation(password, passwordConfirmed){
    return password === passwordConfirmed
}
