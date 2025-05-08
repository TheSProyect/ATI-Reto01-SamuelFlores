window.onload = function() {
	let index = document.querySelector('.person-index');

    function mostrarPerfiles(perfiles) {
        index.innerHTML = ''; 
        perfiles.forEach((perfil) => {
            let li = document.createElement('li');
            li.classList.add('person');
			
			let persondiv = document.createElement('div');
            persondiv.classList.add('personContainer');
			
			let namediv = document.createElement('div');
            namediv.classList.add('person-name');
			namediv.textContent = perfil.nombre;

            let link = document.createElement("a");
            link.href = `perfil.html?ci=${perfil.ci}&lang=es`;

            let img = document.createElement('img');
            img.setAttribute('srcset', `${perfil.imagen}`);
            img.setAttribute('alt', `Imagen de ${perfil.nombre}`);


			
			persondiv.appendChild(img);
			persondiv.appendChild(namediv);
			link.appendChild(persondiv);
            li.appendChild(link);
            
			index.appendChild(li);

        });
    }

    mostrarPerfiles(perfiles);
	
    let searchInput = document.getElementById('searchInput');
    let searchButton = document.getElementById('searchButton');
    let notFound = document.getElementById('notFound'); 
	
	
	
	let configScript = document.createElement("script");
	configScript.src = `conf/configES.json`;
	
	configScript.onload = function () {
		
		document.getElementById("tituloATI").innerHTML = `${config.sitio[0]} <span>${config.sitio[1]}</span> ${config.sitio[2]}`;
		
		document.getElementById("bienvenida").textContent = config.saludo + ", Samuel Flores";
		
		document.getElementById("searchInput").placeholder = config.nombre + "...";
		document.getElementById("searchButton").textContent = config.buscar;
		
		document.getElementById("copyright").textContent = config.copyRight;
		
	}
	
	
	document.head.appendChild(configScript); 
	
};