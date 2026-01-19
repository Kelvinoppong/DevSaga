import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class for network effect
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
        ctx.fill();
      }
    }

    // Code snippet class
    class CodeSnippet {
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      fontSize: number;

      constructor() {
        const codeSnippets = [
          "const",
          "function",
          "=>",
          "return",
          "async",
          "await",
          "import",
          "export",
          "class",
          "{...}",
          "() =>",
          "useState",
          "useEffect",
          "map()",
          "filter()",
          "reduce()",
          "forEach",
          "Promise",
          "API",
          "REST",
          "JSON",
          "HTTP",
          "GraphQL",
          "Docker",
          "AWS",
          "React",
          "Node.js",
          "Python",
          "Java",
          "if else",
          "while",
          "for",
          "try catch",
          "npm",
          "git",
          "push",
          "commit",
          "merge",
          "branch",
        ];
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.fontSize = Math.random() * 8 + 10;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.font = `${this.fontSize}px "Fira Code", "Courier New", monospace`;
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    // Create particles and code snippets
    const particles: Particle[] = [];
    const codeSnippets: CodeSnippet[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < 30; i++) {
      codeSnippets.push(new CodeSnippet());
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw code snippets
      codeSnippets.forEach((snippet) => {
        snippet.update();
        snippet.draw();
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
