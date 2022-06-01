<template>
  <div class="moviePage">
    <b-col>
      <h3 class="" style="font-family: 'Bebas Neue', cursive;">Search Movie</h3>
    </b-col>
    <b-col>
      <b-input-group class="mt-3">
        <b-form-input  v-model="searchText" placeholder="Search Movie"></b-form-input>
      
        <b-input-group-append>
          <b-button variant="info" @click="submitBtn()">確認</b-button>
        </b-input-group-append>
      </b-input-group> 
      <div class="">
        共 {{ movieData.Search.length}} 筆
      </div>
    </b-col>
    <b-col>
      <div class="movieContent">
        <div v-for="(item, index) in movieData.Search" :key="index" class="movieIndex">
          <img :src="item.Poster" width="200px" height="300px" :alt="item.Title">
          <div class="movieTitle">{{item.Title}}<br>{{item.Year}}</div>
        </div>
      </div>
      
    </b-col>
    <div class="popcorn"></div>
    <!-- 攝影師：Pietro Jeng，連結：Pexels -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'moviePage',
  data() {
    return {
      searchText: null,
      movieData: {
        Search: [],
        totalResults: 0,
        Response: true
      }
    }
  },
  created() {
    this.searchText = "Godzilla"
    this.submitBtn()
    
  },
  methods: {
    submitBtn () {
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=ae8cbd98&type=movie&s=' + this.searchText)
      .then((res) => {
        if (res.data.Response === "False") {
          this.movieData.Search = []
        } else {
          const tempData = res.data
   
          const set = new Set()
          this.movieData.Search = tempData.Search.filter(item => !set.has(item.imdbID) ? set.add(item.imdbID) : false) //過濾重複回傳的資料
        }
      })
    }
 
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.moviePage {
  background: #FEF9C7;
  /* height: 100vh; */
  padding: 0 100px;
}
.movieContent {
  width: 100%;
  /* max-height: 80vh !important; */
  overflow:auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:20px;
  
}

.movieIndex {
  margin:20px;
  position: relative;
}

@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

.movieIndex div {
  width: 200px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: rgba(136, 135, 135, 0.7);
  color: white;
  /* display: none; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Abril Fatface', cursive;
  font-size: 20px;
}

/* .movieIndex:hover .movieTitle{
  display: flex;
} */


</style>