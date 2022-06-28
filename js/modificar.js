
  // Modificar usuario

  const btnModificar = document.getElementById('btn_modificar');
  const btnConfirmarModificacion = document.getElementById("btn_confirm_modificacion");
  const btnConfirmar = document.getElementById('btn_confirmar');

  btnModificar.addEventListener('click', () => {
    
    const apartadoEliminar = document.getElementById("apartado_eliminar");
    apartadoEliminar.classList.remove("d-block");
    apartadoEliminar.classList.add("d-none");    
    const apartadoModificar = document.getElementById("apartado_modificar");
    const containerCreditos = document.getElementById("container_creditos");
    apartadoModificar.classList.remove("d-none");
    apartadoModificar.classList.add("d-block");
    containerCreditos.classList.remove("d-block");
    containerCreditos.classList.add("d-none");

  });


  btnConfirmarModificacion.addEventListener('click', () => {

    const idUsuarioModificar = document.getElementById("idUsuarioModificar").value;
    const seleccionarUsuarioNombre = document.getElementById(`nombre${idUsuarioModificar}`).innerHTML;
    const seleccionarUsuarioApellido = document.getElementById(`apellido${idUsuarioModificar}`).innerHTML;

    txtNombre.value = seleccionarUsuarioNombre;
    txtApellido.value = seleccionarUsuarioApellido; 

  });

  btnConfirmar.addEventListener('click', () => {

    const idUsuarioModificar = document.getElementById("idUsuarioModificar").value;
    let seleccionarUsuarioNombres = document.getElementById(`nombre${idUsuarioModificar}`);
    let seleccionarUsuarioApellidos = document.getElementById(`apellido${idUsuarioModificar}`);
    seleccionarUsuarioNombres.innerHTML = txtNombre.value;
    seleccionarUsuarioApellidos.innerHTML = txtApellido.value;
    console.log(seleccionarUsuarioNombres);

  });