<template>
  <div class="app">
    <header>
      {{ step }}
      <ScoreBoard />
    </header>

    <main>
       <GameStart v-if="step === GameStepEnum.Start" />
        <GamePlay v-if="step === GameStepEnum.Picked" />
        <GamePlay v-if="step === GameStepEnum.Revealed" />
        <ResultDisplay v-if="step === GameStepEnum.Result" />

        <button @click="step = GameStepEnum.Start">set step Start</button>
        <button @click="step = GameStepEnum.Picked">set step Picked</button>
        <button @click="step = GameStepEnum.Revealed">set step Revealed</button>
        <button @click="step = GameStepEnum.Result">set step Result</button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, watch } from 'vue'

import GameStart from '@/modules/GameStart/GameStart.vue'
import GamePlay from '@/modules/GamePlay/GamePlay.vue'
import ResultDisplay from '@/modules/GameResult/ResultDisplay.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'

import {type GameStep, GameStepEnum} from '@/logic/types'

const SCORE_KEY = 'rpsls-score'
const score = ref(0)

const step = ref<GameStep>(GameStepEnum.Start);

onMounted(() => {
  const stored = localStorage.getItem(SCORE_KEY)
  if (stored) score.value = parseInt(stored)
})

watch(score, (newVal) => {
  localStorage.setItem(SCORE_KEY, newVal.toString())
})

provide('score', score)
</script>

<style scoped>
.app{
  min-height: 100vh;
}
</style>
