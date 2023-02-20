// ======================================================================================= //
// parallax scrolling effect
// ======================================================================================= //

// implement scrolltrigger
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 1 });

// create a sequence that moves 2 panels from different directions
const tl = gsap.timeline();
tl
  .from('.transition1', { yPercent: 100 })
  .from('#jinxvi-page', { yPercent: 100})
  .from('.transition2', { xPercent: 300 })
  .from('#characterslide',{yPercent:100})
  .from('.transition3', { yPercent: 100 });

// pin the container and link the animation to the scroll bar (scrub)
ScrollTrigger.create({
  animation: tl,
  trigger: '.scroll-container',
  start: '15vh top',
  // end:'+=2300',

  end:'+=2400vh',
  scrub: 1,
  pin: true,
  ease: 'none',
  // markers:true,
  // snap:true,
  anticipatePin: 1
})


// ======================================================================================= //
// enlarge words on scroll
// ======================================================================================= //
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.divided',
    scrub: true,
    // markers: true,
    start: 'top bottom',
    end: 'bottom center',
  },
  defaults: {
    opacity: 1
  }
})
tl2
  .from('.divided', {
    yPercent: 100,
    opacity: 0,
    duration: .1
  })
  .to('.divided', {
    scale: 2,
    duration:0.1 ,
  })

// ======================================================================================= //
// jinx and vi slide in
// ======================================================================================= //
ScrollTrigger.matchMedia({

  "(min-width: 768px)": function () {

    gsap.from('.slideh1', {
      scrollTrigger: {
        trigger: '.slideh1',
        scrub: true
      },
      xPercent: 400,
      ease: 'none',
      duration:1
    })
    gsap.from('.slidep', {
      scrollTrigger: {
        trigger: '.slideh1',
        scrub: true
      },
      xPercent: -400,
      ease: 'none'
    })
  }
});


























// ======================================================================================= //
// media cards
// ======================================================================================= //
// const mediatimeline = gsap.timeline()
// gsap.to('.leftdiv',{
//   scrollTrigger:{
//     trigger:'.mediacontainer',
//     scrub: true,
//     pin: true
//   },
//   xPercent: -100,
//   duration:3
// })
// gsap.to('.rightdiv',{
//   scrollTrigger:{
//     trigger:'.mediacontainer',
//     scrub: true
//   },
//   xPercent: 100,
//   duration:3
// })