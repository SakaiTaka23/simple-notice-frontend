# simple-notice-frontend



## survey.js

* jsonをもとにアンケート調査を作成することができる→アンケートのjsonをapiから送って直接差し込んだら行けそう?
* アンケートの作成機能は有料だから自作する必要があるよ

**調査結果**

* デザインをこだわることができない
* もうちょっとオリジナリティを出したい
* react版バグっている気がする



## react-hook-form

* 作成したformの情報を簡単に取得できるようにする
* formが動的に変わっても対応できそう



## formの作成手順

1. jsonを解析
2. idやタイトル、詳細のみ受け取り残りはmapで回す
3. アイテム内のtype属性によってformの内容作成



## json

* とりあえず入力フォームのjson定義
* id,titleは必須,descriptionは任意
* questionsに関して今はtext,checkbox,radioのみ許容
* 書いてある要素に関して全て必須

```json
  {
    "id" : "some hashed id",
    "title" : "title", 
    "description" :"some",
    "questions": [
      {
        "type": "text",
        "name": "name",
        "title": "Your name:"
      },
      {
        "type": "checkbox",
        "name": "food",
        "title": "What is your favorite food?",
        "isRequired": true,
        "choices": ["apple", "orange"]
      },
      {
      	"type": "radio",
      	"name": "gender",
        "title": "title",
        "isRequired": true,
        "choices": ["male", "female"]
      }
    ]
  }

```



## ルーティング

| name           | 詳細                       |
| -------------- | -------------------------- |
| /              | ランディングページ         |
| /survey/:id    | そのformの回答ページ       |
| /survey        | 回答可能アンケート一覧表示 |
| /survey/create | 新規作成                   |



## Todo

* [x] jsonからフォームを作る仕組みを定義 とりあえず最初はチェックボックスにのみ対応で様子見
* [ ] ある程度拡張性を持たせた設計にすること→コンポーネントの配置が適当になっているので直すこと
* [ ] とりあえずバックエンドからapiを受け取ってアンケート一覧、表示できるまで実装　アンケート新規作成はとりあえず後



