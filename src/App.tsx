import { useState, useEffect } from 'react'
import { Home, NewDocument, Error } from './pages'

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname)
    }

    // Handle navigation events
    const handlePopState = () => {
      updatePath()
    }

    // Custom listener for pushState/replaceState
    const handlePushReplaceState = () => {
      updatePath()
    }

    // Add listeners for popstate and custom events
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('pushstate', handlePushReplaceState)
    window.addEventListener('replacestate', handlePushReplaceState)

    // Override pushState and replaceState to dispatch custom events
    const originalPushState = window.history.pushState
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args)
      window.dispatchEvent(new Event('pushstate'))
    }

    const originalReplaceState = window.history.replaceState
    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args)
      window.dispatchEvent(new Event('replacestate'))
    }

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('pushstate', handlePushReplaceState)
      window.removeEventListener('replacestate', handlePushReplaceState)
    }
  }, [])
  return (
    <>
      {currentPath === '/new-document' ? (
        <NewDocument />
      ) : currentPath === '/' ? (
        <Home />
      ) : (
        <Error />
      )}
    </>
  )
}

export default App
