let fichaElements1=document.getElementsByClassName("firstRow")
let fichaElements2=document.getElementsByClassName("secondRow")
let fichaElements3=document.getElementsByClassName("thirdRow")
let fichaElements4=document.getElementsByClassName("quarterRow")
let fichaElements5=document.getElementsByClassName("fifthRow")
let fichaElements6=document.getElementsByClassName("sixththRow")
let fichaElements7=document.getElementsByClassName("seventhRow")
let filas=document.getElementsByTagName("tr")//[5].children[6]
let count=0
let numberOfFiles1=6
let numberOfFiles2=6
let numberOfFiles3=6
let numberOfFiles4=6
let numberOfFiles5=6
let numberOfFiles6=6
let numberOfFiles7=6
let table=document.getElementsByTagName("table")[0]
let star=document.getElementById("star")
let estrella=document.createElement("polygon")
estrella.setAttribute("points","60,15 70,45 100,45 75,65 85,95 60,75 35,95 45,65 20,45 50,45")
estrella.setAttribute("fill","black")
// <polygon points="60,15 70,45 100,45 75,65 85,95 60,75 35,95 45,65 20,45 50,45" fill="red" />


let newGame=document.getElementById("newGame")
addEventListener("DOMContentLoaded", () => {


let array=[

    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],    
    [0,0,0,0,0,0,0],


]




/*2 es rojo, 1 es azul*/
table.addEventListener("click",function contador(){






//horizontal
    for (let i=0; i<=5;i++){
        for(let j=0;j<=3;j++){
      
            if((array[i][j]>0)&&(array[i][j]===array[i][j+1])&&(array[i][j]===array[i][j+2])&&(array[i][j]===array[i][j+3])){
           
               if(array[i][j]===1){
          
           
      
        
                    filas[i].children[j].children[0].children[1].classList.remove("starHidden")
                    filas[i].children[j].children[0].children[1].classList.add("starRed")


                    filas[i].children[j+1].children[0].children[1].classList.remove("starHidden")
                    filas[i].children[j+1].children[0].children[1].classList.add("starRed")


                    filas[i].children[j+2].children[0].children[1].classList.remove("starHidden")
                    filas[i].children[j+2].children[0].children[1].classList.add("starRed")


                    filas[i].children[j+3].children[0].children[1].classList.remove("starHidden")
                    filas[i].children[j+3].children[0].children[1].classList.add("starRed")
        

   
               }
               if(array[i][j]===2)
      {
               filas[i].children[j].children[0].children[1].classList.remove("starHidden")
               filas[i].children[j].children[0].children[1].classList.add("starBlue")


               filas[i].children[j+1].children[0].children[1].classList.remove("starHidden")
               filas[i].children[j+1].children[0].children[1].classList.add("starBlue")


               filas[i].children[j+2].children[0].children[1].classList.remove("starHidden")
               filas[i].children[j+2].children[0].children[1].classList.add("starBlue")


               filas[i].children[j+3].children[0].children[1].classList.remove("starHidden")
               filas[i].children[j+3].children[0].children[1].classList.add("starBlue")}

            }
            

  
        }
    }
//vertical
    for (let i=0;i<=2;i++){
        for (let j=0;j<=6;j++){

          if((array[i][j]>0)&&(array[i][j]===array[i+1][j])&&(array[i][j]===array[i+2][j])&&(array[i][j]===array[i+3][j])){
  
            if(array[i][j]===1){
          
           
      
        
                filas[i].children[j].children[0].children[1].classList.remove("starHidden")
                filas[i].children[j].children[0].children[1].classList.add("starRed")


                filas[i+1].children[j].children[0].children[1].classList.remove("starHidden")
                filas[i+1].children[j].children[0].children[1].classList.add("starRed")


                filas[i+2].children[j].children[0].children[1].classList.remove("starHidden")
                filas[i+2].children[j].children[0].children[1].classList.add("starRed")


                filas[i+3].children[j].children[0].children[1].classList.remove("starHidden")
                filas[i+3].children[j].children[0].children[1].classList.add("starRed")
    


           }
           if(array[i][j]===2)
  {
         
    filas[i].children[j].children[0].children[1].classList.remove("starHidden")
    filas[i].children[j].children[0].children[1].classList.add("starBlue")


    filas[i+1].children[j].children[0].children[1].classList.remove("starHidden")
    filas[i+1].children[j].children[0].children[1].classList.add("starBlue")


    filas[i+2].children[j].children[0].children[1].classList.remove("starHidden")
    filas[i+2].children[j].children[0].children[1].classList.add("starBlue")


    filas[i+3].children[j].children[0].children[1].classList.remove("starHidden")
    filas[i+3].children[j].children[0].children[1].classList.add("starBlue")
        
        
        }
          }
        }
    }
//diagonal hacia la derecha
    for (let i=5;i>0;i--){
        for(let j=0;j<=3;j++){
          if((array[i][j]>0)&&(array[i][j]===array[i-1][j+1])&&(array[i][j]===array[i-2][j+2])&&(array[i][j]===array[i-3][j+3])){

            if(array[i][j]===1){
          
           
      
        
                filas[i].children[j].children[0].children[1].classList.remove("starHidden")
                filas[i].children[j].children[0].children[1].classList.add("starRed")


                filas[i-1].children[j+1].children[0].children[1].classList.remove("starHidden")
                filas[i-1].children[j+1].children[0].children[1].classList.add("starRed")


                filas[i-2].children[j+2].children[0].children[1].classList.remove("starHidden")
                filas[i-2].children[j+2].children[0].children[1].classList.add("starRed")


                filas[i-3].children[j+3].children[0].children[1].classList.remove("starHidden")
                filas[i-3].children[j+3].children[0].children[1].classList.add("starRed")
    


           }
           if(array[i][j]===2)
  {
    filas[i].children[j].children[0].children[1].classList.remove("starHidden")
    filas[i].children[j].children[0].children[1].classList.add("starBlue")


    filas[i-1].children[j+1].children[0].children[1].classList.remove("starHidden")
    filas[i-1].children[j+1].children[0].children[1].classList.add("starBlue")


    filas[i-2].children[j+2].children[0].children[1].classList.remove("starHidden")
    filas[i-2].children[j+2].children[0].children[1].classList.add("starBlue")


    filas[i-3].children[j+3].children[0].children[1].classList.remove("starHidden")
    filas[i-3].children[j+3].children[0].children[1].classList.add("starBlue")

        }
          }
        }
    }
  //diagonal hacia la izq
    for (let i=0;i<=2;i++){
        for(let j=0;j<=3;j++){
          if((array[i][j]>0)&&(array[i][j]===array[i+1][j+1])&&(array[i][j]===array[i+2][j+2])&&(array[i][j]===array[i+3][j+3])){

            if(array[i][j]===1){
          
           
      
        
                filas[i].children[j].children[0].children[1].classList.remove("starHidden")
                filas[i].children[j].children[0].children[1].classList.add("starRed")


                filas[i+1].children[j+1].children[0].children[1].classList.remove("starHidden")
                filas[i+1].children[j+1].children[0].children[1].classList.add("starRed")


                filas[i+2].children[j+2].children[0].children[1].classList.remove("starHidden")
                filas[i+2].children[j+2].children[0].children[1].classList.add("starRed")


                filas[i+3].children[j+3].children[0].children[1].classList.remove("starHidden")
                filas[i+3].children[j+3].children[0].children[1].classList.add("starRed")
    

           }
           if(array[i][j]===2)
  {
    filas[i].children[j].children[0].children[1].classList.remove("starHidden")
    filas[i].children[j].children[0].children[1].classList.add("starBlue")


    filas[i+1].children[j+1].children[0].children[1].classList.remove("starHidden")
    filas[i+1].children[j+1].children[0].children[1].classList.add("starBlue")


    filas[i+2].children[j+2].children[0].children[1].classList.remove("starHidden")
    filas[i+2].children[j+2].children[0].children[1].classList.add("starBlue")


    filas[i+3].children[j+3].children[0].children[1].classList.remove("starHidden")
    filas[i+3].children[j+3].children[0].children[1].classList.add("starBlue")
        }
          }
        }
    }
    



})
  
for (let i=0;i<=5;i++){
    
    fichaElements1[i].addEventListener("click",
function firstRowFunction(){
    

    if (numberOfFiles1>0){

if(count%2===1){
        array[numberOfFiles1-1][0]=1}
        if(count%2===0){
            array[numberOfFiles1-1][0]=2}



    numberOfFiles1--
}

    
        let circle=fichaElements1[numberOfFiles1].firstChild.children[0];
        
    
        if(circle.attributes.fill.value=='white'){
            count++
    
         
      if(count%2===0){   if(circle.attributes.fill.value==='white'){
        setTimeout(()=>{   circle.setAttribute("fill", "blue")},10)
     
        
        }}
        if(count%2===1){if(circle.attributes.fill.value==='white'){
            setTimeout(()=>{   circle.setAttribute("fill", "red")},10)}
        }}
  
    })
    
    }
    
for (let i=0;i<=5;i++){
    fichaElements2[i].addEventListener("click",()=>{
        if (numberOfFiles2>0){

            if(count%2===1){
                    array[numberOfFiles2-1][1]=1}
                    if(count%2===0){
                        array[numberOfFiles2-1][1]=2}
            
            
            
                numberOfFiles2--
            }
            
    
        let circle=fichaElements2[numberOfFiles2].firstChild.children[0];
        
    
        if(circle.attributes.fill.value=='white'){
            count++
    
         
      if(count%2===0){   if(circle.attributes.fill.value==='white'){
        setTimeout(()=>{   circle.setAttribute("fill", "blue")},10)
     
        
        }}
        if(count%2===1){if(circle.attributes.fill.value==='white'){
            setTimeout(()=>{   circle.setAttribute("fill", "red")},10)}
        }}
 
    })
    
    }
    
for (let i=0;i<=5;i++){
        fichaElements3[i].addEventListener("click",()=>{
            if (numberOfFiles3>0){

                if(count%2===1){
                        array[numberOfFiles3-1][2]=1}
                        if(count%2===0){
                            array[numberOfFiles3-1][2]=2}
                
                
                
                    numberOfFiles3--
                }
                
        
            let circle=fichaElements3[numberOfFiles3].firstChild.children[0];
            
        
            if(circle.attributes.fill.value=='white'){
                count++
        
             
          if(count%2===0){   if(circle.attributes.fill.value==='white'){
            setTimeout(()=>{   circle.setAttribute("fill", "blue")},10)
         
            
            }}
            if(count%2===1){if(circle.attributes.fill.value==='white'){
                setTimeout(()=>{   circle.setAttribute("fill", "red")},10)}
            }}
     
        })
        
        }
        
        
for (let i=0;i<=5;i++){
            fichaElements4[i].addEventListener("click",()=>{
                if (numberOfFiles4>0){

                    if(count%2===1){
                            array[numberOfFiles4-1][3]=1}
                            if(count%2===0){
                                array[numberOfFiles4-1][3]=2}
                    
                    
                    
                        numberOfFiles4--
                    }
                    
                let circle=fichaElements4[numberOfFiles4].firstChild.children[0];
                
            
                if(circle.attributes.fill.value=='white'){
                    count++
            
                 
              if(count%2===0){   if(circle.attributes.fill.value==='white'){
                setTimeout(()=>{   circle.setAttribute("fill", "blue")},10)
             
                
                }}
                if(count%2===1){if(circle.attributes.fill.value==='white'){
                    setTimeout(()=>{   circle.setAttribute("fill", "red")},10)}
                }}
               
            })
            
            }
for (let i=0;i<=5;i++){
                fichaElements5[i].addEventListener("click",()=>{
                    if (numberOfFiles5>0){

                        if(count%2===1){
                                array[numberOfFiles5-1][4]=1}
                                if(count%2===0){
                                    array[numberOfFiles5-1][4]=2}
                        
                        
                        
                            numberOfFiles5--
                        }
                    let circle=fichaElements5[numberOfFiles5].firstChild.children[0];
                    
                
                    if(circle.attributes.fill.value=='white'){
                        count++
                
                     
                  if(count%2===0){   if(circle.attributes.fill.value==='white'){
                    setTimeout(()=>{   circle.setAttribute("fill", "blue")},10)
                 
                    
                    }}
                    if(count%2===1){if(circle.attributes.fill.value==='white'){
                        setTimeout(()=>{   circle.setAttribute("fill", "red")},10)}
                    }}
              
                })
                
                }
                
for (let i=0;i<=5;i++){
                    fichaElements6[i].addEventListener("click",()=>{
                        if (numberOfFiles6>0){

                            if(count%2===1){
                                    array[numberOfFiles6-1][5]=1}
                                    if(count%2===0){
                                        array[numberOfFiles6-1][5]=2}
                            
                            
                            
                                numberOfFiles6--
                            }
                        let circle=fichaElements6[numberOfFiles6].firstChild.children[0];
                        
                    
                        if(circle.attributes.fill.value=='white'){
                            count++
                    
                         
                      if(count%2===0){   if(circle.attributes.fill.value==='white'){
                        setTimeout(()=>{   circle.setAttribute("fill", "blue")},10)
                     
                        
                        }}
                        if(count%2===1){if(circle.attributes.fill.value==='white'){
                            setTimeout(()=>{   circle.setAttribute("fill", "red")},10)}
                        }}
                   
                    })
                    
                    }
for (let i=0;i<=5;i++){
 fichaElements7[i].addEventListener("click",()=>{
    if (numberOfFiles7>0){

        if(count%2===1){
                array[numberOfFiles7-1][6]=1}
                if(count%2===0){
                    array[numberOfFiles7-1][6]=2}
        
        
        
            numberOfFiles7--
        }
   
       let circle=fichaElements7[numberOfFiles7].firstChild.children[0];
                            
                        
                            if(circle.attributes.fill.value=='white'){
                                count++
                        
                             
                          if(count%2===0){   if(circle.attributes.fill.value==='white'){
                            setTimeout(()=>{   circle.setAttribute("fill", "blue")},10)
                         
                            
                            }}
                            if(count%2===1){if(circle.attributes.fill.value==='white'){
                                setTimeout(()=>{   circle.setAttribute("fill", "red")},10)}
                            }}
                      
                        })
                        
                        }
                        star.addEventListener("click",()=>{

                            filas[3].children[4].children[0].appendChild(estrella)
                        
                        })
                    });