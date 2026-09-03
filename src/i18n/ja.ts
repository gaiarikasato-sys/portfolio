import type { Dict } from './types'
import { projectStacks, skillItems } from './shared'

// Japanese is written to read naturally for Japanese recruiters — factual and
// understated — rather than as a literal translation of the English copy.
export const ja: Dict = {
  metaTitle: '佐藤 利華 — フロントエンドエンジニア',
  metaDescription:
    '佐藤 利華 — フロントエンドを中心とするソフトウェアエンジニア。官公庁・エンタープライズ向けシステムのフロントエンド開発に13年携わってきました。',
  siteName: '佐藤 利華',
  langGroupLabel: '表示言語',
  nav: {
    work: '実績',
    experience: '経歴',
    skills: 'スキル',
    contact: '連絡先',
  },
  hero: {
    eyebrowRole: 'フロントエンドを中心とするソフトウェアエンジニア',
    eyebrowLocation: '東京',
    heading: '複雑な業務システムのフロントエンド開発に13年携わってきました。',
    lede: '管理画面、PDF・Canvasを活用したエディタ、地図インターフェースなど、主に官公庁・エンタープライズ向けシステムのフロントエンド開発に携わってきました。React、TypeScript、Next.jsを中心に、近年はバックエンド開発やAPI設計にも対応しています。',
    stats: [
      { value: '13年', label: '実務経験' },
      { value: '12件', label: 'プロジェクト' },
      { value: '日 / 英', label: '対応言語' },
    ],
  },
  about: {
    tag: '概要',
    ledes: [
      'これまで主に、大規模な製造業・官公庁向けシステムのフロントエンド開発に携わってきました。HTML5、CSS3、JavaScript、jQueryを用いた開発を通じて、安定性や保守性が求められる本番環境での実務経験を積んできました。',
      '近年はTypeScript、React、Next.jsを中心とした開発に加え、Node.jsを使用したバックエンド開発、API・データベース・インターフェース設計にも携わっています。幼少期の一部をフィリピンで過ごした経験から、日本語・英語の双方でコミュニケーションが可能です。また、進捗報告やドキュメント作成など、チーム内での情報共有を大切にしています。',
    ],
    points: [
      {
        title: '複雑なUI開発',
        body: 'Canvas・PDF・地図ベースのインターフェースなど、正確性とパフォーマンスが求められる領域。',
      },
      {
        title: '型安全なフロントエンド開発',
        body: 'React・Next.jsのコードベース全体でTypeScriptを活用し、保守性と拡張性を意識した設計。',
      },
      {
        title: 'フルスタック対応',
        body: '必要に応じて、API・バックエンドロジック・データモデルの開発にも対応。',
      },
      {
        title: '明確なコミュニケーション',
        body: '定期的な進捗報告とドキュメント作成により、チーム内の認識を揃える。',
      },
    ],
  },
  work: {
    heading: '直近の仕事',
    tag: '2024 — 2026',
    projects: [
      {
        period: '2025 —',
        duration: '',
        sector: 'レンタルサービス・SaaS',
        title: 'レンタル注文管理システム リプレイス開発',
        role: 'フロントエンドエンジニア / バックエンド設計参画',
        summary:
          'タブレット・カメラ・スマートフォンなどを扱う機器レンタル事業の、老朽化した在庫・注文管理システムを一から再構築するプロジェクト。フロントエンドの設計・実装を担当し、スタッフが機器を貸出・返却する際に使うロッカー管理画面を開発しました。あわせてバックエンドAPI設計にも参画し、受け入れ条件ドキュメントの作成も行いました。',
        highlights: [
          '老朽化した社内ツールを置き換えるロッカー管理画面を、ゼロから設計・実装',
          'プラットフォーム刷新と並行してバックエンドAPI設計に参画',
          '開発とチーム内の認識共有を支えるため、受け入れ条件と仕様のドキュメントをConfluenceで作成',
        ],
        stack: projectStacks.rental,
      },
      {
        period: '2024 — 2025',
        duration: '16か月',
        sector: '官公庁・建築確認',
        title: '確認申請用CDEシステム 図面注釈・マークアップ機能',
        role: 'フロントエンドエンジニア / バックエンド開発',
        summary:
          '建築確認申請の審査は、設計図面に直接書き込まれた注釈をもとに進みます。審査担当者がPDFや画像形式の図面をブラウザで開き、手描きの線・図形・メモをそのまま追加できるブラウザベースのツールを開発しました。',
        highlights: [
          'pdf.jsとjsPDFでPDF・画像ビューアを構築し、大判の建築図面もスムーズに表示',
          'ビューア上にKonvaを用いて手描き・図形ベースのマークアップを実装',
          'React・Next.jsでUIとCanvas・描画エリアの制御ロジックを設計',
          'Next.jsで注釈データの保存・読み込みを行うAPIを構築し、データアクセスにPrismaを使用',
          'フロントエンド全体でTypeScriptを活用し、型安全性と保守性を向上',
        ],
        stack: projectStacks.cde,
      },
    ],
  },
  experience: {
    heading: '全経歴',
    tag: '2013 — 2026',
    entries: [
      {
        period: '2025年10月 —',
        title: 'レンタル注文管理システム リプレイス開発',
        description: 'フロントエンド設計・実装、バックエンド設計に参画。詳細は上記のケーススタディを参照。',
        featured: true,
      },
      {
        period: '2024年6月 — 2025年9月',
        title: '確認申請用CDEシステム フロント機能開発',
        description: 'PDF・画像ビューアと注釈機能、およびそのバックエンドAPIを構築。詳細は上記のケーススタディを参照。',
        featured: true,
      },
      {
        period: '2024年1月 — 2024年3月',
        title: 'カーシェアリングシステムモダナイゼーション開発',
        description:
          'オフショア開発されたシステムの本番不具合を解消し、UI文言・アセットの置き換えやセキュリティ対応を含む他社向けリブランド対応を担当。',
      },
      {
        period: '2023年10月 — 2023年12月',
        title: '営業ツールモダナイゼーション開発',
        description:
          '既存イントラネットの営業システムを、VB.NETとExcel VBAでセキュリティを重視して再構築。28画面・20API。',
      },
      {
        period: '2023年5月 — 2023年9月',
        title: 'プラント業界向けパッケージ製品のWeb化',
        description:
          '既存デスクトップアプリケーションを解析し、同等の機能をJSFとJavaScriptでWebアプリケーションとして再実装。8画面・12API。',
      },
      {
        period: '2021年5月 — 2023年4月',
        title: '基幹システムERPカスタマイズ開発',
        description:
          'ServiceNowのFlow Designer・Actionを用いたバックグラウンド機能開発。DB設計・IF設計を含め、他システムとの連携API53本を実装。',
      },
      {
        period: '2020年10月 — 2021年4月',
        title: '官公庁向け洪水予測危機管理システム',
        description:
          'OpenLayers上にVue.js・Vuetifyで地図系の状況把握画面12画面を、JavaでWeb API 12本を構築。',
      },
      {
        period: '2020年4月 — 2020年9月',
        title: '銀行系スマートフォンアプリ開発',
        description:
          'Docker・PostgreSQL環境で、銀行向けモバイルアプリの管理画面とWeb APIをPHPで開発。',
      },
      {
        period: '2019年9月 — 2020年3月',
        title: '官公庁向けWeb基幹系事務共通システム HTML5移行',
        description:
          '現行画面をHTML5へ移行し、既存のサーブレットロジックをもとに共通行政プラットフォーム向けのWeb APIを実装。',
      },
      {
        period: '2017年4月 — 2019年8月',
        title: '官公庁向けWeb基幹系人事給与システム',
        description:
          '大規模な行政人事給与システムのフロントエンド共通ライブラリとWeb APIを開発（jQuery 88K中30K相当を担当）。',
      },
      {
        period: '2015年4月 — 2017年3月',
        title: '官公庁向け情報通達システム改修',
        description: '行政の指令サブシステムの画面14画面と、PDF出力機能を開発。',
      },
      {
        period: '2013年4月 — 2015年3月',
        title: '官公庁向けネット攻撃シミュレーションシステム',
        description:
          '行政のサイバー攻撃シミュレーションシステムにおける画面制御とUI機能を12画面分開発。',
      },
    ],
  },
  skills: {
    heading: 'ツール & スタック',
    tag: 'カテゴリ別',
    groups: [
      { label: 'フロントエンド', items: skillItems.frontend },
      { label: 'Canvas・PDF・地図', items: skillItems.graphics },
      { label: 'バックエンド・API', items: skillItems.backend },
      { label: 'データベース', items: skillItems.databases },
      { label: 'ツール・プラットフォーム', items: skillItems.platforms },
    ],
  },
  footer: {
    copyright: '佐藤 利華',
  },
}
