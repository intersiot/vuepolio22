<template>
  <div class="container">
    <div class="img"></div>
    <div class="aboutMe">
      <h4 class="title">About</h4>
      <p class="cont">
        제 이름은 박송이 입니다. 
        처음 코딩을 접했을 땐 반응형 웹, 클릭 이벤트 등 다채로운 효과들이 꼭 마법 같았습니다. 
        그래서 흥미를 느꼈고, 웹 퍼블리셔 교육과정 이수 후 웹 디자이너와 퍼블리셔로 일했습니다. 
        회사 자체 솔루션 개발에 참여하며 프론트엔드 개발자로 전향하게 됐습니다.
      </p>
    </div>
    <div class="skills">
      <h4 class="title">Skillset</h4>
      <ul class="cont">
        <h5 class="subTitle subFir">Development</h5>
        <p>HTML, CSS, JavaScript, jQuery, Java, Vue3.js</p>
        <h5 class="subTitle">Design</h5>
        <p>Adobe Photoshop, Illustrator, XD</p>
      </ul>
    </div>
    <div class="works">
      <h4 class="title">Work experience</h4>
      <ul class="cont">
        <h5 class="subTitle subFir">STANS, <span>Web Publisher, Design, Frontend Developer</span></h5>
        <p>2021. 10 - 2022. 6 | Seoul, Korea</p>
        <p>메타버스 기반 자체 솔루션의 기획 참여, 사용자 인터페이스와 제품 로고 디자인</p>
        <h5 class="subTitle">BEBENINE, <span>Web Publisher, Web Designer</span></h5>
        <p>2018. 2 - 2019. 5 | Seoul, Korea</p>
        <p>콘텐츠 제작, 소셜 커머스 MD와 커뮤니케이션, 소셜 커머스 및 오픈 마켓 상품 등록</p>
        <h5 class="subTitle">EASTBLUE, <span>Web Publisher</span></h5>
        <p>2017. 9 - 2017. 12 | Seoul, Korea</p>
        <p>자체 솔루션 홈페이지 리뉴얼, 타사 솔루션 사용자 인터페이스 디자인 및 홈페이지 제작, 자사 홈페이지 제작</p>
      </ul>
    </div>
    <div class="edu">
      <h4 class="title">Education</h4>
      <ul class="cont">
        <h5 class="subTitle subFir">스파르타 코딩클럽 웹개발</h5>
        <p>2020 - 2021 | Seoul, Korea</p>
        <h5 class="subTitle">자바를 활용한 안드로이드 개발자 과정</h5>
        <p>2019 - 2020 | Seoul, Korea</p>
        <h5 class="subTitle">디지털 컨버전스 UI/UX 사물인터넷 양성 과정</h5>
        <p>2016 - 2017 | Seoul, Korea</p>
      </ul>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
}

.img {
  height: 350px;
  margin-top: 50px;
  /* background-color: #f4f4f4; */
  background-image: url('../assets/img/developer.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  transition: height 0.4s;
}

.aboutMe, .skills, .works, .edu { 
  flex: 1; 
  flex-direction: row;
  border-bottom: 1px solid #e1e1e1;
  padding: 50px 80px;
  transition: all 0.4s;
}

.edu {
  border-bottom: 0;
}

.title {
  display: flex;
  width: 30%;
  float: left;
  font-weight: 600;
  transition: all 0.4s;
}

.cont {
  display: flex;
  width: 70%;
  flex-direction: column;
  padding: 0;
}

.subTitle {
  font-weight: 600;
  margin-top: 30px;
}
.subFir {
  margin-top: 0;
  transition: all 0.4s;
}

p {
  color: #666;
}

/* 
  About.vue Responsive CSS 
*/
@media screen and (max-width: 1020px) {
  .aboutMe, .skills, .works, .edu {
    flex-direction: column;
    padding: 50px 50px;
  }
  .title {
    width: 100%;
  }
  .cont {
    width: 100%;
  }
  .subFir {
    margin-top: 50px;
  }
  .aboutMe .cont {
    padding-top: 50px;
  }
}

@media screen and (max-width: 760px) {
  .img {
    height: 300px;
  }
  .aboutMe, .skills, .works, .edu {
    padding: 50px 20px;
  }
  .subFir {
    margin-top: 50px;
  }
  .aboutMe .cont {
    padding-top: 50px;
  }
}
</style>