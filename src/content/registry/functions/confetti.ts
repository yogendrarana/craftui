interface ConfettiOptions {
    particleCount?: number;
    origin?:
        | "top"
        | "bottom"
        | "left"
        | "right"
        | "center"
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right";
    duration?: number;
}

interface Particle {
    update: () => void;
    render: (ctx: CanvasRenderingContext2D) => void;
    position: { x: number; y: number };
}

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let animationFrame: number | null = null;
let particles: Particle[] = [];

const gravityConfetti = 0.3;
const gravitySequins = 0.55;
const dragConfetti = 0.075;
const dragSequins = 0.02;
const terminalVelocity = 3;

function createCanvas() {
    if (typeof window === "undefined") return;

    canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    ctx = canvas.getContext("2d");
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
    if (!canvas || !ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function removeCanvas() {
    if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
    }
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
    canvas = null;
    ctx = null;
    animationFrame = null;
    particles = [];
}

const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

const initConfettoVelocity = (xRange: [number, number], yRange: [number, number]) => {
    const x = randomRange(xRange[0], xRange[1]);
    const range = yRange[1] - yRange[0] + 1;
    let y = yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range);
    if (y >= yRange[1] - 1) {
        y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
    }
    return { x, y: -y };
};

function calculateOrigin(
    canvasWidth: number,
    canvasHeight: number,
    origin: ConfettiOptions["origin"]
) {
    const originMap = {
        center: {
            x: [canvasWidth / 2 - 50, canvasWidth / 2 + 50],
            y: [canvasHeight / 2 + 50, canvasHeight / 2 + 100]
        },
        top: {
            x: [canvasWidth / 2 - 50, canvasWidth / 2 + 50],
            y: [50, 100]
        },
        bottom: {
            x: [canvasWidth / 2 - 50, canvasWidth / 2 + 50],
            y: [canvasHeight - 100, canvasHeight - 50]
        },
        left: {
            x: [50, 100],
            y: [canvasHeight / 2 - 50, canvasHeight / 2 + 50]
        },
        right: {
            x: [canvasWidth - 100, canvasWidth - 50],
            y: [canvasHeight / 2 - 50, canvasHeight / 2 + 50]
        },
        "top-left": { x: [50, 100], y: [50, 100] },
        "top-right": { x: [canvasWidth - 100, canvasWidth - 50], y: [50, 100] },
        "bottom-left": { x: [50, 100], y: [canvasHeight - 100, canvasHeight - 50] },
        "bottom-right": {
            x: [canvasWidth - 100, canvasWidth - 50],
            y: [canvasHeight - 100, canvasHeight - 50]
        }
    };

    return originMap[origin || "center"];
}

function createConfetto(
    canvasWidth: number,
    canvasHeight: number,
    origin: ConfettiOptions["origin"]
): Particle {
    const originBounds = calculateOrigin(canvasWidth, canvasHeight, origin);
    const randomModifier = randomRange(0, 99);
    const color = { front: randomColor(), back: randomColor() };
    const dimensions = {
        x: randomRange(5, 9),
        y: randomRange(8, 15)
    };
    const position = {
        x: randomRange(originBounds.x[0], originBounds.x[1]),
        y: randomRange(originBounds.y[0], originBounds.y[1])
    };
    const rotation = randomRange(0, 2 * Math.PI);
    const scale = { x: 1, y: 1 };
    const velocity = initConfettoVelocity([-9, 9], [6, 11]);

    return {
        update() {
            velocity.x -= velocity.x * dragConfetti;
            velocity.y = Math.min(velocity.y + gravityConfetti, terminalVelocity);
            velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

            position.x += velocity.x;
            position.y += velocity.y;

            scale.y = Math.cos((position.y + randomModifier) * 0.09);
        },
        render(ctx: CanvasRenderingContext2D) {
            const width = dimensions.x * scale.x;
            const height = dimensions.y * scale.y;

            ctx.save();
            ctx.translate(position.x, position.y);
            ctx.rotate(rotation);

            ctx.fillStyle = scale.y > 0 ? color.front : color.back;
            ctx.fillRect(-width / 2, -height / 2, width, height);

            ctx.restore();
        },
        position
    };
}

function createSequin(
    canvasWidth: number,
    canvasHeight: number,
    origin: ConfettiOptions["origin"]
): Particle {
    const originBounds = calculateOrigin(canvasWidth, canvasHeight, origin);
    const color = randomColor();
    const radius = randomRange(1, 2);
    const position = {
        x: randomRange(originBounds.x[0], originBounds.x[1]),
        y: randomRange(originBounds.y[0], originBounds.y[1])
    };
    const velocity = {
        x: randomRange(-6, 6),
        y: randomRange(-8, -12)
    };

    return {
        update() {
            velocity.x -= velocity.x * dragSequins;
            velocity.y = velocity.y + gravitySequins;

            position.x += velocity.x;
            position.y += velocity.y;
        },
        render(ctx: CanvasRenderingContext2D) {
            ctx.save();
            ctx.translate(position.x, position.y);

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fill();

            ctx.restore();
        },
        position
    };
}

function render() {
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update();
        particle.render(ctx);
    });

    particles = particles.filter((p) => p.position.y < canvas.height);

    if (particles.length > 0) {
        animationFrame = requestAnimationFrame(render);
    } else {
        removeCanvas();
    }
}

export function triggerConfetti(options: ConfettiOptions = {}) {
    const { particleCount = 50, origin = "center", duration = 3000 } = options;

    if (!canvas) {
        createCanvas();
    }

    if (!canvas || !ctx) return;

    const confettiCount = Math.floor(particleCount * 0.75);
    const sequinCount = Math.floor(particleCount * 0.25);

    const newConfetti = Array.from({ length: confettiCount }, () =>
        createConfetto(canvas.width, canvas.height, origin)
    );
    const newSequins = Array.from({ length: sequinCount }, () =>
        createSequin(canvas.width, canvas.height, origin)
    );

    particles = [...particles, ...newConfetti, ...newSequins];

    if (!animationFrame) {
        animationFrame = requestAnimationFrame(render);
    }

    // Optional: Remove canvas after duration
    setTimeout(() => {
        if (particles.length === 0) {
            removeCanvas();
        }
    }, duration);
}
