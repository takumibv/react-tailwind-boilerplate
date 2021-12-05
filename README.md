# React.js + Typescript + Tailwindcss + Atomic Design プロジェクト テンプレート

## 使用技術

- JS
  - React(v17)
  - Typescript
- CSS
  - Tailwindcss
- Prettier (コード整形)
- ESlint (静的解析)

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

# eslint
$ yarn lint
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
│   ├── provides/             # コンテクスト(子孫要素にバケツリレーをせずに値を渡す)
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
