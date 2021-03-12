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

const favorites = []

const storeFavorite = async (vin, isFavorite) => {
  if (isFavorite) {
    favorites.push(vin)
  } else {
    const index = favorites.indexOf(vin)
    if (index > -1) {
      favorites.splice(index, 1)
    }
  }
}

const retrieveFavorite = (vin) => favorites.indexOf(vin) >= 0

export { loginDb, getAndIncrement, storeFavorite, retrieveFavorite }
