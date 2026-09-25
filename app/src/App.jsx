import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// --- SVG Components ---

const PelicanSVG = () => (
    <div className="svg-showcase">
        <div className="svg-container" style={{ background: '#f0f9ff' }}>
            <svg className="svg-pelican" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.1" />
                    </filter>
                </defs>

                {/* Soft Sun */}
                <circle cx="650" cy="150" r="80" fill="#fef08a" opacity="0.6">
                    <animate attributeName="r" values="80;90;80" dur="4s" repeatCount="indefinite" />
                </circle>

                <g style={{ animation: 'float 3s ease-in-out infinite' }}>
                    {/* Bicycle */}
                    <g stroke="#94a3b8" strokeWidth="8" fill="none" filter="url(#softShadow)">
                        {/* Wheels */}
                        <circle cx="250" cy="450" r="80" stroke="#475569" strokeWidth="14" />
                        <circle cx="550" cy="450" r="80" stroke="#475569" strokeWidth="14" />

                        {/* Spokes - Animated */}
                        <g style={{ animation: 'pedal 2.5s linear infinite', transformOrigin: '250px 450px' }}>
                            <line x1="250" y1="370" x2="250" y2="530" stroke="#cbd5e1" strokeWidth="3" />
                            <line x1="170" y1="450" x2="330" y2="450" stroke="#cbd5e1" strokeWidth="3" />
                        </g>
                        <g style={{ animation: 'pedal 2.5s linear infinite', transformOrigin: '550px 450px' }}>
                            <line x1="550" y1="370" x2="550" y2="530" stroke="#cbd5e1" strokeWidth="3" />
                            <line x1="470" y1="450" x2="630" y2="450" stroke="#cbd5e1" strokeWidth="3" />
                        </g>

                        {/* Frame */}
                        <path d="M 250 450 L 350 300 L 500 300 L 550 450" strokeLinejoin="round" />
                        <path d="M 350 300 L 400 450" />

                        {/* Handlebars */}
                        <path d="M 500 300 L 470 230" strokeWidth="10" strokeLinecap="round" />
                        <path d="M 440 230 L 500 230" strokeWidth="10" strokeLinecap="round" />
                    </g>

                    {/* Pelican */}
                    <g transform="translate(300, 150)" filter="url(#softShadow)">
                        {/* Body */}
                        <path d="M 0 150 C -50 150 -90 100 -60 50 C -30 0 50 0 80 50 C 130 120 80 150 0 150 Z" fill="#ffffff" />
                        {/* Wing */}
                        <path d="M -20 80 C 20 80 70 110 40 140 C 0 140 -50 120 -20 80 Z" fill="#f1f5f9" />
                        {/* Head & Neck */}
                        <path d="M 50 20 C 60 -60 120 -90 160 -60 C 150 -10 100 30 70 60 Z" fill="#ffffff" />
                        {/* Eye */}
                        <circle cx="130" cy="-55" r="5" fill="#1e293b" />
                        {/* Beak */}
                        <path d="M 150 -50 Q 280 -40 170 15 Q 150 25 130 5 Z" fill="#fb923c" />
                        {/* Pouch - With subtle animation */}
                        <path d="M 130 5 Q 190 60 150 -20" fill="#fcd34d" opacity="0.9">
                            <animate attributeName="d" values="M 130 5 Q 190 60 150 -20; M 130 5 Q 200 80 150 -20; M 130 5 Q 190 60 150 -20" dur="2s" repeatCount="indefinite" />
                        </path>
                    </g>
                </g>
            </svg>
        </div>
        <div className="clean-card" style={{ maxWidth: '800px', width: '100%' }}>
            <h3 style={{ marginBottom: '0.8rem', color: '#111827', fontSize: '1.4rem' }}>The Classic Pelican</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                A refined version of the pelican riding a bicycle. Pure vector graphics ensure perfect scaling,
                with soft drop shadows and breathing animations applied directly via SVG and CSS.
            </p>
        </div>
    </div>
);

const GeometricSVG = () => (
    <div className="svg-showcase">
        <div className="svg-container" style={{ background: '#faf5ff' }}>
            <svg className="svg-geometric" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                </defs>

                <g style={{ animation: 'rotateSlow 20s linear infinite', transformOrigin: '400px 300px' }}>
                    {/* Inner Morping Shape */}
                    <path fill="url(#grad1)" opacity="0.8">
                        <animate
                            attributeName="d"
                            dur="8s"
                            repeatCount="indefinite"
                            values="
                M 300 200 C 400 100, 500 200, 500 300 C 500 400, 400 500, 300 400 C 200 300, 200 200, 300 200 Z;
                M 250 250 C 450 150, 550 250, 450 450 C 350 550, 150 450, 250 250 Z;
                M 300 200 C 400 100, 500 200, 500 300 C 500 400, 400 500, 300 400 C 200 300, 200 200, 300 200 Z
              "
                        />
                    </path>

                    {/* Outer Rotating Circles */}
                    <circle cx="400" cy="300" r="180" stroke="url(#grad2)" strokeWidth="2" fill="none" strokeDasharray="10 20" />
                    <circle cx="400" cy="300" r="220" stroke="url(#grad1)" strokeWidth="4" fill="none" strokeDasharray="40 40">
                        <animateTransform attributeName="transform" type="rotate" from="360 400 300" to="0 400 300" dur="15s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Center UI element */}
                <circle cx="400" cy="300" r="40" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.1))" />
                <circle cx="400" cy="300" r="20" fill="#8b5cf6">
                    <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
        <div className="clean-card" style={{ maxWidth: '800px', width: '100%' }}>
            <h3 style={{ marginBottom: '0.8rem', color: '#111827', fontSize: '1.4rem' }}>Abstract Geometry</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Showcasing complex math-based SVG animations. Features path morphing, dasharray transformations,
                and layered gradient rotations. Perfect for modern SaaS landing pages.
            </p>
        </div>
    </div>
);

const OrganicSVG = () => (
    <div className="svg-showcase">
        <div className="svg-container" style={{ background: '#ecfdf5' }}>
            <svg className="svg-organic" viewBox="0 0 1000 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#047857" stopOpacity="0.05" />
                    </linearGradient>
                </defs>

                {/* Background Wave */}
                <path fill="url(#waveGrad2)">
                    <animate attributeName="d"
                        values="
                M0 200 C 250 100, 350 300, 600 200 C 800 120, 900 250, 1000 200 L 1000 400 L 0 400 Z;
                M0 200 C 200 300, 400 100, 600 200 C 850 300, 950 150, 1000 200 L 1000 400 L 0 400 Z;
                M0 200 C 250 100, 350 300, 600 200 C 800 120, 900 250, 1000 200 L 1000 400 L 0 400 Z
              "
                        dur="7s" repeatCount="indefinite" />
                </path>

                {/* Foreground Wave */}
                <path fill="url(#waveGrad)">
                    <animate attributeName="d"
                        values="
                M0 250 C 200 350, 300 150, 500 250 C 700 350, 800 200, 1000 250 L 1000 400 L 0 400 Z;
                M0 250 C 250 150, 400 350, 600 250 C 800 150, 900 300, 1000 250 L 1000 400 L 0 400 Z;
                M0 250 C 200 350, 300 150, 500 250 C 700 350, 800 200, 1000 250 L 1000 400 L 0 400 Z
              "
                        dur="5s" repeatCount="indefinite" />
                </path>

                {/* Floating particles */}
                <g fill="#a7f3d0" opacity="0.6">
                    <circle cx="200" cy="150" r="4"><animate attributeName="cy" values="150;120;150" dur="3s" repeatCount="indefinite" /></circle>
                    <circle cx="700" cy="100" r="6"><animate attributeName="cy" values="100;70;100" dur="4s" repeatCount="indefinite" /></circle>
                    <circle cx="450" cy="80" r="3"><animate attributeName="cy" values="80;60;80" dur="2.5s" repeatCount="indefinite" /></circle>
                </g>
            </svg>
        </div>
        <div className="clean-card" style={{ maxWidth: '800px', width: '100%' }}>
            <h3 style={{ marginBottom: '0.8rem', color: '#111827', fontSize: '1.4rem' }}>Organic Flow</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                A serene, responsive liquid wave animation. Generated purely through Bezier curves and CSS animations,
                creating a calming, high-performance visual suitable for premium consumer apps.
            </p>
        </div>
    </div>
);

const SVGGallery = () => (
    <div className="svg-gallery">
        <PelicanSVG />
        <GeometricSVG />
        <OrganicSVG />
    </div>
);

// --- Starling Simulation ---
const StarlingSimulation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Adapted for Light Theme: using darker, elegant blues
        const boids = Array.from({ length: 250 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            size: Math.random() * 2 + 1.5
        }));

        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };
        canvas.addEventListener('mousemove', handleMouseMove);

        const draw = () => {
            // Light trail effect
            ctx.fillStyle = 'rgba(248, 250, 252, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            boids.forEach(b => {
                const dx = mouseX - b.x;
                const dy = mouseY - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 350) {
                    b.vx += (dx / dist) * 0.25;
                    b.vy += (dy / dist) * 0.25;
                } else {
                    b.vx += (Math.random() - 0.5) * 0.8;
                    b.vy += (Math.random() - 0.5) * 0.8;
                }

                const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
                if (speed > 6) {
                    b.vx = (b.vx / speed) * 6;
                    b.vy = (b.vy / speed) * 6;
                }

                b.x += b.vx;
                b.y += b.vy;

                if (b.x < 0) b.x = canvas.width;
                if (b.x > canvas.width) b.x = 0;
                if (b.y < 0) b.y = canvas.height;
                if (b.y > canvas.height) b.y = 0;

                ctx.save();
                ctx.translate(b.x, b.y);
                ctx.rotate(Math.atan2(b.vy, b.vx));
                // Elegant styling for light theme
                ctx.fillStyle = '#3b82f6';
                ctx.shadowBlur = 8;
                ctx.shadowColor = 'rgba(59, 130, 246, 0.4)';
                ctx.beginPath();
                ctx.moveTo(b.size * 2, 0);
                ctx.lineTo(-b.size, b.size);
                ctx.lineTo(-b.size * 0.5, 0);
                ctx.lineTo(-b.size, -b.size);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            });

            requestAnimationFrame(draw);
        };

        const token = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(token);
        };
    }, []);

    return (
        <div className="starling-showcase">
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
            <div className="starling-overlay">
                <h3>Interactive Simulation</h3>
                <p>A starling murmuration that intelligently reacts to your cursor, powered by 3.1 Pro mechanics.</p>
            </div>
        </div>
    );
};

// --- Wuthering Heights (Light Typography Theme) ---
const WutheringPortfolio = () => (
    <div className="wuthering-showcase">
        <div className="w-left">
            <span className="w-subtitle">A Visual Study</span>
            <h1 className="w-title">Wuthering<br />Heights</h1>
            <p className="w-desc">
                Gemini 3.1 Pro reasoned through the novel's complex character dynamics to design a clean,
                typography-driven interface that captures the essence of the moors in a modern light.
            </p>
        </div>
        <div className="w-right">
            <div className="character-card">
                <h3 className="char-name">Heathcliff</h3>
                <span className="char-trait">Brooding • Vengeful • Passionate</span>
            </div>
            <div className="character-card">
                <h3 className="char-name">Catherine Earnshaw</h3>
                <span className="char-trait">Wild • Capricious • Torn</span>
            </div>
            <div className="character-card">
                <h3 className="char-name">Edgar Linton</h3>
                <span className="char-trait">Mild • Refined • Passive</span>
            </div>
        </div>
    </div>
);


const App = () => {
    const [activeTab, setActiveTab] = useState('svg');

    const tabs = [
        { id: 'svg', label: '1. Advanced SVGs', icon: '🎨' },
        { id: 'starling', label: '2. 3D Simulation', icon: '🧬' },
        { id: 'wuthering', label: '3. Editorial UI', icon: '📚' }
    ];

    return (
        <div className="app-container">
            <aside className="sidebar">
                <div className="brand">
                    <div className="brand-icon">✨</div>
                    <h1>Gemini 3.1 Pro</h1>
                </div>

                <nav className="nav-links">
                    {tabs.map(tab => (
                        <div
                            key={tab.id}
                            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className="nav-icon">{tab.icon}</span>
                            {tab.label}
                        </div>
                    ))}
                </nav>
            </aside>

            <main className="main-content">
                <header className="header">
                    <h2>{tabs.find(t => t.id === activeTab)?.label}</h2>
                    <div className="header-badge">Live Demonstration</div>
                </header>

                <section className="content-area">
                    {activeTab === 'svg' && <SVGGallery />}
                    {activeTab === 'starling' && <StarlingSimulation />}
                    {activeTab === 'wuthering' && <WutheringPortfolio />}
                </section>
            </main>
        </div>
    );
};

export default App;
