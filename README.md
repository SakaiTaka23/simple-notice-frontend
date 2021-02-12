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
* アンケートの表示のためのjson data
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
        "title": "Your name:",
        "isRequired": true,
      },
      {
        "type": "checkbox",
        "title": "What is your favorite food?",
        "isRequired": true,
        "choices": ["apple", "orange"]
      },
      {
      	"type": "radio",
        "title": "title",
        "isRequired": true,
        "choices": ["male", "female"]
      }
    ]
  }

```



* アンケート回答のためのPOSTするjson例

```json
{
  id: "04bcd32d-c41b-35db-aeac-265408b83c7f",
  1: "a",
  2: [
    "b",
    "d"
  ], 
  3: "b", 
  4: "d", 
  5: "e"
}
```



## 結果表示

* ページ数によってはページネーションを追加したい

* 要素
* 問題、結果



* 結果表示jsonの理想系

```json
{
  "title" : "some title",
  "description" : "some description",
  "owner" : "owner",
  "questions":
  	[
      "title" : "title",
      "type" : "type",
      "label" : [label data name],
      "data" : [datas],
    ],
  	...
}
```



## アンケート作成

* ユーザーの入力をもとに新たにアンケートを作成

```json
{
  "title" : "some title",
  "description" : "some description",
  "owner" : "owner",
  "questions" : 
  	[
      {
      "title" : "title",
      "type" : "text | radio | check",
      "choice" : [ possible answers],
      },
      ...
    ],
}
```

* 実際にできたもの

```json
{
  "title":"",
  "description":"",
  "owner":"",
  "questions":
  [
    {
      "title":"title1",
      "type":"text",
      "choice":["choice"]
    },
    {
      "title":"title2",
      "type":"check",
      "choice":["choice","choice append","choice append"]
    },
  ],
}
```

* バックエンドの想定

```json
        $data = [
            "title" => "title",
            "description" => "description",
            "owner" => "owner",
            "delete_pass" => "pass",
            "from" => "2021-2-12",
            "to"=>"2021-2-19",
            "questions" => [
                0 => [
                    "title" => "title1",
                    "type" => "text",
                    "is_required" => false,
                    "choice" => [
                        0 => "choice"
                        ]
                    ],
                1 => [
                    "title" => "title2",
                    "type" => "check",
                    "is_required" => true,
                    "choice" => [
                        0 => "choice",
                        1 => "choice append",
                        2 => "choice append",
                        ]
                    ]
                ]
            ];
```





## Chart.js

```tsx
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Demo line plot',
      backgroundColor: '#008080',
      borderColor: '#7fffd4',
      pointBorderWidth: 10,
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};
```

* このデータを入れる先さえコントロールすれば表示形式も変えることができる



## ルーティング

| name           | 詳細                       |
| -------------- | -------------------------- |
| /              | ランディングページ         |
| /survey/:id    | そのformの回答ページ       |
| /survey        | 回答可能アンケート一覧表示 |
| /survey/create | 新規作成                   |



## Todo

* リポジトリのprojectsに記入



## Feactures

* [ ] ある程度拡張性を持たせた設計にすること→コンポーネントの配置が適当になっているので直すこと





