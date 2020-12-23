<template>
  <!-- app页面 -->
  <div>
    <nav>
      <a href="/" style="text-decoration: none">
        <i class="icon"></i>
        <span class="pc">PC版</span>
        <span class="download">
          <i class="iconfont icon-baozi1 baozhi"></i>
          <span>APP下载</span>
        </span>
      </a>
    </nav>
    <el-carousel
      :style="`height: ${hei}px`"
      direction="vertical"
      :autoplay="false"
      ref="wheel"
      @change="chan"
    >
      <el-carousel-item
        :style="`height: ${hei}px;min-height: 600px`"
        v-for="(item,i) in 3"
        :key="item"
        name="wheel2"
      >
        <div class="row" v-show="i == index">
          <div v-show="index==0" :class="`logo animated ${ani1}`">
            <a href="javascript:;" title="漫天下">
              <img src="../assets/logo.png" alt />
            </a>
          </div>
          <h1 v-show="index==0" :class="`text_1 animated ${ani2}`">
            <img src="https://activity.zymk.cn/app/images/pc/txt_1_1.png" alt />
          </h1>
          <div v-show="index==0" :class="`text_2 animated ${ani3}`">
            <img src="https://activity.zymk.cn/app/images/pc/txt_2_1.png" alt />
          </div>
          <div v-show="index==0" class="right">
            <div :class="`phone_1 animated ${ani4}`">
              <img src="https://activity.zymk.cn/app/images/pc/phone.png" alt />
            </div>
            <div :class="`baozhi animated ${ani5}`">
              <img src="https://activity.zymk.cn/app/images/pc/mantou.png" alt />
            </div>
          </div>
          <div v-show="index==1" class="left_2">
            <div :class="`phone_2 animated ${ani1}`">
              <img src="https://activity.zymk.cn/app/images/pc/phone_2.png" alt />
            </div>
            <div :class="`pic_1 animated ${ani2}`">
              <img src="https://activity.zymk.cn/app/images/pc/comic_1.png" alt />
            </div>
            <div :class="`pic_2 animated ${ani3}`">
              <img src="https://activity.zymk.cn/app/images/pc/comic_2.png" alt />
            </div>
            <div :class="`pic_3 animated ${ani4}`">
              <img src="https://activity.zymk.cn/app/images/pc/comic_3.png" alt />
            </div>
            <div :class="`pic_4 animated ${ani5}`">
              <img src="https://activity.zymk.cn/app/images/pc/comic_4.png" alt />
            </div>
          </div>
          <div v-show="index==1" class="right_2">
            <div :class="`text_3 animated ${ani6}`">
              <img src="https://activity.zymk.cn/app/images/pc/txt_4.png" alt />
            </div>
            <div class="baozhi_box">
              <div :class="`books_1 animated ${ani7}`">
                <img src="https://activity.zymk.cn/app/images/pc/book_1.png" alt />
              </div>
              <div :class="`baozhi_2 animated ${ani8}`">
                <img src="https://activity.zymk.cn/app/images/pc/mantou_2.png" alt />
              </div>
              <div :class="`books_2 animated ${ani9}`">
                <img src="https://activity.zymk.cn/app/images/pc/book_2.png" alt />
              </div>
            </div>
          </div>
          <div v-show="index==2" :class="`text_4 animated ${ani1}`">
            <img src="https://activity.zymk.cn/app/images/pc/txt_5.png" alt />
          </div>
          <div v-show="index==2" :class="`baozhi_3 animated ${ani2}`">
            <img src="https://activity.zymk.cn/app/images/pc/mantou_3.png" alt />
          </div>
          <div v-show="index==2" class="right_3">
            <div :class="`phone_3 animated ${ani3}`">
              <img src="https://activity.zymk.cn/app/images/pc/phone_3.png" alt />
            </div>
            <div :class="`phone_4 animated ${ani4}`">
              <img src="https://activity.zymk.cn/app/images/pc/phone_4.png" alt />
            </div>
            <img
              :class="`download_1 animated ${ani5}`"
              src="https://activity.zymk.cn/app/images/pc/download_1.png"
              alt
            />
            <img
              :class="`download_2 animated ${ani6}`"
              src="https://activity.zymk.cn/app/images/pc/download_2.png"
              alt
            />
            <img
              :class="`download_3 animated ${ani7}`"
              src="https://activity.zymk.cn/app/images/pc/download_3.png"
              alt
            />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      index: 0,
      ani: [
        "fadeIn",
        "fadeInDown",
        "fadeInDownBig",
        "fadeInLeft",
        "fadeInLeftBig",
        "fadeInRight",
        "fadeInRightBig",
        "fadeInUp",
        "fadeInUpBig",
        "bounceIn",
        "bounceInDown",
        "bounceInLeft",
        "bounceInRight",
        "bounceInUp",
        "zoomIn",
        "zoomInDown",
        "zoomInLeft",
        "zoomInRight",
        "zoomInUp",
        "rotateIn",
        "rotateInDownLeft",
        "rotateInDownRight",
        "rotateInUpLeft",
        "rotateInUpRight",
        "flipInX",
        "flipInY",
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shake",
        "swing",
        "tada",
        "wobble",
        "jello"
      ],
      ani1: "bounceInRight",
      ani2: "bounceInDown",
      ani3: "rubberBand",
      ani4: "jello",
      ani5: "bounceInDown",
      ani6: "",
      ani7: "",
      ani8: "",
      ani9: "",
      flag: 1
    };
  },
  computed: {
    hei: function() {
      return this.$store.state.windh;
    },
    len: function() {
      return this.ani.length;
    }
  },
  mounted() {
    this.$store.commit("wind_hight");
    window.addEventListener("resize", () => {
      this.$store.commit("wind_hight", document.documentElement.clientHeight);
    });
    window.addEventListener("mousewheel", event => {
      if (this.flag == 1) {
        this.num();
        if (event.wheelDelta == -150 || event.wheelDelta == -120) {
          if (this.index == 2) {
            this.index = 0;
          } else {
            this.index++;
          }
          this.$refs.wheel.next();
        } else if (event.wheelDelta == 150 || event.wheelDelta == 120) {
          if (this.index == 0) {
            this.index = 2;
          } else {
            this.index--;
          }
          this.$refs.wheel.prev();
        }
        this.flag = 0;
        setTimeout(() => {
          this.flag = 1;
        }, 1000);
      }
    });
  },
  created() {
    console.log(1111);
    // document.querySelector("body").style.overflowY = "hidden";
  },
  destroyed() {
    document.querySelector("body").style.overflowY = "scroll";
  },
  methods: {
    chan: function(e) {
      this.num();
      this.index = e;
    },
    num: function() {
      this.ani1 = this.ani[Math.floor(Math.random() * this.len)];
      this.ani2 = this.ani[Math.floor(Math.random() * this.len)];
      this.ani3 = this.ani[Math.floor(Math.random() * this.len)];
      this.ani4 = this.ani[Math.floor(Math.random() * this.len)];
      this.ani5 = this.ani[Math.floor(Math.random() * this.len)];
      this.ani6 = this.ani[Math.floor(Math.random() * this.len)];
      this.ani7 = this.ani[Math.floor(Math.random() * this.len)];
      this.ani8 = this.ani[Math.floor(Math.random() * this.len)];
      this.ani9 = this.ani[Math.floor(Math.random() * this.len)];
    }
  }
};
</script>

<style>
.el-carousel__item:nth-of-type(1) {
  background-image: url(../assets/bdground.jpg);
}
.el-carousel__item:nth-of-type(3) {
  background-color: #fd9465;
}
img {
  width: 100%;
  height: 100%;
}
.row {
  position: relative;
  width: 80%;
  min-width: 960px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.row .logo {
  width: 245px;
  height: 65px;
  position: absolute;
  left: 0;
  top: 80px;
}
.row .text_1 {
  position: absolute;
  left: 0;
  top: 201.6px;
  width: 320.4px;
  height: 93.6px;
}
.row .text_2 {
  position: absolute;
  left: 0;
  top: 316.8px;
}
.row .right {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 408.96px;
  height: 547.2px;
}
.phone_1 {
  width: 383.04px;
  height: 547.2px;
  position: absolute;
  right: 0;
  z-index: 2;
}
.baozhi {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
}
.left_2 {
  position: absolute;
  width: 257.76px;
  height: 524.16px;
  margin-top: -262.08px;
  top: 50%;
}
.phone_2 {
  position: absolute;
  width: 257.76px;
  height: 524.16px;
}
.pic_1,
.pic_2,
.pic_3,
.pic_4 {
  position: absolute;
}
.pic_1 {
  width: 270.72px;
  height: 211.68px;
  left: 144px;
  top: 0;
}
.pic_2 {
  width: 197.28px;
  height: 113.76px;
  left: 129.6px;
  top: 216px;
  z-index: 2;
}
.pic_3 {
  width: 159.84px;
  height: 108px;
  left: 259.2px;
  top: 266.4px;
  z-index: 0;
}
.pic_4 {
  width: 200.16px;
  height: 124.56px;
  left: 136.8px;
  top: 374.4px;
}
.right_2 {
  right: 100px;
  position: absolute;
}
.right_2 .text_3 {
  width: 336.96px;
  height: 76.32px;
  position: absolute;
  top: 244.8px;
  right: 0;
}
.right_2 .baozhi_box {
  position: absolute;
  top: 374.4px;
  right: 36px;
  width: 259.2px;
  height: 158.4px;
}
.books_1 {
  position: absolute;
  top: 86.4px;
  width: 69.12px;
  height: 43.92px;
}
.baozhi_2 {
  position: absolute;
  width: 122.4px;
  height: 138.24px;
  left: 64.8px;
  top: 10.08px;
}
.books_2 {
  position: absolute;
  right: 0;
  top: 86.4px;
  width: 70.56px;
  height: 50.4px;
}
.text_4 {
  width: 342.72px;
  height: 84.96px;
  margin-top: -42.48px;
  position: absolute;
  top: 50%;
  left: 72px;
}
.baozhi_3 {
  width: 103.68px;
  height: 72px;
  position: absolute;
  bottom: 129.6px;
  left: 187.2px;
}
.right_3 {
  width: 540px;
  height: 432px;
  position: absolute;
  right: 72px;
  bottom: 43.2px;
}
.phone_3 {
  width: 555.84px;
  height: 295.2px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.phone_4 {
  width: 432px;
  height: 376.56px;
  position: absolute;
  bottom: 64.8px;
  right: 100.8px;
}
.download_1,
.download_2,
.download_3 {
  position: absolute;
}
.download_1 {
  width: 57.6px;
  height: 49.68px;
  top: -64.8px;
  right: 230.4px;
}
.download_2 {
  width: 63.36px;
  height: 54.72px;
  top: -36px;
  right: 136.8px;
}
.download_3 {
  width: 46.08px;
  height: 39.6px;
  top: -86.4px;
  right: 72px;
}
/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.el-carousel__button {
  width: 10px !important;
  height: 10px !important;
  padding: 0;
  border-radius: 50%;
  background: red;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 50px;
  padding: 12px 10px;
  background-color: #f2f3eb;
  box-sizing: border-box;
}
.icon {
  width: 27px;
  height: 16px;
  display: inline-block;
  background: url("https://activity.zymk.cn/app/images/goback.png") no-repeat;
  background-size: cover;
  vertical-align: middle;
  margin-right: 4px;
}
nav .pc {
  color: #999;
  vertical-align: middle;
}
.download {
  position: absolute;
  right: 50px;
  font-size: 18px;
  height: 26px;
  background: rgb(255, 93, 44);
  padding: 0 20px;
  border-radius: 13px;
  color: rgb(253, 253, 253);
}
.download span {
  margin-left: 20px;
}
.baozhi {
  display: inline-block;
  color: #ffffff;
  font-size: 24px;
  padding: 0 10px;
}
</style>
