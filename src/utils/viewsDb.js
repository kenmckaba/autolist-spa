import * as Realm from 'realm-web'

const REALM_APP_ID = 'autolist-0-vpjoa'
const app = new Realm.App({ id: REALM_APP_ID })
// const credentials = Realm.Credentials.anonymous()
const credentials = Realm.Credentials.emailPassword(
  'ken@mckaba.com',
  'secret11'
)
let views

const loginDb = async () => {
  if (!views) {
    await app.logIn(credentials)
    const mongodb = app.currentUser.mongoClient('mongodb-atlas')
    views = mongodb.db('autolist0').collection('views0')
  }
  return views
}

const getAndIncrement = async (vin) => {
  // finds or creates the record and increments viewCount
  const record = await views.findOneAndUpdate(
    { vin, owner_id: app.currentUser.id },
    { $inc: { viewCount: 1 } },
    { new: true, upsert: true, returnNewDocument: true }
  )
  return record
}

const storeFavorite = async (vin, isFavorite) => {
  await views.findOneAndUpdate(
    { vin, owner_id: app.currentUser.id },
    { $set: { isFavorite } },
    { new: true, upsert: true, returnNewDocument: true }
  )
}

const retrieveFavorite = async (vin) => {
  const record = await views.findOne({ vin })
  return !!record.isFavorite
}

export { loginDb, getAndIncrement, storeFavorite, retrieveFavorite }
