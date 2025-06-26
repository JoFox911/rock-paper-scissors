
export const GameStepEnum = {
  Start: 'start',
  Picked: 'picked',
  Revealed: 'revealed',
  Result: 'result'
} as const;

export type GameStep = typeof GameStepEnum[keyof typeof GameStepEnum];

export const ChoiceEnum = {
  Rock: 'rock',
  Paper: 'paper',
  Scissors: 'scissors',
  Lizard: 'lizard',
  Spock: 'spock'
} as const;

export type Choice = typeof ChoiceEnum[keyof typeof ChoiceEnum];