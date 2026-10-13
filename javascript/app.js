let but = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

but.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let bet= document.createElement("button");
    bet.innerText= "delete";
    bet.classList.add("delete");

    item.appendChild(bet);
    ul.appendChild(item);
    inp.value = "";
});


ul.addEventListener("click",function(event){
    if(event.target.nodeName== "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
    }
});