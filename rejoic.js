function locomotive(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}

function cursor(){
    var page1 = document.querySelector(".page1");
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".back_cursor");
page1.addEventListener("mousemove",function(dets){

gsap.to(cursor,{
    x:dets.x,
y:dets.y
})

gsap.to(cursor2,{
    x:dets.x,
    y:dets.y
})

})


page1.addEventListener("mouseenter",function(){

gsap.to(cursor,{
    scale:1,
    opacity:1
})



})

page1.addEventListener("mouseleave",function(){
    
    gsap.to(cursor,{
        scale:0,
        opacity:0
        
    })
  
})

page1.addEventListener("mouseenter",function(){

    gsap.to(cursor2,{
        scale:1,
        opacity:1
    })
    
    
    
    })
    
    page1.addEventListener("mouseleave",function(){
        
        gsap.to(cursor2,{
            scale:0,
            opacity:0
            
        })
      
    })
}


function animations(){
    gsap.from("#element",{

        y:200,
        duration:1,
        stagger:0.2,
        opacity:0,
        
        scrollTrigger:{
        
        trigger:".page2",
        scroller:".main",
        start:"-10% 47%",
        end:"5% 46%",
        // markers:true,
        scrub:2
        }
        
        })
        
        
        gsap.from("#element2",{
        
        y:200,
        opacity:0,
        stagger:0.2,
        
        scrollTrigger:{
        
            trigger:".page4",
            scroller:".main",
            start:"-20% 50%",
            end:"top 50%",
            // markers:true,
            scrub:2
        
        }
        
        
        
        })
}




cursor()
locomotive()
animations()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });