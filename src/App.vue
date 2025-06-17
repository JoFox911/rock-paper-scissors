<script setup lang="ts">
import { ref } from 'vue'

import GameStart from './components/GameStart.vue'
import GamePlay from './components/GamePlay.vue'
import ResultDisplay from './components/ResultDisplay.vue'
import ScoreBoard from './components/ScoreBoard.vue'

import {type GameStep, GameStepEnum} from './logic/rules'

const step = ref<GameStep>(GameStepEnum.Start);
</script>

<template>
  {{ step }}
  <ScoreBoard />
  <GameStart v-if="step === GameStepEnum.Start" />
  <GamePlay v-if="step === GameStepEnum.Picked" />
  <GamePlay v-if="step === GameStepEnum.Revealed" />
  <ResultDisplay v-if="step === GameStepEnum.Result" />

  <button @click="step = GameStepEnum.Start">set step Start</button>
  <button @click="step = GameStepEnum.Picked">set step Picked</button>
  <button @click="step = GameStepEnum.Revealed">set step Revealed</button>
  <button @click="step = GameStepEnum.Result">set step Result</button>

</template>

<style scoped>
</style>
