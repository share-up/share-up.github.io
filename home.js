/* Fade in Fade out slides */
let TIME_PER_WORD = 2000;
let TIME_PER_SLIDE = 4000; //words homepage
let slides = document.getElementsByClassName("slide");
let numPages = slides ? slides.length : 0;


let i = 0;
let j=0;
let feedbacks = document.getElementsByClassName("feedback-slide");
let TIME_PER_FEEDBACK = 8000;

function switchSlides(){

    
    feedbacks[j].classList.add('elementToFadeOutDown');
    feedbacks[j].style.display="none";
    j=j+1;
    j=j%feedbacks.length;
    feedbacks[j].classList.add('elementToFadeInDown');
    feedbacks[j].style.display="flex";
    setTimeout(switchSlides,TIME_PER_FEEDBACK);
}

function goRight(){
    feedbacks[j].classList.add('elementToFadeOutDown');
    feedbacks[j].style.display="none";
    j=j+1;
    j=j%feedbacks.length;
    feedbacks[j].classList.add('elementToFadeInDown');
    feedbacks[j].style.display="flex";
}

function goLeft(){
    feedbacks[j].classList.add('elementToFadeOutDown');
    feedbacks[j].style.display="none";
    j=j-1;
    if(j<0) j=2;
    feedbacks[j].classList.add('elementToFadeInDown');
    feedbacks[j].style.display="flex";
}

function nextSlide() {
    
    if (i >= 0)
        (slides[i]).classList.remove('currentSlide');
    (slides[i]).classList.remove('overlay');
    (slides[i]).classList.remove('elementToFadeOutDown');
    (slides[i]).classList.remove('elementToFadeInDown');
    i = ++i % numPages;

    (slides[i]).classList.add('currentSlide');
    (slides[i]).classList.add('overlay');
    (slides[i]).classList.add('elementToFadeInDown');

    setTimeout(function() {
        (slides[i]).classList.remove('elementToFadeInDown');
        (slides[i]).classList.add('elementToFadeOutDown');
    }, TIME_PER_WORD);
    setTimeout(nextSlide, TIME_PER_SLIDE);
    

}

nextSlide();
switchSlides();


let globalLink= document.getElementById("global-link");
let navbarLinksContainer= document.getElementsByClassName("navbar-links");
document.getElementById("navbar-icon").addEventListener("click",function(){
    if(navbarLinksContainer[0].style.display==="inline-block"){
        navbarLinksContainer[0].style.display="none";
        globalLink.style.display="none";
    }
    else{
        navbarLinksContainer[0].style.display="inline-block";
        globalLink.style.display="inline-block";
    }
});

let navbarLinks= document.getElementsByClassName("navbar-element");

for(let k=0;k<navbarLinks.length;k++){
    navbarLinks[k].addEventListener("click",function(){
        if(navbarLinksContainer[0].style.display==="inline-block"){
            navbarLinksContainer[0].style.display="none";
            globalLink.style.display="none";
        }
    });
}

let arrows = document.getElementsByClassName("arrow");

arrows[0].addEventListener("click",goLeft)
arrows[1].addEventListener("click",goRight)



let socialLinks=document.getElementsByClassName("social-media-link");
let socialLinksHover=document.getElementsByClassName("social-media-link-hover");
for(let h=0;h<socialLinks.length;h++){
    socialLinks[h].addEventListener("mouseover",function(){
       
        socialLinksHover[h].style.display="inline-block";
        socialLinks[h].style.display="none";
            
    })
    socialLinksHover[h].addEventListener("mouseout",function(){
        
        socialLinksHover[h].style.display="none";
        socialLinks[h].style.display="inline-block";
        socialLinks[h].style.zIndex="999";
        
    })
}   
