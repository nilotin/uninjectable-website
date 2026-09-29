const video = document.querySelector('video')
const fallback = document.querySelector('#video-fallback')

video.addEventListener('error', () => {
  fallback.hidden = false
}, true)
