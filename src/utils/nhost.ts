import { NhostClient } from '@nhost/nextjs'

const nhost = new NhostClient({
  backendUrl: 'http://localhost:1337'
})

export { nhost }
