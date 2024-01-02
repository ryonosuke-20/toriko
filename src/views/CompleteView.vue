<template>
  <main>
    <div class="title">
      トリコクイズ
    </div>
    <div class="comment">
      <span>
        商品の準備中ですので<br>今しばらくお待ちください。
      </span>
    </div>
    <iframe 
      width="320" 
      height="315" 
      src="https://www.youtube.com/embed/neng4mIhZnU?si=J4mep8vW77MObuNM" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
  </main>
</template>

<script setup lang="ts">
import { init, send } from '@emailjs/browser'
import { onBeforeMount } from "vue";

onBeforeMount(() => {
    // 必要なIDをそれぞれ環境変数から取得
    const userID = import.meta.env.VITE_NEXT_PUBLIC_EMAILJS_USER_ID
    const serviceID = import.meta.env.VITE_NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

    if (userID && serviceID && templateID) {
      // emailJS初期化
      init(userID)

      // emailJS送信
      try {
        send(serviceID, templateID)
      } catch (error) {
      // 送信失敗したらalertで表示
        alert(error)
      }
    }
  });


</script>

<style scoped>
main{
  width: 360px;
  margin: auto;
  text-align: center;
}
.title{
  font-size: 40px; 
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
}
.comment{
  font-size: 20px;
  margin: 6px;
  margin-bottom: 50px;
}
.fit-picture{
  width: 320px;
  margin: 40px 0;
}
</style>