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

function tampilkanModal(gambar) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("gambarModal");
    modal.style.display = "block";
    modalImg.src = gambar.src;
    document.body.style.overflow = "hidden"; // Nonaktifkan scroll saat modal
}

function tutupModal(event) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("gambarModal");

    // Tutup hanya jika yang diklik adalah background (bukan gambar)
    if (event.target === modal || event.target.classList.contains("close")) {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Aktifkan scroll lagi
    }
}

function bukaGrid() {
    const popup = document.getElementById("popupGrid");
    popup.style.display = "block";
    document.body.style.overflow = "hidden"; // Nonaktifkan scroll agar fokus ke grid
}

function tutupGrid() {
    const popup = document.getElementById("popupGrid");
    popup.style.display = "none";
    document.body.style.overflow = ""; // Aktifkan scroll kalau sebelumnya dinonaktifkan
}

