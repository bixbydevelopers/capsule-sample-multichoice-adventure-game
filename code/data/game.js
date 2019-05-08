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
    name: "Mystery Rooms",
    image: {
      url: '/images/mysteryRooms.jpeg'
    }, //optional
    introductory: "Strong men kicking you! That's all you remember. Not your name, not your job, family or friends. You only remember a big fight, being knocked unconscious and then waking up in a hallway...",
    endSceneName: "Last Scene",
    invalidInputMessage: "I did not understand that.",
    scenes: [
      {
          name: "Hallway",
          image: {
            url: '/images/Hallway.jpeg'
          }, //optional
          textToDisplay: "There are two doors in the hallway. One on the left and one on the right. What do you want to do?",
          options: [
            {
                text: "Go to the room on your left",
                onSelect: {
                    goto: "Dark Room", say:"You go to the room on your left."
                },
                tags: ["Go to the room on my left", "Go to room on my left", "Room on my left", "Go to left room"]
            },
            {
                text: "Go to the room on your right",
                onSelect: {
                    goto: "Bright Room", say:"You go to the room on your right."
                },
                tags: ["Go to the room on my right", "Go to room on my right", "Room on my right", "Go to right room"]
            },
          ],
      },
      {
          name: "Dark Room",
          image: {
            url: '/images/DarkRoom.jpeg'
          }, //optional
          textToDisplay: "Nothing much you can see here. You notice some curious shadows in the corner of the room. What do you want to do?",
          options: [
            {
              text: "Go back to the hallway",
              onSelect: {
                  goto: "Hallway",
                  say: "You walk back to the hallway."
              },
              tags: ["Go back to hallway", "Go to hallway", "Back to hallway", "hallway"]
            },
            {
              text: "Check out the shadows",
              onSelect: {
                  goto: "Behind the curtain",
                  say: "You walk slowly to the corner of the room, getting closer to the shadows dancing in front of you until you figure out what they are: curtains on a window."
              },
              tags: ["Check the shadows", "Check out shadows", "Check shadows", "Go to shades"]
            },
          ],
      },
      {
          name: "Behind the curtain",
          image: {
            url: '/images/BehindTheCurtain.jpeg'
          }, //optional
          textToDisplay: "The window is open and a cool breeze is coming in. What do you want to do?",
          options: [
            {
                text: "Go back to the hallway",
                onSelect: {
                    goto: "Hallway", say: "You go back to the hallway."
                },
                tags: ["Go back to hallway", "Go to hallway", "Back to hallway", "hallway"]
            },
            {
                text: "Look out the window",
                onSelect: {
                    goto: "Backyard", say: "You lean to look out but, oops, you lean too much and fall into the backyard."
                },
                tags: ["Check out the window", "Go to window", "Go to the window", "window"]
              }
          ],
      },
      {
          name: "Backyard",
          image: {
            url: '/images/Backyard.jpeg'
          }, //optional
          textToDisplay: "This is a small backyard. The house door is right next to you and you can see a window, too. What do you want to do?",
          options: [
            {
                text: "Go through the door",
                onSelect: {
                  goto: "Bright room", say: "You go back into the house and find yourself in a bright room."
                },
                tags: ["Go through door", "Get out of the door", "The door", "door"]
             },
            {
                text: "Climb through the window",
                onSelect: {
                    goto: "Dark room",  say: "You climb the window and go back inside the house and find yourself in a dark room."
                },
                tags: ["Climb the window", "Climb window", "The window", "window"]
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
        image: {
          url: '/images/BrightRoom.jpeg'
        }, //optional
        textToDisplay: "This room is empty. With a door going to the backyard. What do you want to do?",
        options: [
          {
            text: "Go back to the hallway",
            onSelect: {
                goto: "Hallway", say: "You go back to the hallway."
            },
            tags: ["Go back to hallway", "Go to hallway", "Back to hallway", "hallway"]
          },
          {
            text: "Go to the backyard",
            onSelect: {
                goto: "Backyard", say: "You go to the backyard."
            },
            tags: ["Go to backyard", "backyard", "Back to backyard"]
          }
        ],
      },
      {
        name: "Last Scene",
        image: {
          url: '/images/InBed.jpeg'
        }, //optional
        textToDisplay: "You try running out of the gate in the darkness of the night but right as you pass the gate you slip and fall down and lose consciousness. Not sure how long you stay like that, but when you wake up everything is familiar again. You are in your comfortable bed and already forgot your nightmare. Good job!",
      }
    ]
  }


