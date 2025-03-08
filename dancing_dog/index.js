const dog = document.getElementById('dog');

document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // 마우스 위치에 따라 강아지 위치 변경
    dog.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
});
