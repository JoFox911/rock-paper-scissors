
export const GameStepEnum = {
  Start: 'start',
  Picked: 'picked',
  Revealed: 'revealed',
  Result: 'result'
} as const;

export type GameStep = typeof GameStepEnum[keyof typeof GameStepEnum];