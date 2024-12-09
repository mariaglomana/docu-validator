import { UserData } from './types'

const USER_KEY = 'user'

export const getUser = () => {
  const user = sessionStorage.getItem(USER_KEY)
  return user ? JSON.parse(user) : null
}
export const isUserAuthenticated = () => getUser() !== null

export const saveUser = (user: UserData) => {
  sessionStorage.setItem(USER_KEY, JSON.stringify(user))
}
