function yes() {
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById("answer").style.display = "block";
}

function no() {
    const btn = document.getElementById("no");

    // отвязываем кнопку от меню и от старого позиционирования
    btn.style.position = "fixed";
    btn.style.transform = "none";
    btn.style.right = "auto";

    // 20 = отступы margin по 10px с каждой стороны
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;

    btn.style.left = Math.random() * maxX + "px";
    btn.style.top = Math.random() * maxY + "px";
}