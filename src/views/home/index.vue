<template>
  <div class="home">
    <h1>stateEnhance 使用</h1>
    <hr />
    <p>home module 中的state经过key为'foo'的装饰之后 自动生成如下对象：</p>
    <pre>{{foo}}</pre>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: homeMapState } = createNamespacedHelpers('home')

export default {
  name: 'home',
  computed: {
    ...homeMapState(['foo'])
  }
}
</script>
