<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Hello2World/>
    <Hello3World/>
  </div>
</template>

<script>
import Hello2World from './Hello2World'
import Hello3World from './Hello3World'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '환영합니다. HelloWorld App'
    }
  },
  components: {
    Hello2World,
    Hello3World
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
