var blackKeys = document.querySelectorAll('.black-key').length;
var whiteKeys = document.querySelectorAll('.white-key').length;

for (var i = 0; i < blackKeys; i++) {
    document.querySelectorAll('.black-key')[i].addEventListener('click', function () {
        var audio = new Audio('music/' + this.textContent + '4.wav');
        audio.play();
        this.classList.add('pressed');
        setTimeout(() => this.classList.remove('pressed'), 100);
    });
}

for (var i = 0; i < whiteKeys; i++) {
    document.querySelectorAll('.white-key')[i].addEventListener('click', function () {
        var audio = new Audio('music/' + this.textContent + '4.wav');
        audio.play();
        this.classList.add('pressed');
        setTimeout(() => this.classList.remove('pressed'), 100);
    });
}

document.addEventListener('keydown', function (event) {
    var key = event.key.toLowerCase();
    var audio;

    if ('sdfghjkzxcvbnm'.includes(key)) {
        audio = new Audio('music/' + key + '4.wav');
    } else if ('wertyui'.includes(key)) {
        audio = new Audio('music/' + key + '4.wav');
    }

    if (audio) {
        audio.play();
        var allKeys = document.querySelectorAll('.white-key, .black-key');
        allKeys.forEach(function (keyEl) {
            if (keyEl.textContent.toLowerCase() === key) {
                keyEl.classList.add('pressed');
                setTimeout(() => keyEl.classList.remove('pressed'), 100);
            }
        });
    }
});

if (window.innerWidth < 768) {
    alert("For the best experience, please try this piano on a PC or larger screen.");
}
