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

let teamCards = document.getElementsByClassName("person-card");
let teamCardsCurtains = document.getElementsByClassName("curtain");

for(let k=0;k<teamCards.length;k++){
    teamCards[k].addEventListener("mouseover",function(){
        let computedStyle=getComputedStyle(teamCards[k]);
        let height=teamCards[k].clientHeight;
        let width=teamCards[k].clientWidth;
        height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        height=height+"px"
        width=width+"px"
        teamCardsCurtains[k].style.width=width;
        teamCardsCurtains[k].style.height=height;
        teamCardsCurtains[k].style.display="flex";
        
    })
    teamCards[k].addEventListener("mouseout",function(){
        teamCardsCurtains[k].style.display="none";
    })
}   

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
