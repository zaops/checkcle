import { SSLTranslations } from '../types/ssl';

export const sslTranslations: SSLTranslations = {
  // ページとセクションタイトル
  sslDomainManagement: "SSL・ドメイン管理",
  monitorSSLCertificates: "ドメインのSSL証明書を監視・管理",
  addSSLCertificate: "SSL証明書を追加",
  editSSLCertificate: "SSL証明書を編集",
  deleteSSLCertificate: "SSL証明書を削除",
  sslCertificateDetails: "SSL証明書詳細",
  detailedInfo: "詳細情報:",

  // ステータス関連
  valid: "有効",
  expiringSoon: "期限切れ間近",
  expired: "期限切れ",
  pending: "保留中",

  // 統計とカード
  validCertificates: "有効な証明書",
  expiringSoonCertificates: "期限切れ間近",
  expiredCertificates: "期限切れ証明書",

  // フォームフィールド
  domain: "ドメイン",
  domainName: "ドメイン名",
  domainCannotChange: "ドメインは作成後変更できません",
  warningThreshold: "警告閾値",
  warningThresholdDays: "警告閾値（日）",
  expiryThreshold: "期限切れ閾値",
  expiryThresholdDays: "期限切れ閾値（日）",
  notificationChannel: "通知チャンネル",
  chooseChannel: "通知チャンネルを選択",
  whereToSend: "通知の送信先",
  daysBeforeExpiration: "期限切れ前の警告を受信する日数",
  daysBeforeCritical: "期限切れ前の重要アラートを受信する日数",
  getNotifiedExpiration: "証明書の期限切れが近い時に通知を受信",
  getNotifiedCritical: "証明書の期限切れが非常に近い時に通知を受信",

  // テーブルヘッダーとフィールド
  issuer: "発行者",
  expirationDate: "有効期限",
  daysLeft: "残り日数",
  status: "ステータス",
  lastNotified: "最終通知",
  actions: "アクション",
  validFrom: "有効開始日",
  validUntil: "有効終了日",
  validityDays: "有効期間",
  organization: "組織",
  commonName: "コモンネーム",
  serialNumber: "シリアル番号",
  algorithm: "アルゴリズム",
  subjectAltNames: "サブジェクト代替名",
  
  // ボタンとアクション
  addDomain: "ドメインを追加",
  refreshAll: "全て更新",
  cancel: "キャンセル",
  addCertificate: "証明書を追加",
  check: "チェック",
  view: "表示",
  edit: "編集",
  delete: "削除",
  close: "閉じる",
  saveChanges: "変更を保存",
  updating: "更新中",
  
  // 詳細ビューのセクション
  basicInformation: "基本情報",
  validity: "有効性",
  issuerInfo: "発行者情報",
  technicalDetails: "技術的詳細",
  monitoringConfig: "監視設定",
  recordInfo: "レコード情報",
  
  // 通知とメッセージ
  sslCertificateAdded: "SSL証明書が正常に追加されました",
  sslCertificateUpdated: "SSL証明書が正常に更新されました",
  sslCertificateDeleted: "SSL証明書が正常に削除されました",
  sslCertificateRefreshed: "{domain}のSSL証明書が正常に更新されました",
  allCertificatesRefreshed: "全{count}件の証明書が正常に更新されました",
  someCertificatesFailed: "{success}件の証明書が更新され、{failed}件が失敗しました",
  failedToAddCertificate: "SSL証明書の追加に失敗しました",
  failedToLoadCertificates: "SSL証明書の読み込みに失敗しました",
  failedToUpdateCertificate: "SSL証明書の更新に失敗しました",
  failedToDeleteCertificate: "SSL証明書の削除に失敗しました",
  failedToCheckCertificate: "SSL証明書のチェックに失敗しました",
  noCertificatesToRefresh: "更新する証明書がありません",
  startingRefreshAll: "{count}件の証明書の更新を開始しています",
  checkingSSLCertificate: "SSL証明書をチェック中...",
  deleteConfirmation: "以下の証明書を削除してもよろしいですか？",
  deleteWarning: "この操作は元に戻せません。証明書が完全に削除されます。",
  
  // その他
  unknown: "不明",
  never: "なし",
  none: "なし",
  loadingChannels: "チャンネル読み込み中...",
  noChannelsFound: "通知チャンネルが見つかりません",
  noSSLCertificates: "SSL証明書が見つかりません",
  created: "作成日",
  lastUpdated: "最終更新",
  lastNotification: "最終通知",
  collectionId: "コレクションID"
};