/* eslint-disable no-unused-vars */
<template>
  <div class="indexpage">
    <!-- <div class="overlay">
      <h1>Reindeer</h1>
      <span>snow life</span>
    </div> -->
  
    
    <div class="wrapper">
      <div class="smallLogo" id="smallLogo">
          <font-awesome-icon icon="fa-solid fa-bars" @click="controlMenu()"  v-if="!isOpenMenu"/>
          <font-awesome-icon icon="fa-solid fa-xmark"  @click="controlMenu()" v-if="isOpenMenu" @touchmove.prevent />
        </div>

      <div class="navigation" id="navigation">
        <div class="samllMenu" id="samllMenu">
          <ul class="mainTitle">
            <li>home.</li>
            <li>about.</li>
            <li @click="goPage('/Movie')">EXPERIENCE.</li>
            <li>SPECIALTY.</li>
            <li>Contact.</li>
          </ul>
        </div>
      </div>

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
            <li>home.</li>
            <li>about.</li>
            <li @click="goPage('/Movie')">EXPERIENCE.</li>
            <li>SPECIALTY.</li>
            <li>Contact.</li>
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
        <a href="#">Happy Pirate</a>
      </div>

      <!-- <div class="media">
        <ul>
          <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
          <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
          <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
        </ul>
      </div> -->

      <div class="ellipse-container">
        <div ><img class="pic" src="~@/assets/myself.jpg" alt="dai yi Pic."></div>
        <div class="ellipse yellow"></div>
      </div>
    </div>
    
    <div class="aboutPage newPage">
      <div class="aboutTitle mainTitle">
        <span>About</span>
      </div>
      <div class="aboutContent">
        <div class="aboutPic">
        
        </div>
        <div class="aboutText">
          <h1>林岱儀 | <span>Dai Yi Lin</span> </h1>
          <p>
            投入在開發、維護系統與系統規劃已有將近快六年之時間，另外還有一年多的專案管理之經驗。
            主要使用.net core開發web api，並使用Vue、Nuxt.js、搭配coreUI開發後台管理介面。
          </p>
          <p>
            喜歡接觸新事物，也樂於跟同事分享有趣或是新事物，
            並互相交流自己的看法，讓自己在這個過程中可以獲得更多額外的知識。 
          </p>
          <p>
            時常會研讀讀技術文章、參考別人設計的網站、練習Leet Code題目，培養自己邏輯能力。
          </p>
          <p>
            對我而言，程式，是條無止境的路；而我，就在這條路上持續的前進著。
          </p>
        </div>
      </div>
      
    </div>

   
  </div>
</template>

<script>

export default {
  name: 'indexPage',
  data() {
    return {
      audioState: null,
      isOpenMenu: false
    }
  },
  mounted () {
    const navigationObj = document.getElementById("navigation")
    console.log(window.innerHeight - document.getElementById("smallLogo").offsetHeight)
    navigationObj.style.height = window.innerHeight - document.getElementById("smallLogo").offsetHeight
  },
  methods: {
    goPage(url) {
      this.$router.push({path:url, name:url})
    },
    controlMenu() {
      this.isOpenMenu = !this.isOpenMenu
      const menuObj = document.getElementById("samllMenu")
      const navigationObj = document.getElementById("navigation")
      if (this.isOpenMenu) {

        // menuObj.style.display = "black"
        menuObj.querySelector('.mainTitle').style.display = "block";
        navigationObj.style.backgroundColor = "var(--sec-color)"
        navigationObj.style.zIndex = 100
        document.getElementById("smallLogo").style.backgroundColor = "var(--sec-color)"

       
      } else {
        menuObj.querySelector('.mainTitle').style.display = "none";
        navigationObj.style.backgroundColor = "#fff"
        navigationObj.style.zIndex = -100
        document.getElementById("smallLogo").style.backgroundColor = "#fff"
      }
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

<style scoped>


.green{
  background: #77ff77;
}
.blue{
  background: #2222ff;
}

.pic {
  width: 100%;
  border-radius: 50%;
}

.aboutPage{
  height: 100vh;
  background: var(--sec-color);
}

.newPage {
  padding-top: 50px;
}

.newPage .mainTitle {
  display: flex;
  justify-content: center;
  font-size: 6em;
}

.aboutTitle span {
  font-size: 6em;
}

.aboutContent {
  display: flex;
  justify-content: space-evenly;
  margin-top:40px;
}

.aboutPic {
  width: 20%;
  background: url('~@/assets/myself.jpg') no-repeat;
  background-size: Cover ; 
  background-position: center;
}

.aboutText {
    width: 30%;
}

.aboutText h1 {
  font-size: 35px;
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
  animation-duration: 1.5s;

}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap');
.aboutText p {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 18px;
  margin-top: 20px;
  text-indent: 40px;
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

