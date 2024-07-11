export const getDifficultyBgColor = (difficulty) => {
  switch(difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-400'
    case 'medium':
      return 'bg-yellow-400'
    case 'hard':
      return 'bg-red-400'
    default:
      return 'bg-grey-200'
  }
}