<template>
  <header class="container">
    <!-- 로고부분 -->
    <a href="/" class="logo">Song<span>.</span></a>
    <!-- 사이드바메뉴부분 -->
    <div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">×</a>
      <router-link to="/">
        <a href="#" @click="closeNav">Home</a>
      </router-link>
      <router-link to="/about">
        <a href="#" @click="closeNav">About</a>
      </router-link>
      <router-link to="/projects">
        <a href="#" @click="closeNav">Portpolio</a>
      </router-link>
      <router-link to="/contact">
        <a href="#" @click="closeNav">Contact</a>
      </router-link>
    </div>
    <button class="openbtn" @click="openNav">☰</button>
  </header>

  <router-view :데이터="데이터"></router-view>

  <footer>
    <div class="follow">
      <a href="https://github.com/intersiot" class="icon github" target="_blank">
        <i class="fa-brands fa-square-github"></i>
      </a>
      <a href="https://glittery-cyclone-405.notion.site/2a680cdfc9dd457e8273e30950cd90eb" 
        target="_blank" 
        class="icon notion">
        <i class="fa-brands fa-blogger"></i>
      </a>
      <a href="https://drive.google.com/file/d/1IIKxiCx7iKk-y9SYIaQnDEdiBkV4sTAV/view?usp=sharing" class="icon resume" target="_blank">
        <i class="fa-solid fa-address-card"></i>
      </a>
    </div>
    <p class="copyright">@2022. <span>Vue.js Portfolio.</span> Developed by <span>Park Song Yi.</span></p>
  </footer>
</template>

<script>
import workData from './assets/data.js'

export default {
  name: 'App',
  data() {
      return {
        데이터: workData,
      }
    },
  components: {
  },
  methods: {
    /**
     * 사이드바 오픈
     */
    openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      // document.getElementById("main").style.marginLeft = "250px";
    },
    /**
     * 사이드바 닫을때
     */
    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      // document.getElementById("main").style.marginLeft= "0";
    },

  },
}
</script>

<style>
/* import CSS */
@import './assets/css/reset.css';
@import './assets/css/responsive.css';
/* import Font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Raleway', 'Noto Sans KR', sans-serif;
  font-size: 17px;
  color: #333333;
}

/**header */
header {
  height: 80px;
  position: fixed;
  top: 0; left: 0; right: 0;
  background-color: #fff;
  z-index: 9999;
}

/**.logo */
.logo {
  float: left;
  margin: 15px 0;
  font-size: 30px;
  text-decoration: none;
  color: inherit;
  letter-spacing: 0.2em;
  transition: all 0.5s;
  cursor: pointer;
}
.logo span {
  font-weight: 700;
  color:#32c267;
  font-size: inherit;
}
.logo:hover {
  letter-spacing: 0.1em;
  color: inherit;
}

/**.sidebar */
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgb(227, 227, 227);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #777;
  display: block;
  transition: all 0.5s;
}
.sidebar a:hover {
  color: #000;
}
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  cursor: pointer;
}
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: rgb(245, 245, 245);
  padding: 10px 15px;
  border: none;
  float: right;
  margin: 15px 0;
  border-radius: 5px;
  transition: all 0.5s;
}
.openbtn:hover {
  background-color: rgb(227, 227, 227);
}

/**footer */
footer {
  margin-top: 80px;
  height: 150px;
  /* background: #333; */
  background-color: #f5f5f5;
  position: relative;
}
footer .follow {
  text-transform: capitalize;
  font-size: 26px;
  font-weight: 600;
  margin-top: 25px;
  position: absolute;
  bottom: 60px; right: 30px;
}
footer .icon {
  color: #999;
  margin-left: 15px;
}
footer .icon i {
  color: #999;
  transition: color 0.4s;
  font-size: 33px;
}
footer .icon:hover i {
  color: #000;
}
footer .copyright {
  color: #999;
  position: absolute;
  bottom: 10px; right: 30px;
}
footer .copyright span {
  font-weight: 600;
  color: #333;
}
</style>
