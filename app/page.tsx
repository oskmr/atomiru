import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Cloud,
  LineChart,
  MessageSquare,
  Smartphone,
  Sparkles,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-teal-600 ml-4">
            <Sparkles className="h-5 w-5" />
            <span>アトミル</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-teal-600 transition-colors">
              機能
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-teal-600 transition-colors">
              メリット
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-teal-600 transition-colors">
              ユーザーの声
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-teal-600 transition-colors">
              よくある質問
            </Link>
          </nav>
          <div className="flex items-center">
            <Button className="bg-teal-600 hover:bg-teal-700 mr-4">
              無料で始める
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  アトピーに悩む人のための新しい選択肢
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  AIがあなたのアトピーを予測し、<span className="text-teal-600">快適な毎日</span>をサポート
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  生活習慣や環境要因からかゆみの発生を予測。あなただけのパーソナライズされたケアプランで、アトピーとの付き合い方が変わります。
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-lg">
                    今すぐダウンロード
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="text-lg">
                    詳しく見る
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-teal-500"
                    >
                      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                      <path d="M7 7h.01" />
                    </svg>
                    <span>無料で予測</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-teal-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>プライバシー保護</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-teal-500"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>医師監修</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-200 to-teal-200 rounded-[40px] shadow-xl overflow-hidden">
                    <div className="absolute inset-1 bg-white rounded-[36px] overflow-hidden">
                      <div className="w-full h-full flex flex-col">
                        <div className="h-12 bg-teal-600 flex items-center justify-center text-white font-medium">
                          アトミル
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto">
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">今日の症状予測</h3>
                            <div className="bg-teal-50 p-4 rounded-lg flex items-center justify-between">
                              <div>
                                <div className="text-3xl font-bold text-teal-700">3.2/10</div>
                                <div className="text-sm text-teal-600">昨日より改善しています</div>
                              </div>
                              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                                <Sun className="h-8 w-8 text-teal-600" />
                              </div>
                            </div>
                          </div>
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">週間予測</h3>
                            <div className="bg-white border rounded-lg p-3">
                              <div className="h-32 flex items-end justify-between gap-2">
                                <div className="w-8 bg-teal-200 h-[30%] rounded-t-md"></div>
                                <div className="w-8 bg-teal-300 h-[40%] rounded-t-md"></div>
                                <div className="w-8 bg-teal-400 h-[60%] rounded-t-md"></div>
                                <div className="w-8 bg-teal-500 h-[80%] rounded-t-md"></div>
                                <div className="w-8 bg-teal-400 h-[50%] rounded-t-md"></div>
                                <div className="w-8 bg-teal-300 h-[35%] rounded-t-md"></div>
                                <div className="w-8 bg-teal-200 h-[25%] rounded-t-md"></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <div>月</div>
                                <div>火</div>
                                <div>水</div>
                                <div>木</div>
                                <div>金</div>
                                <div>土</div>
                                <div>日</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">今日のアドバイス</h3>
                            <div className="bg-sky-50 p-4 rounded-lg">
                              <div className="flex items-start gap-3">
                                <MessageSquare className="h-5 w-5 text-sky-600 mt-1" />
                                <div>
                                  <p className="text-sm text-gray-700">
                                    今日は湿度が高いため、軽めの保湿剤を使用することをお勧めします。また、花粉レベルが高いので外出時はマスクを着用しましょう。
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">主な機能</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                あなたのアトピーケアを<span className="text-teal-600">スマート</span>に
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                AIを活用した予測機能と詳細な記録で、アトピーの改善をより簡単に、より効果的に。
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="border-2 border-teal-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <LineChart className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>ダッシュボード</CardTitle>
                  <CardDescription>一目でわかる状態と予測</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>かゆみスコア予測の表示</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>最近の記録の概要</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>クイックアクションボタン</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Calendar className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>生活記録</CardTitle>
                  <CardDescription>詳細な記録でパターンを発見</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>日付選択カレンダー</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>かゆみスコア入力</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>トリガー要素記録（天気、食事など）</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>写真添付機能とメモ欄</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Sparkles className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>予測・アドバイス</CardTitle>
                  <CardDescription>AIによる個別最適化</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>週間かゆみ予測グラフ</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>トリガー分析</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-teal-500" />
                      <span>パーソナライズされたアドバイス</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-700">アプリのメリット</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                アトピーとの付き合い方が<span className="text-sky-600">変わります</span>
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                予測に基づいた対策で、アトピーの症状をコントロール。あなたの生活の質を向上させます。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">環境要因の把握</h3>
                <p className="text-center text-gray-500">
                  天気や湿度、花粉などの環境要因がアトピーに与える影響を分析し、事前に対策を立てられます。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <LineChart className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">症状の予測</h3>
                <p className="text-center text-gray-500">
                  AIが過去の生活記録から学習し、将来のかゆみや炎症の可能性を予測。事前に対策を講じることができます。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">パーソナライズされたアドバイス</h3>
                <p className="text-center text-gray-500">
                  あなたの記録に基づいて、AIがパーソナライズされたスキンケアや生活習慣のアドバイスを提供します。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">詳細な記録</h3>
                <p className="text-center text-gray-500">
                  日々の状態を簡単に記録。時間の経過とともに、あなたのアトピーのパターンが明確になります。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">いつでもどこでも</h3>
                <p className="text-center text-gray-500">
                  スマートフォンがあれば、外出先でも簡単に記録や予測を確認できます。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sky-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">医師との共有</h3>
                <p className="text-center text-gray-500">
                  記録したデータを医師と共有することで、より効果的な治療計画を立てることができます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">ユーザーの声</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                実際に使っている方々の<span className="text-teal-600">体験談</span>
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                実際にアトミルを使っている方々の声をご紹介します。
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-teal-600"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm leading-relaxed text-gray-500">
                        「このアプリを使い始めてから、アトピーの悪化を事前に予測できるようになりました。特に季節の変わり目や天気の変化による影響がわかるようになり、対策を立てやすくなりました。」
                      </p>
                      <div>
                        <div className="font-medium">田中さん</div>
                        <div className="text-xs text-gray-500">30代・アトピー歴20年</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-teal-600"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm leading-relaxed text-gray-500">
                        「子供のアトピーの管理に使っています。AIのアドバイスが的確で、どんな食べ物や環境が症状を悪化させているのかがわかるようになりました。医師との相談時にもデータを見せることで、より良いアドバイスをもらえています。」
                      </p>
                      <div>
                        <div className="font-medium">佐藤さん</div>
                        <div className="text-xs text-gray-500">40代・子供のアトピーケア</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-teal-600"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm leading-relaxed text-gray-500">
                        「使いやすいインターフェースと直感的な操作性が気に入っています。毎日の記録が習慣になり、自分のアトピーについて理解が深まりました。予測機能のおかげで、旅行や重要なイベントの前に対策を立てられるようになりました。」
                      </p>
                      <div>
                        <div className="font-medium">鈴木さん</div>
                        <div className="text-xs text-gray-500">20代・アプリ使用歴1年</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-teal-600"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm leading-relaxed text-gray-500">
                        「皮膚科医として患者さんにこのアプリを勧めています。患者さんの症状の変化や生活習慣との関連性が明確になり、より効果的な治療計画を立てられるようになりました。医療とテクノロジーの素晴らしい融合です。」
                      </p>
                      <div>
                        <div className="font-medium">山田医師</div>
                        <div className="text-xs text-gray-500">皮膚科医・医療現場での活用</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-700">よくある質問</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-sky-600">疑問</span>にお答えします
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                アトミルについてよくいただく質問とその回答をまとめました。
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>このアプリは治療の代わりになりますか？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    いいえ、このアプリは治療の代わりにはなりません。あくまで自己管理のためのツールとしてご利用ください。症状が深刻な場合は必ず医師に相談してください。アプリのデータを医師と共有することで、より効果的な診察が可能になります。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>予測はどのくらい正確ですか？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    予測の精度はユーザーの記録データ量に比例して向上します。使い始めは一般的な傾向に基づいた予測となりますが、継続的に使用することで、あなた固有のパターンを学習し、より正確な予測が可能になります。一般的に3週間以上の継続使用で精度が向上します。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>記録やデータは公開されますか？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    いいえ、アトミルではアプリの利用に必要な情報のみをサービスの改善やサポートのために利用します。法令に基づく場合を覗き、同意を得た目的以外に利用することはありません。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>無料版と有料版の違いは何ですか？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    無料版では基本的な記録機能と簡易予測が利用可能です。有料版ではより詳細な分析、長期予測、高度なAIアドバイス、医師との共有機能など、より充実した機能をご利用いただけます。まずは無料版でお試しいただき、効果を実感された上でアップグレードをご検討ください。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>子供のアトピー管理にも使えますか？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    はい、お子様のアトピー管理にも最適です。保護者の方がお子様の状態を記録することで、トリガーの特定や症状の予測が可能になります。特に言葉でうまく表現できない小さなお子様の場合、写真記録機能が役立ちます。また、小児科医との情報共有にも活用できます。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                アトピーとの付き合い方を変える一歩を踏み出しませんか？
              </h2>
              <p className="text-xl text-teal-100">
                今すぐダウンロードして、AIの力であなたのアトピーケアをスマートに。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button className="bg-white text-teal-600 hover:bg-teal-50 text-lg w-full sm:w-auto">
                  App Storeでダウンロード
                </Button>
                <Button className="bg-white text-teal-600 hover:bg-teal-50 text-lg w-full sm:w-auto">
                  Google Playでダウンロード
                </Button>
              </div>
              <p className="text-sm text-teal-100 mt-4">アトミルは無料で始められます。</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl text-teal-600">
                <Sparkles className="h-5 w-5" />
                <span>アトミル</span>
              </div>
              <p className="text-sm text-gray-500">AIを活用したアトピー予測・管理アプリ</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">リンク</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    機能紹介
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    料金プラン
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">法的情報</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    特定商取引法に基づく表記
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">ダウンロード</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    App Store
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    Google Play
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            <p>© 2025 アトミル. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
