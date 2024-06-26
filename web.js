function navanimation(){
    var nav=document.querySelector(".navpart2")
    nav.addEventListener("mouseenter",function(){
        let tl=gsap.timeline()
        tl.to("#navbottom",{
            height:"21vh",
            duration:0.5
        })
        tl.to(".navpart2 h5 ",{
           display:"block",
           duration:0.1

        })
        tl.to(".navpart2 h5 span ",{
            y:0,
            stagger:{
                amount:0.6
            }
        })
    })
    nav.addEventListener("mouseleave",function(){
        let tl=gsap.timeline()
        tl.to(".navpart2 h5 span ",{
            y:25,
            stagger:{
                amount:0.2
            }
        })
        tl.to(".navpart2 h5",{
            display:"none",
            duration:0.1
        })
        tl.to("#navbottom",{
            height:0,
            duration:0.2
        })
    })
}
navanimation()
function page2anim(){
    var rightelems=document.querySelectorAll(".rightelem")
    rightelems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150
            })
        })
    })
}
page2anim()

function pg3video(){
    var pg3cen=document.querySelector(".page3center")
    var video=document.querySelector("#page3 video")
    pg3cen.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaley(1)",
            opacity:1,
            borderRadius:0
        })
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0.7) scaley(0)",
            opacity:1,
            borderRadius:"30px"
        })
    })
}
pg3video()





