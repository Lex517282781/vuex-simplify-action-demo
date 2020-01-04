<template>
  <div class="home">
    <h1>actionEnhance 使用</h1>
    <hr />
    <p><button @click="handleFoo">获取foo数据</button></p>
    <pre>foo: {{foo}}</pre>
    <p><button @click="handleBar">获取bar数据之后再获取baz数据</button></p>
    <pre>bar: {{bar}}</pre><br />
    <pre>baz: {{baz}}</pre>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {
  mapState: homeMapState,
  mapActions: homeMapActions
} = createNamespacedHelpers('home')

export default {
  name: 'home',
  computed: {
    ...homeMapState(['foo', 'bar', 'baz'])
  },
  methods: {
    ...homeMapActions(['getfoo', 'getbar']),
    handleFoo() {
      this.getfoo()
    },
    handleBar() {
      this.getbar()
    }
  }
}
</script>
