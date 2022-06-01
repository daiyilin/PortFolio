<template>
  <div class="">
    <div class="box red"></div>

    <h1 class="score"></h1>
    <img src="../assets/logo.png" alt="logo" ref="logoImg" id="logoImg">
  </div>
</template>

<script>
import { gsap, TimelineMax } from "gsap"

export default {
  name: 'gsapPage',
  data() {
    return {
    }
  },
   mounted() {
    console.clear();
    gsap.to(".red", {
      rotation: 27, x: 200, 
      duration: 1, 
      ease: 'bounce',
      repeat: 10,        // 設置動畫重複次數
      repeatDelay: 0.5,  // 設置重複的間隔時間(秒)
      yoyo: true,        // 設為true時，動畫會反轉重複
    });

    var box = document.querySelector(".box");
    gsap.timeline()
      .set(box, { className: "box green"}, "+=1")  // 增加class
      .set(box, { className: "box green big"}, "+=1");

    let t1 = new TimelineMax()
    t1.to("#logoImg", 1, {
      y:200,
      rotate:360
    }).to("#logoImg", 1, {
      scale:2
    }).to("#logoImg", 1, {
      scale:1
    });

    let counter = {score: 0};
    const scoreDom = document.querySelector('.score');

    // eslint-disable-next-line no-unused-vars
    const tween = gsap.to(counter, {
      duration: 10,
      score: 100,
      onUpdate() {
        scoreDom.innerHTML = counter.score.toFixed(2);
      },
    });
  },
  methods: {

 
  }
}
</script>
<style scoped>
.box{
  width: 60px;
  height: 60px;
  background: #ff2626;
  border-radius: 4px;
  margin: 10px;
}

.green {
  background: green;
}

.big {
  width: 200px;
  height: 200px;
}

p {
	margin: 10px;
}
#scoreDisplay {
	font-size: 40px;
	text-align: center;
	margin-top: 70px;
}
</style>