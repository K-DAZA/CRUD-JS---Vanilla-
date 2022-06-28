
  // Agregar Usuario 

  const btnIngresar = document.getElementById('btn_ingresar');
  const table = document.getElementById('tabla');
  let elementos = document.getElementsByTagName('td');
  
  btnIngresar.addEventListener('click', () => {
    
  
    const txtNombre = document.getElementById('txtNombre').value;
    const txtApellido = document.getElementById("txtApellido").value;
    
    const tr = document.createElement('tr');
    
    const tdId = document.createElement("td");
    const tdNombre = document.createElement('td');
    const tdApellido = document.createElement('td');

    tdNombre.textContent = txtNombre;
    tdApellido.textContent = txtApellido;

    tdId.classList.add('border-dark');
    tdId.classList.add('border-2');

    tdNombre.classList.add('border-dark');
    tdNombre.classList.add('border-2');
    
    tdApellido.classList.add("border-dark");
    tdApellido.classList.add("border-2");
    

    for(let i = 0; i < elementos.length; i++){
        tr.setAttribute("id", `tr${i}`);
        tdNombre.setAttribute('id', `dato${i}`);
        tdApellido.setAttribute("id", `dato${i}`);
        tdId.setAttribute("id", `dato${i}`);
        tdId.textContent = i;
    }

    table.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    console.log(table);

  });
