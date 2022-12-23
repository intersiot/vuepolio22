<template>
  <div id="main" class="container">
    <div class="visual">
      <div class="v-title">
        <div>
          <p><span class="green">Hi, I'm Song Yi.</span></p>
        </div>
        <div><p>Web publishers, design</p></div>
        <div><p>& front-end development.</p></div>
      </div>
      <!-- 새들 -->
      <div class="bird-wrap">
        <div class="bird"></div>
        <div class="bird"></div>
        <div class="bird"></div>
        <div class="bird"></div>
      </div>
    </div>
    <div class="about">
      <p>
        2017년부터 웹 개발을 하고 있는 박송이입니다. 뷰를 활용한 프론트엔드 개발에 관심이 많습니다.<br />
        최근에는 flex, grid 등에 관심을 두고 있고, 주로 사용하는 언어는 HTML, CSS, Javascript입니다.<br />웹 퍼블리셔 때의 경험을 발판
        삼아 디자인도 가능한 프론트엔드 개발자를 꿈 꿉니다.
      </p>
      <router-link to="/about"><div class="btnAbout">about me</div></router-link>
    </div>

    <!-- <div class="projects">
      <a class="card" href="#/projects">
        <img :src="데이터[0].thumbs" alt="프로젝트썸네일_씨서바" />
        <p>project : {{ 데이터[0].title }}</p>
      </a>
      <a class="card" href="#/projects">
        <img src="https://github.com/intersiot/pf_intersiot/blob/main/img/work_lolketting_thumb_2.png?raw=true" alt="프로젝트썸네일_롤켓팅" />
        <p>project : lolketting</p>
      </a>
      <a class="card" href="#/projects">
        <img src="https://github.com/intersiot/pf_intersiot/blob/main/img/work_sweeter_thumb_2.png?raw=true" alt="프로젝트썸네일_스위터" />
        <p>project : sweeter</p>
      </a>
    </div> -->
    
    <div class="projects">
      <a @click="$router.push({ path: '/detail/' + i })" class="card" v-for="(data, i) in 데이터.slice(0, 3)" :key="i">
        <img :src="data.thumbs[0]" :alt="data.title" />
        <p>project : {{ data.title }}</p>
      </a>
    </div>

    <div class="moreProjects">
      <router-link to="/projects">
        <div class="btnMore">More Projects</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  props: {
    데이터: Array,
  }
};
</script>

<style scoped>
@import "../assets/css/visual.css";

#main {
  transition: margin-left 0.5s;
  padding: 16px;
}
/* Section About CSS */
.about {
  height: 300px;
  position: relative;
}
.about p {
  width: 60%;
  margin-left: 100px;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
}
.about .btnAbout {
  width: 150px;
  height: 40px;
  position: absolute;
  bottom: 10%;
  margin-left: 100px;
  transform: translateY(-50%);
  text-align: center;
  line-height: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid #000;
  cursor: pointer;
  transition: background 0.4s;
  font-weight: 400;
  border-radius: 3px;
}
.about .btnAbout:hover {
  background-color: #000;
  color: #fff;
}
/* Section Projects Card CSS */
.projects {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row no-wrap;
  justify-content: space-around;
  padding: 50px 20px 20px 20px;
}
.projects .card {
  height: 400px;
  width: 30%;
  overflow: hidden;
  background-color: #000;
  transition: all 0.4s;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, .4);
  border: 0;
}
.projects .card img {
  width: 100%;
  height: 100%;
  transition: transform 3s;
  cursor: pointer;
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
.projects .card:nth-child(2) img, 
.projects .card:nth-child(3) img {
  height: 100%;
}

.moreProjects {
  position: relative;
  height: 100px;
}
.moreProjects .btnMore {
  position: absolute;
  width: 180px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 3px;
  text-align: center;
  line-height: 40px;
  font-weight: 400;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s;
  text-transform: uppercase;
}
.moreProjects .btnMore:hover {
  background-color: #000;
  color: #fff;
}

/* 
  Responsive CSS 
*/
@media screen and (max-width: 1020px) {
  .about p {
    width: 60%;
    margin-left: 30px;
  }
  .about .btnAbout {
    margin-left: 30px;
  }
  .projects {
    flex-direction: column;
    /* padding: 50px; */
  }
  .projects .card {
    width: 100%;
  }
  .projects .card:nth-child(2) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 760px) {
  .about p {
    width: 70%;
    margin-left: 20px;
  }
  .about .btnAbout {
    margin-left: 20px;
  }
}

@media screen and (max-width: 400px) {
  .visual .v-title p {
    font-size: 24px
  }
}
</style>
