const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Awelewa mi please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function createFallingHearts() {
    const heartsContainer = document.getElementById('heartsBackground');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
    }
}

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // Add bounce effect to no button
    noButton.style.animation = 'none';
    setTimeout(() => {
        noButton.style.animation = 'pulse 0.3s ease-in-out';
    }, 10);
}

function handleYesClick() {
    // Create confetti before redirecting
    const confettiPieces = ['🎉', '💕', '✨', '🎊', '💖', '🌟', '💝'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.fontSize = '30px';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `confetti-fall ${Math.random() * 2 + 2.5}s linear forwards`;
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);
    }
    
    // Wait a moment then redirect
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 500);
}

// Initialize falling hearts
window.addEventListener('load', createFallingHearts);

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
  @keyframes confetti-fall {
    to {
      transform: translateY(100vh) rotateZ(360deg);
      opacity: 0;
    }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;
document.head.appendChild(style);