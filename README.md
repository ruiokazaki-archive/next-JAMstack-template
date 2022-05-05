## commit message

[Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) の規則に沿って commit message を記述してください。
commit-lint を導入しているため、規則に沿わない場合エラーになります。
重要なアプデは

| prefix   | 内容                                       |
| -------- | ------------------------------------------ |
| build    | ビルド                                     |
| ci       | CI                                         |
| chore    | 雑事（カテゴライズする必要ないようなもの） |
| docs     | ドキュメント                               |
| feat     | 新機能                                     |
| fix      | バグフィックス                             |
| perf     | パフォーマンス改善系                       |
| refactor | リファクタリング                           |
| revert   | コミット取り消し（git revert）             |
| style    | コードスタイル, format 等                  |
| test     | テスト                                     |

```
chore: commit-lintを導入した
feat!: ログイン機能を作成した
```

## ディレクトリ説明

### src/

全てのソースコードを配置します。

### pages/

nextjs のページコンポーネントを配置します。

### components/

コンポーネントを配置します。
デザインパターンは atomic design を参考にしています。
`ui-elements` と `ui-parts` は `yarn mc` を実行してファイルを作成してください。

### components/functional

見た目がないコンポーネントを配置する。
ログイン判定などのコンポーネント。

### components/ui-elements

Atomic デザインでいうところの atoms です。
最小単位のコンポーネントです。
button や unordered list でいう list item などが当たります。

### components/ui-parts

Atomic デザインでいうところの molecules です。
最小単位のコンポーネントが複数合わさったコンポーネントです。
unordered list や header などが当たります。

### hooks/

カスタムフックを配置します。

### apis/

aspida で使用する型情報を配置します。

### libs/

ライブラリの初期化や設定ファイルを配置します。

### theme/

chakra-ui で使用する theme 関連のファイルを配置します。

### utils/

googleTagManager 等の analytics 関連のファイルを配置します。

### types/

汎用的な型定義ファイルを配置します。
