const username = 'setec'
const password = 'astronomy'
const auth = btoa(`${username}:${password}`)

const fetchResults = async (startPrice, endPrice, pageNum) => {
  const url = `https://test-api.autolist.com/search?page=${pageNum}&price_min=${startPrice}&price_max=${endPrice}`
  const headers = new Headers()
  headers.append('Authorization', `Basic ${auth}`)
  const fetched = await fetch(url, {
    headers,
  })
  const incoming = await fetched.json()
  const results = incoming.records.sort(
    (item1, item2) => item1.price_unformatted - item2.price_unformatted
  )
  return { results, totalCount: incoming.total_count }
}

export default fetchResults
