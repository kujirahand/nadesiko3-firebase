// Firebase for なでしこ3

const firebase = require('firebase')
let defaultDB = null
const ERROR_NOT_INIT = '最初に『FIREBASE初期化』でアカウント情報を設定してください。'

const PluginFirebase = {
  '初期化': {
    type: 'func',
    josi: [],
    fn: function (sys) {
    }
  },
  // @Firebase
  'FIREBASE初期化': { // @アカウント設定オブジェクトconfigを与えてFirebaseを初期化する // @FIREBASEしょきか
    type: 'func',
    josi: [['で']],
    fn: function (config, sys) {
      firebase.initializeApp(config)
      defaultDB = firebase.database()
      return defaultDB
    }
  },
  'FIREBASEパス参照': { // @データベースのパスPATHを参照 // @FIREBASEぱすさんしょう
    type: 'func',
    josi: [['を']],
    fn: function (path, sys) {
      if (!defaultDB) throw new Error(ERROR_NOT_INIT)
      return defaultDB.ref(path)
    }
  },
  'FIREBASE値設定': { // @データベースのパスPATHにオブジェクトVALUESを設定 // @FIREBASEせっていs
    type: 'func',
    josi: [['に', 'へ'], ['を', 'の']],
    fn: function (path, values, sys) {
      if (!defaultDB) throw new Error(ERROR_NOT_INIT)
      defaultDB.ref(path).set(values)
    }
  },
  'FIREBASE値変更時': { // @パスpathの値(オブジェクト)が変更された時callbackを実行。引数に値(オブジェクト)が得られる。 // @FIREBASEへんこうしたとき
    type: 'func',
    josi: [['で'], ['の']],
    fn: function (callback, path, sys) {
      if (!defaultDB) throw new Error(ERROR_NOT_INIT)
      defaultDB.ref(path).on('value', (snapshot) => {
        const values = snapshot.val()
        callback(values)
      })
    }
  },
  'FIREBASE値取得時': { // @パスpathの値を取得した時callbackを実行。引数に値(オブジェクト)が得られる。 // @FIREBASEしゅとくしたとき
    type: 'func',
    josi: [['で'], ['の']],
    fn: function (callback, path, sys) {
      if (!defaultDB) throw new Error(ERROR_NOT_INIT)
      defaultDB.ref(path).once('value').then((snapshot) => {
        const values = snapshot.val()
        callback(values)
      })
    }
  }
}

module.exports = PluginFirebase
