const DURATION = 3000

const formatNumber = (num) => {
  let number = num.toFixed(0)
  const rgx = /(\d+)(\d{3})/
  while (rgx.test(number)) {
    number = number.replace(rgx, '$1' + ',' + '$2')
  }
  return number
}

const countTo = (() => {
  const initDom = (el, binding) => {
    el.innerHTML = ''
    if (!binding.value || isNaN(binding.value)) {
      el.innerHTML = binding.value
      return false
    }
    return true
  }
  const countNum = (el, binding) => {
    let startTime
    let duration = DURATION

    const arg = binding.arg
    const modifiers = binding.modifiers
    const modifiersArr = Object.keys(modifiers)
    if ((arg && arg === 'time') && modifiersArr.length) {
      duration = isNaN(modifiersArr[0]) ? DURATION : parseInt(modifiersArr[0])
    }

    const count = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }
      const progress = timestamp - startTime
      const printVal = binding.value * Math.min((progress / duration).toFixed(2), 1)
      el.innerHTML = formatNumber(printVal)
      if (progress < duration) {
        requestAnimationFrame(count)
      }
    }
    requestAnimationFrame(count)
  }
  const handleCount = (el, binding) => {
    if (!initDom(el, binding)) {
      return
    }
    countNum(el, binding)
  }

  return {
    bind (el, binding) {
      handleCount(el, binding)
    },
    updated (el, binding) {
      if (binding.value !== binding.oldValue) {
        handleCount(el, binding)
      }
    }
  }
})()

export default countTo
