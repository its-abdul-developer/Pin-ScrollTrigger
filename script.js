gsap.to("#page2 img",{
    width: "100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start: "top 0",
        end: "top -80%",
        scrub: 5,
        pin:true,
    }
})
gsap.to("#page4 h1",{
    transform:"translatex(-165%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start: "top 0",
        end: "top 100%",
        markers: true,
        scrub: 2,
        pin:true,
    }
})