# FCC-Drum-Machine
FCC project to create a simple drum machine using a React framework

**Objective:** Build a CodePen.io app using HTML, JavaScript, SCSS and React.

**Requirements:**
_User Story #1:_ I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.<br>
_User Story #2:_ Within #drum-machine I can see an element with a corresponding id="display".<br>
_User Story #3:_ Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.<br>
_User Story #4:_ Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).<br>
_User Story #5:_ When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.<br>
_User Story #6:_ When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).<br>
_User Story #7: _When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).<br>


Link to FCC [Front End Libraries Projects - Build a Drum Machine](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine)