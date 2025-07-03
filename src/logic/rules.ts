import { ChoiceEnum, ResultEnum, type Choice, type Result } from './types'

export function getResult(player: Choice, house: Choice): Result {
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

export function getRandomChoice(): Choice {
  const choices = Object.values(ChoiceEnum).filter(
    (value): value is Choice => typeof value === 'string'
  )
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}