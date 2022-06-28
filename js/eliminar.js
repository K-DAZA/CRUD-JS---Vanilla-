
  // Eliminar usuario

  const btnEliminar = document.getElementById('btn_eliminar');
  
  btnEliminar.addEventListener('click', () => {

    const apartadoModificar = document.getElementById('apartado_modificar');
    const apartadoEliminar = document.getElementById('apartado_eliminar');
    const containerCreditos = document.getElementById('container_creditos');
    apartadoModificar.classList.remove("d-block");
    apartadoModificar.classList.add("d-none");
    apartadoEliminar.classList.remove('d-none');
    apartadoEliminar.classList.add('d-block');
    containerCreditos.classList.remove("d-block");
    containerCreditos.classList.add("d-none");
    
  });

  const btnConfirmarEliminar = document.getElementById("btn_confirm_eliminar");

  btnConfirmarEliminar.addEventListener('click', () => {
    
    const inputId = document.getElementById('idUsuario').value;
    const usuarioNombre = document.getElementById(`nombre${inputId}`);
    const usuarioApellido = document.getElementById(`apellido${inputId}`);
    const usuarioId = document.getElementById(`id${inputId}`);
    const fila = document.getElementById(`tr${inputId}`);
    fila.removeChild(usuarioId);
    fila.removeChild(usuarioNombre);
    fila.removeChild(usuarioApellido);
    table.removeChild(fila);

    
  });