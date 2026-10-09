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
    lede: '管理画面、PDF・Canvasを活用したエディタ、地図インターフェースなど、主に官公庁・エンタープライズ向けシステムのフロントエンド開発に携わってきました。React、TypeScript、Next.jsを中心に、近年はWebAPI開発や要件定義・設計にも対応しています。',
    stats: [
      { value: '13年', label: '実務経験' },
      { value: '10件', label: 'プロジェクト' },
      { value: '日 / 英', label: '対応言語' },
    ],
  },
  about: {
    tag: '概要',
    ledes: [
      'これまで主に、官公庁・エンタープライズ向けWebシステムのフロントエンド開発に携わり、設計・開発・テストまで幅広く経験してきました。HTML5、CSS3、JavaScript、jQueryを用いた開発を通じて、安定性や保守性が求められる本番環境での実務経験を積んできました。',
      '近年はTypeScript、React、Next.jsを中心とした開発に加え、Node.js・Express・NestJSによるWebAPI開発やDB連携、要件定義・設計にも携わっています。日本国籍で海外（フィリピン）就学経験があり、英語での技術情報の調査や、海外開発チームとの仕様調整・進捗確認にも対応してきました。顧客や開発メンバーとのコミュニケーションを重視し、仕様上の課題や不整合を早めに確認しながら、円滑に開発を進めることを心掛けています。',
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
        title: 'API開発・設計',
        body: 'Node.js・Express・NestJSによるWebAPI開発に加え、要件定義・IF／API設計にも対応。',
      },
      {
        title: '日英でのコミュニケーション',
        body: '顧客との要件確認や、オフショア開発チームとの仕様調整を日本語・英語で実施。',
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
        role: 'フロントエンドエンジニア / 要件定義・API設計',
        summary:
          'タブレット・カメラ・スマートフォンなどをレンタルするサービスの、管理システムのリプレイス開発です。主にフロントエンドを担当し、Next.js・React・Material-UIを使用したロッカー管理画面の設計・開発を行いました。顧客との打ち合わせにも参加して画面構成や利用方法の要件・仕様を確認し、その後は次期リプレイスに向けた要件定義・設計書作成・API仕様の設計を担当しています。',
        highlights: [
          'ロッカー管理画面を設計・開発（TypeScript／React／Next.js、8画面）',
          'SWR・Axiosを利用したAPI連携処理を実装（9API程度）',
          '顧客との打ち合わせで要件・画面仕様を確認し、既存仕様との不整合や課題を関係者へ確認・指摘して仕様を整理',
          '次期リプレイスに向けて既存システム・設計書を調査し、要件定義・設計書作成・API仕様の検討・設計を担当',
          'Confluenceで仕様書・受け入れ条件等のドキュメントを作成・整備',
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
          '建築確認申請の審査は、設計図面に直接書き込まれた注釈をもとに進みます。審査担当者がPDFや画像形式の図面をブラウザで開き、そのまま描画・編集できるWebベースの編集画面と、画面機能に連動するWebAPIを開発しました。',
        highlights: [
          '画像ファイルをPDFへ変換し、pdfjs-distで共通的に表示できる仕組みを実装',
          'Konvaによる図面上の描画・編集機能と、表示サイズ・スケール調整などのエディタ表示制御を実装',
          'PDF／PNG／JPEG形式でのファイル出力機能を実装',
          'NestJSでWebAPI 12本を開発し、Prismaを利用してSQL Serverへのデータ取得・登録・更新・削除処理を実装',
          'React・Next.js・NestJSのすべてでTypeScriptを活用',
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
        description:
          'フロントエンドの設計・実装に加え、次期リプレイスの要件定義・API設計を担当。詳細は上記のケーススタディを参照。',
        featured: true,
      },
      {
        period: '2024年6月 — 2025年9月',
        title: '確認申請用CDEシステム フロント機能開発',
        description: 'PDF・画像の描画・編集機能と、NestJSによるWebAPIを開発。詳細は上記のケーススタディを参照。',
        featured: true,
      },
      {
        period: '2023年5月 — 2024年5月',
        title: 'プラント業界向けパッケージ製品のWEBシステム化',
        description:
          '既存パッケージアプリを解析し、基本設計・詳細設計・IF／API設計から開発までを担当。TypeScript・Reactで8画面、Node.js・Express・PrismaでAPI 12本を実装。ベトナムのオフショア開発チームへの仕様説明・成果物確認・進捗管理を日本語・英語で実施。',
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
          '銀行向けスマートフォンアプリの管理画面とWebAPIをJava・PHPで開発。サブシステムリーダーとして進捗・品質管理も担当。',
      },
      {
        period: '2019年9月 — 2020年3月',
        title: '官公庁向けWeb基幹系事務共通システム HTML5移行',
        description:
          '画面共通部品と開発者向けサンプルページの設計・開発、既存画面のHTML5化、Servlet内EJBのWebAPI化を担当。作業チームの工程管理・品質管理も実施。',
      },
      {
        period: '2017年4月 — 2019年8月',
        title: '官公庁向けWeb基幹系人事給与システム',
        description:
          '大規模な人事給与システムの画面共通ライブラリ（jQuery 88K中30K相当）と、JavaによるサーバーサイドAPIを開発。',
      },
      {
        period: '2015年4月 — 2017年3月',
        title: '官公庁向け情報通達システム改修',
        description:
          '画面14画面とWebAPI連携、Java・PHPによるサーバーサイド処理を開発。TCPDFを利用したPDF帳票16帳票も担当。',
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
