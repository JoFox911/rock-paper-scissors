<template>
  <div class="app">
    <header class="app-header">
      <ScoreBoard />
    </header>

    <main>
      <GameStart v-if="step === GameStepEnum.Start" @pick="handlePick"/>
      <GamePlay v-if="step === GameStepEnum.Picked" :player-pick="playerPick" :house-pick="housePick" />
      <GamePlay v-if="step === GameStepEnum.Revealed" :player-pick="playerPick" :house-pick="housePick"/>
      <ResultDisplay v-if="step === GameStepEnum.Result" :player-pick="playerPick" :house-pick="housePick" :game-result="gameResult" @restart="restart"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, watch } from 'vue'

import GameStart from '@/modules/GameStart/GameStart.vue'
import GamePlay from '@/modules/GamePlay/GamePlay.vue'
import ResultDisplay from '@/modules/GameResult/ResultDisplay.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'

import {
  type GameStep, GameStepEnum,
  type Choice, ChoiceEnum,
  type Result, ResultEnum
} from '@/logic/types'

const SCORE_KEY = 'rpsls-score'
const score = ref(0)

const step = ref<GameStep>(GameStepEnum.Start);
const playerPick = ref<Choice | null>(null)
const housePick = ref<Choice | null>(null)
const gameResult = ref<Result | null>(null)

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


function getResult(player: Choice, house: Choice): Result {
  if (player === house) return ResultEnum.Draw

  const winningCombinations: Record<Choice, Choice[]> = {
    [ChoiceEnum.Rock]: [ChoiceEnum.Scissors, ChoiceEnum.Lizard],
    [ChoiceEnum.Paper]: [ChoiceEnum.Rock, ChoiceEnum.Spock],
    [ChoiceEnum.Scissors]: [ChoiceEnum.Paper, ChoiceEnum.Lizard],
    [ChoiceEnum.Lizard]: [ChoiceEnum.Spock, ChoiceEnum.Paper],
    [ChoiceEnum.Spock]: [ChoiceEnum.Scissors, ChoiceEnum.Rock],
  }

  return winningCombinations[player].includes(house) ? ResultEnum.Win : ResultEnum.Lose
}

function getRandomChoice(): Choice {
  const choices = Object.values(ChoiceEnum).filter(value => typeof value === 'string') as Choice[]
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
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
  padding: 40px;
  width: 100%;
  max-width: 780px;
}
</style>
