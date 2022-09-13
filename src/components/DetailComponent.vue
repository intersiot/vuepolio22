<template>
  <div class="container">
    <h1>{{ 데이터[$route.params.id].title }}</h1>
    <div class="about">
      <span><i class="fa-regular fa-clock"></i><strong>{{ 데이터[$route.params.id].year }}</strong></span>
      <span><i class="fa-solid fa-hashtag"></i><strong>{{ 데이터[$route.params.id].type }}</strong></span>
      <span><i class="fa-solid fa-user-tag"></i><strong>{{ 데이터[$route.params.id].role }}</strong></span>
    </div>

    <img class="title-img" :src="데이터[$route.params.id].thumbs[1]" :alt="데이터[$route.params.id].title">

    <p class="challenge">{{ 데이터[$route.params.id].content }}</p>

    <div class="images" v-for="(d, i) in 데이터" :key="i">
      <img :src="데이터[$route.params.id].images[i]" />
    </div>

    <div class="tools">
      <p>Tools & Technologies</p>
      <p>{{ 데이터[$route.params.id].tool }}</p>
    </div>

    <a class="link" :href="데이터[$route.params.id].link" target="_blank">
      <span>show code</span><br />go to github <i class="fa-brands fa-github fa"></i>
    </a>
  </div>
</template>

<script>

export default {
  name: 'DetailComponent',
  props: {
    데이터: Array,
  },
}
</script>

<style scoped>
.container {
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  transition: margin-top 0.4s;
}
h1 {
  font-weight: 600;
}
.about {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}
.about span {
  padding-left: 30px;
  color: #aaa;
  letter-spacing: .5px;
  
}
.about span i {
  width: 25px;
}
.about span:first-child {
  padding-left: 0;
}
.about strong {
  margin-left: 10px;
  color: #666;
  font-size: inherit;
  font-weight: 500;
}

.title-img {
  margin-top: 50px;
}

.container img {
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 80px;
  border-radius: 5px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .4);
  border: 0;
}

.challenge {
  margin-top: 80px;
}

.tools {
  margin-top: 50px;
}
.tools p {
  margin: 0;
}
.tools p:first-child {
  color: #aaa;
  letter-spacing: 2px;
}
.tools p:last-child {
  color: #666;
  margin-top: 5px;
}

.link span {
  font-size: 12px;
  color: #999;
  
}
.link {
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 30px;
  text-decoration: none;
  color: inherit;
  width: 200px;
  padding: 5px 0 5px;
}
.link i {
  color: #999;
  transition: color 0.4s;
}
.link:hover i {
  color: #000;
}

/* DetailComponent Responsive CSS */
@media screen and (max-width: 760px) {
  .container {
    margin-top: 115px;
  }
  .about  {
    flex-direction: column;
  }
  .about span {
    padding-left: 0;
    padding-top: 10px;
  }
  .about span:first-child {
    padding-top: 0;
  }
  .container img {
    height: 300px;
  }
}
</style>