<template>
  <div class="aa">
    <p id="offscreen-text" class="offscreen-text"></p>
    <p id="text" class="text"></p>

    <svg id="svg">
    </svg>

    <input type="text" class="input" id="input" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { TweenLite, gsap,Back,Power3,Linear,TimelineMax, Power1 } from "gsap"
// gsap.registerPlugin(TextPlugin)
export default {
  name: 'gsapPage',
  data() {
    return {
      colors: [
        { main: '#FBDB4A', shades: ['#FAE073', '#FCE790', '#FADD65', '#E4C650'] },
        { main: '#F3934A', shades: ['#F7B989', '#F9CDAA', '#DD8644', '#F39C59'] },
        { main: '#EB547D', shades: ['#EE7293', '#F191AB', '#D64D72', '#C04567'] },
        { main: '#9F6AA7', shades: ['#B084B6', '#C19FC7', '#916198', '#82588A'] },
        { main: '#5476B3', shades: ['#6382B9', '#829BC7', '#4D6CA3', '#3E5782'] }
        // { main: '#2BB19B', shades: ['#4DBFAD', '#73CDBF', '#27A18D', '#1F8171'] },
        // { main: '#70B984', shades: ['#7FBE90', '#98CBA6', '#68A87A', '#5E976E'] }
      ]
    }
  },
   mounted() {
    //  let recaptchaScript = document.createElement('script')
    //   recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js')
    //   document.head.appendChild(recaptchaScript)
 
      const prompt = ['h','e','l','l','o'];
      const letters = []
    
    
    // var addressContainer = document.getElementById("adress");

    const createSVG = type => {
      const el = document.createElementNS('http://www.w3.org/2000/svg', type);
      return new SVGElement(el);
    };

    class SVGElement {
      constructor(element) {
      this.element = element;
      }

      set(attributeName, value) {
        this.element.setAttribute(attributeName, value);
      }

      style(property, value) {
        this.element.style[property] = value;
      }
    }
    
    const selectSVG = id => {
      const el = document.getElementById(id);
      return new SVGElement(el);
    };
    const svg = selectSVG('svg');
    let textSize = textSize = window.innerWidth / (letters.length+2);
    const addCirc = (x0, y0) => {
      const circ = createSVG('circle');
      const a = Math.random();
      const r = textSize*0.52;
      const r2 = r + textSize;
      const x = x0 + r * Math.cos(2 * Math.PI * a);
      const y = y0 + r * Math.sin(2 * Math.PI * a);
      const x2 = x0 + r2 * Math.cos(2 * Math.PI * a);
      const y2 = y0 + r2 * Math.sin(2 * Math.PI * a);
      const circSize = textSize * 0.05 * Math.random();
      circ.set('r', circSize);
      circ.style('fill', '#eee');
      svg.element.appendChild(circ.element);
      TweenLite.fromTo(circ.element, 0.6, {x: x-circSize, y: y-circSize, opacity: 1}, {x: x2-circSize, y: y2-circSize, opacity: 0, ease: Power1.easeInOut, onComplete: () => {
        svg.element.removeChild(circ.element);
      }});
    }

      // eslint-disable-next-line no-unused-vars
      const addDecor = (letter, color) => {
        setTimeout(() => {
          const x0 = letter.offsetLeft + letter.offsetWidth/2;
          const y0 = 10 - textSize*0.5;
          for (var i = 0; i < 8; i++) addCirc(x0, y0);
        }, 150);
      };

      const text = document.getElementById('text');
     const offscreenText = document.getElementById('offscreen-text');

      prompt.forEach((item, i) => {
        console.log(i)
        var newSpan = document.createElement('span');
        newSpan.textContent = item
        
        text.appendChild(newSpan); // 將向現有 DOM 元素新增一個節點

        const letter = document.createElement('span');
        const oLetter = document.createElement('span');
        letter.innerHTML = item;
        oLetter.innerHTML = item;

        // text.appendChild(letter);
        const color = this.colors[i%this.colors.length];
        oLetter.style.color = color.main;
         
        offscreenText.appendChild(oLetter);

        // gsap.to(newSpan, 1, {
        //   translateY: "50px",
        //   ease: Back.easeOut,
        //   delay: i * 0.3,
        //   color: this.colors[i].main,
       
        // })
        letters[i] = {offScreen: oLetter, onScreen: letter, char: item};
        textSize = window.innerWidth / (letters.length+2);
        addDecor(newSpan, this.colors[i].main)
      })



  
      
      
      // tempObj.textContent  = prompt[0]
      // gsap.to(`.text`, 1.5, {
      //   translateY: "0px",
      //   ease: Power3.easeInOut,
      //   delay: prompt[0] * 0.3,
        
      // })

  },
  methods: {
 
 
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
.aa {
  font-family: 'Rubik Mono One', sans-serif;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #22292C;
}

svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
}

.input {
  position: absolute;
  z-index: 1;
  bottom: 0px;
  font-size: 20px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-family: helvetica, sans-serif;
  bottom: 20px;
  background: none;
  border: 1px solid #ddd;
  color: #eee;
}

.text, .offscreen-text {
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  position: absolute;
  margin: 0;
}

.offscreen-text, .text {
  text-align: center;
  /* top: -9999px; */
}

.text span {
  position: absolute;
}

.text {
  font-size: 60px
}


</style>