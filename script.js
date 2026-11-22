// Las rutas son relativas para que la página también funcione al abrir index.html.
const audio = document.querySelector('#story-audio');
const audioStatus = document.querySelector('#audio-status');
const audioPaths = ['historia.m4a', 'historia.mp3', 'historia.mp4'];
let audioIndex = 0;

function loadAudio() {
  audio.src = 'assets/audio/' + audioPaths[audioIndex];
}

audio.addEventListener('loadedmetadata', () => {
  audio.hidden = false;
  audioStatus.hidden = true;
});
audio.addEventListener('error', () => {
  audio.hidden = true;
  audioStatus.hidden = false;
  audioIndex += 1;
  if (audioIndex < audioPaths.length) {
    loadAudio();
  }
});
loadAudio();

const cover = document.querySelector('#hero-image');
cover.addEventListener('load', () => {
  cover.hidden = false;
  document.querySelector('#hero-placeholder').hidden = true;
});
cover.src = 'assets/img/estudiantes.jpg';

const infographicPath = 'assets/img/infografia.png';
const preview = document.querySelector('#preview-image');
const imageStatus = document.querySelector('#image-status');
const openImage = document.querySelector('#open-image');
const dialog = document.querySelector('#infographic');
const fullImage = document.querySelector('#full-image');
const imageLink = document.querySelector('#image-link');

// La imagen se comprueba con el propio navegador, sin fetch ni servidor.
preview.addEventListener('load', () => {
  preview.hidden = false;
  imageStatus.hidden = true;
  openImage.disabled = false;
});
preview.src = infographicPath;

openImage.addEventListener('click', () => {
  fullImage.src = infographicPath;
  imageLink.href = infographicPath;
  dialog.showModal();
});
dialog.addEventListener('close', () => openImage.focus());
