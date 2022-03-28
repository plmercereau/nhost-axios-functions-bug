global.XMLHttpRequest = require('xhr2')

import { Request, Response } from 'express'
import { nhost } from '../src/utils/nhost'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: Request, res: Response) => {
  nhost.graphql
    .request('{ auth_users {id}}')
    .then(result => {
      console.log('res', result)
      res
      res.status(200).send(JSON.stringify(result, null, 2))
    })
    .catch(err => {
      console.log('Error', err)
      res.status(200).send(`Error`)
    })
}
