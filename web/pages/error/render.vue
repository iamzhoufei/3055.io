<template>
  <div>
    error

    <div @click="toIndex">
      回到首页
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()
function toIndex () {
  router.replace('/')
}

onMounted(() => {
  document.title = '错误页面'
})

</script>
