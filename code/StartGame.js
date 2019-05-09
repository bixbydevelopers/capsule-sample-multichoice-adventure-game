//Start the game. Initialize the game state.
exports.function = function(game) {
  state = {
    game: game,
    started: true,
    say: game.introductory,
    completed: game.scenes.length == 0,
    currentScene: game.scenes[0],
    lastOption: null,
  }

  return state
}
