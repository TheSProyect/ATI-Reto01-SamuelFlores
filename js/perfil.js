window.onload = function () {
	
	let configScript = document.createElement("script");
	configScript.src = `conf/configES.json`;
	
	configScript.onload = function () {
		document.getElementById("colorPrompt").textContent = config.color;
		document.getElementById("bookPrompt").textContent = config.libro;
		document.getElementById("musicPrompt").textContent = config.musica;
		document.getElementById("gamePrompt").textContent = config.video_juego;
		document.getElementById("langPrompt").innerHTML = `<strong>${config.lenguajes}</strong>`;
		
		document.getElementById("mailPrompt").innerHTML = config.email.replace("[email]", `<a href="mailto:samuelenriquefr@gmail.com">samuelenriquefr@gmail.com</a>`);
		
	}
	
	document.head.appendChild(configScript); 
};

