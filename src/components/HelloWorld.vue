<template>
  <div class="hello">
    <canvas id="canvas" height="300px" width="300px"></canvas>
  </div>
</template>

<script>
let canvas,ctx;
let rad=150;
let num=25;
export default {
  name: 'HelloWorld',
  data() {
    return {
    }
  },
  methods: {
    rndColor() {
      var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    },
    draw(n){
      ctx.beginPath();
      ctx.moveTo(0,rad);
      var radians = Math.PI/180*n;
      var x = (rad * Math.sin(radians)) / Math.sin(Math.PI/2 - radians);
      ctx.lineTo(x,0);
      if (Math.abs(n) == 45) {
        ctx.strokeStyle=this.rndColor();
        ctx.lineWidth=1;
      } else if (n == 0) {
        ctx.strokeStyle="rgb(200,200,200)";
        ctx.lineWidth=.5;
      } else {
        ctx.strokeStyle="rgb(110,110,110)";
        ctx.lineWidth=.5;
      }
      ctx.stroke();
      ctx.rotate((Math.PI/180)*15);
    }
  },
  mounted() {
    return;
    let timeout = 0;
     canvas = document.getElementById('canvas');
      ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, 300, 300);
    ctx.translate(150, 150);
    for (let i = 1; i <= num; i++) {
      for (let n = -45; n <= 45; n += 15) {
        setTimeout(() => {
          this.draw(n)
        }, 100 * timeout);
        timeout++;
      }
    }
  }
}
</script>
<style>

</style>


