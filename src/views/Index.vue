/* eslint-disable no-unused-vars */
<template>
  <div class="indexpage">
    <div class="wrapper" id="wrapper" >
  
      <div class="nav">
        <div class="logo">
          <h1 class="mainTitle">
            <span>Dai <br> Yi</span>
            <br>
            Hello
          </h1>
        </div>

        <div class="menu-links">
          <ul class="mainTitle">
            <li><a href="#wrapper">home.</a></li>
            <li><a href="#aboutPage">about.</a></li>
            <li><a href="#specialtyPage">SPECIALTY.</a></li>
            <li><a href="#experiencePage">EXPERIENCE.</a></li>
          </ul>
        </div>
        <div class="scrolldown mainTitle">scroll</div>
      </div>

      <div class="text">
        <div class="title mainTitle">Dai Yi</div>
        <p>Developer   <br>
        <!-- Front End & Back End -->
        </p>
      </div>

      <div class="watchnow mainTitle">
        <font-awesome-icon icon="fa-solid fa-play" @click="play()" v-if="audioState===null" />
        <font-awesome-icon icon="fa-solid fa-volume-high" @click="play()" v-if="audioState==='paused'" />
        <font-awesome-icon icon="fa-solid fa-volume-xmark" @click="play()" v-if="audioState==='play'"/>
        <audio
          ref="audio"
          src="@/assets/audios/Cocktail Hour - Aaron Kenny.mp3"
          preload
          loop
          id="audio"
          muted
        ></audio>
        <a href="#">You are braver <br> than you believe.</a>
      </div>

      <!-- <div class="media">
        <ul>
          <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
          <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
          <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
        </ul>
      </div> -->

      <div class="ellipse-container">
        <div ><img class="pic" src="~@/assets/img/myself.jpg" alt="dai yi Pic."></div>
        <div class="ellipse yellow"></div>
      </div>
    </div>
    
    <div class="aboutPage newPage" id="aboutPage">
      <div class="aboutTitle mainTitle">
        <span>About</span>
      </div>
      <div class="aboutContent">
        <div class="aboutPic">
          <img id="aboutPic1" src="~@/assets/img/daiyiQ.png" alt="dai yi Pic." @mouseover="mouseoverAboutImg()">
          <img id="aboutPic2"  src="~@/assets/img/myself.jpg" alt="dai yi Pic."  @mouseleave="mouseleaveAboutImg()">
        </div>
        <div class="aboutText">
          <h1>林岱儀 | <span>Dai Yi Lin</span> </h1>
          <p>
            投入在開發、維護系統與系統規劃已有將近快六年之時間，另外還有一年多的專案管理之經驗。
            主要使用.net core開發web api，並使用Vue、Nuxt.js、搭配CoreUI開發後台管理介面。
          </p>
          <p>
            喜歡接觸新事物，也樂於跟同事分享有趣或是新事物，
            並互相交流自己的看法，讓自己在這個過程中可以獲得更多額外的知識。 
          </p>
          <p>
            偶爾會研讀讀技術文章、參考別人設計的網站、練習Leet Code題目，培養自己邏輯能力。
          </p>
          <p>
            對我而言，程式，是條無止境的路；而我，就在這條路上持續的前進著。
          </p>
        </div>
      </div>
      
    </div>

    <div class="specialtyPage newPage" id="specialtyPage">
      <div class="specialtyTitle mainTitle">
        <span>specialty</span>
      </div>
      <div class="specialtyContent">
        <div class="specialtyItem">
          <span>Frontend</span>
          <ul>
            <li>Vue</li>
            <li>JavaScript</li>
            <li>css</li>
            <li>html5</li>
          </ul>
          <div>
            <img src="~@/assets/img/html5-css-javascript-logos.png" alt="html5-css-javascript logo" style="width:30%">
            <img src="~@/assets/img/vue.png" alt="vue logo" style="width:20%">
          </div>
        </div>

        <div class="specialtyItem">
          <span>Backend</span>
          <ul>
            <li>.net core</li>
            <li>Java</li>
          </ul>
          <div>
            <img src="~@/assets/img/NET_Core_Logo.png" alt=".net core logo" style="width:20%">
            <img src="~@/assets/img/Java_logo.png" alt="java logo" style="width:30%">
          </div>
        </div>

        <div class="specialtyItem">
          <span>Other</span>
          <ul>
            <li>My SQL</li>
            <li>MSSQL</li>
          </ul>
          <div>
            <img src="~@/assets/img/mysql.png" alt="mysql logo" style="width:20%">
            <img src="~@/assets/img/sql-server-logo.png" alt="mssql logo" style="width:30%">
          </div>
        </div>
      </div>
    </div>

    <div class="experiencePage newPage" id="experiencePage">
      <div class="experienceTitle mainTitle">
        <span>EXPERIENCE</span>
      </div>
      <div class="experienceContent">
        <div class="timeline">
          <div data-content-before="2019/03-now" data-content-after="信昌機械" class="timelineItem">
            <h4 class="timelineItemTitle"><img src="@/assets/img/hcmf.png" alt="hcmf"> 系統工程師 <span class="bottom-side"></span></h4>
            <p>
              1.維護enovia - PLM系統: 功能&報表開發、現有功能維護，與處理使用者問題。 <br>
              前端使用jsp，並搭配fusioncharts.js套件製作各項報表; <br>
              後端為java並配合官方提供的軟體進行系統的維護與開發。 <br>

              2.開發公司內部系統: 營業報價系統、沖壓生產系統、議價卡系統，並與EBS、PLM交換所需資料 <br>
              前端主要使用vue、nuxt <br> 
              後端使用.net core 開發web api並搭配MSSQL或MySQL <br>
            </p>
          </div>
          <div data-content-before="2017/11-2019/02" data-content-after="傑創資訊" class="timelineItem">
            <h4 class="timelineItemTitle"><img src="@/assets/img/jw_logo.png" alt="hcmf"> 專案助理<span class="bottom-side"></span></h4>
            <p>
              1.與客戶需求討論、售後教學 <br>
              2.規劃系統功能、設計系統雛型介面 <br>
              3.確認專案進度，適時的與客戶進行回報 <br>
            </p>
          </div>
          <div data-content-before="2016/03-2017/09" data-content-after="信昌機械" class="timelineItem">
           <h4 class="timelineItemTitle"><img src="@/assets/img/hcmf.png" alt="hcmf"> 助理工程師<span class="bottom-side"></span></h4>
            <p>
              1.維護enovia - PLM系統: 功能&報表開發、現有功能維護，與處理使用者問題。 <br>
              前端使用jsp，並搭配fusioncharts.js套件製作各項報表; <br>
              後端為java並配合官方提供的軟體進行系統的維護與開發。 <br>
            </p>
          </div>
          <div data-content-before="2015/08-2015/11" data-content-after="千昊資訊" class="timelineItem">
            <h4 class="timelineItemTitle"><font-awesome-icon icon="fa-solid fa-briefcase" /> 專案助理<span class="bottom-side"></span></h4>
            <p>
              1.專案執行的角色: 確認開發進度、與客戶溝通需求 <br>
              2.參與ios app的開發: 負責UI介面的排版
            </p>
          </div>
        </div>
      </div>
      
    </div>


    <div class="contactPage">
      <div class="contactTilte mainTitle">
        Contact
      </div>
      <div class="contactContent">
        <div><font-awesome-icon icon="fa-brands fa-github" @click="clickIcon('https://github.com/daiyilin/portfolio')"/></div>
        <div><font-awesome-icon icon="fa-brands fa-linkedin-in" @click="clickIcon('https://www.linkedin.com/in/%E5%B2%B1%E5%84%80-%E6%9E%97-450ba9208/')"/></div>
        <div><font-awesome-icon icon="fa-solid fa-envelope"  @click="sendMail()"/></div>
      </div>

    </div>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { gsap, TimelineLite, TweenLite, TimelineMax } from "gsap"
import { CSSPlugin} from "gsap/CSSPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSPlugin,ScrollTrigger);
export default {
  name: 'indexPage',
  data() {
    return {
      audioState: null
    }
  },
  mounted () {

    var t2 = new TimelineMax({ paused: true });
    t2.fromTo( ".bottom-side", 1, 
      {
        width: 0, 
        background: "#CC0000",
        immediateRender: false,
        autoRound: false,
        ease: "Power0.easeNone"
      }, 
      {
        width: "100%", 
        background: "#CC0000"
      }
    );

    let submint = 0, preIndex
    gsap.utils.toArray('.timelineItem').forEach( (label) => {
      
      var tl = new TimelineLite({ paused: true});
      tl.add( TweenLite.to(label, 0, {background: '#FEF9C7', color:'#494949'}) );

      const tl2 = gsap.timeline({ paused: true, defaults: { ease: "power1.out" } })
      tl2.from(label, { autoAlpha: 0, scale: 0, y: 20, duration: 0.5 }, 0)
        .fromTo(label.querySelector(".bottom-side"), 1, 
          {
            width: 0, 
            background: "#484849",
            immediateRender: false,
            autoRound: false,
            ease: "Power0.easeNone"
          }, 
          {
            width: "100%", 
            background: "#484849"
          }
        );
  

      ScrollTrigger.create({
        trigger: submint === 0 ? ".experiencePage" : preIndex,
        start: submint === 0 ? "-25% top" :  "top center" ,
        end: submint === 0 ? "300px bottom" : "top center",
        toggleClass: 'timelineItemActive',
        scrub:1,
        onEnter: () => {
          tl2.play();
          tl.play();
        },
        onEnterBack: () => {
          tl2.reverse();
        }
      });
      submint++
      preIndex = label
    })

  },
  methods: {
    goPage(url) {
      this.$router.push({path:url, name:url})
    },
    mouseoverAboutImg() {
      gsap.to("#aboutPic2", 1, {autoAlpha:1});
      gsap.to("#aboutPic1", 0.5, {autoAlpha:0});
    },
    mouseleaveAboutImg() {
       gsap.to("#aboutPic1", 1, {autoAlpha:1});
      gsap.to("#aboutPic2", 0.5, {autoAlpha:0});
    },
    clickIcon(urlPath) {
      window.open(urlPath, '_blank')
    },
    sendMail() {
      var link = "mailto:skyblue820108@gmail.com";
      window.open(link, '_blank')
    },
    play(){
      let audio = this.$refs.audio;
      if (
      audio.paused 
      // document.querySelector(".toggle-sound").classList.contains("paused")
      ) {
        console.log("play it")
        this.audioState = "paused"
        audio.play();
        document.querySelector(".toggle-sound").classList.remove("paused");
      } else {
        console.log("pause it")
        this.audioState = "play"
        audio.pause();
        document.querySelector(".toggle-sound").classList.add("paused");
      }
    }
  }
}
</script>


<style lang="scss"  scoped>
@import "../styles/rwd.scss";

.pic {
  width: 100%;
  border-radius: 50%;
}

.aboutPage{
  background: var(--sec-color);
}

.newPage {
  padding: 50px 0;
}

.newPage .mainTitle {
  display: flex;
  justify-content: center;
  font-size: 6vmin;
}

.mainTitle span:not(.logo .mainTitle span) {
  font-size: 15vmin;
}

.aboutContent {
  display: flex;
  justify-content: space-evenly;
  margin-top:40px;
}

.aboutPic {
  width: 20%;
  position: relative;
  display: flex;
  align-items: center;
}

.aboutPic img {
  position: absolute;
  width: 100%;
}

.aboutPic img:last-child {
  visibility: hidden;
}

.aboutText {
    width: 30%;
}

.aboutText h1 {
  font-size: 5vmin;
}

.aboutText span {
  font-family: var(--sec-English-font);
}

.aboutText h1::after{
  content: '';
  display: block;
  height: 2px;
  margin: 10px 0;
  background-color:var(--main-color);
}
.aboutPage:hover .aboutText h1::after {
  background-color:var(--main-color);
  animation-name: changeLineWidth;
  animation-duration: 2s;

}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap');
.aboutText p {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 2.8vmin;
  margin-top: 20px;
  text-indent: 40px;
}

.specialtyPage {
    padding-bottom: 150px;
    background-size: 100% 100%;
}


.specialtyContent {
  display: flex;
  margin-top: 30px;
}

.specialtyItem {
  text-align: center;
  font-size: 3vmin;
  font-family: 'Noto Sans TC', sans-serif;
  position: relative;
}

.specialtyItem span {
  font-size: 5vmin;
}

.specialtyItem ul {
  margin: 20px 0;
  height: 60%;
  
}

.specialtyItem div {
  position: absolute;
  bottom: 0;
}

.specialtyItem div img {
  margin:  0 15px;
}

.experienceContent {
  width: 80%;
  margin: auto;
  height: 100%;
  padding-top: 50px;
  position: relative;

}



.experienceContent::before {
  position: absolute;
  width: 2px;
  height: 95%;
  margin-left: -1px;
  content: "";
  background: rgba(10, 2, 2, 0.07);
  @include mq-lg {
    left: 50%;
  }
  @include mq-xs {
    left: -20px;
  }
}

.timeline div:nth-child(odd)::before {
  content: attr(data-content-before) '\A' attr(data-content-after);
  white-space: pre-line;
  display: inline-block;
  position: absolute;
  @include mq-lg {
    top: 40%;
    width: 100%;
    right: calc(-100% + 2px);
    border-left: 5px solid var(--main-color);
    padding-left: 10px;
  }
  @include mq-xs {
    top: -60px;
    left: -22px;
    border-left: 5px solid var(--main-color);
  }
}

.timeline div:nth-child(even)::before {
  content: attr(data-content-before) '\A' attr(data-content-after);
  white-space: pre-line;
  display: inline-block;
  position: absolute;
  @include mq-lg {
    top: 40%;
    width: 100%;
    left: calc(-100% + 2px);
    border-right: 5px solid var(--main-color);
    padding-right: 10px;
    text-align: right;
  }
  @include mq-xs {
    top: -60px;
    left: -22px;
    border-left: 5px solid var(--main-color);
  }
}


.timeline {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.timeline div {
  
  box-sizing: border-box;
  padding: 20px 0;
  position: relative;
  /* height: 300px; */
  
  border-radius: 10px;
  @include mq-lg {
    width: 50%;
    margin: 20px 0;
  }
  @include mq-xs {
    width: 100%;
    margin: 50px 0;
  }
}

.timeline div:nth-child(odd) {
  
  padding-left: 50px;

  
  @include mq-lg {
    padding-right: 100px !important;
  }
  @include mq-xs {
    padding-right: 50px;
  }
}

.timeline div:nth-child(even) {
  align-self: flex-end;
  padding-left: 50px;
  
  @include mq-lg {
    padding-right: 50px;
  }
  @include mq-xs {
    padding-right: 50px;
  }
}



.timelineItem p {
  padding-top: 10px;
}

.timelineItem h4 img {
  width: 20px;
  height: 20px;
}

.timelineItem h4 {
  position: relative;
}


.bottom-side {
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 1px;
  position: absolute;
}

.contactPage {
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;

  @include mq-lg {
    background: var(--main-color);
  }
  @include mq-xs {
    background: url('@/assets/img/foot-bg.jpg') no-repeat;
    background-size: cover;
  }
}

.contactTilte {
  font-size: 6vmin;
}

.contactContent div {
  font-size: 3vmin;
  display: inline-block;
  padding: 20px;
  cursor: pointer;
  border-radius: 50%;
}



.contactContent div:hover {
  background: var(--sec-color);
}



/* 職務底下的線-動畫 */
@keyframes changeLineWidth {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}



</style>

