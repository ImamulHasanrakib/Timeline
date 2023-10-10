const timelineItems = document.querySelectorAll('.timeline-item')
const timelineLine = document.querySelector('.timeline-line')

window.addEventListener('DOMContentLoaded', () => {
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 50 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
  let x = 0
  function updateTimelineLineHeight() {
    const timelineContainer = document.querySelector('.timeline')
    const timelinecontainerHeight = timelineContainer.clientHeight
    const rect = timelineContainer.getBoundingClientRect().top
    const value = window.innerHeight - rect

    if (timelineLine.clientHeight == timelinecontainerHeight) {
      return
    }

    if (value > 50) {
      const newHeight = Math.min(value, timelinecontainerHeight)
      timelineLine.style.height = newHeight + 'px'

      console.log(timelineLine.style.height)
    }
  }

  function animateTimelineItems() {
    timelineItems.forEach((item) => {
      if (isInViewport(item)) {
        item.style.opacity = '1'
        item.style.transform = 'translateX(0)'
      }
    })
    updateTimelineLineHeight()
  }

  window.addEventListener('scroll', animateTimelineItems)
  window.addEventListener('load', animateTimelineItems)
  window.addEventListener('resize', updateTimelineLineHeight)
})
