<template>
  <div>
    index
  </div>
  <button @click="handleRefresh">
    刷新
  </button>
  <button @click="toDetail">
    detail
  </button>
  <div v-for="event in events" :key="event.e_id">
    {{ event.date }} - {{ event.title }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue'
import { useIndexStore } from '@/pinia-store'
import { getTodayEvent } from './services'
import { useRouter } from 'vue-router'
// import { IndexData } from '~/typings/data'

const router = useRouter()
const props = defineProps<{
  reactiveFetchData: {value: any}
}>()
const indexStore = useIndexStore()
indexStore.setData(props.reactiveFetchData.value)

const indexData = indexStore.data

// console.log(indexData)
// console.log(props.reactiveFetchData.value.result)

const events = ref(props.reactiveFetchData.value.result || [])

function toDetail () {
  router.push('/detail/1')
}

async function handleRefresh () {
  const result = await getTodayEvent({ date: '5/14' })
  events.value = result.data.result ?? []
}

onMounted(() => {
  document.title = '首页'
})

</script>
