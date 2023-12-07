<template>
  <main>
    <div class="title">
      トリコクイズ
    </div>
    <div class="comment">
      全問正解すると豪華景品がもらえる！
    </div>
    <img
      class="fit-picture"
      src="@/assets/toriko_2.png" />
    <div>
      <input 
        class="button" 
        type="button" 
        value="いただきます"
        @click="handleQuiz"
       />
    </div>
  </main>
</template>

<script setup lang="ts">
import router from '@/router';

function handleQuiz() {
  router.push('quiz');
}
</script>

<style>
main{
  width: 360px;
  margin: auto;
  text-align: center;
}
.title{
  font-size: 40px; 
  font-weight: 700;
  margin-bottom: 20px;
}
.comment{
  font-size: 16px;
}
.fit-picture{
  width: 320px;
  margin: 40px 0;
}
/* CSS */
.button {
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button:hover,
.button:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}
</style>