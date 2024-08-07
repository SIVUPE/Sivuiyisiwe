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
 document.addEventListener("DOMContentLoaded", () => {
    const reviewWrap = document.getElementById("reviewWrap");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const imgDiv = document.getElementById("imgDiv");
    const personName = document.getElementById("personName");
    const profession = document.getElementById("profession");
    const description = document.getElementById("description");

    if (!reviewWrap || !leftArrow || !rightArrow || !imgDiv || !personName || !profession || !description) {
        console.error("One or more elements not found");
        return;
    }

    let currentPerson = 0;

    let people = [
        {
            photo: 'url("https://i.ibb.co/238HYKc/Screenshot-2024-04-05-155944.png")',
            name: "Joel Mukanya",
            profession: "Lecturer",
            description: "Sivuyisiwe Peter is creative, well-behaved, dedicated, and a goal-getter; she enjoys working with her peers and works well on her projects. She has learned a variety of skills, such as web development, backend, and more.In addition, I worked with her, and you could see she can prioritize a task and do well with time management.I would like to wish her all the best; she is indeed a strong candidate"
        },
        {
            photo: 'url("https://i.ibb.co/sVMKK2J/Screenshot-20240404-162419.jpg")',
            name: "Rezaar Osman",
            profession: "Colleague",
            description: "I'm excited to provide a glowing testimonial for Sivuyisiwe, a standout colleague. Her mastery of HTML, CSS, Vue.js, and JavaScript is remarkable. Yet, it's her outstanding adaptability that truly distinguishes her. Learning from her has been a privilege, and I highly recommend her as an exceptional colleague."
        },
        {
            photo: 'url("https://i.ibb.co/PMFKmjL/pin.jpg")',
            name: "Pinda Fortuin",
            profession: "Colleague",
            description: "Sivuyisiwe Peter is a very hardworking and efficient person, she strives to get her work done to the best potential and executes a well structured work during Projects week"
        },
        {
            photo: 'url("https://i.ibb.co/qpwjzqb/Screenshot-20240404-162339.jpg")',
            name: "Asisipho Gcusa",
            profession: "Colleague",
            description: "Sivuyisiwe is a very intelligent young lady who always strives for the best despite the challenges. She is the true definition of dynamites come in small packages"
        }
    ];

    function updatePerson(personNumber) {
        imgDiv.style.backgroundImage = people[personNumber].photo;
        personName.innerText = people[personNumber].name;
        profession.innerText = people[personNumber].profession;
        description.innerText = people[personNumber].description;
    }

    function slide(whichSide, personNumber) {
        let reviewWrapWidth = reviewWrap.offsetWidth;
        let side1symbol = whichSide === "left" ? "" : "-";
        let side2symbol = whichSide === "left" ? "-" : "";

        let tl = gsap.timeline();

        tl.to(reviewWrap, { x: side1symbol + reviewWrapWidth, duration: 0.5 })
            .to(reviewWrap, { duration: 0, x: side2symbol + reviewWrapWidth })
            .add(() => {
                updatePerson(personNumber);
            })
            .to(reviewWrap, { x: 0, duration: 0.5 });
    }

    function setNextCardLeft() {
        currentPerson = (currentPerson + 1) % people.length;
        slide("left", currentPerson);
    }

    function setNextCardRight() {
        currentPerson = (currentPerson - 1 + people.length) % people.length;
        slide("right", currentPerson);
    }

    leftArrow.addEventListener("click", setNextCardLeft);
    rightArrow.addEventListener("click", setNextCardRight);

    window.addEventListener("resize", () => {
        description.style.height = "100%";
    });

    updatePerson(currentPerson); // Initialize the first person's data
});
