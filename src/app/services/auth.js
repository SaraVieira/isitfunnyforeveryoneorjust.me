import netlifyIdentity from 'netlify-identity-widget'

export const isBrowser = () => typeof window !== 'undefined'
export const initAuth = () => {
  if (isBrowser()) {
    window.netlifyIdentity = netlifyIdentity
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init()
  }
}
export const getUser = () =>
  isBrowser() && window.localStorage.getItem('netlifyUser')
    ? JSON.parse(window.localStorage.getItem('netlifyUser'))
    : {}

const setUser = user =>
  window.localStorage.setItem('netlifyUser', JSON.stringify(user))

export const handleLogin = callback => {
  console.log('isLoggedIn check', isLoggedIn())
  if (isLoggedIn()) {
    console.log('logged in')
    callback(getUser())
  } else {
    console.log('logging in...')
    console.log(netlifyIdentity)
    netlifyIdentity.open()
    netlifyIdentity.on('login', user => {
      console.log('logged in!', { user })
      setUser(user)
      callback(user)
    })
  }
}

export const isLoggedIn = () => {
  if (!isBrowser()) return false
  // const user = getUser()
  const user = netlifyIdentity.currentUser()
  console.log('isLoggedIn check', { user })
  return !!user
}

export const logout = callback => {
  netlifyIdentity.logout()
  netlifyIdentity.on('logout', () => {
    setUser({})
    callback()
  })
}
