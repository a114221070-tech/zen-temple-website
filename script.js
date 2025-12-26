// 平滑滾動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 導航列滾動效果 - 日式風格
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(250, 247, 240, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(199, 62, 29, 0.15)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--paper-white) 0%, rgba(250, 247, 240, 0.95) 100%)';
        header.style.boxShadow = '0 2px 20px rgba(199, 62, 29, 0.1)';
    }
});

// 表單提交處理 - 禪意風格
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 獲取表單數據
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // 簡單的表單驗證
    if (!name || !email || !message) {
        showZenAlert('請填寫所有必填欄位，方能結緣 🙏');
        return;
    }
    
    // 顯示禪意成功訊息
    showZenAlert('感謝您的留言！如春風化雨，必將細心回覆 🌸', 'success');
    
    // 清空表單
    this.reset();
});

// 禪意風格的提示框
function showZenAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `zen-alert zen-alert-${type}`;
    alertDiv.innerHTML = `
        <div class="zen-alert-content">
            <div class="zen-alert-icon">${type === 'success' ? '🌸' : '⚠️'}</div>
            <p>${message}</p>
        </div>
    `;
    
    // 添加樣式
    alertDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border-left: 5px solid ${type === 'success' ? '#c73e1d' : '#d4af37'};
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(alertDiv);
    
    // 動畫顯示
    setTimeout(() => {
        alertDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // 自動消失
    setTimeout(() => {
        alertDiv.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 300);
    }, 3000);
}

// 滾動動畫效果 - 禪意風格
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // 特殊動畫效果
            if (entry.target.classList.contains('study-item')) {
                const progressBar = entry.target.querySelector('.progress');
                if (progressBar) {
                    setTimeout(() => {
                        progressBar.style.width = progressBar.style.width || '0%';
                    }, 500);
                }
            }
        }
    });
}, observerOptions);

// 為需要動畫的元素添加初始樣式和觀察者
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.study-item, .project-card, .wisdom-card, .text-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // 初始化禪意效果
    initZenEffects();
});

// 禪意特效初始化
function initZenEffects() {
    // 櫻花飄落效果
    createSakuraPetals();
    
    // 禪意音效（可選）
    // addZenSounds();
    
    // 時間問候
    displayTimeGreeting();
}

// 櫻花飄落效果
function createSakuraPetals() {
    const petalCount = 15;
    const body = document.body;
    
    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.innerHTML = '🌸';
            petal.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}vw;
                font-size: ${Math.random() * 20 + 15}px;
                opacity: ${Math.random() * 0.7 + 0.3};
                pointer-events: none;
                z-index: 1;
                animation: sakuraFall ${Math.random() * 10 + 15}s linear infinite;
            `;
            
            body.appendChild(petal);
            
            // 清理元素
            setTimeout(() => {
                if (body.contains(petal)) {
                    body.removeChild(petal);
                }
            }, 25000);
        }, i * 2000);
    }
}

// 添加櫻花飄落動畫
const sakuraStyle = document.createElement('style');
sakuraStyle.textContent = `
    @keyframes sakuraFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .zen-alert-content {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .zen-alert-icon {
        font-size: 1.5rem;
    }
    
    .zen-alert p {
        margin: 0;
        color: #2c2c2c;
        font-family: 'Noto Serif TC', serif;
    }
`;
document.head.appendChild(sakuraStyle);

// 時間問候
function displayTimeGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour < 6) {
        greeting = '夜深人靜，願您安好 🌙';
    } else if (hour < 12) {
        greeting = '晨光初現，新的一天開始了 🌅';
    } else if (hour < 18) {
        greeting = '午後時光，願您心境平和 ☀️';
    } else {
        greeting = '夕陽西下，感謝您的到訪 🌅';
    }
    
    // 可以在控制台顯示問候語
    console.log(`%c${greeting}`, 'color: #c73e1d; font-size: 16px; font-family: "Noto Serif TC", serif;');
}

// 響應式導航選單（手機版）- 日式風格
function createMobileMenu() {
    const nav = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    // 創建日式選單按鈕
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: 2px solid var(--primary-red);
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 1.2rem;
        cursor: pointer;
        color: var(--primary-red);
        transition: all 0.3s ease;
    `;
    
    // 添加手機版樣式
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
            .menu-toggle {
                display: block !important;
            }
            
            .menu-toggle:hover {
                background: var(--primary-red);
                color: white;
            }
            
            .nav-menu {
                position: fixed;
                top: 80px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 80px);
                background: linear-gradient(135deg, var(--paper-white) 0%, #f8f6f0 100%);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 50px;
                transition: left 0.3s ease;
                box-shadow: 0 2px 20px rgba(199, 62, 29, 0.2);
                border-top: 2px solid var(--primary-red);
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-menu li {
                margin: 25px 0;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
            }
            
            .nav-menu.active li {
                opacity: 1;
                transform: translateY(0);
            }
            
            .nav-menu.active li:nth-child(1) { transition-delay: 0.1s; }
            .nav-menu.active li:nth-child(2) { transition-delay: 0.2s; }
            .nav-menu.active li:nth-child(3) { transition-delay: 0.3s; }
            .nav-menu.active li:nth-child(4) { transition-delay: 0.4s; }
            .nav-menu.active li:nth-child(5) { transition-delay: 0.5s; }
            
            .nav-menu a {
                font-size: 1.3rem;
                padding: 10px 20px;
                border-radius: 10px;
                transition: all 0.3s ease;
            }
            
            .nav-menu a:hover {
                background: rgba(199, 62, 29, 0.1);
            }
        }
    `;
    
    document.head.appendChild(mobileStyles);
    nav.appendChild(menuToggle);
    
    // 選單切換功能
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    });
    
    // 點擊選單項目後關閉選單
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '☰';
        });
    });
    
    // 點擊外部關閉選單
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '☰';
        }
    });
}

// 初始化手機選單
createMobileMenu();

// 禪意打字機效果（可選功能）
function typeWriter(element, text, speed = 150) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 頁面載入完成後的初始化
window.addEventListener('load', function() {
    // 顯示歡迎訊息
    setTimeout(() => {
        showZenAlert('歡迎來到心靜齋，願您在此找到內心的平靜 🙏', 'success');
    }, 1000);
    
    console.log('%c心靜齋 - 數位禪境已載入完成', 'color: #c73e1d; font-size: 18px; font-weight: bold; font-family: "Noto Serif TC", serif;');
    console.log('%c願所有訪客都能在學習的道路上找到屬於自己的方向 🌸', 'color: #8b4513; font-size: 14px; font-family: "Noto Serif TC", serif;');
});

// 滾動到頂部按鈕 - 日式風格
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '⛩️';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: var(--primary-red);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(199, 62, 29, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(100px);
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // 滾動顯示/隱藏
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'translateY(0)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(100px)';
        }
    });
    
    // 點擊回到頂部
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 懸停效果
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(0) scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(199, 62, 29, 0.4)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(199, 62, 29, 0.3)';
    });
}

// 初始化回到頂部按鈕
createScrollToTop();