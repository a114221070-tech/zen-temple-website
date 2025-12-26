<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>心靜齋 - 大一新生的數位禪境</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;500;700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛩️</text></svg>">
</head>
<body>
    <header>
        <nav>
            <div class="nav-container">
                <div class="logo">
                    <div class="torii">⛩️</div>
                    <h2>心靜齋</h2>
                </div>
                <ul class="nav-menu">
                    <li><a href="#about">關於我</a></li>
                    <li><a href="#studies">學習之路</a></li>
                    <li><a href="#projects">作品展示</a></li>
                    <li><a href="#code">程式碼</a></li>
                    <li><a href="#wisdom">心得感悟</a></li>
                    <li><a href="#contact">結緣聯絡</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <!-- 首頁橫幅 -->
        <section class="hero">
            <div class="hero-bg">
                <div class="bamboo-left">🎋</div>
                <div class="bamboo-right">🎋</div>
                <div class="mountain-silhouette"></div>
            </div>
            <div class="hero-content">
                <div class="zen-circle"></div>
                <h1>初心如月，<span class="highlight">學海無涯</span></h1>
                <p class="hero-subtitle">大一新生 | 求學者 | 數位修行人</p>
                <div class="hero-quote">
                    <p>「千里之行，始於足下」</p>
                </div>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">觀賞作品</a>
                    <a href="#contact" class="btn btn-secondary">結緣交流</a>
                </div>
            </div>
        </section>

        <!-- 關於我 -->
        <section id="about" class="about">
            <div class="container">
                <div class="section-header">
                    <div class="zen-symbol">☯</div>
                    <h2>初心自述</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="about-content">
                    <div class="about-text">
                        <div class="text-card">
                            <p>我是一名剛踏入大學殿堂的新生，如同初入寺廟的小沙彌，對知識充滿敬畏與渴望。在這個數位時代的修行路上，我以謙卑的心態學習每一項技能。</p>
                            <p>雖然我的經驗尚淺，但我相信「不積跬步，無以至千里」。每一行程式碼、每一個設計，都是我在學習路上留下的足跡。</p>
                            <div class="quote-box">
                                <div class="sakura-quote">
                                    <div class="quote-decoration top">
                                        <span class="sakura-left">🌸</span>
                                        <span class="quote-mark-large">❝</span>
                                        <span class="sakura-right">🌸</span>
                                    </div>
                                    <p class="quote-text">學而時習之不亦說乎</p>
                                    <div class="quote-decoration bottom">
                                        <span class="sakura-left">🌸</span>
                                        <span class="quote-mark-large">❞</span>
                                        <span class="sakura-right">🌸</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-image">
                        <div class="image-frame">
                            <div class="image-placeholder">
                                <div class="avatar-circle">
                                    <span>🧘‍♂️</span>
                                </div>
                            </div>
                            <div class="image-caption">初學者的心境</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 學習之路 -->
        <section id="studies" class="studies">
            <div class="container">
                <div class="section-header">
                    <div class="zen-symbol">📚</div>
                    <h2>學習之路</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="studies-grid">
                    <div class="study-item">
                        <div class="study-icon">🌱</div>
                        <h3>程式基礎</h3>
                        <p>HTML, CSS, JavaScript<br>初學者的第一步</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: 40%"></div>
                        </div>
                    </div>
                    <div class="study-item">
                        <div class="study-icon">🌿</div>
                        <h3>設計美學</h3>
                        <p>UI/UX 設計原理<br>追求簡約之美</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: 30%"></div>
                        </div>
                    </div>
                    <div class="study-item">
                        <div class="study-icon">🌳</div>
                        <h3>專業課程</h3>
                        <p>大學課業學習<br>紮實基礎知識</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: 60%"></div>
                        </div>
                    </div>
                    <div class="study-item">
                        <div class="study-icon">🍃</div>
                        <h3>自我成長</h3>
                        <p>持續學習精神<br>終身學習之道</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: 50%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 作品展示 -->
        <section id="projects" class="projects">
            <div class="container">
                <div class="section-header">
                    <div class="zen-symbol">🎨</div>
                    <h2>作品展示</h2>
                    <div class="section-divider"></div>
                    <p class="section-subtitle">初學者的練習作品，每一個都是成長的見證</p>
                </div>
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-image">
                            <div class="image-placeholder">
                                <div class="project-icon">🏮</div>
                                <span>互動練習</span>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3>燈籠祈願</h3>
                            <p>使用 JavaScript 製作的互動式祈願燈籠，用戶可以點擊燈籠許願，體驗簡單的互動設計。</p>
                            <div class="project-tags">
                                <span class="tag">JavaScript</span>
                                <span class="tag">互動</span>
                                <span class="tag">設計</span>
                            </div>
                            <div class="project-links">
                                <a href="lantern-wish.html" class="btn btn-small" target="_blank">觀看作品</a>
                                <a href="#code" class="btn btn-small btn-outline">程式碼</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 程式碼展示 -->
        <section id="code" class="code-showcase">
            <div class="container">
                <div class="section-header">
                    <div class="zen-symbol">💻</div>
                    <h2>程式碼展示</h2>
                    <div class="section-divider"></div>
                    <p class="section-subtitle">分享我的學習成果與程式碼片段</p>
                </div>
                <div class="code-grid">
                    <div class="code-card">
                        <div class="code-header">
                            <div class="code-title">
                                <span class="code-icon">🌸</span>
                                <h3>櫻花飄落動畫</h3>
                            </div>
                            <div class="code-lang">JavaScript</div>
                        </div>
                        <div class="code-content">
                            <pre><code>// 櫻花飄落效果
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
        }, i * 2000);
    }
}</code></pre>
                        </div>
                        <div class="code-footer">
                            <span class="code-desc">創造網站的櫻花飄落效果</span>
                            <a href="https://github.com/a114221070-tech/zen-temple-website/blob/main/script.js" target="_blank" class="code-link">查看完整代碼</a>
                        </div>
                    </div>

                    <div class="code-card">
                        <div class="code-header">
                            <div class="code-title">
                                <span class="code-icon">🎨</span>
                                <h3>日式色彩系統</h3>
                            </div>
                            <div class="code-lang">CSS</div>
                        </div>
                        <div class="code-content">
                            <pre><code>/* 日系寺廟色彩調色盤 */
:root {
    --primary-red: #c73e1d;    /* 朱紅色 */
    --temple-gold: #d4af37;    /* 寺廟金 */
    --zen-brown: #8b4513;      /* 禪意棕 */
    --bamboo-green: #4a5d23;   /* 竹綠色 */
    --paper-white: #faf7f0;    /* 紙白色 */
    --cherry-pink: #ffb7c5;    /* 櫻花粉 */
}

.hero {
    background: linear-gradient(135deg, 
        var(--paper-white) 0%, 
        #f5f2e8 30%, 
        #ede7d3 70%, 
        var(--mist-gray) 100%);
}</code></pre>
                        </div>
                        <div class="code-footer">
                            <span class="code-desc">定義網站的日式美學色彩</span>
                            <a href="https://github.com/a114221070-tech/zen-temple-website/blob/main/styles.css" target="_blank" class="code-link">查看完整樣式</a>
                        </div>
                    </div>

                    <div class="code-card">
                        <div class="code-header">
                            <div class="code-title">
                                <span class="code-icon">📱</span>
                                <h3>響應式設計</h3>
                            </div>
                            <div class="code-lang">CSS</div>
                        </div>
                        <div class="code-content">
                            <pre><code>/* 響應式導航選單 */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: linear-gradient(135deg, 
            var(--paper-white) 0%, 
            #f8f6f0 100%);
        flex-direction: column;
        transition: left 0.3s ease;
    }
    
    .nav-menu.active {
        left: 0;
    }
}</code></pre>
                        </div>
                        <div class="code-footer">
                            <span class="code-desc">確保網站在手機上完美顯示</span>
                            <a href="https://github.com/a114221070-tech/zen-temple-website/blob/main/styles.css" target="_blank" class="code-link">查看完整代碼</a>
                        </div>
                    </div>

                    <div class="code-card">
                        <div class="code-header">
                            <div class="code-title">
                                <span class="code-icon">🏮</span>
                                <h3>禪意提示框</h3>
                            </div>
                            <div class="code-lang">JavaScript</div>
                        </div>
                        <div class="code-content">
                            <pre><code>// 禪意風格的提示框
function showZenAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `zen-alert zen-alert-${type}`;
    alertDiv.innerHTML = `
        &lt;div class="zen-alert-content"&gt;
            &lt;div class="zen-alert-icon"&gt;${type === 'success' ? '🌸' : '⚠️'}&lt;/div&gt;
            &lt;p&gt;${message}&lt;/p&gt;
        &lt;/div&gt;
    `;
    
    document.body.appendChild(alertDiv);
    
    // 動畫顯示
    setTimeout(() => {
        alertDiv.style.transform = 'translateX(0)';
    }, 100);
}</code></pre>
                        </div>
                        <div class="code-footer">
                            <span class="code-desc">創造具有禪意美學的用戶提示</span>
                            <a href="https://github.com/a114221070-tech/zen-temple-website/blob/main/script.js" target="_blank" class="code-link">查看完整代碼</a>
                        </div>
                    </div>
                </div>
                
                <div class="github-showcase">
                    <div class="github-card">
                        <div class="github-header">
                            <div class="github-icon">📚</div>
                            <h3>完整原始碼</h3>
                        </div>
                        <p>想要查看完整的網站原始碼？歡迎訪問我的 GitHub 倉庫！</p>
                        <div class="github-stats">
                            <div class="stat-item">
                                <span class="stat-number">3</span>
                                <span class="stat-label">檔案</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">500+</span>
                                <span class="stat-label">行程式碼</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">100%</span>
                                <span class="stat-label">用心製作</span>
                            </div>
                        </div>
                        <a href="https://github.com/a114221070-tech/zen-temple-website" target="_blank" class="btn btn-primary">
                            <span>📖</span>
                            查看 GitHub 倉庫
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 心得感悟 -->
        <section id="wisdom" class="wisdom">
            <div class="container">
                <div class="section-header">
                    <div class="zen-symbol">🧘</div>
                    <h2>心得感悟</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="wisdom-content">
                    <div class="wisdom-cards">
                        <div class="wisdom-card">
                            <div class="wisdom-icon">🌅</div>
                            <h3>初心</h3>
                            <p>「初心者的心境有許多可能性，專家的心境則很少。」保持初學者的謙卑與好奇心。</p>
                        </div>
                        <div class="wisdom-card">
                            <div class="wisdom-icon">🌊</div>
                            <h3>持續</h3>
                            <p>「滴水穿石，非一日之功。」每天進步一點點，積少成多，終將有所成就。</p>
                        </div>
                        <div class="wisdom-card">
                            <div class="wisdom-icon">🌙</div>
                            <h3>反思</h3>
                            <p>「吾日三省吾身。」定期回顧學習過程，從錯誤中學習，從成功中總結。</p>
                        </div>
                    </div>
                    <div class="daily-quote">
                        <div class="quote-container">
                            <div class="quote-text">
                                <div class="sakura-quote-large">
                                    <div class="quote-decoration top">
                                        <span class="sakura-left">🌸</span>
                                        <span class="quote-mark-large">❝</span>
                                        <span class="sakura-right">🌸</span>
                                    </div>
                                    <p class="quote-main-text">學習如登山一步一腳印雖然辛苦但山頂的風景值得所有的努力。</p>
                                    <div class="quote-decoration bottom">
                                        <span class="sakura-left">🌸</span>
                                        <span class="quote-mark-large">❞</span>
                                        <span class="sakura-right">🌸</span>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-author">— 大一新生的學習感悟</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 結緣聯絡 -->
        <section id="contact" class="contact">
            <div class="container">
                <div class="section-header">
                    <div class="zen-symbol">🤝</div>
                    <h2>結緣聯絡</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="contact-content">
                    <div class="contact-info">
                        <div class="contact-card">
                            <h3>與我結緣</h3>
                            <p>如果你也是學習路上的同行者，或是願意指導後進的前輩，歡迎與我交流學習心得！</p>
                            <div class="contact-details">
                                <div class="contact-item">
                                    <div class="contact-icon">📧</div>
                                    <div>
                                        <strong>Email:</strong><br>
                                        a114221070@mail.shu.edu.tw
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <div class="contact-icon">🎓</div>
                                    <div>
                                        <strong>學校:</strong><br>
                                        世新大學
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <div class="contact-icon">🌸</div>
                                    <div>
                                        <strong>座右銘:</strong><br>
                                        學而時習之，不亦說乎
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form class="contact-form">
                        <div class="form-header">
                            <h3>留言結緣</h3>
                            <p>歡迎留下你的想法或建議</p>
                        </div>
                        <div class="form-group">
                            <label>姓名</label>
                            <input type="text" placeholder="請輸入你的姓名" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="請輸入你的 Email" required>
                        </div>
                        <div class="form-group">
                            <label>留言內容</label>
                            <textarea placeholder="分享你的想法、建議或學習心得..." rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <span>🙏</span>
                            送出留言
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-left">
                    <div class="footer-logo">
                        <div class="torii">⛩️</div>
                        <span>心靜齋</span>
                    </div>
                    <p>初心如月，學海無涯</p>
                </div>
                <div class="footer-right">
                    <div class="social-links">
                        <a href="#" title="GitHub">
                            <span>📚</span>
                            <span>學習筆記</span>
                        </a>
                        <a href="#" title="LinkedIn">
                            <span>🤝</span>
                            <span>專業交流</span>
                        </a>
                        <a href="#" title="Blog">
                            <span>✍️</span>
                            <span>學習日誌</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 心靜齋 - 大一新生的數位禪境. 願所有學習者都能找到屬於自己的道路.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
