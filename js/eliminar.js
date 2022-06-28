
  // Eliminar usuario

  const btnEliminar = document.getElementById('btn_eliminar');
  
  btnEliminar.addEventListener('click', () => {
    
    const apartadoEliminar = document.getElementById('apartado_eliminar');
    const containerCreditos = document.getElementById('container_creditos');
    apartadoEliminar.classList.remove('d-none');
    apartadoEliminar.classList.add('d-block');
    containerCreditos.classList.remove("d-block");
    containerCreditos.classList.add("d-none");
    
  });

  const btnConfirmarEliminar = document.getElementById("btn_confirm_eliminar");

  btnConfirmarEliminar.addEventListener('click', () => {
    
    const inputId = document.getElementById('idUsuario').value;
    const usuario = document.getElementById(`dato${inputId}`);
    const fila = document.getElementById(`tr${inputId}`);
    fila.removeChild(usuario);
    table.removeChild(fila);

    
  });