import { useEffect, useRef } from "react";

export default function CursorTrail() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;

                this.size = Math.random() * 5 + 2;
                this.alpha = 1;

                this.dx = (Math.random() - 0.5) * 2;
                this.dy = (Math.random() - 0.5) * 2;
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;

                this.alpha -= 0.02;
            }

            draw() {
                ctx.beginPath();

                ctx.fillStyle = `rgba(236,72,153,${this.alpha})`;

                ctx.shadowColor = "#ec4899";
                ctx.shadowBlur = 20;

                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                ctx.fill();
            }
        }

        const spawn = (x, y) => {
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(x, y));
            }
        };

        const mouseMove = (e) => spawn(e.clientX, e.clientY);

        const touchMove = (e) => {
            const touch = e.touches[0];
            spawn(touch.clientX, touch.clientY);
        };

        window.addEventListener("mousemove", mouseMove);

        window.addEventListener("touchmove", touchMove, {
            passive: true,
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles = particles.filter((p) => p.alpha > 0);

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("touchmove", touchMove);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-9999"
        />
    );
}