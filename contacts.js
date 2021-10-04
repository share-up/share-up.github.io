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
