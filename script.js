const containerVideos = document.querySelector('.videos__container');

async function buscarEMostrarVideos() {
	try {
		const busca = await fetch('http://localhost:3000/videos');
		const videos = await busca.json();

		videos.forEach((video) => {
			if (video.categoria == '') {
				throw new Error('Video não tem categoria');
			}
			containerVideos.innerHTML += /*html*/ `
         <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
               <img src="${video.imagem}" alt="Logo do Canal" class="img-canal">
               <h3 class="titulo-video">${video.titulo}</h3>
               <p class="titulo-canal">${video.descricao}</p>
            </div>
         </li>
      `;
		});
	} catch (error) {
		containerVideos.innerHTML = /*html*/ `
         <p>Houve um erro ao carregar os vídeos: ${error}</p>
      `;
	}
}

buscarEMostrarVideos();
