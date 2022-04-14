import axios from 'axios'

export const getTodayEvent = async ({ date }: { date: string }) => {
  return await axios({
    url: '/api/todayOnhistory/queryEvent.php',
    method: 'GET',
    params: {
      date,
      key: '8bf78abb444705f75ec9f2d2f2554183'
    }
  })
}
