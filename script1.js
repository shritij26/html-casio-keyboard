document.getElementById('playBtn').addEventListener('click', function () {
    window.open('casio.html', '_blank');
});

document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000); 
});