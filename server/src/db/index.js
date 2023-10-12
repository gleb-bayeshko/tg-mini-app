import * as path from 'path'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import { productCategories, products, brands, lifeStages, sortCategories } from './defaultData.js'

const file = path.resolve(process.cwd(),'src', 'db', 'mockdb.json')

const adapter = new JSONFile(file)
const defaultData = {
  products,
  sortCategories,
  brands,
  lifeStages,
  productCategories,
}

const mockdb = new Low(adapter, defaultData)

await mockdb.read()
await mockdb.write()

export default mockdb
