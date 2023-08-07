const d = document
const $ = selector => d.querySelector(selector)

function setCounter (counterText, decreaseBtn, increaseBtn, resetBtn) {
  // const $decrease = $(decreaseBtn)
  // const $increase = $(increaseBtn)
  // const $reset = $(resetBtn)
  const colorClasses = ['red', 'black', 'green']
  const $counterText = $(counterText)
  d.addEventListener('click', e => {
    let i = Number($counterText.textContent)
    if (e.target.matches(decreaseBtn)) i--
    if (e.target.matches(increaseBtn)) i++
    if (e.target.matches(resetBtn)) i = 0

    colorClasses.forEach(colorClass => {
      if ($counterText.classList.contains(colorClass)) $counterText.classList.remove(colorClass)
    })
    $counterText.classList.add(
      (Math.sign(i) < 0)
        ? 'red'
        : (Math.sign(i) > 0)
            ? 'green'
            : 'black'
    )
    console.log($counterText.classList)
    $counterText.textContent = i
  })
}
setCounter('.counter', '.decrease', '.increase', '.reset')
