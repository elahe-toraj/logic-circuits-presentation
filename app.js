// ایجاد ستاره‌ها با اندازه‌های تصادفی
function createStars() {
    for (let i = 0; i < 1000; i++) {
        let star = document.createElement('section');
        star.classList.add('star');
        
        let sizeClass = Math.random() < 0.3 ? 'small' : Math.random() < 0.6 ? 'medium' : 'large';
        star.classList.add(sizeClass);

        // موقعیت تصادفی در محور X و Y
        star.style.top = `${Math.random() * 500}vh`;
        star.style.left = `${Math.random() * 500}vw`;

        galaxy.appendChild(star);
    }
}

// ایجاد دنباله‌دارهای تصادفی
function createComet() {
    let comet = document.createElement('section');
    comet.classList.add('comet');

    comet.style.top = `${Math.random() * 300}vh`;
    comet.style.left = `${Math.random() * 300}vw`;

    galaxy.appendChild(comet);

    setTimeout(() => {
        comet.remove();
    }, 8000);  // حذف دنباله‌دار بعد از انیمیشن
}

// ایجاد ستاره‌ها و دنباله‌دارها
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

    // ایجاد دنباله‌دارها
    setInterval(createComet, 20000);

    // ایجاد ستاره‌ها
    createStars();

    //madar
    const pr_section = document.querySelector(".madar");
    let mixer = mixitup(".madar-gallery", {
        selectors: {
            target: ".prt-card",
        },
        animation: {
            duration: 500,
        },
    });

    document.addEventListener("DOMContentLoaded", function() {
        // انتخاب تمامی دکمه‌های فیلتر
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        // انتخاب تمامی کارت‌ها
        const prtCards = document.querySelectorAll('.prt-card');
    
        // به هر دکمه فیلتر رویداد کلیک اضافه می‌کنیم
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                prtCards.forEach(card => {
                    const txt = card.querySelector('.txt');
                    
                    if (filterValue === 'all' || card.classList.contains(filterValue.substring(1))) {
                        // اگر کارت مطابقت داشته باشد، نمایش داده می‌شود
                        card.style.display = 'block';
                        // و متن آن نمایش داده می‌شود
                        if (txt) {
                            txt.classList.add('show'); // نمایش متن
                        }
                    } else {
                        card.style.display = 'none';
                       
                        if (txt) {
                            txt.classList.remove('show'); 
                        }
                    }
                });
            });
        });
    });
    
    
    
    
    
};
