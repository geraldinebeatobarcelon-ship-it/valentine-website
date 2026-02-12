const envelope = document.getElementById('envelope');
const arrow = document.getElementById('arrow');
const flowersContainer = document.getElementById('flowers-container');
const flowerMsg = document.getElementById('flower-msg');
const tulips = document.getElementById('tulips');
const confettiContainer = document.getElementById('confetti');
const sparklesContainer = document.getElementById('sparkles');

// Envelope click → tulips + message + arrow
envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
    arrow.classList.remove('hidden');

    // Tulips falling
    for(let i=0;i<5;i++){
        let tulip = document.createElement('div');
        tulip.className = 'tulip-fall';
        tulip.textContent = '🌷';
        tulip.style.left = Math.random()*200 + 'px';
        tulip.style.top = '-30px';
        document.body.appendChild(tulip);
        setTimeout(()=>{tulip.remove()},3000);
    }
});

// Arrow click → show flowers
arrow.addEventListener('click', () => {
    flowersContainer.classList.toggle('show');
});

// Flower click → show message + floating flower
document.querySelectorAll('.flower').forEach(flower => {
    flower.addEventListener('click', () => {
        flowerMsg.textContent = flower.dataset.msg;
        flowerMsg.classList.remove('hidden');

        setTimeout(()=>{flowerMsg.classList.add('hidden')},3000);

        let floating = document.createElement('div');
        floating.textContent = flower.textContent;
        floating.style.position = 'absolute';
        floating.style.left = Math.random()*80 + 'vw';
        floating.style.top = '80vh';
        floating.style.fontSize = '1.5rem';
        floating.style.opacity = 1;
        document.body.appendChild(floating);

        let id = setInterval(()=>{
            let top = parseFloat(floating.style.top);
            if(top < -50){ 
                floating.remove();
                clearInterval(id);
            } else {
                floating.style.top = top - 2 + 'px';
                floating.style.opacity -= 0.01;
            }
        },16);
    });
});

// --- Confetti animation ---
function createConfetti(){
    let confetti = document.createElement('div');
    confetti.style.left = Math.random()*100 + 'vw';
    confetti.style.background = ['#ff4d9e','#ffb6c1','#fff','#ff69b4'][Math.floor(Math.random()*4)];
    confettiContainer.appendChild(confetti);
    setTimeout(()=>{confetti.remove()},5000);
}
setInterval(createConfetti, 200);

// --- Sparkles animation ---
function createSparkle(){
    let sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random()*100 + 'vw';
    sparkle.style.top = Math.random()*100 + 'vh';
    sparklesContainer.appendChild(sparkle);
    setTimeout(()=>{sparkle.remove()},2000);
}
setInterval(createSparkle, 300);
