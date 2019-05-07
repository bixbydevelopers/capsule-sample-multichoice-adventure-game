var console = require("console")

exports.buildGameFromJson = buildGameFromJson
exports.findOption = findOption
exports.findScene = findScene

function buildGameFromJson(gameJson) {
  var scenes = []
  for (var i=0; i<gameJson.scenes.length; i++) {
    scenes.push(buildSceneFromJson(gameJson.scenes[i], i))
  }
  return {
    name: gameJson.name,
    image: gameJson.image,
    endSceneName: gameJson.endSceneName,
    introductory: gameJson.introductory,
    invalidInputMessage: gameJson.invalidInputMessage,
    scenes: scenes
  }
}

function buildSceneFromJson(sceneJson, index) {
    if (!sceneJson) {
        return null
    }
    var options = []
    if (sceneJson.options) {
      for (var i=0; i<sceneJson.options.length; i++) {
        options.push({
          text: sceneJson.options[i].text,
          alias: String.fromCharCode('A'.charCodeAt(0) + i),
          onSelect: sceneJson.options[i].onSelect,
        })
      }
    }
    var scene = {
      name: sceneJson.name,
      image: sceneJson.image,
      textToDisplay: sceneJson.textToDisplay,
      textToSpeak: sceneJson.textToDisplay + "..." + buildOptionsToSpeak(options),
      options: options,
    }
    return scene
}

function buildOptionsToSpeak(options) {
  optionsString = ''
  for (var i=0; i<options.length; i++) {
    optionsString += options[i].alias + '... ' + options[i].text + (i+1 < options.length ? ', ... ' : '')
  }
  return optionsString
}

function buildAcceptedAnswers(answer, options) {
   var acceptedAnswers = []
   if (Array.isArray(answer)) { //is answer an array?
     for (var i=0; i<answer.length; i++) {
        acceptedAnswers = acceptedAnswers.concat(buildAcceptedAnswers(answer[i], options))
     }
   } else if (typeof answer === 'number' && options && answer < options.length) {
     acceptedAnswers.push(options[answer].alias)
     acceptedAnswers.push(options[answer].text)
   } else if (answer) {
     acceptedAnswers.push(answer)
     //also push all aliases matching the answer
     if (options) {
       for (var i=0; i<options.length; i++) {
         if (options[i].text == answer) {
           acceptedAnswers.push(options[i].alias)
         }
       }
     }
   }
   return acceptedAnswers
}

//return the answer from alias
function findOption(options, answer) {
  for (var i=0; i<options.length; i++) {
    if (answer.toLowerCase() == options[i].alias.toLowerCase() || answer.toLowerCase() == options[i].text.toLowerCase()) {
      return options[i]
    }
  }
  return null
}

//return the answer from alias
function findScene(scenes, goto) {
  for (var i=0; i<scenes.length; i++) {
    if (goto.toLowerCase() == scenes[i].name.toLowerCase()) {
      return scenes[i]
    }
  }
  return null
}