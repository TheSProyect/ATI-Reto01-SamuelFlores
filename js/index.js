let params = new URLSearchParams(window.location.search);
let lang = (params.get("lang") || "ES").toUpperCase(); 

window.onload = function() {
    const index = document.querySelector('.person-index');

    function mostrarPerfiles(perfiles) {
        index.innerHTML = ''; 
        perfiles.forEach((perfil) => {
            const li = document.createElement('li');
            li.classList.add('person');
			
			const persondiv = document.createElement('div');
            persondiv.classList.add('personContainer');
			
			const namediv = document.createElement('div');
            namediv.classList.add('person-name');
			namediv.textContent = perfil.nombre;

            const link = document.createElement("a");
            link.href = `perfil.html?ci=${perfil.ci}&lang=${lang}`;

            const img = document.createElement('img');
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
	
    
	let configScript = document.createElement("script");
	configScript.src = `conf/config${lang}.json`;
	
	configScript.onload = function () {
		
		document.getElementById("tituloATI").innerHTML = `${config.sitio[0]} <span>${config.sitio[1]}</span> ${config.sitio[2]}`;
		
		document.getElementById("bienvenida").textContent = config.saludo + ", Samuel Flores";
		
		document.getElementById("searchInput").placeholder = config.nombre + "...";
		document.getElementById("searchButton").textContent = config.buscar;
		
		document.getElementById("copyright").textContent = config.copyRight;
		
	}
	
	
	document.head.appendChild(configScript); 
	
};