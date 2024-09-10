 
document.addEventListener('DOMContentLoaded', function () {  
    const selectOpciones = document.getElementById('opciones');  

    // Función para cargar opciones desde el JSON  
    function cargarOpciones() {  
        fetch('data.json')  
            .then(response => response.json())  
            .then(data => {  
                data.forEach(item => {  
                    const option = document.createElement('option');  
                    option.value = item.id;  
                    option.textContent = item.opcion;  
                    selectOpciones.appendChild(option);  
                });  
            })  
            .catch(error => console.error('Error al cargar el JSON:', error));  
    }  

    // Cargamos las opciones al inicio  
    cargarOpciones();  

    // Listener para el toggle de la contraseña  
    const togglePassword = document.querySelector('.toggle-password');  
    const passwordInput = document.getElementById('contraseña');  

    
    // Listener para el submit del formulario  
    document.getElementById('formulario').addEventListener('submit', function (event) {  
        event.preventDefault(); // Previene el envío del formulario  

        // Creando el objeto con los datos del formulario  
        const nombre = document.getElementById('nombre').value;  
        const email = document.getElementById('email').value;  
        const contraseña = document.getElementById('contraseña').value;  
        const opcionSeleccionada = selectOpciones.value;  

        const objetoFormulario = {  
            nombre,  
            email,  
            contraseña,  
            opcionSeleccionada  
        };  

        console.log(objetoFormulario); // Imprime el objeto en la consola  
    });  
});