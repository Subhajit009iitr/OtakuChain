export const BACKEND_HOST = 'http://localhost:4000'

export const cardsUrl = () => {
    return `${BACKEND_HOST}/cards/header`
}

export const cardDetailsUrl = (cardID) => {
    return `${BACKEND_HOST}/cards/${cardID}`
}