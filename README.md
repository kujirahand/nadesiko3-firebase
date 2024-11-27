# なでしこ3のためのFirebaseプラグイン

従量制BlazeプランのFirebase Storageを操作できるプラグインです。

- なでしこ3 - https://nadesi.com
- Firebase - https://firebase.google.com/

## 使い方

以下の手順に従って利用します。

### (1) Firebaseでプロジェクトを作る

- [Firebase](https://console.firebase.google.com/) のWebサイトにアクセスし、Googleアカウントでログインします。そして、新規プロジェクトを作ります。
- Storageを有効にします。

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

### (3) サービスアカウントキーを取得する

1. [Firebaseコンソール](https://console.firebase.google.com/)にアクセスしてログインします。
2. サービスアカウントキーを取得したいFirebaseプロジェクトを選択します。
3. 左側のメニューから「設定」アイコンをクリックし、「プロジェクトの設定」を選択します。
4. サービスアカウントタブを選択 --- 設定ページ内の上部メニューから「サービスアカウント」をクリックします。
5. 「新しい秘密鍵を生成」をクリックし、表示されるダイアログで「生成」ボタンを押します。
6. 自動的にJSONファイルがダウンロードされます。このファイルがサービスアカウントキーです。

サンプルプログラムを実行するために、ダウンロードしたファイルを仮に「~/firebase_service_account.json」に保存しておきます。

### (4) データベースの権限を変更する

FirebaseのStorageをクリックし、タブから「ルール」を確認して、読み書きできる設定にしておきましょう。
または、テストモードにしておくと、全てのユーザーが読み書きできるようになります。


### (4) なでしこのプログラムを作成

本プロジェクトの sample ディレクトリ以下のサンプルを参考にプログラムを作ってみてください。
