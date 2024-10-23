const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

class Game {
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    window.addEventListener('resize', () => this.resize());
    window.requestAnimationFrame(() => this.draw());
    this.resize();
  }

  draw() {
    console.log('drawing');
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // smiley face
    this.ctx.strokeStyle = 'white';
    this.ctx.beginPath();
    this.ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();

    window.requestAnimationFrame(() => this.draw());
  }

  resize() {
    const { width, height } = canvas.parentElement!.getBoundingClientRect();
    const { devicePixelRatio } = window;

    this.ctx.canvas.width = width * devicePixelRatio;
    this.ctx.canvas.height = height * devicePixelRatio;
    this.ctx.canvas.style.width = `${width}px`;
    this.ctx.canvas.style.height = `${height}px`;
  }
}

const game = new Game(ctx);
