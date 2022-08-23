var todo = document.getElementById('input');
var add = document.querySelector('.add');
var list = document.querySelector('.to-dolist');

add.addEventListener('click', function(){
    var task = document.createElement("p");
    var dlt = document.createElement("buttonn");
    var main = document.createElement("div");
    var text = todo.value;
    if(text === ""){
        alert("Well, u r a busybody.");
        return;
    }
    task.innerText = text;
    // console.log(text);
    main.setAttribute("class","task-div")
    task.setAttribute("class","point");
    dlt.setAttribute("class", "delete");

    dlt.innerText = "X";

    list.appendChild(main);
    main.appendChild(task);
    main.appendChild(dlt);

    dlt.addEventListener('click', ()=>{
        main.remove();
    })
    // console.log(list);
    task.addEventListener('click', ()=>{
        if(task.classList.contains("done")){
            task.classList.remove("done");
        }
        else{
            task.classList.add("done");
        }
    })
    todo.value = "";
})