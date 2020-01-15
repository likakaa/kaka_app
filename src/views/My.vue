<template>
  <div class="my">
  首页
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'my',
  data(){
    return {

    }
  },
  mounted(){
    axios.get('/blog/list/by_category/?cate_key=5d4cdeba405dd99416c2afbe&start=0&limit=24&more=1&include_fields=sender%2Calbum%2Clike_count%2Cmsg').then((data)=>{
      console.log(data)
    })
  }
}
</script>