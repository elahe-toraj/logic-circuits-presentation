document.addEventListener("DOMContentLoaded", function() {
    const svgCanvas = document.getElementById("svgCanvas");
    const numStars = 20; // تعداد ستاره‌ها
    const radius = 30; // شعاع مدار
    const centerX = 50; // مرکز دایره (در واحد vw)
    const centerY = 50; // مرکز دایره (در واحد vh)
    let stars = [];

    // ایجاد ستاره‌ها و حرکت آن‌ها در مدار دایره‌ای
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // تعیین موقعیت دایره‌ای برای ستاره‌ها
        const angle = (i / numStars) * 2 * Math.PI; // تقسیم مدار به بخش‌های مساوی
        const x = centerX + radius * Math.cos(angle); // محاسبه موقعیت افقی
        const y = centerY + radius * Math.sin(angle); // محاسبه موقعیت عمودی
        star.style.top = `${y}vh`;
        star.style.left = `${x}vw`;
        star.style.width = `${Math.random() * 3 + 1}px`; // اندازه تصادفی ستاره
        star.style.height = star.style.width;
        star.style.position = "absolute";
        star.style.backgroundColor = "white";
        star.style.borderRadius = "50%";

        // اضافه کردن ستاره به صفحه
        document.body.appendChild(star);
        stars.push({ x: x, y: y });
    }

    // ایجاد خطوط بین ستاره‌ها
    function createLines() {
        const lineCount = 30; // تعداد خطوط بیشتر
        for (let i = 0; i < lineCount; i++) {
            const randomStar1 = stars[Math.floor(Math.random() * stars.length)];
            const randomStar2 = stars[Math.floor(Math.random() * stars.length)];

            if (randomStar1 === randomStar2) continue; // از رسم خطوط بین همان ستاره جلوگیری کن

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute('x1', randomStar1.x + "vw");
            line.setAttribute('y1', randomStar1.y + "vh");
            line.setAttribute('x2', randomStar2.x + "vw");
            line.setAttribute('y2', randomStar2.y + "vh");
            line.classList.add('line');
            svgCanvas.appendChild(line);
        }
    }

    createLines(); // ایجاد خطوط بین ستاره‌ها
});
