(() => {
  'use strict'

  const marker = '__baleenaSharePageHistory'
  const pageUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`
  const currentState = window.history.state
  const isSharePage = currentState?.[marker] === 'share-page'

  // Keep both entries at the special-page URL. Back then lands on a URL that
  // differs from Home, making the subsequent replacement a document navigation.
  if (!isSharePage) {
    const preservedState = currentState && typeof currentState === 'object' ? currentState : {}

    window.history.replaceState(
      { ...preservedState, [marker]: 'return-target', path: pageUrl },
      '',
      pageUrl,
    )
    window.history.pushState({ [marker]: 'share-page', path: pageUrl }, '', pageUrl)
  }

  let navigatingHome = false

  window.addEventListener('popstate', (event) => {
    if (navigatingHome || event.state?.[marker] !== 'return-target') {
      return
    }

    navigatingHome = true
    // This entry still has the special-page URL, so replacing it with Home
    // loads the real React document instead of retaining this static document.
    window.location.replace('/')
  })
})()
