(() => {
  'use strict'

  const marker = '__baleenaSharePageHistory'
  const pageUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`
  const state = window.history.state
  const isSharePage = state?.[marker] === 'share-page'

  // Replace the initial entry with Home, then add this page back on top. This
  // gives direct visitors a real Home document to return to with Back.
  if (!isSharePage) {
    window.history.replaceState({ [marker]: 'home' }, '', '/')
    window.history.pushState({ [marker]: 'share-page', path: pageUrl }, '', pageUrl)
  }

  let navigatingHome = false

  window.addEventListener('popstate', (event) => {
    if (navigatingHome || event.state?.[marker] !== 'home') {
      return
    }

    navigatingHome = true
    // A history URL change alone keeps this static document rendered. Replace
    // it with an actual document navigation so the React homepage loads.
    window.location.replace('/')
  })
})()
