const galaxy = document.getElementById('galaxy');
let stars = [];

// ایجاد ستاره‌ها
function createStars() {
    for (let i = 0; i < 1500; i++) {
        let star = document.createElement('div');
        star.classList.add('star');

        // تعیین نوع ستاره به صورت تصادفی
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

    // موقعیت تصادفی
    comet.style.top = `${Math.random() * 100}vh`;
    comet.style.left = `${Math.random() * 100}vw`;

    galaxy.appendChild(comet);

    setTimeout(() => {
        comet.remove();
    }, 8000);  // حذف دنباله‌دار بعد از انیمیشن
}

// اضافه کردن تعاملات (مواردی مثل حرکت ماوس)
function addInteractions() {
    document.body.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;

        // تغییر رنگ ستاره‌ها با حرکت ماوس
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.position = 'absolute';
        star.style.top = `${y}px`;
        star.style.left = `${x}px`;
        star.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;  // رنگ تصادفی
        star.style.width = '3px';
        star.style.height = '3px';
        star.style.animation = 'twinkle 2s infinite alternate';

        galaxy.appendChild(star);
        setTimeout(() => {
            star.remove();
        }, 1000);  // حذف بعد از مدت زمان کوتاه
    });
}

// شروع به کار
function init() {
    createStars();
    setInterval(createMeteor, 300);  // ایجاد شهاب‌سنگ‌ها هر 300 میلی‌ثانیه
    setInterval(createComet, 8000);  // ایجاد دنباله‌دار هر 8 ثانیه
    addInteractions();
}

window.onload = function() {
    init();
};
