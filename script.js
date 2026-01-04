function saveQR() {
    const url = document.getElementById('qrUrl').value;

    if(!url) {
        alert("Please enter a QR image URL!");
        return;
    }

    // Create an image element
    const img = document.createElement('img');
    img.src = url;

    // Add download functionality
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.png';
    link.appendChild(img);

    document.getElementById('qrList').appendChild(link);

    // Clear input
    document.getElementById('qrUrl').value = '';
}

    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });