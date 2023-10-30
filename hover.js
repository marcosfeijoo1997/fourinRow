let hoverElements1=document.getElementsByClassName("firstRow")
let hoverElements2=document.getElementsByClassName("secondRow")
let hoverElements3=document.getElementsByClassName("thirdRow")
let hoverElements4=document.getElementsByClassName("quarterRow")
let hoverElements5=document.getElementsByClassName("fifthRow")
let hoverElements6=document.getElementsByClassName("sixththRow")
let hoverElements7=document.getElementsByClassName("seventhRow")
let id1=document.getElementById("firstRow")
/*inicio for (background*/



for (let i = 0; i < Math.min(hoverElements1.length, 7); i++) {
    for(let j = 0; j < Math.min(hoverElements1.length, 7);j++){
    hoverElements1[i].addEventListener("mouseover", () => {
      
       hoverElements1[j].style.background='rgba(0, 0, 0, 0.1)'
 
    })
    hoverElements1[i].addEventListener("mouseout", () => {
       
        hoverElements1[j].style.backgroundColor = '';
      });
};
   
}


for (let i = 0; i < Math.min(hoverElements2.length, 7); i++) {
    for(let j = 0; j < Math.min(hoverElements2.length, 7);j++){
    hoverElements2[i].addEventListener("mouseover", () => {
      
       hoverElements2[j].style.background='rgba(0, 0, 0, 0.1)'
 
    })
    hoverElements2[i].addEventListener("mouseout", () => {
       
        hoverElements2[j].style.backgroundColor = '';
      });
};
   
}
for (let i = 0; i < Math.min(hoverElements3.length, 7); i++) {
    for(let j = 0; j < Math.min(hoverElements3.length, 7);j++){
    hoverElements3[i].addEventListener("mouseover", () => {
      
       hoverElements3[j].style.background='rgba(0, 0, 0, 0.1)'
 
    })
    hoverElements3[i].addEventListener("mouseout", () => {
       
        hoverElements3[j].style.backgroundColor = '';
      });
};
   
}

for (let i = 0; i < Math.min(hoverElements4.length, 7); i++) {
    for(let j = 0; j < Math.min(hoverElements4.length, 7);j++){
    hoverElements4[i].addEventListener("mouseover", () => {
      
       hoverElements4[j].style.background='rgba(0, 0, 0, 0.1)'
 
    })
    hoverElements4[i].addEventListener("mouseout", () => {
       
        hoverElements4[j].style.backgroundColor = '';
      });
};
   
}
for (let i = 0; i < Math.min(hoverElements5.length, 7); i++) {
    for(let j = 0; j < Math.min(hoverElements5.length, 7);j++){
    hoverElements5[i].addEventListener("mouseover", () => {
      
       hoverElements5[j].style.background='rgba(0, 0, 0, 0.1)'
 
    })
    hoverElements5[i].addEventListener("mouseout", () => {
       
        hoverElements5[j].style.backgroundColor = '';
      });
};
   
}
for (let i = 0; i < Math.min(hoverElements6.length, 7); i++) {
    for(let j = 0; j < Math.min(hoverElements6.length, 7);j++){
    hoverElements6[i].addEventListener("mouseover", () => {
      
       hoverElements6[j].style.background='rgba(0, 0, 0, 0.1)'
 
    })
    hoverElements6[i].addEventListener("mouseout", () => {
       
        hoverElements6[j].style.backgroundColor = '';
      });
};
   
}
for (let i = 0; i < Math.min(hoverElements7.length, 7); i++) {
    for(let j = 0; j < Math.min(hoverElements7.length, 7);j++){
    hoverElements7[i].addEventListener("mouseover", () => {
      
       hoverElements7[j].style.background='rgba(0, 0, 0, 0.1)'
 
    })
    hoverElements7[i].addEventListener("mouseout", () => {
       
        hoverElements7[j].style.backgroundColor = '';
      });
};
   
}