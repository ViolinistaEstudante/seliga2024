function assistir(video) {
    const videoPlayer = document.getElementById('video-player');
    let videoUrl;

    // Define os URLs dos vídeos
    switch(video) {
        case 'video1':
            videoUrl = 'https://www.youtube.com/embed/A1R_L_o_4V0'; // Substitua pelo seu URL de vídeo
            break;
        case 'video2':
            videoUrl = 'https://www.youtube.com/embed/V0Mng7qMJsk'; // Substitua pelo seu URL de vídeo
            break;
        case 'video3':
            videoUrl = 'https://www.youtube.com/embed/hznNEwzyDg4'; // Substitua pelo seu URL de vídeo
            break;
        case 'video4':
            videoUrl = 'https://www.youtube.com/embed/7RX7T1ZcTTw'; // Substitua pelo seu URL de vídeo
            break;
        case 'video5':
            videoUrl = 'https://www.youtube.com/embed/q0cpGZbm7D0'; // Substitua pelo seu URL de vídeo
            break;
        case 'video6':
            videoUrl = 'https://www.youtube.com/embed/XvU3ndpNBa8'; // Substitua pelo seu URL de vídeo
            break;
        case 'video7':
            videoUrl = 'https://www.youtube.com/embed/9jvMRAU6JCQ'; // Substitua pelo seu URL de vídeo
            break;
        case 'video8':
            videoUrl = 'https://www.youtube.com/embed/kk1AMFWPnBc'; // Substitua pelo seu URL de vídeo
            break;
        case 'video9':
            videoUrl = 'https://www.youtube.com/embed/7EuHyNEUjDE'; // Substitua pelo seu URL de vídeo
            break;
    }

    videoPlayer.src = videoUrl;
    videoPlayer.style.display = 'block'; // Mostra o iframe

    // Exibe o contêiner do vídeo
    const videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block';

    // Rolagem até o vídeo
    videoContainer.scrollIntoView({ behavior: 'smooth' });
}

function fecharVideo() {
    const videoContainer = document.getElementById('video-container');
    const videoPlayer = document.getElementById('video-player');
    
    videoPlayer.src = ''; // Limpa o src do iframe
    videoPlayer.style.display = 'none'; // Esconde o iframe
    videoContainer.style.display = 'none'; // Esconde o contêiner do vídeo
}
