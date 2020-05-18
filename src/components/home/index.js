require('./index.css');
export default function(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    div.className = 'home-wrapper';
    document.body.appendChild(div);
}