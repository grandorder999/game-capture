<template>
  <div class="container">
    <div class="predict-servant">
      <h2>2022年シルエットの事前予想</h2>
      <img src="/img/silhouette.jpeg" />
      <h3>①左端の男性？サーヴァント</h3>
      <p>
        ホワイトデーイベントに登場したマイケルの顔のシルエットにかなり近い。<br />
        今年中に実装されるのであればマイケルの可能性が高いのでは？と予想する。
      </p>
      <h3>②大きな剣を持っている女性サーヴァント</h3>
      <p>
        手の位置的に②のサーヴァントが剣を持っていると予想。また、足元の靴の雰囲気から女性と推測できる。<br />
        剣の装飾がかなり派手なので名のある聖剣な気もするが果たして。
      </p>
      <h3>③楽器のようなものを持っている男性サーヴァント</h3>
      <p>
        かなり高身長な男性＆楽器のようなものを所持しているということしか現状わからない。<br />
        正直このシルエットから推測できる歴史上の偉人は見当がつかない・・・。
      </p>
      <h3>④アホ毛の女性？サーヴァント</h3>
      <p>
        髪型以外に特徴がなく、予想するのが難しい（女性であることは確定か？）
      </p>
      <h3>⑤とんがり帽を被った子供サーヴァント</h3>
      <p>
        背丈と足元の雰囲気から子供サーヴァントと予想。<br />
        特徴的な帽子のシルエットから魔女っぽいオーラを感じるが果たしてどうか。
      </p>
      <h3>⑥＆⑨「水怪クライシス」の新規サーヴァント『なかよしセイバー』</h3>
      <p>
        立ち姿や足元のシルエットから、2022年4月6日スタートのイベント「水怪クライシス」で実装される『なかよしセイバー』でほぼ確定と言える。<br />
        真名は『徴姉妹(ハイバーチュン)』と予想。1世紀ごろに漢に対して反乱を起こしたベトナムの英雄だ。
      </p>
      <h3>⑦チャクラム？を持つサーヴァント</h3>
      <p>
        チャクラムを持っているように見えて、それからずっとチャクラムと言い張っているのだが正直不明。<br />
        ⑧の影響か足元がよくわからないのでとんでもないポーズをしている可能性もある。
      </p>
      <h3>⑧巨大な中華ロボ風サーヴァント</h3>
      <p>
        項羽、呂布を彷彿とさせる大型サーヴァント。<br />
        所持している大型の弓の形状的にも中国の武将系サーヴァントになりそう。
      </p>
      <h3>⑩ローブのようなものを身に纏ったサーヴァント</h3>
      <p>
        靴が見えないのでローブや着物を着ていると予想。<br />
        それ以外の情報がないため、全く予想が立てられない。
      </p>
      <h3>⑪仏教系要素のある剣士サーヴァント？</h3>
      <p>
        笠を被った剣士に見える。噂になりがちな仏教要素がある剣士といえば頼光だが、果たしてどうなるか。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  created(): void {
    // スクロールトップボタン
    scrollTop(1); // 遅すぎるとガクガクになるので注意
    function scrollTop(duration: number) {
      let currentY = window.pageYOffset; // 現在のスクロール位置を取得
      let step = duration / currentY > 1 ? 10 : 100; // 三項演算子
      let timeStep = (duration / currentY) * step; // スクロール時間
      let intervalId = setInterval(scrollUp, timeStep);
      // timeStepの間隔でscrollUpを繰り返す。
      // clearItervalのために返り値intervalIdを定義する。
      function scrollUp() {
        currentY = window.pageYOffset;
        if (currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
        } else {
          scrollBy(0, -step); // step分上へスクロール
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
.predict-servant {
  background-color: rgb(252, 240, 230);
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
