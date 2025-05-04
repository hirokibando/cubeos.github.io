let urlInput = document.getElementById('urlinput');
let target = document.getElementById('targeturl');
let standardUrl = './pages/newtab.html';

if (self != top) {
    top.location.replace(self.location.href);
}

const fetchWebsite = () => {
    if (urlInput.value != null || urlInput.value != undefined || urlInput.value != '') {
        target.src = urlInput.value;
    } else {
        target.src = standardUrl;
    }
}
const reloadWebsite = () => {
    if (urlInput.value == null || urlInput.value == undefined || urlInput.value == '') {
        target.src = standardUrl;
    } else {
        fetchWebsite();
    }
}
const resetWindowFrame = () => {
    target.src = standardUrl;
}
urlInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        fetchWebsite();
    }
});