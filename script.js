// script.js
alert("Dari Dean Untuk Febby Taniya TELUK");
function pinjamKamera() {
    window.location.href = 'https://wa.me/6282280202155?text=Iya%20boleh';
}

const noButton = document.querySelector('.no');
noButton.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - noButtonRect.width - 30;
    const maxY = containerRect.height - noButtonRect.height - 30;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY + containerRect.height / 2;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
