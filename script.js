gsap.registerPlugin(ScrollTrigger);

// page1 animation
function loadingAnimation() {
    gsap.from("#page1 h1", {  // home page
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
    });
    gsap.from("#page1 #video-container", {
        scale: 1.02,
        opacity: 0,
        delay: 1.3,
        duration: 0.8,
    });
    gsap.from("#page2 .ele img", {
        y: 30,
        opacity: 0,
        delay: 0,
        // duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#page2",
            start: "top bottom",
            // scrub: true,
        }
    });
    gsap.from("#page4 h2", {
        y: 30,
        delay: 0.5,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page4",
        }
    });
    gsap.from(".child", { // order page
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#page3",
            start: "top bottom",
            // scrub: 1,
        }
    });
    gsap.from("#page4 h2", {
        y: 100,
        opacity: 0.4,
        duration: 0.3,
        scrollTrigger: {
            trigger: "#page4",
        }
    });
    gsap.from(".topsection h3, .topsection p", {
        y: 30,
        opacity: 0,
        // delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
    });
    gsap.from(".finalsection .best", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
    });
    gsap.from(".drinks", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".drinks",
        }
    });
    gsap.from(".foods", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".foods",
        }
    });
    gsap.from(".merchs", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".merchs",
        }
    });
    gsap.from(".f1 div", { // gift page
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".f1",
        }
    });
    gsap.from(".f2 div", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".f2",
        }
    });
    gsap.from(".f3 div", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".f3",
        }
    });
    gsap.from(".f4 div", {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".f4",
        }
    });
    gsap.from(".reveal", {
        duration: 1.5,
        yPercent: 100,
        ease: "power4",
        stagger: 0.1
      });
}
loadingAnimation();


// smooth scroll
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


// calculate total 

function calcTotal1() {
    let amt1 = parseFloat(document.getElementById("amt1").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);

    oldamt +=amt1;
    document.getElementById("showTotal").innerHTML = oldamt;

    let title1 = document.getElementById("title1").innerHTML;
    window.alert(`${title1} added successfully.`);

    let removeBtn = document.getElementById("removeBtn1");
    removeBtn.style.display = "block";
}

function discardItem1() {
    let amt1 = parseFloat(document.getElementById("amt1").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);   
    
    oldamt -=amt1;
    document.getElementById("showTotal").innerHTML = oldamt;
    
    let removeBtn = document.getElementById("removeBtn1");
    removeBtn.style.display = "none";

}



function calcTotal2() {
    let amt2 = parseFloat(document.getElementById("amt2").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);
    
    oldamt +=amt2;
    document.getElementById("showTotal").innerHTML = oldamt;

    let title2 = document.getElementById("title2").innerHTML;
    window.alert(`${title2} added successfully.`);

    let removeBtn = document.getElementById("removeBtn2");
    removeBtn.style.display = "block";
}

function discardItem2() {
    let amt2 = parseFloat(document.getElementById("amt2").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);   
    
    oldamt -=amt2;
    document.getElementById("showTotal").innerHTML = oldamt;

    let removeBtn = document.getElementById("removeBtn2");
    removeBtn.style.display = "none";
}



function calcTotal3() {
    let amt3 = parseFloat(document.getElementById("amt3").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);
    
    oldamt +=amt3;
    document.getElementById("showTotal").innerHTML = oldamt;

    let title3 = document.getElementById("title3").innerHTML;
    window.alert(`${title3} added successfully.`);

    let removeBtn = document.getElementById("removeBtn3");
    removeBtn.style.display = "block";
}

function discardItem3() {
    let amt3 = parseFloat(document.getElementById("amt3").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);   
    
    oldamt -=amt3;
    document.getElementById("showTotal").innerHTML = oldamt;

    let removeBtn = document.getElementById("removeBtn3");
    removeBtn.style.display = "none";
}



function calcTotal4() {
    let amt4 = parseFloat(document.getElementById("amt4").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);
    
    oldamt +=amt4;
    document.getElementById("showTotal").innerHTML = oldamt;

    let title4 = document.getElementById("title4").innerHTML;
    window.alert(`${title4} added successfully.`);

    let removeBtn = document.getElementById("removeBtn4");
    removeBtn.style.display = "block";
}

function discardItem4() {
    let amt4 = parseFloat(document.getElementById("amt4").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);   
    
    oldamt -=amt4;
    document.getElementById("showTotal").innerHTML = oldamt;
    
    let removeBtn = document.getElementById("removeBtn4");
    removeBtn.style.display = "none";
}



function calcTotal5() {
    let amt5 = parseFloat(document.getElementById("amt5").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);
    
    oldamt +=amt5;
    document.getElementById("showTotal").innerHTML = oldamt;

    let title5 = document.getElementById("title5").innerHTML;
    window.alert(`${title5} added successfully.`);

    let removeBtn = document.getElementById("removeBtn5");
    removeBtn.style.display = "block";
}

function discardItem5() {
    let amt5 = parseFloat(document.getElementById("amt5").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);   
    
    oldamt -=amt5;
    document.getElementById("showTotal").innerHTML = oldamt;

    let removeBtn = document.getElementById("removeBtn5");
    removeBtn.style.display = "none";
}



function calcTotal6() {
    let amt5 = parseFloat(document.getElementById("amt6").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);
    
    oldamt +=amt5;
    document.getElementById("showTotal").innerHTML = oldamt;

    let title6 = document.getElementById("title6").innerHTML;
    window.alert(`${title6} added successfully.`);

    let removeBtn = document.getElementById("removeBtn6");
    removeBtn.style.display = "block";
}

function discardItem6() {
    let amt6 = parseFloat(document.getElementById("amt6").innerHTML);
    let oldamt = parseFloat(document.getElementById("showTotal").innerHTML);   
    
    oldamt -=amt6;
    document.getElementById("showTotal").innerHTML = oldamt;

    let removeBtn = document.getElementById("removeBtn6");
    removeBtn.style.display = "none";
}