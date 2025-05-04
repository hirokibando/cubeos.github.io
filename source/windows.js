let apps = ['rhombus', 'calculator', 'notes', 'designer', 'watch', 'settings'];
const iframe = document.querySelector('rhombus-website');

const openWindow = (windowName) => {
    if (!launchwall.classList.contains('none')) {
        launchwall.classList.add('none');
    }

    let element = document.getElementById(`${windowName}-window`);
    let openState = false;

    if (openState === false) {
        element.style.display = 'flex';
        element.style.left = `50%`;
        element.style.top = `calc(100vh - 68vh - 160px)`;
        element.style.width = '70vw';
        element.style.height = '68vh';
    }
}

const closeWindow = (windowName) => {
    let element = document.getElementById(`${windowName}-window`);

    let openState = true;

    if (openState === true) {
        element.style.display = 'none';
    }
}

const launchwallSwitcher = () => {
    let launchwall = document.getElementById("launchwall");

    if (launchwall.classList.contains('none')) {
        launchwall.classList.remove('none');
    } else if (!launchwall.classList.contains('none')) {
        launchwall.classList.add('none');
    }
}

const moveWindow = (windowName) => {
    const element = document.getElementById(`${windowName}-window`);
    const title = document.getElementById(`${windowName}-window-title`);

    const onDrag = ({ movementX, movementY }) => {
        if (!element.classList.contains('fullscreen')) {
            let getStyle = window.getComputedStyle(element);
            let left = parseInt(getStyle.left);
            let top = parseInt(getStyle.top);
            element.style.left = `${left + movementX}px`;
            element.style.top = `${top + movementY}px`;
        } else {
            return;
        }
    }

    title.addEventListener('mousedown', () => {
        title.addEventListener('mousemove', onDrag);
    })
    document.addEventListener('mouseup', () => {
        title.removeEventListener('mousemove', onDrag);
    })
}

const returnWindow = (windowName) => {
    const element = document.getElementById(`${windowName}-window`);

    element.style.left = `50%`;
    element.style.top = `calc(100vh - 68vh - 160px)`;
    element.style.width = '70vw';
    element.style.height = '68vh';
}

const fullScreen = (windowName) => {
    const element = document.getElementById(`${windowName}-window`);

    if (!element.classList.contains('cube-window-fullscreen')) {
        element.style.left = `50%`;
        element.style.top = `calc(100vh - 78vh - 160px)`;
        element.style.height = '78vh';
        element.style.width = 'calc(100vw - 40px)';

        element.classList.add('cube-window-fullscreen');

        if (windowName = 'rhombus') {
            document.querySelector('.rhombus-main').style.height = 'calc(78vh - 100px)';
        }
    } else if (element.classList.contains('cube-window-fullscreen')) {
        element.style.left = `50%`;
        element.style.top = `calc(100vh - 68vh - 160px)`;
        element.style.width = '70vw';
        element.style.height = '68vh';

        element.classList.remove('cube-window-fullscreen');

        if (windowName = 'rhombus') {
            document.querySelector('.rhombus-main').style.height = 'calc(68vh - 100px)';
        }
    }
}

document.querySelector('.rhombus-main').style.height = 'calc(68vh - 100px)';

apps.forEach(appName => {
    moveWindow(appName);
});