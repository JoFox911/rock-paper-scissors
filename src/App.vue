<template>
  <div class="app">
    <header class="app-header">
      <ScoreBoard />
    </header>

    <main class="app-main">
      <GameStart v-if="step === GameStepEnum.Start" @pick="handlePick" />
      <GamePlay v-if="step === GameStepEnum.Picked" :player-pick="playerPick" :house-pick="housePick" />
      <GamePlay v-if="step === GameStepEnum.Revealed" :player-pick="playerPick" :house-pick="housePick" />
      <ResultDisplay v-if="step === GameStepEnum.Result" :player-pick="playerPick" :house-pick="housePick"
        :game-result="gameResult" @restart="restart" />
    </main>

    <footer class="app-footer">
      <CustomButton label="Rules" variant="outline" @press="showRulesModal" />
    </footer>

    <RulesModal v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, watch } from 'vue'

import GameStart from '@/modules/GameStart/GameStart.vue'
import GamePlay from '@/modules/GamePlay/GamePlay.vue'
import ResultDisplay from '@/modules/GameResult/ResultDisplay.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import CustomButton from '@/components/CustomButton.vue'
import RulesModal from '@/components/RulesModal.vue'

import {
  type GameStep, GameStepEnum,
  type Result, ResultEnum,
  type Choice
} from '@/logic/types'
import { getResult, getRandomChoice } from '@/logic/rules'

const SCORE_KEY = 'rpsls-score'
const score = ref(0)

const step = ref<GameStep>(GameStepEnum.Start);
const playerPick = ref<Choice | null>(null)
const housePick = ref<Choice | null>(null)
const gameResult = ref<Result | null>(null)

const showModal = ref(false)
function showRulesModal() {
  showModal.value = true
}

onMounted(() => {
  const stored = localStorage.getItem(SCORE_KEY)
  if (stored) score.value = parseInt(stored)
})

watch(score, (newVal) => {
  localStorage.setItem(SCORE_KEY, newVal.toString())
})

function handlePick(choice: Choice) {
  playerPick.value = choice
  step.value = GameStepEnum.Picked
  selectHouseChoice()
}

function selectHouseChoice() {
  setTimeout(() => {
    housePick.value = getRandomChoice()
    step.value = GameStepEnum.Revealed
    checkResults()
  }, 1000)
}

function checkResults() {
  setTimeout(() => {
    gameResult.value = getResult(playerPick.value!, housePick.value!)
    score.value += gameResult.value === ResultEnum.Win ? 1 : 0
    step.value = GameStepEnum.Result
  }, 1000)
}

function restart() {
  playerPick.value = null
  housePick.value = null
  gameResult.value = null
  step.value = GameStepEnum.Start
}

provide('score', score)
</script>

<style scoped lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 40px 0;
  width: 100%;
  max-width: 780px;

  @media (max-width: 768px) {
    padding: 28px;
  }
}

.app-main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
}

.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: var(--spacing-xl);

  @media (max-width: 768px) {
    position: relative;
    justify-content: center;
    padding: var(--spacing-md);
  }
}
</style>
