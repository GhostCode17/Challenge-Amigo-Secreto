let listadoDeAmigos = [];

function listarAmigos()
{
    let listaHtml = document.getElementById('listaAmigos');
    let indiceAmigo = 0;

    listaHtml.innerHTML = "";

    while (indiceAmigo < listadoDeAmigos.length)
    {
        listaHtml.innerHTML += `<li>${listadoDeAmigos[indiceAmigo++]}<\li>`;
    }
}

function agregarAmigo()
{
    let entradaDeNombre = document.getElementById('amigo');
    let nombreIngresado = entradaDeNombre.value;

    if (nombreIngresado)
    {
        listadoDeAmigos.push(nombreIngresado);
        listarAmigos();
        entradaDeNombre.value = "";
    }
    else
    {
        alert("Por favor, inserte un nombre");
    }
}

function sortearAmigo()
{
    if (listadoDeAmigos.length)
    {
        let indiceAleatorio = Math.floor(Math.random() * listadoDeAmigos.length);
        let amigoSeleccionado = listadoDeAmigos[indiceAleatorio];

        document.getElementById('resultado').innerHTML = `${amigoSeleccionado} has sido sorteado!`;
    }
    else
    {
        alert("Ningún amigo que sortear");
    }
}