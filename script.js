function loadContent() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'path/to/your/api', true);
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('blog').innerHTML = this.responseText;
        }
    };
    xhr.send();
}
document.getElementById('blog').addEventListener('scroll', loadContent);
