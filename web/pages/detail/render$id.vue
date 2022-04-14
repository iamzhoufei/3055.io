
<template>
  <div>
    detail
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
// import { useDetailStore } from '@/pinia-store'
// import { DetailData } from '~/typings/data'

// const props = defineProps<{
//   reactiveFetchData: { value: any }
// }>()

onMounted(() => {
  document.title = '详情页'
})

</script>

<style>

</style>
