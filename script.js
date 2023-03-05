let ele=document.querySelector(".counter");
let dopr =document.querySelector(".decrement");
let iopr =document.querySelector(".increment");
iopr.addEventListener("click",increasing);
dopr.addEventListener("click",decreasing);
function increasing(){
  let val=ele.innerText;
  val++;
  ele.innerText=val;
}
function decreasing(){
  let val=ele.textContent;
  val--;
  ele.textContent=val;
}