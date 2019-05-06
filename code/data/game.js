module.exports =
  /* 
 Replace content below to customize the game
 - "title" (required): The game title
 - "tags" (optional Array): Keywords used find the game e.g. "Take a [tag] game"
 - "image.url" (optional): An image that shows up when you start the game. It can be a public url or a relative path to an image file in the /assets folder of this capsule
 - "scenes" (required Array): List of scenes for the game
    - "name" (required): Name of the scene
    - "say" (required): What is said when user enters the scene
    - "options" (requried Array): Bixby will show these choices on the screen and read them out.
  */

  /* Paste data from the spreadsheet below here. If there are multiple games, each will begin with
  ```
  { 
    title
  ```
  and end with
  ```
  ]},
  ```
  */
  
  // Start of game
  {
    title: "Mystery Rooms",
    image: {
      url: '/images/Dogs.jpg'
    }, //optional
    introductory: "Strong men kicking you! That's all you remember. Not your name, not your job, family or friends. You only remember a big fight, being knocked unconscious and then waking up in a hallway...",
    endSceneName: "Last Scene",
    invalidInputMessage: "I did not understand that.",
    scenes: [
      {
          name: "Hallway",
          textToDisplay: "There are two doors in the hallway. One on the left and one on the right. What do you want to do?",
          options: [
            {
                text: "Go to the room on your left",
                onSelect: {
                    goto: "Dark Room", say:"You go to the room on your left."
                },
            },
            {
                text: "Go to the room on your right",
                onSelect: {
                    goto: "Bright Room", say:"You go to the room on your right."
                }
            },
          ],
      },
      {
          name: "Dark Room",
          textToDisplay: "Nothing much you can see here. You notice some curious shadows in the corner of the room. What do you want to do?",
          options: [
            {
              text: "Go back to the hallway",
              onSelect: {
                  goto: "Hallway",
                  say: "You walk back to the hallway."
              }
            },
            {
              text: "Check out the shadows",
              onSelect: {
                  goto: "Behind the curtain",
                  say: "You walk slowly to the corner of the room, getting closer to the shadows dancing in front of you until you figure out what they are: curtains on a window."
              }
            },
          ],
      },
      {
          name: "Behind the curtain",
          textToDisplay: "The window is open and a cool breeze is coming in. What do you want to do?",
          options: [
            {
                text: "Go back to the hallway",
                onSelect: {
                    goto: "Hallway", say: "You go back to the hallway."
                }
            },
            {
                text: "Look out the window",
                onSelect: {
                    goto: "Backyard", say: "You lean to look out but, oops, you lean too much and fall into the backyard."
                },
            }
          ],
      },
      {
          name: "Backyard",
          textToDisplay: "This is a small backyard. The house door is right next to you and you can see a window, too. What do you want to do?",
          options: [
            {
                text: "Go through the door",
                onSelect: {
                  goto: "Bright room", say: "You go back into the house and find yourself in a bright room."
                }
             },
            {
                text: "Climb through the window",
                onSelect: {
                    goto: "Dark room",  say: "You climb the window and go back inside the house and find yourself in a dark room."
                },
            },
            {
                text: "Run out of the gate",
                onSelect: {
                    goto: "Last scene", say: "Good idea..."
                }
            },
          ],
      },
      {
        name: "Bright Room",
        textToDisplay: "This room is empty. With a door going to the backyard. What do you want to do?",
        options: [
          {
            text: "Go back to the hallway",
            onSelect: {
                goto: "Hallway", say: "You go back to the hallway."
            },
          },
          {
            text: "Go to the backyard",
            onSelect: {
                goto: "Backyard", say: "You go to the backyard."
            }
          }
        ],
      },
      {
        name: "Last Scene",
        textToDisplay: "You try running out of the gate in the darkness of the night but right as you pass the gate you slip and fall down and lose consciousness. Not sure how long you stay like that, but when you wake up everything is familiar again. You are in your comfortable bed and already forgot your nightmare. Good job!",
      }
    ]
  }


