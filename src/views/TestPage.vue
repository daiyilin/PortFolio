<template>
  <div >
 
 <nav>
   <p>ScrollTrigger Demo</p>
   <ul>
     <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
     <li class="nav-item"><a href="#" class="nav-link">Explore</a></li>
     <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
   </ul>
 </nav>
 <div class="hero">
   <img class="person" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/person.png" data-depth="0.10">
   <img class="bg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/background.png" data-depth="0.34">
   <img class="snow" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/snow.png" data-depth="0.24">
   <div class="hero-text">
     <h1 class="hero-title" data-depth="0.64">DISCOVER NATURE</h1>
     <h3 class="hero-sub" data-depth="0.6">Take it all in</h3>
   </div>
   <svg version="1.1" id="mouse-icon" data-depth="0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 75" xml:space="preserve">
     <path id="outline" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" d="M20.434 61.208h0c-9.665 0-17.5-7.835-17.5-17.5v-25c0-9.665 7.835-17.5 17.5-17.5h0c9.665 0 17.5 7.835 17.5 17.5v25c0 9.665-7.835 17.5-17.5 17.5z" />
     <circle id="scroll" fill="#FFFFFF" cx="20.434" cy="14.626" r="4" /></svg>
 </div>
    <section class="panel">
     <div class="container">
       <div class="grid-item">
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/512.jpg" class="panel-image">
       </div>
       <div class="grid-item">
         <p class="panel-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quisquam facilis beatae molestias qui impedit,
           accusamus eius pariatur inventore expedita minima necessitatibus iste labore quibusdam neque adipisci sequi voluptatem iusto dignissimos!
           Commodi mollitia doloribus reprehenderit rem sunt? Ea quis numquam consectetur esse nostrum eveniet totam laborum? Deserunt fugiat aliquam assumenda
           qui sit vero vitae id laudantium nostrum quae sapiente temporibus quaerat dolorem culpa quos,
           aspernatur quo maiores voluptatem incidunt autem, repudiandae iste aperiam. Culpa sunt nulla accusamus, maxime voluptatum molestias?</p>
         <button class="btn">Read more</button>
       </div>

     </div>
   </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'gsapPage',
  data() {
    return {
    }
  },
   mounted() {
    const img = document.querySelector(".panel-image")
    const btn = document.querySelector(".btn")
    const box = document.querySelector(".panel-text")

    const iconTl = gsap.timeline({ repeat: -1, paused: true });
    iconTl
      .to(
        "#scroll",
        {
          y: 20,
          autoAlpha: 0,
          transformOrigin: "50% 100%",
          duration: 0.7
        },
        "icon"
      )
      .to("#outline", { y: 8, duration: 0.7 }, "icon")
      .to("#outline", { y: 0, duration: 0.7 }, "icon+=0.7");
      
    const tl = gsap.timeline({
      defaults: { ease: "none", transformOrigin: "50% 50%" },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    gsap.utils.toArray("img").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      tl.to(layer, { y: -movement }, 0);
    });

    const tl2 = gsap.timeline({ paused: true, defaults: { ease: "power1.out" } });
    tl2
      .from(img, { autoAlpha: 0, scale: 0, y: 20, duration: 0.5 }, 0)
      .from(box, { autoAlpha: 0, x: 50, duration: 0.4 }, 0.04)
      .from(
        btn,
        {
          autoAlpha: 0,
          x: 50,
          duration: 0.36,
          onComplete: () => {
            gsap.set(btn, { clearProps: "transform" });
          }
        },
        0.08
      );

    ScrollTrigger.create({
      trigger: ".panel",
      start: "-25% top",
      end: "300px bottom",
      onEnter: () => {
        tl2.play();
        // disable the mouse icon tl
        iconTl.pause();
      },
      onEnterBack: () => {
        tl2.reverse();
        //  resume the mouse icon tl
        iconTl.restart();
      }
    });
    

  },
  methods: {
 
 
  }
}
</script>
<style scoped>

.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader-circles {
  height: 100px;
  width: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grey,
.black {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 5;
  background: #ccc;
  position: absolute;
}
.grey {
  border: 1px solid #ccc;
}
.black {
  z-index: 6;
  background: #333;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 100px);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  padding: 0 3rem;
}
ul,
li {
  list-style-type: none;
  display: inline-block;
}
ul {
  padding-left: 0px;
}
li {
  margin: 8px 16px;
}
.nav-link {
  position: relative;
  text-decoration: none;
  color: #fff;
}
.nav-link:before {
  content: "";
  position: absolute;
  height: 2px;
  background: #fff;
  bottom: -4px;
  right: 0;
  width: 0%;
  transition: 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
}
.nav-link:hover:before {
  left: 0;
  width: 100%;
}

/* HERO */
.hero {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.hero:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  height: 50%;
  width: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: 2;
}
.hero-text {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
}
.hero-title,
.hero-sub {
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.hero-title {
  font-size: 6.25rem;
  margin-block-end: 16px;
}
.hero-sub {
  font-size: 2rem;
  margin-block-start: 16px;
}
.bg {
  position: relative;
  width: 100%;
  max-width: 100vw;
  z-index: 0;
}
.person {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 4px;
  width: 100%;
  max-width: 100vw;
  z-index: 1;
}
.snow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 2;
}
#mouse-icon {
  width: 40px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, 0);
}
/* MEDIA QUERIES */
@media screen and (max-width: 1191px) {
  .hero-title {
    font-size: 5rem;
  }
  #mouse-icon {
    bottom: 14%;
  }
}
@media screen and (max-width: 891px) {
  .hero-title {
    font-size: 4.5rem;
  }
  #mouse-icon {
    bottom: 12%;
    width: 30px;
  }
}
@media screen and (max-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
  #mouse-icon {
    bottom: 10%;
  }
}
@media screen and (max-width: 575px) {
  .hero-title {
    font-size: 3rem;
  }
  #mouse-icon {
    width: 20px;
  }
}
/*  PANEL */
.panel {
  height: 100vh;
  display: flex;
  align-items: center;
}
.container {
  max-width: 1170px;
  margin: 3rem auto;
  display: grid;
  grid-template-areas:
    "image text text"
    "image text text";
  grid-gap: 0px 100px;
}
.grid-item:nth-child(1) {
  grid-area: image;
}
.grid-item:nth-child(2) {
  grid-area: text;
}
.panel-text {
  font-size: 1.5rem;
  margin-block-start: 0;
  color: #333;
}
.panel-image {
  width: 100%;
  max-width: 160px;
  object-fit: cover;
}
.btn {
  position: relative;
  background: #333;
  color: #fff;
  font-size: 1.125rem;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  border-radius: 0px;
  overflow: hidden;
}
/* MEDIA QUERIES */
@media screen and (max-width: 1191px) {
  .container {
    width: auto;
    margin: 3rem 2rem;
    grid-gap: 35px;
  }
}
@media screen and (max-width: 891px) {
  .panel-text {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 768px) {
  .container {
    grid-template-areas:
      "image"
      "text";
  }
  .panel-image {
    margin: 0px;
  }
}
@media screen and (max-width: 575px) {
  .container {
    margin: 0rem 2rem;
  }
  .panel-text {
    font-size: 1rem;
  }
  .btn {
    font-size: 1rem;
  }
}


</style>