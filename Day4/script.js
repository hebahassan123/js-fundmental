
            
           
           
           let user = document.getElementById("addtext")
           let empty = document.getElementById("empty")
            
           
           function add(){
               if(!user.value){
               alert("the field is empty")
           } else{
                
               let element = document.createElement("div");

               element.classList.add("Heba")
               empty.append(element)
               
               element.innerHTML=`
               <div>
                       <p>${user.value}</p>
               </div>    
                  
           <div>
               <button onclick='editElem(Hassan)'>change</button>
               <button onclick='deleteElem(Hassan)'>Delete</button>
           </div> `
                   
                   user.value = ""

           }
       }
           
           function editElem(elem){
               let element = elem.parentElement.parentElement;
                         element.style.backgroundColor = 'red'
                          //  element.classList.toggle("newStyle")
                          // element.classList.toggle("Heba")
                       }
          
                    function deleteElem(elem){
                          elem.parentElement.parentElement.remove();

           }
   