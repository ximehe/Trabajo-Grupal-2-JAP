let array = [];
if (JSON.parse(localStorage.getItem("claveitem")) != null) {
    array = JSON.parse(localStorage.getItem("claveitem"));
    
    array.forEach(element => {
        document.getElementById("contenedor").innerHTML += `<il class="row">
       <h6 class="mb-1">${element}</h6>
                                                         </il>`
        ;
        
    });
    
}


function elementAdd() {

    const item = document.getElementById("item").value;
    array.push(item);
    document.getElementById("item").value=``
    let htmlContentToAppend = "";
    localStorage.setItem("claveitem", JSON.stringify(array));

    document.getElementById("contenedor").innerHTML += ` 
    <il class="row">
        <h6 class="mb-1">${item}</h6>
    </il>`
}



document.getElementById("limpiar").addEventListener("click", function () {

    localStorage.clear();
    document.getElementById("contenedor").innerHTML = ``;
    array=[];
})

