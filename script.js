// hamza portfolio — matrix rain, boot sequence, typing hero, footer year

(function matrixRain() {
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>{};/\\$#@!*+=-';
    let cols, drops, fontSize;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        fontSize = 16;
        cols = Math.floor(canvas.width / fontSize);
        drops = Array(cols).fill(1).map(() => Math.random() * -canvas.height / fontSize);
    }

    function draw() {
        ctx.fillStyle = 'rgba(10, 14, 10, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff66';
        ctx.font = fontSize + 'px JetBrains Mono, monospace';
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }

    resize();
    window.addEventListener('resize', resize);
    setInterval(draw, 55);
})();

(function bootSequence() {
    const screen = document.getElementById('boot-screen');
    const log = document.getElementById('boot-log');
    const lines = [
        '[ OK ] Initializing kernel...',
        '[ OK ] Mounting /dev/brain...',
        '[ OK ] Loading fullstack modules [node, react, typescript, luau]...',
        '[ OK ] Establishing secure connection to github.com...',
        '[ OK ] Spawning portfolio process (pid 1337)...',
        '[ OK ] Compiling personality.js...',
        '[ OK ] Injecting caffeine...',
        '',
        '> boot complete. welcome.',
    ];

    let i = 0;
    function nextLine() {
        if (i >= lines.length) {
            setTimeout(() => screen.classList.add('hidden'), 500);
            setTimeout(() => screen.remove(), 1200);
            return;
        }
        log.textContent += lines[i] + '\n';
        i++;
        setTimeout(nextLine, 120 + Math.random() * 120);
    }

    if (sessionStorage.getItem('booted')) {
        screen.remove();
    } else {
        sessionStorage.setItem('booted', '1');
        nextLine();
    }
})();

(function typeHero() {
    const el = document.getElementById('typed');
    const phrases = [
        'shipping clean fullstack code.',
        'building web apps & roblox systems.',
        'terminals > ides. fight me.',
        'available for work. dm me.',
    ];
    let pi = 0, ci = 0, deleting = false;

    function tick() {
        const phrase = phrases[pi];
        el.textContent = phrase.slice(0, ci);
        if (!deleting && ci < phrase.length) {
            ci++;
            setTimeout(tick, 55 + Math.random() * 40);
        } else if (deleting && ci > 0) {
            ci--;
            setTimeout(tick, 25);
        } else if (!deleting && ci === phrase.length) {
            deleting = true;
            setTimeout(tick, 1800);
        } else {
            deleting = false;
            pi = (pi + 1) % phrases.length;
            setTimeout(tick, 400);
        }
    }
    tick();
})();

document.getElementById('year').textContent = new Date().getFullYear();
