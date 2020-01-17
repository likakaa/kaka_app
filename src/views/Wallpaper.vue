<template>
  <div class="wallpaper">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="container-water-fall">
        <waterfall :col="col" :data="data" @loadmore="loadmore">
          <template>
            <div class="cell-item" v-for="(item,index) in data" :key="index">
              <img v-if="item.photo.path" v-lazy="img" :src="item.photo.path" alt="加载错误" />
              <div class="item-body">
                <div class="item-desc">{{item.title}}</div>
                <div class="item-footer">
                  <div
                    v-if="item.sender.avatar"
                    class="avatar"
                    :style="{backgroundImage : `url(${item.sender.avatar})` }"
                  ></div>
                  <div class="name">{{item.album.name}}</div>
                  <div class="like" :class="item.album.count?'active':''">
                    <i></i>
                    <div class="like-total">{{item.album.count}}</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </waterfall>
        <loading :show="loading"/>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import loading from '../components/loading.vue'

export default {
  name: 'wallpaper',
  props: {
    title: String
  },
  components: {
    loading
  },
  data(){
    return {
      currentnum:0,
      data: [],
      col: 2,
      loading: false,
      isLoading:false,
      gitHubData: {},
    }
  },
  computed: {
    itemWidth() {
      return 133 * 0.5 * (document.documentElement.clientWidth / 375);
    },
    gutterWidth() {
      return 10 * 0.5 * (document.documentElement.clientWidth / 375);
    }
  },
  methods: {
    /* 请求接口 */
    getwallpaperlist(){  
      let params = {
        start:this.currentnum*24,  //从第几条开始:当前页数*24
        limit:24,  //一次返回多少条
        more:1,
        include_fields:'sender,album,like_count,msg',  //包含的字段
        cate_key:'5d4bf0ed405dd99416c2af6f'
      }
    this.$store.dispatch('getWallPaper',params)
    this.currentnum = Number(this.currentnum) + 1;
    console.log('现在是第几次',this.currentnum)
    console.log('啦啦啦',this.$store.state.wallpaper);
    this.data = this.$store.state.wallpaper;
    },
    /* 加载更多 */
    loadmore() {
      this.loading = true;
      setTimeout(() => {
        this.getwallpaperlist()
        this.loading = false;
      }, 1000);
    },
    /* 下拉刷新 */
     onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
       
      }, 1000);
    }
  },
  mounted(){
    this.getwallpaperlist()
  }
}
</script>

<style  lang="scss" scoped>
* {
  margin: 0;
}
.container-water-fall {
  // padding: 0 28px;
  width: 100vw;
  box-sizing: border-box;
  h4 {
    padding-top: 56px;
    padding-bottom: 28px;
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: #000000;
    letter-spacing: 1px;
    text-align: justify;
  }
  button {
    background-color: #ff0;
    color: #24292e;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 0.25em;
    width: 100px;
    line-height: 26px;
    font-size: 13px;
    margin: 4px 0;
    margin-right: 4px;
    cursor: pointer;
    outline: none;
    &.blue-light {
      background: #27fbc2;
    }
  }
  button:hover {
    background-image: linear-gradient(-180deg, #fafbfc, #ccc 90%);
  }

  .cell-item {
    width: 100%;
    // margin-bottom: 18px;
    background: #ffffff;
    border: 2px solid #F0F0F0;
    border-radius: 12px 12px 12px 12px;
    overflow: hidden;
    box-sizing: border-box;
    img {
      // border-radius: 12px 12px 0 0;
      width: 100%;
      height: auto;
      display: block;
    }
    .item-body {
      // border: 1px solid #F0F0F0;
      padding: 12px;
      .item-desc {
        font-size: 15px;
        color: #333333;
        line-height: 15px;
        font-weight: bold;
      }
      .item-footer {
        margin-top: 22px;
        position: relative;
        display: flex;
        align-items: center;
        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 14px;
          color: #999999;
        }
        .like {
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;
          &.active {
            i {
            }
            .like-total {
              color: #FF4479;
            }
          }
          i {
            width: 28px;
            display: block;
          }
          .like-total {
            margin-left: 10px;
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
  }
}
.githubdata {
  float: right;
  margin-right: 90px;
  img {
    width: 14px;
    // height: 16px;
  }
}
</style>