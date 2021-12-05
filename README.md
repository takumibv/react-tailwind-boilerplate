# React.js + Typescript + Tailwindcss + Atomic Design プロジェクト テンプレート

## 使用ライブラリ・プラグイン

- JS
  - React(v17)
  - Typescript
- CSS
  - PostCSS
  - Tailwindcss
- Prettier (コード整形)
- ESlint (静的解析)
  - eslint-plugin-jest
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react
  - eslint-plugin-react-hooks
- Stylelint (静的解析)
  - stylelint-config-recommended
  - stylelint-config-prettier
  - stylelint-order

## エディタ

- VSCode を使用
- 推奨プラグイン
  - ESlint
  - Prettier - Code formatter
  - Tailwind CSS IntelliSense

## コマンド

```sh
# 環境構築
$ yarn install

# ローカル環境立ち上げ
$ yarn start

# 静的解析の自動修正
$ yarn fix:eslint
$ yarn fix:stylelint

# フォーマットの自動修正
$ yarn fix:prettier

# 静的解析・フォーマットの自動修正
$ yarn fix:all
```

## ファイル構成

```sh
./
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   ├── hooks/                # カスタムフック
│   │   └── useAllUsers.ts
│   ├── provides/             # コンテクスト(子孫要素にバケツリレーをせずに値を渡す). redux系を使用するときは代わりにstoresフォルダを使用する
│   │   └── LoginUserProvider.ts
│   ├── route/                # ルーティング
│   │   └── Router.tsx
│   ├── types/
│   │   ├── api/              # apiに関する型定義
│   │   ├── todo.ts
│   │   ├── user.ts
│   │   └── userProfile.ts
│   ├── App.tsx
│   ├── App.css
│   └── index.tsx
├── public/
├── .eslintrc.json
├── .prettierrc.json
├── postcss.config.json
├── stylelint.config.json
├── tailwind.config.json
├── README.md
├── tsconfig.json
├── package.json
└── yarn.lock
```
