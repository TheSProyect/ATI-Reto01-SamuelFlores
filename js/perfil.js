window.onload = function () {
    let params = new URLSearchParams(window.location.search);
    let ci = params.get("ci");

    let script = document.createElement('script');
    script.src = `${ci}/perfil.json`;
    script.onload = function () {
		
        document.title = perfil.nombre;
        document.getElementById("foto").src = `${ci}/${ci}.jpg`;
        document.getElementById("titulo").textContent = perfil.nombre;
        document.getElementById("descripcion").textContent = perfil.descripcion;
        document.getElementById("colorFav").textContent = perfil.color;
        document.getElementById("bookFav").textContent = perfil.libro;
        document.getElementById("musicFav").textContent = perfil.musica;
        document.getElementById("gameFav").textContent = perfil.video_juego;
        document.getElementById("learnLang").innerHTML = perfil.lenguajes.map(l => `<strong>${l}</strong>`).join(', ');
        
        let emailLink = document.getElementById("mail");
        emailLink.href = `mailto:${perfil.email}`;
        emailLink.textContent = perfil.email;

    };

    script.onerror = function () {
        document.body.textContent = `Error al cargar`;
    };

    document.body.appendChild(script);
	
	
	let lang = (params.get("lang") || "ES").toUpperCase(); 
	
	let configScript = document.createElement("script");
	configScript.src = `conf/config${lang}.json`;
	
	configScript.onload = function () {
		document.getElementById("colorPrompt").textContent = config.color;
		document.getElementById("bookPrompt").textContent = config.libro;
		document.getElementById("musicPrompt").textContent = config.musica;
		document.getElementById("gamePrompt").textContent = config.video_juego;
		document.getElementById("langPrompt").innerHTML = `<strong>${config.lenguajes}</strong>`;
		
		document.getElementById("mailPrompt").innerHTML = config.email.replace("[email]", `<a href="mailto:${perfil.email}">${perfil.email}</a>`);
		
	}
	
	document.head.appendChild(configScript); 
};

