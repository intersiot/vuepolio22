<template>
  <div class="container">
    <h1 class="title">get in touch. &#128236;</h1>
    <form
      class="gform"
      action="https://script.google.com/macros/s/AKfycbyKgw3Phtg1t1kPMIi0vEZHZkIAAETeG2dG2figYsuwrpBLrug/exec"
      method="POST"
      data-email="iampsi@naver.com"
    >
      <fieldset>
        <div>
          <label for="userName" class="subTitle">full name</label>
          <input
            type="text"
            name="name"
            id="userName"
            placeholder="이름을 입력해주세요."
            required
          />
        </div>
        <div>
          <label for="userEmail" class="subTitle">email</label>
          <input
            type="email"
            name="email"
            id="userEmail"
            placeholder="이메일을 입력해주세요."
            required
          />
        </div>
        <div>
          <label for="userMessage" class="subTitle">message</label>
          <textarea name="message" id="userMessage" required></textarea>
        </div>
        <div>
          <button type="submit" class="btn-send" @click="modalState = true">
            send message
          </button>
        </div>
      </fieldset>
    </form>

    <div class="bg-alertBox" v-if="modalState == true">
      <div class="alertBox">
        <p>연락주셔서 감사합니다.<br />빠른 시일 내에 답변 드리겠습니다&#128522;</p>
        <button class="btnAlertClose" @click="modalState = false">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  data() {
    return {
      modalState: false,
    };
  },
};
</script>

<style scoped>
.container {
  height: 600px;
  position: relative;
}
.title {
  margin-top: 150px;
  text-align: center;
  font-weight: 600;
  text-transform: capitalize;
}
.subTitle {
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}
input,
textarea {
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px 15px;
}
textarea {
  resize: none;
  height: 100px;
}
.gform {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 600px;
  transition: width 0.4s;
}
.btn-send {
  background-color: #ff0000;
  color: #fff;
  border: 0;
  border-radius: 3px;
  padding: 10px 15px;
}

.bg-alertBox {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999999;
}
.alertBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #fff;
  border-radius: 10px;
  width: 350px;
  height: 180px;
  background-color: #fff;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.4);
  display: block;
}
.alertBox p {
  text-align: center;
  padding: 30px;
}
.alertBox .btnAlertClose {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 20px;
  border-radius: 3px;
  background-color: #0055ff;
  color: #fff;
  border: 0;
}

/* ContactComponent Responsive CSS */
@media screen and (max-width: 760px) {
  .gform {
    width: 400px;
  }
}

@media screen and (max-width: 400px) {
  .gform {
    width: 300px;
  }
}
</style>
