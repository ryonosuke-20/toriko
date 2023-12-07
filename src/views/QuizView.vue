<template>
  <main>
    <div class="title">
      トリコクイズ
    </div>
    <div class="quiz-list">
      <div class="page-no">
        第{{ pageNo }}問 / 全10問
      </div>
      <div class="questionBox">
        <span class="box-title">問題</span>
        <p>{{ quizList[pageNo-1].title }}</p>
      </div>
      <div class="answer-label">
        - 回答 -
      </div>
      <input 
        type="text" 
        class="quiz-input" 
        placeholder="例：ツツミダイ" 
        v-if="pageNo != 10"
        v-model="answerList[pageNo-1]"
      />
      <li class="select" v-if="pageNo == 10">
        <input type="radio" name="radio01" class="radio01" id="radio01-1" v-model="answerList[9]" :value="true" ><label for="radio01-1">はい</label>
      </li>
    </div>
    <ul class="Pagination">
        <li class="Pagination-Item">
            <a class="Pagination-Item-Link" @click="changePage(pageNo - 1)">
                <svg xmlns="http://www.w3.org/2000/svg" class="Pagination-Item-Link-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
            </a>
        </li>
        <template v-for="no in 10">
          <li class="Pagination-Item" @click="changePage(no)" v-if="(pageNo <= 3 && no <= 5) || (pageNo >= 8 && no >= 6) || (pageNo - 2 <= no && pageNo + 2 >= no )">
              <a class="Pagination-Item-Link" :class="{'isActive' :no == pageNo }" >
                <span>{{ no }}</span>
              </a>
          </li>
        </template>
        <li class="Pagination-Item" @click="changePage(pageNo + 1)">
            <a class="Pagination-Item-Link">
                <svg xmlns="http://www.w3.org/2000/svg" class="Pagination-Item-Link-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </a>
        </li>
    </ul>
    <div>
      <input 
        class="button clear" 
        type="button" 
        value="ごちそうさまでした"
        v-if="pageNo == 10"
        @click="handleAnswer"
       />
    </div>
  </main>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref, onBeforeMount } from 'vue'
import { useCounterStore } from '@/stores/counter'

const answerList = ref([] as String[]);
const pageNo = ref(1);
const store = useCounterStore();
const quizList = [
  {
    id: 1,
    series: 1,
    level: 1,
    title: 'トリコとコンビを組むことになった、ホテルグルメの料理人といえば？',
    answer: '小松'
  },
  {
    id: 2,
    series: 2,
    level: 1,
    title: '「アイスヘル」にある幻のスープといえば？',
    answer: 'センチュリースープ'
  },
  {
    id: 3,
    series: 4,
    level: 1,
    title: 'デスフォールの滝の裏の洞窟にいた黄金色に輝いていた魚といえば？',
    answer: 'サンサングラミー'
  },
  {
    id: 4,
    series: 3,
    level: 2,
    title: 'オゾン草はどのようにして食べないと枯れてしまうか？',
  },
  {
    id: 5,
    series: 4,
    level: 2,
    title: 'シャボンフルーツを手に入れるために必要な食義の奥義といえば？',
    answer: '食没'
  },
  {
    id: 6,
    series: 5,
    level: 2,
    title: '小松は、何という解毒料理で四獣の毒の解毒に貢献しヒーロー扱いされたか？',
    answer: '薬膳餅'
  },
  {
    id: 7,
    series: 2,
    level: 3,
    title: 'センチュリースープを完成させるために必要だったのは何の唾液か？',
    answer: 'ウォールペンギン'
  },
  {
    id: 8,
    series: 3,
    level: 3,
    title: 'グリンパーチの大きなストローは何という虫を加工してつくられた？',
    answer: 'デビルモスキート'
  },
  {
    id: 9,
    series: 3,
    level: 3,
    title: 'メロウコーラは何の動物の目から出る液体(涙)だったか？',
    answer: 'サラマンダースフィンクス'
  },
  {
    id: 10,
    title: 'トリコを愛していますか？',
    answer: true,
  },
]

onBeforeMount(() => {
  store.setCount(0);
})

function handleAnswer() {
  for(let i=0; i < 10; i++){
    if(i == 3){ 
      if(answerList.value[i] == null || answerList.value[i] == ''){
        continue;
      }
      if(answerList.value[i].indexOf('同時') != -1 && (answerList.value[i].indexOf('2人')  != -1 || answerList.value[i].indexOf('２人')  != -1 || answerList.value[i].indexOf('二人')  != -1) ){
        store.increment();
        continue;
      }
    }
    if(i==9){
      if(answerList.value[i]){
        store.increment();
        continue;
      }
      break;
    }
    if(answerList.value[i] == null || answerList.value[i] == ''){
      continue;
    }
    if(answerList.value[i] != quizList[i].answer){
      continue;
    }
    store.increment();
  }
  if(store.count == 10){
    router.push('ok');    
  }else{
    router.push('ng');
  }
}

function changePage(no: number){
  if(no != 0 && no != 11){
    pageNo.value = no
  }
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
.page-no {
  text-align: left;
}
.quiz-list{
  margin: 20px 10px 40px 10px;
}
.questionBox {
  position: relative;
  margin: 3em 0;
  padding: 0.5em 1em;
  border: solid 3px #fb8332;
  border-radius: 8px;
  text-align: justify;
  height: 95px;
}

.questionBox .box-title {
  position: absolute;
  display: inline-block;
  top: -13px;
  left: 10px;
  padding: 0 9px;
  line-height: 1;
  font-size: 20px;
  background: #FFF;
  color: #fb8332;
  font-weight: bold;
}
.questionBox p {
  margin: 0;
  padding: 5px;
  font-size: 18px;
}
.answer-label {
  text-align: left;
  margin: 10px;
}
.quiz-input{
  height: 3em;
  width: 90%;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.quiz-input:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #fb8332 inset;
}

.Pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline-start: 0;
}
.Pagination-Item{
  list-style: none;
}
.Pagination-Item-Link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 30px;
  height: 30px;
  background: #fff;
  font-size: 16px;
  color: #fb8332;
  font-weight: bold;
  transition: all 0.15s linear;
}
.Pagination-Item-Link-Icon {
  width: 20px;
}
.Pagination-Item-Link.isActive {
  pointer-events: none;
  color: #111;
}
.Pagination-Item-Link:not(.isActive):hover {
  opacity: 0.5;
}
.clear{
  margin-top: 30px;
}

.select{
  font-size: larger;
  text-align: left;
	display:inline-block;
  height: 40px;
}
/* ラジオボタン01 */
.radio01{
  display: none;
}
.radio01 + label{
  padding-left: 22px;
  position:relative;
  margin-right: 22px;
}
.radio01 + label::before{
  content: "";
  display: block;
  position: absolute;
  top: 3px;
  left: 3px;
  width: 13px;
  height: 13px;
  border: 1px solid #999;
  border-radius: 50%;
}
.radio01:checked + label{
  color: #fb8332;
}
.radio01:checked + label::after{
  content: "";
  display: block;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 11px;
  height: 11px;
  background: #fb8332;
  border-radius: 50%;
}
</style>
