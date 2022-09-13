<template>
  <div class="container">
    <h1 class="title">Projects Portfolio</h1>
    <!-- <p class="subTitle">Search project by category</p> -->

    <!-- <div class="searchTag">
      <label for="category">icon자리</label>
      <input type="search" name="category" id="category" />
    </div> -->
    

    <div class="projects">
      <a @click="$router.push({ path: '/detail/' + i })" v-for="(data, i) in 데이터" :key="i" class="card">
        <img :src="data.thumbs[0]" :alt="data.title" />
        <p>project : {{ data.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsComponent',
  props: {
    데이터: Array,
  }
}
</script>

<style scoped>
/* Section Title Card CSS */
.title {
  margin-top: 150px;
  text-align: center;
  font-weight: 600;
}
.subTitle {
  margin-top: 15px;
  text-align: center;
  font-size: 20px;
}

/* Section Projects Card CSS */
.projects {
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.projects .card {
  width: 45%;
  height: 450px;
  background-color: #000;
  margin-top: 50px;
  overflow: hidden;
  transition: all 0.4s;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, .4);
  border: 0;
  cursor: pointer;
}
.projects .card:nth-child(2n) {
  /* margin-left: 20px; */
}
.projects .card img {
  width: 100%;
  height: 100%;
  transition: transform 3s;
}
.projects .card:hover img {
  transform: scale(1.1);
  opacity: .5;
}
.projects .card p {
  position: absolute;
  bottom: -0; left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-decoration: none;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, .85);
  margin: 0;
  text-align: center;
  line-height: 80px;
  text-transform: uppercase;
}


/* 
  Responsive CSS 
*/
@media screen and (max-width: 940px) {
  .projects {
    flex-direction: column;
  }
  .projects .card {
    width: 100%;
  }
  .projects .card:nth-child(2n) {
    margin-left: 0;
  }
}

@media screen and (max-width: 760px) {

}
</style>