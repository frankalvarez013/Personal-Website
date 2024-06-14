console.log(gsap)
gsap.registerPlugin(CustomEase)
const meTl = gsap.timeline({
  onComplete: addMouseEvent,
  delay: 1,
})
gsap.set('.bg', { transformOrigin: '50% 50%' })
gsap.set('.ear-right', { transformOrigin: '0% 50%' })
gsap.set('.ear-left', { transformOrigin: '100% 50%' })
gsap.set('.me', { opacity: 1 })
console.log(gsap.getProperty('.face', 'transform'))
console.log(gsap.getProperty('.outline', 'transform'))
meTl
  .from(
    '.me',
    {
      duration: 1,
      yPercent: 100,
      ease: 'elastic.out(0.5, 0.4)',
    },
    0.5
  )
  .from(
    '.head , .hair , .shadow',
    {
      duration: 0.9,
      yPercent: 20,
      ease: 'elastic.out(0.58, 0.25)',
    },
    0.6
  )
  .from(
    '.ear-right',
    {
      duration: 1,
      rotate: 40,
      yPercent: 10,
      ease: 'elastic.out(0.5, 0.2)',
    },
    0.7
  )
  .from(
    '.ear-left',
    {
      duration: 1,
      rotate: -40,
      yPercent: 10,
      ease: 'elastic.out(0.5, 0.2)',
    },
    0.7
  )
  .to(
    '.glasses',
    {
      duration: 1,
      keyframes: [{ yPercent: -10 }, { yPercent: -0 }],
      ease: 'elastic.out(0.5, 0.2)',
    },
    0.75
  )
  .from(
    '.eyebrow-right , .eyebrow-left',
    {
      duration: 1,
      yPercent: 300,
      ease: 'elastic.out(0.5, 0.2)',
    },
    0.7
  )
  .to(
    '.eye-right , .eye-left',
    {
      duration: 0.01,
      opacity: 1,
    },
    0.85
  )
  .to(
    '.eye-right-2 , .eye-left-2',
    {
      duration: 0.01,
      opacity: 0,
    },
    0.85
  )

const blink = gsap.timeline({
  repeat: -1,
  repeatDelay: 5,
  paused: true,
})

blink
  .to(
    '.eye-right, .eye-left',
    {
      duration: 0.01,
      opacity: 0,
    },
    0
  )
  .to(
    '.eye-right-2, .eye-left-2',
    {
      duration: 0.01,
      opacity: 1,
    },
    0
  )
  .to(
    '.eye-right, .eye-left',
    {
      duration: 0.01,
      opacity: 1,
    },
    0.15
  )
  .to(
    '.eye-right-2 , .eye-left-2',
    {
      duration: 0.01,
      opacity: 0,
    },
    0.15
  )

// end animation

// mouse coords stuff

let xPosition
let yPosition

let height
let width

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue
}

let dizzyIsPlaying
function updateScreenCoords(event) {
  if (!dizzyIsPlaying) {
    xPosition = event.clientX
    yPosition = event.clientY
  }
}

let storedXPosition = 0
let storedYPosition = 0
// gsap can use queryselector in the quick setter but this is better for performance as it touches the DOM less
const dom = {
  face: document.querySelector('.face'),
  eye: document.querySelectorAll('.eye'),
  innerFace: document.querySelector('.inner-face'),
  hairFront: document.querySelector('.hair-front'),
  hairBack: document.querySelector('.hair-back'),
  shadow: document.querySelectorAll('.shadow'),
  ear: document.querySelectorAll('.ear'),
  eyebrowLeft: document.querySelector('.eyebrow-left'),
  eyebrowRight: document.querySelector('.eyebrow-right'),
}

function animateFace() {
  if (!xPosition) return
  // important, only recalculating if the value changes
  if (storedXPosition === xPosition && storedYPosition === yPosition) return

  // range from -50 to 50
  let x = percentage(xPosition, width) - 50
  let y = percentage(yPosition, height) - 50

  // range from -20 to 80
  let yHigh = percentage(yPosition, height) - 20
  // range from -80 to 20
  let yLow = percentage(yPosition, height) - 80

  gsap.to(dom.face, {
    yPercent: yLow / 30,
    xPercent: x / 30,
  })
  gsap.to(dom.eye, {
    yPercent: yHigh / 3,
    xPercent: x / 2,
  })
  gsap.to(dom.innerFace, {
    yPercent: y / 12, // Adjusted the divisor to reduce movement
    xPercent: x / 50,
  })
  gsap.to(dom.hairFront, {
    yPercent: yHigh / 15,
    xPercent: x / 22,
  })
  gsap.to([dom.hairBack, dom.shadow], {
    yPercent: (yLow / 20) * -1,
    xPercent: (x / 20) * -1,
  })
  gsap.to(dom.ear, {
    yPercent: (y / 1.5) * -1,
    xPercent: x / 1.5,
  })
  gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
    yPercent: y * 1.5,
  })

  storedXPosition = xPosition
  storedYPosition = yPosition
}

// function being called at the end of main timeline
function addMouseEvent() {
  const safeToAnimate = window.matchMedia(
    '(prefers-reduced-motion: no-preference)'
  ).matches

  if (safeToAnimate) {
    window.addEventListener('mousemove', updateScreenCoords)

    // gsap's RAF, falls back to set timeout
    gsap.ticker.add(animateFace)

    blink.play()
  }
}

// update if browser resizes
function updateWindowSize() {
  height = window.innerHeight
  width = window.innerWidth
}
updateWindowSize()
window.addEventListener('resize', updateWindowSize)
