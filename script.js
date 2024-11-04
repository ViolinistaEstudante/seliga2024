function assistir(video) {
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    let videoUrl;

    // Define os URLs dos vídeos
    switch(video) {
        case 'video1':
            videoUrl = '../vídeos/Romance 1.mp4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video2':
            videoUrl = '../vídeos/Romance 2.mp4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video3':
            videoUrl = '../vídeos/Entrevista.mp4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video4':
            videoUrl = '../vídeos/Poema Lírico.mp4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video5':
            videoUrl = '../vídeos/Tirinha.mp4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video6':
            videoUrl = '../vídeos/Texto dissertativo-argumentativo.mp4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video7':
            videoUrl = '../vídeos/Artigo de opinião.mp4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video8':
            videoUrl = '../vídeos/Anúncio 1.mp4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video9':
            videoUrl = '../vídeos/Anúncio 2.mp4'; // Substitua pelo seu URL de vídeo
            break;
    }

    videoSource.src = videoUrl;
    videoPlayer.load();
    videoPlayer.play();

    // Exibe o contêiner do vídeo
    const videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block';
    
    // Rolagem até o vídeo
    videoContainer.scrollIntoView({ behavior: 'smooth' });
}

function fecharVideo() {
    const videoContainer = document.getElementById('video-container');
    const videoPlayer = document.getElementById('video-player');
    
    videoPlayer.pause(); // Pausa o vídeo
    videoPlayer.currentTime = 0; // Reseta o vídeo para o início
    videoContainer.style.display = 'none'; // Esconde o contêiner do vídeo
}
