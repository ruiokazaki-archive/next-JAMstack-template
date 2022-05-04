### ディレクトリ説明

#### src/

全てのソースコードを配置します。

#### pages/

nextjs のページコンポーネントを配置します。

#### components/

コンポーネントを配置します。
デザインパターンは atomic design を参考にしています。

#### components/

コンポーネント群を配置します。

#### components/functional

見た目がないコンポーネントを配置する。
ログイン判定などのコンポーネント。

#### components/ui-elements

Atomic デザインでいうところの atoms です。
最小単位のコンポーネントです。
button や unordered list でいう list item などが当たります。

#### components/ui-parts

Atomic デザインでいうところの molecules です。
最小単位のコンポーネントが複数合わさったコンポーネントです。
unordered list や header などが当たります。

#### hooks/

カスタムフックを配置します。

#### apis/

aspida で使用する型情報を配置します。

#### libs/

ライブラリの初期化や設定ファイルを配置します。

#### theme/

chakra-ui で使用する theme 関連のファイルを配置します。

#### utils/

googleTagManager 等の analytics 関連のファイルを配置します。
