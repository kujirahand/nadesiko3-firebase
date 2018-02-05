# なでしこ3のためのFirebaseプラグイン

- なでしこ3 - https://nadesi.com

## 使い方

以下の手順に従って利用します。

### (1) Firebaseでプロジェクトを作る

[Firebase](https://console.firebase.google.com/) のWebサイトにアクセスし、Googleアカウントでログインします。そして、新規プロジェクトを作ります。

### (2) アカウント設定を得る

「ウェブアプリにFirebaseを追加」をクリックして、スクリプトタグを取得します。
この時に、変数configに代入しているオブジェクトの値をコピーします。

```
  ...
  // Initialize Firebase
  var config = {
    apiKey: "xxxxx_xxxxxx_xxxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxxx.firebaseio.com",
    projectId: "xxxxx",
    storageBucket: "xxx.appspot.com",
    messagingSenderId: "xxx"
  };
  ...
```

そして、以下のように書き換えて、ユーザーのホームディレクトリに「firebase.json」という名前で保存してください。
（このとき、JSONデータにするために、キーの部分を"キー"のように囲う必要があるので、注意してください。
JSONに保存せず、なでしこのソースコードに直接貼り付けるときは、ダブルクォートで囲む必要はありません。）

```
{
  "apiKey": "xxxxx_xxxxxx_xxxxx",
  "authDomain": "xxxx.firebaseapp.com",
  "databaseURL": "https://xxxxx.firebaseio.com",
  "projectId": "xxxxx",
  "storageBucket": "xxx.appspot.com",
  "messagingSenderId": "xxx"
}
```

### (3) データベースの権限を変更する

Firebaseのプロジェクト画面で、画面左にある「Database」をクリックし、画面右にある「ルール」を確認します。デフォルトでは、ログインしないと読み書きできない設定になっています。最初に、誰でも読み書きできるように、この部分を、以下のように書き換えましょう。

```
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```

### (4) なでしこのプログラムを作成

本プロジェクトの sample ディレクトリ以下のサンプルを参考にプログラムを作ってみてください。
