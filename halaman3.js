// const paragrafEl = document.querySelector(".paragraf");
const bodyEl = document.querySelector("body");
// const p= paragrafEl.querySelector("p");
// const para= paragrafEl.textContent;
// let charIndex = 0;

// function updateParagraph() {
//     paragrafEl.innerHTML =
//     `<p>${para.slice(0,charIndex)} </p>`;
//     charIndex++;
//     if (charIndex <= para.length) {
//         setTimeout(updateParagraph, 100); // kecepatan ketik
//     }
// }
// updateParagraph();

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

window.onload = function () {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
};

window.addEventListener("load", () => {
    setTimeout(() => {
        const popup = document.getElementById("popupUcapan");
        popup.style.display = "flex";
    }, 1000); // muncul setelah 1 detik
});
