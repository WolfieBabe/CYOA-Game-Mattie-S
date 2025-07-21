//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = '0';

function preload() {
  Dragonfly = loadFont('assets/Dragonfly.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(30);
  textWrap(WORD);
  textFont(Dragonfly);
  noStroke();

  // Set up the home screen
  background("pink");
  text('Welcome. Are you ready to start your adventure?', (width - 375) / 2, height / 2 - 100, 375, 200);

  // Create buttons for all screens
  enterButton = new Sprite(width / 2, height / 2 + 50);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 150;
  enterButton.h = 75;
  enterButton.collider = 'k';
  enterButton.color = 'gray';
  enterButton.text = 'Enter';
  enterButton.textSize = 40

  // Check enter button
  if (enterButton.mouse.presses()) {
    showScreen1();
  }

  // Check for buttons a1 & a2
  if (screen == '1') {
    if (a1Button.mouse.presses()) {
      screen = '2a';
      print('screen 2a');
    }
    else if (a2Button.mouse.presses()) {
      screen = '2b';
      print('screen 2b')
    }
  }

  // Screen 2a
  if (screen == '2a') {
    showScreen2a();
  }

  // Screen 2b (end)
  if (screen == '2b') {
    showScreen2b();
  }

  
  // Check for buttons b1 & b2
  if (screen == '2a') {
    if (b1Button.mouse.presses()) {
      screen = '3a';
      print('screen 3a');
    }
    else if (b2Button.mouse.presses()) {
      screen = '3b';
      print('screen 3b')
    }
  }

  // Screen 3a 
  if (screen == '3a') {
    showScreen3a();
  }

  // Screen 3b
  if (screen == '3b') {
    showScreen3b();
  }
}

/* FUNCTIONS TO DISPLAY SCREENS */
function resetPos(){
  a1Button.pos = { x: -200, y: -200};
  a2Button.pos = { x: -200, y: -200};
  b1Button.pos = { x: -200, y: -200};
  b2Button.pos = { x: -200, y: -200};
}

function showScreen1() {
  resetPos();
  
  print('screen 1');
  background('paleturquoise');
  text("You are on your daily commute when a golden key appears in front of you, floating and spining. Do you grab it?", (width - 425) / 2, height / 2 - 100, 425, 200);
  enterButton.pos = { x: -100, y: -100}
    
  // Add A1 button
  a1Button.pos = { x: width / 2 - 50, y: height / 2 + 100}
  a1Button.w = 75;
  a1Button.h = 50;
  a1Button.collider = 'k';
  a1Button.color = 'gray';
  a1Button.text = 'Yes';
  
  // Add A2 button
  a2Button.pos = { x: width / 2 + 50, y: height / 2 + 100}
  a2Button.w = 75;
  a2Button.h = 50;
  a2Button.collider = 'k';
  a2Button.color = 'gray';
  a2Button.text = 'No';

  screen = '1';
}

function showScreen2a() {
  resetPos();
  
  background('palegreen');
  textSize(25);
  text("Your vision goes white and when it returns you are in front of an old wooden door at the base of a tower. You enter and call out, an old wizard replies, instructing you to take a magic lotus to his daughter. Do you deliver it, or keep it for yourself?", (width - 425) / 2, (height - 275) / 2, 425, 300);
  textSize(30);

  // B1 Button
  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100};
  b1Button.w = 75;
  b1Button.h = 50;
  b1Button.collider = 'static';
  b1Button.color = 'gray';
  b1Button.text = 'Yes';

   // B2 Button
  b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100};
  b2Button.w = 75;
  b2Button.h = 50;
  b2Button.collider = 'static';
  b2Button.color = 'gray';
  b2Button.text = 'No';
}

function showScreen2b() {
  resetPos();

  background('palegreen');
  textSize(35);
  text('You continue to go about your day normally. Although, you cant help but wonder, \"What if I took the key?\"', (width - 425) / 2, (height - 200) / 2, 425, 400);
  textSize(30);
}

function showScreen3a() {
  resetPos();

  background('lavender');
  textSize(35);
  text('You steal the flower and drop off the face of the earth. You now spend all your days marvelling at the lotus\' beauty', (width - 425) / 2, (height - 200) / 2, 425, 400);
  textSize(30);
}

function showScreen3b() {
  resetPos();

  background('plum');
  textSize(25);
  text('You deliver the magic lotus to the wizard\'s daughter where she lives in a giant mushroom. It turns out she needed to brew it in a tea to cure her ailment. Although, your kinda in the middle of nowhere, so you become roommates', (width - 425) / 2, (height - 200) / 2, 425, 400);
  textSize(30);
}