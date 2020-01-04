<template>
  <div class="home">
    <h1>mutationsEnhance 使用</h1>
    <hr />
    <p><button @click="fooRequest">请求开始</button></p>
    <p><button @click="fooSuccess({ foo: 'bar' })">请求成功</button></p>
    <p><button @click="fooFailure">请求结束</button></p>
    <pre>{{foo}}</pre>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {
  mapState: homeMapState,
  mapMutations: homeMutations
} = createNamespacedHelpers('home')

export default {
  name: 'home',
  computed: {
    ...homeMapState(['foo'])
  },
  methods: {
    ...homeMutations(['fooRequest', 'fooSuccess', 'fooFailure'])
  }
}
</script>
