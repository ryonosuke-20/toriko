<template>
  <main>
    <div class="title">
      トリコクイズ
    </div>
    <div class="comment">
      <span class="batsu"></span>
      <span style="vertical-align: middle;">
        残念！10問中{{store.count}}問正解！
      </span>
    </div>
    <img
      class="fit-picture"
      src="@/assets/ng_1.jpeg" />
    <div>
      <input 
        class="button" 
        type="button" 
        value="もう一度挑戦する"
        @click="handleQuiz"
       />
    </div>
  </main>
</template>

<script setup lang="ts">
import router from '@/router';
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore();

function handleQuiz() {
  router.push('quiz');
}
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
  height: 60px;
  line-height: 60px;
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
.batsu {
  display: inline;
  position: relative;
  padding: 40px;
}
 
.batsu::before, .batsu::after { /* 共通設定 */
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 50px;
  background: cornflowerblue;
}
 
.batsu::before {
  transform: translate(-50%,-50%) rotate(45deg);
}
 
.batsu::after {
  transform: translate(-50%,-50%) rotate(-45deg);
}
</style>