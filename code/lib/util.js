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
          tags: sceneJson.options[i].tags,
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
    if (answer.toLowerCase() == options[i].alias.toLowerCase()
        || answer.toLowerCase() == options[i].text.toLowerCase()
        || matchTag(options[i].tags, answer)) {
      return options[i]
    }
  }
  return null
}

//returns true if there is an element in a list of tags that matches a specific tag
function matchTag(tags, tag) {
   for (var i=0; i<tags.length; i++) {
     if (tag.toLowerCase() == tags[i].toLowerCase()) {
        return true
     }
   }
   return false
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