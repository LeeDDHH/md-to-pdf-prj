## 動作環境

|||
|:---:|:---:|
|Node.js|12.22.1|
|npm|6.14.12|
|yarn|1.22.4|

## コマンド

### プロジェクト初期化

```
yarn install
```

### pdfファイルの書き出し

```
yarn build
```

## GitHub Actions

- PRを出したら、PRごとにpdfを作成する
- `PR > Checks > (右側にある)Artifacts` からpdfファイルのダウンロードができる

## プロジェクト構成

```
.
├── .github
├── .gitignore
├── .idea
├── README.md
├── contents
│   └── 「数字.md」形式でマークダウンファイルを保存する
├── node_modules
├── output
│   ├── contentsの各マークダウンをpdfにしたファイル
│   └── ※ファイル書き出し時に生成される
├── package.json
├── pdf
│   ├── book.pdf
│   │   ├── outputのpdfを1つのpdfに結合したもの
│   │   └── ※ファイル書き出し時に生成される
│   └── output.pdf
│       ├── book.pdfのfooterにページ番号を記載したもの
│       └── ※ファイル書き出し時に生成される
├── scripts
│   ├── index.js
│   │   └── マークダウンをpdfに変換し、1つのpdfにする
│   └── pageNumber.js
│       └── pdfファイルのfooterにページ番号を記載する
└── yarn.lock
```
