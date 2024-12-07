const galaxy = document.getElementById('galaxy');

// ایجاد ستاره‌ها
function createStars() {
    for (let i = 0; i < 1500; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        
        let sizeClass = Math.random() < 0.3 ? 'small' : Math.random() < 0.6 ? 'medium' : 'large';
        star.classList.add(sizeClass);

        // موقعیت تصادفی در محور X و Y
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        galaxy.appendChild(star);
    }
}

// ایجاد شهاب‌سنگ‌ها
function createMeteor() {
    let meteor = document.createElement('div');
    meteor.classList.add('meteor');

    // موقعیت و سرعت تصادفی
    meteor.style.top = `${Math.random() * 100}vh`;
    meteor.style.left = `${Math.random() * 100}vw`;

    galaxy.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, 1000);  // حذف شهاب‌سنگ بعد از انیمیشن
}

// ایجاد دنباله‌دار
function createComet() {
    let comet = document.createElement('div');
    comet.classList.add('comet');

    comet.style.top = `${Math.random() * 100}vh`;
    comet.style.left = `${Math.random() * 100}vw`;

    galaxy.appendChild(comet);

    setTimeout(() => {
        comet.remove();
    }, 8000);  // حذف دنباله‌دار بعد از انیمیشن
}

// کشیدن خطوط صورت فلکی‌ها
window.onload = function() {
    const skies = document.querySelectorAll('.sky');

    skies.forEach(sky => {
        const stars = sky.querySelectorAll('.star');
        const lines = sky.querySelector('.lines');

        // دریافت موقعیت ستاره‌ها
        const starPositions = Array.from(stars).map(star => {
            const rect = star.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
        });

        // کشیدن خطوط بین ستاره‌ها
        for (let i = 0; i < starPositions.length; i++) {
            for (let j = i + 1; j < starPositions.length; j++) {
                drawLine(starPositions[i], starPositions[j]);
            }
        }

        // تابع برای کشیدن خط
        function drawLine(from, to) {
            const line = document.createElement('div');
            line.style.position = 'absolute';
            line.style.width = `${Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2))}px`;
            line.style.height = '1px';
            line.style.backgroundColor = 'white';
            line.style.transformOrigin = '0 0';
            line.style.transform = `rotate(${Math.atan2(to.y - from.y, to.x - from.x)}rad)`;
            line.style.left = `${from.x}px`;
            line.style.top = `${from.y}px`;

            lines.appendChild(line);
        }
    });

    // ایجاد شهاب‌سنگ‌ها و دنباله‌دارها
    setInterval(createMeteor, 300);
    setInterval(createComet, 8000);
};

// ایجاد ستاره‌ها
createStars();
