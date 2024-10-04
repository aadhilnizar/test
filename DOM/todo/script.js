document.getElementById("add").addEventListener("click",Addjob);
// document.getElementById("Remove").addEventListener("click",Removejob);

function Addjob(){
 
   let var1=document.getElementById("items").value;
   let var2=document.createElement("p")
   if(var1==""){
      alert("Enter Some Task Bitch!!")
   }else{
   var2.innerText=var1
   document.getElementById("empty").appendChild(var2)
   // var2.textContent=document.getElementById("items").value
   document.getElementById("items").value=""
   Removejob(var2)
}
}
// function Removejob(){
//    let rmv=document.getElementById("empty")
//   rmv.removeChild(rmv.lastElementChild)
// }
function Removejob(var1){
      var del=document.createElement("button")
      //Another Method
      // let btn=document.querySelector("button")
      // btn.setAttribute("id","submit")
      del.setAttribute("id","btn")
      del.innerText="Remove"
      var1.appendChild(del )
      del.onclick=function(){
         var1.remove()
      }
      // remove.textContent="Remove"
      //
     
         // var1.remove()
   
      }
      // remove.addEventListener("onclick",function(){
      
      

