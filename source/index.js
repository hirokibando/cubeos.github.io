document.addEventListener('keydown', function (e) {
    if (e.key === 'Alt') {
        let launchwall = document.getElementById("launchwall");

        if (launchwall.classList.contains('none')) {
            launchwall.classList.remove('none');
        } else if (!launchwall.classList.contains('none')) {
            launchwall.classList.add('none');
        }
    }
});