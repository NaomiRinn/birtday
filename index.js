const awalEl = document.querySelector(".awal");
const bodyEl = document.querySelector("body");
const h1 = awalEl.querySelector("h1");
const awal = awalEl.textContent;
let charIndex = 0;

function updateAwal() {
    awalEl.innerHTML =
        `<h1>${awal.slice(0, charIndex)} </h1>`;
    charIndex++;
    if (charIndex <= awal.length) {
        setTimeout(updateAwal, 50); // kecepatan ketik
    }
}
updateAwal();

window.addEventListener('click', function () {
    const audio = document.querySelector('audio');
    audio.play();
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

document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", function (e) {
        const link = el.getAttribute("onclick")?.includes("location.href")
            ? el.getAttribute("onclick").match(/'(.+?)'/)?.[1]
            : el.getAttribute("href");

        if (link) {
            e.preventDefault();
            document.body.classList.add("wipe-out");
            setTimeout(() => {
                window.location.href = link;
            }, 500);
        }
    });
});