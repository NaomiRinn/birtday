const bodyEl = document.querySelector("body");
const paragrafEl = document.querySelector(".paragraf");
const p = paragrafEl.querySelector("p");
const para = paragrafEl.textContent;
let charIndex = 0;
function updateParagraph() {
    paragrafEl.innerHTML =
        `<p>${para.slice(0, charIndex)} </p>`;
    charIndex++;
    if (charIndex <= para.length) {
        setTimeout(updateParagraph, 100); // kecepatan ketik
    }
}
updateParagraph();

window.addEventListener('click', function () {
    const audio = document.querySelector('audio');
    audio.play();
});

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';w
});

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})