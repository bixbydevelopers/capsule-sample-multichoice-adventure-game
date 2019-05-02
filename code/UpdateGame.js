var console = require ("console")
var fail = require ("fail")
var lib = require("./lib/util")

// UpdateGame - Evaluate user's answer and update the game state.
exports.function = function(state, answer) {

  //do not read introductory after first update.
  state.say = null

  //game is completed. nothing to update
  if (state.completed) {
    return state
  }

  if (!state.completed) {
    option = lib.findOption(state.currentScene.options, answer)
    if (option) {
      state.lastOption = option
      newScene = null
      if (option.onSelect.goto) {
        newScene = lib.findScene(state.game.scenes, option.onSelect.goto)
      }
      if (newScene) {
        state.currentScene = newScene
        if (newScene.name.toLowerCase() == state.game.endSceneName.toLowerCase()) {
          state.completed = true
        }
      }
    } else {
      state.say = state.game.invalidInputMessage
    }

  }
  return state
}


