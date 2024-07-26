$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

   
    
});
 // Review carousel script
 const reviewWrap = document.getElementById("reviewWrap");
 const leftArrow = document.getElementById("leftArrow");
 const rightArrow = document.getElementById("rightArrow");
 const imgDiv = document.getElementById("imgDiv");
 const personName = document.getElementById("personName");
 const profession = document.getElementById("profession");
 const description = document.getElementById("description");

 let isChickenVisible;
 
 let people = [
     {
         photo:
             'url("https://i.ibb.co/5MWWJQf/Sivuyisiwe-Peter.jpg")',
         name: "Joel Mukanya",
         profession: "Lecturer",
         description:
             "Sivuyisiwe Peter is creative, well-behaved, dedicated, and a goal-getter; she enjoys working with her peers and works well on her projects. She has learned a variety of skills, such as web development, backend, and more.In addition, I worked with her, and you could see she can prioritize a task and do well with time management.I would like to wish her all the best; she is indeed a strong candidate"
     },
 
     {
         photo:
             "url('https://i.ibb.co/5MWWJQf/Sivuyisiwe-Peter.jpg')",
         name: "Rezaar Osman",
         profession: "Colleague",
         description:
             "I'm excited to provide a glowing testimonial for Sivuyisiwe, a standout colleague. Her mastery of HTML, CSS, Vue.js, and JavaScript is remarkable. Yet, it's her outstanding adaptability that truly distinguishes her. Learning from her has been a privilege, and I highly recommend her as an exceptional colleague."
     },
 
     {
         photo:
             "url('https://i.ibb.co/5MWWJQf/Sivuyisiwe-Peter.jpg')",
         name: "Pinda Fortuin",
         profession: "Colleague",
         description:
             "Sivuyisiwe Peter is a very hardworking and efficient person , she strives to get her work done to the best potential and executes a well structured work during Projects week"
     },
 
     {
         photo:
             "url('https://i.ibb.co/5MWWJQf/Sivuyisiwe-Peter.jpg')",
         name: "Carl James",
         profession: "Colleague",
         description:
             "Sivuyisiwe is a very intelligent young lady who always strives for the best despite the challenges. She is the true definition of dynamites come in small packages"
     }
 ];
 
 imgDiv.style.backgroundImage = people[0].photo;
 personName.innerText = people[0].name;
 profession.innerText = people[0].profession;
 description.innerText = people[0].description;
 let currentPerson = 0;
 
 //Select the side where you want to slide
 function slide(whichSide, personNumber) {
     let reviewWrapWidth = reviewWrap.offsetWidth + "px";
     let descriptionHeight = description.offsetHeight + "px";
     //(+ or -)
     let side1symbol = whichSide === "left" ? "" : "-";
     let side2symbol = whichSide === "left" ? "-" : "";
 
     let tl = gsap.timeline();
 
     if (isChickenVisible) {
         tl.to(chicken, {
             duration: 0.4,
             opacity: 0
         });
     }
 
     tl.to(reviewWrap, {
         duration: 0.4,
         opacity: 0,
         translateX: `${side1symbol + reviewWrapWidth}`
     });
 
     tl.to(reviewWrap, {
         duration: 0,
         translateX: `${side2symbol + reviewWrapWidth}`
     });
 
     setTimeout(() => {
         imgDiv.style.backgroundImage = people[personNumber].photo;
     }, 400);
     setTimeout(() => {
         description.style.height = descriptionHeight;
     }, 400);
     setTimeout(() => {
         personName.innerText = people[personNumber].name;
     }, 400);
     setTimeout(() => {
         profession.innerText = people[personNumber].profession;
     }, 400);
     setTimeout(() => {
         description.innerText = people[personNumber].description;
     }, 400);
 
     tl.to(reviewWrap, {
         duration: 0.4,
         opacity: 1,
         translateX: 0
     });
 
 }
 
 function setNextCardLeft() {
     if (currentPerson === 3) {
         currentPerson = 0;
         slide("left", currentPerson);
     } else {
         currentPerson++;
     }
 
     slide("left", currentPerson);
 }
 
 function setNextCardRight() {
     if (currentPerson === 0) {
         currentPerson = 3;
         slide("right", currentPerson);
     } else {
         currentPerson--;
     }
 
     slide("right", currentPerson);
 }
 
 leftArrow.addEventListener("click", setNextCardLeft);
 rightArrow.addEventListener("click", setNextCardRight);
 
 window.addEventListener("resize", () => {
     description.style.height = "100%";
 });