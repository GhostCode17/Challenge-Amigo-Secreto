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