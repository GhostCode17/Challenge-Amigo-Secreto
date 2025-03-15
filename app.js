let listadoDeAmigos = [];

function agregarAmigo()
{
    let entradaDeNombre = document.getElementById('amigo');
    let nombreIngresado = entradaDeNombre.value;

    if (nombreIngresado)
    {
        listadoDeAmigos.push(nombreIngresado);
        entradaDeNombre.value = "";
    }
    else
    {
        alert("Por favor, inserte un nombre");
    }
}