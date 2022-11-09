import { getUser, validateEmail, validateEmailAndPassword, validatePasswordConfirmation, validatePasswordLength } from "./utils"


describe("Test utils - validateEmail", () => {
    it("should return true", () => {
        const email = "viajerovip@mail.com"
        expect(validateEmail(email)).toEqual(true);
    })

    it("should return false", () => {
        const email = "viajerovip.mail.com"
        expect(validateEmail(email)).toEqual(false);
    })
})

describe("Test utils - validatePasswordLength", () => {
    it("should return true", () => {
        const password = "1234567"
        expect(validatePasswordLength(password)).toEqual(true);
    })

    it("should return false", () => {
        const password = "1223"
        expect(validatePasswordLength(password)).toEqual(false);
    })
})

describe("Test utils - validateEmailAndPassword", () => {
    it("should return true", () => {
        const password = "1234567"
        const email = "grupo10@mail.com"
        expect(validateEmailAndPassword(email, password)).toEqual(true);
    })

    it("should return false", () => {
        const password = "1223"
        const email = "grupo@mail.com"
        expect(validateEmailAndPassword(email, password)).toEqual(false);
    })
})

describe("Test utils - getUser", () => {
    it("should return user object", () => {
        const email = "grupo10@mail.com"
        const user = {
            email: "grupo10@mail.com",
            username: "grupo10",
            password: "1234567"
        }
        expect(getUser(email)).toEqual(user);
    })

    it("should return undefined", () => {
        const email = "grupo@mail.com"
        expect(getUser(email)).toEqual(undefined);
    })
})

describe("Test utils - validatePasswordConfirmation", () => {
    it("should return true", () => {
        const password = "1234567"
        const passwordConfirmed = "1234567"
        expect(validatePasswordConfirmation(password, passwordConfirmed)).toEqual(true);
    })

    it("should return false", () => {
        const password = "1223"
        const passwordConfirmed = "123"
        expect(validatePasswordConfirmation(password, passwordConfirmed)).toEqual(false);
    })
})