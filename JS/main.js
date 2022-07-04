$(document).ready(function () {
    if (window.location.href.indexOf("practica") > -1) {

        //Funcion acordion

        $("#accordion").accordion({ active: true });
        $("#accordion").accordion({ collapsible: true });
        $("#tabCurriculum").tabs();


        // Uso de botones mostrar y colocar 


        $("#mostrar").hide()

        $("#ocultar").click(function () {
            $(this).hide("slow")
            $("#mostrar").show("slow")
            $("#quitar").hide("slow");
        })

        $("#mostrar").click(function () {
            $(this).hide("slow")
            $("#ocultar").show("slow")
            $("#quitar").show("slow");
        })

        //Estilos de input


        $("#estiloInput").focus(function () {
            $(this).css("color", "white")
                .css("background", "grey");
        })

        $("#estiloInput").blur(function () {
            $(this).css("background", "white")
        })

        $("#estiloInput2").focus(function () {
            $(this).css("border", "blue 8px solid")
                .css("color", "red")
                .css("width", "250px")
        })

        $("#estiloInput2").blur(function () {
            $(this).css("border", "solid 2px black")
                .css("width", "50px")
        })

        $("#estiloInput3").focus(function () {
            $(this).css("border", "blue 8px solid")
                .css("height", "160px")
                .css("background", "black")
                .css("color", "white")
        })



        // Maquina de votacion


        maquinaVotacion.addEventListener("submit", function () {

            var nacionalidad = document.querySelector("#nacionalidad").value
            var edad = document.querySelector("#edad").value
            nacionalidad = nacionalidad.toUpperCase();
            var enviar = document.querySelector("#enviar")
            var maquinaVotacion = document.querySelector("#maquinaVotacion")

            if ((nacionalidad == "URUGUAYA" || nacionalidad == "URUGUAYO")
                && (edad >= 18)) {
                alert("felicitaciones puedes votar")
            } else if ((nacionalidad == "URUGUAYA" || nacionalidad == "URUGUAYO")
                && (edad < 18)) {
                alert("Eres Uruguayo/a pero no puedes votar ya que eres menor de edad");
            } else if ((nacionalidad != "URUGUAYA") && ((edad >= 18)) || (edad < 18)) {
                alert(("eres ") + nacionalidad + (" No puedes votar ya que no eres Uruguayo"));
            }
        })

        //Arrastrar cajas con draggable para realizar una accion con droppable 

        $("#cajaArrastrar").draggable();

        $("#cajaArrastrado").droppable({
            drop: function () {
                $("#resultado").text("perfecto")
            }
        })

        /* Programa con clasificacion segun la opcion */

        class articulo {
            constructor(nombre, resumen, opciones) {
                this.nombre = nombre
                this.resumen = resumen
                this.opciones = opciones

            }
        }


        class funciones {
            agregarArticulo(articulo) {
                var seleccion = opciones.value

                if (seleccion === "Articulo") {
                    const nuevoArticulo = document.getElementById("articulos")
                    const elemento = document.createElement("div")
                    elemento.innerHTML = `
            <div class="recipiente_articulo">
                    <h1 class="titulo_recipiente_articulos">${articulo.nombre}</h1> 
                    <p class="resumen_recipiente_articulos">${articulo.resumen}</p> 
            </div>
            `
                    nuevoArticulo.appendChild(elemento)
                    if (nombre.value = "") {
                        alert("debes introducir un dato")
                    }
                }
                else if (seleccion === "Musica") {
                    const nuevaCancion = document.getElementById("musicas")
                    const elemento = document.createElement("div")
                    elemento.innerHTML = `
            <div class="recipiente_musica">
                    <h1 class="titulo_recipiente_musica">${articulo.nombre}</h1> 
                    <p class="resumen_recipiente_musica">${articulo.resumen}</p> 
            </div>
            `
                    nuevaCancion.appendChild(elemento)
                }
                else if (seleccion === "Pelicula") {
                    const nuevaPelicula = document.getElementById("peliculas")
                    const elemento = document.createElement("div")
                    elemento.innerHTML = `
            <div class="recipiente_pelicula">
                    <h1 class="titulo_recipiente_peliculas">${articulo.nombre}</h1> 
                    <p class="resumen_recipiente_peliculas">${articulo.resumen}</p> 
            </div>
            `
                    nuevaPelicula.appendChild(elemento)

                }
            }
        }
        document.getElementById("boton_formulario").addEventListener("click", (e) => {
            const nombre = document.getElementById("nombre_formulario").value
            const resumen = document.getElementById("resumen_formulario").value
            const opciones = document.getElementById("opciones").value
            console.log(nombre, resumen, opciones);

            const articulos = new articulo(nombre, resumen, opciones)
            e.preventDefault();

            const funcion = new funciones();
            funcion.agregarArticulo(articulos);


        })



        //Colocar informacion en el imput y enviarlo a formulario

        formulario = document.querySelector("#formula")

        formulario.addEventListener("submit", function (e) {
            juego = document.querySelector("#juegos").value
            if (juego.length >= 1) {
                localStorage.setItem(juego, juego)
            }
            e.preventDefault();


            ul = document.querySelector("#lista")

            for (var i in localStorage) {
                li = document.createElement("li")
                if (typeof localStorage[i] == "string") {
                    li.append(localStorage[i])
                    ul.append(li)
                }

            }

        }

        )}
        /* Funcion Responsive para el menu */
        if (window.location.href.indexOf("curriculum") > -1) {

        $("#accordion").accordion({ active: true });
        $("#accordion").accordion({ collapsible: true });
        $("#tabCurriculum").tabs();
        }


    $(".menuImg").click(function () {
            $(".menu_principal").toggle("slow");
        });

    })

