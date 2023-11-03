const audioElements = document.querySelectorAll('audio');

//keyboard event

document.body.addEventListener('keydown', (event) => {
    const sound = event.code.toLowerCase();
    const audioElement = document.querySelector(`#s_${sound}`);
    const keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');


        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 200);
    }
});

// mouse event

document.body.addEventListener('click', (event) => {
    const target = event.target;
    const sound = target.getAttribute('data-key');
    const audioElement = document.querySelector(`#s_${sound}`);

    if (target.classList.contains('key') || target.classList.contains('keyb') && audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
})

// composer

document.querySelector('.composer button').addEventListener('click', () => {
    const song = document.querySelector('#input').value;

    if (song !== '') {
        const songArray = song.split('');
        playComposition(songArray);
    }
});



const playComposition = (songArray) => {
    let wait = 0;

    for (const songItem of songArray) {
        setTimeout(() => {
            const sound = `key${songItem}`;
            const audioElement = document.querySelector(`#s_${sound}`);

            if (audioElement) {
                audioElement.currentTime = 0;
                audioElement.play();
            }
        }, wait);

        wait += 350;
    }
}