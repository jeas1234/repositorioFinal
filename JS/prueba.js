    formulario = document.querySelector("#formula")

    formulario.addEventListener("submit", function () {
        juego = document.querySelector("#juegos").value
        if (juego.length >= 1) {
            localStorage.setItem(juego, juego)
    
        
    
        ul = document.querySelector("#lista")
    
        for (var i in localStorage) {
            li = document.createElement("li")
            if (typeof localStorage[i] == "string") {
                li.append(localStorage[i])
                ul.append(li)
            }

        }}})