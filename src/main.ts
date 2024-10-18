const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

class Game {
  ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
    window.addEventListener('resize', () => this.resize())
    window.requestAnimationFrame(() => this.draw())
    this.resize()
  }

  draw() {
    console.log("drawing");
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(10, 10, this.ctx.canvas.width - 20, this.ctx.canvas.height - 20)
    window.requestAnimationFrame(() => this.draw())
  }

  resize() {
    const { width, height } = canvas.parentElement!.getBoundingClientRect()
    const { devicePixelRatio } = window
    console.log({ width, height, devicePixelRatio })

    this.ctx.canvas.width = width * devicePixelRatio
    this.ctx.canvas.height = height * devicePixelRatio
    this.ctx.canvas.style.width = `${width * devicePixelRatio}px`
    this.ctx.canvas.style.height = `${height * devicePixelRatio}px`
  }
}

const game = new Game(ctx);
game.draw()