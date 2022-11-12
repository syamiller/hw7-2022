var video;

window.addEventListener("load", function() {
	video = document.querySelector('#player1');
	video.removeAttribute('autoplay');
	video.removeAttribute('loop');
});

document.querySelector('#play').addEventListener('click', function() {
	video.play();
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%';
});

document.querySelector('#pause').addEventListener('click', function() {
	video.pause();
});

document.querySelector('#slower').addEventListener('click', function() {
	video.playbackRate = video.playbackRate * .9;
	console.log('The new play back speed is: ' + video.playbackRate);
});

document.querySelector('#faster').addEventListener('click', function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log('The new play back speed is: ' + video.playbackRate);
});

document.querySelector('#skip').addEventListener('click', function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log('Current video location: ' + video.currentTime);
	video.play();
})

document.querySelector('#mute').addEventListener('click', function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
	} else {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
});

document.querySelector('#slider').addEventListener('click', function() {
	video.volume = document.getElementById('slider').value / 100;
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%';
});


document.querySelector('#vintage').addEventListener('click', function() {
	video.classList.add('oldSchool');
})

document.querySelector('#orig').addEventListener('click', function() {
	video.classList.remove('oldSchool');
})

