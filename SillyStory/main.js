const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = 'I felt kind of sick, so I asked :insertx: to go get me an ice cream. Feeling used, he dejectedly went to :inserty:, he stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: is completely insane, and it made sense they would so something weird like that.';
let insertx = ['Big Pops','Orville Redenbacher','the weird whale from the starkist tuna cans'];
let inserty = ['the grocery store','the local convienence store','my friends house to look in the fridge'];
let insertz = ['felt a little nervous on the inside and walked away','clenched his fist but did nothing','foamed at the mouth and rabidly barked at the spot where the ice cream usually is.'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


function result() {
  let newStory = storyText;
  console.log(newStory);
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);



  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory =  newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.07).toString() + ' stone';
    let temperature =  Math.round((94-32)/1.8) + ' centigrade';
    newStory =  newStory.replace('94 fahrenheit',temperature)
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
