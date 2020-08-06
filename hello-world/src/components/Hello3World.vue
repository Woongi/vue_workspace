<template>
  <div class="hello3">
    <hr>
    <h3>메시지 바인딩</h3>
    <span v-bind:name="'name_'+addCount">{{ msg + addCount }}</span>
    <br/>
    <h3>메시지 바인딩 once</h3>
    <span v-once  v-bind:name="'name_'+addCount">{{ msg_once + addCount }}</span>
    <br/>
    <h3>마크업 태그 미출력</h3>
    <span>{{ msg_not_html }}</span>
    <br/>
    <h3>마크업 태그 출력</h3>
    <span v-html="msg_html"></span>
    <br/>
    <h3>속성 바인딩 버튼</h3>
    <button v-on:click="btnAbledYN">클릭</button>
    <button v-bind:disabled="isBtnDisabled">{{ btnMsg }}</button>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'Hello3World',
  data () {
    return {
      msg: '메시지 바인딩',
      msg_once: '메시지 바인딩 once',
      msg_not_html: '<h5>마크업 태그 미출력</h5>',
      msg_html: '<h5 style="color:#ff0000">마크업 태그 출력</h5>',
      isBtnDisabled: true,
      btnMsg: '죽었다',
      addCount: 0
    }
  },
  methods: {
    btnAbledYN () {
      this.$data.isBtnDisabled = !this.$data.isBtnDisabled
      this.$data.btnMsg = this.$data.btnMsg === '죽었다' ? '살았다' : '죽었다'
      this.$data.addCount += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
