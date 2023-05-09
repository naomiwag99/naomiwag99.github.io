const container = document.querySelector('.container');
const dotCount = 15; // number of dots to create
const dots = []; // array to store the dot elements
//both of these are in milliseconds
const duration = 2000; // duration of dot movement 
const interval = 5; //duration between dot movements

//this is a list of material design color hex codes from google
const mdColors = [
    '#F44336',
    '#FFEBEE',
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350',
    '#F44336',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C',
    '#FF8A80',
    '#FF5252',
    '#FF1744',
    '#D50000',
    '#E91E63',
    '#FCE4EC',
    '#F8BBD0',
    '#F48FB1',
    '#F06292',
    '#EC407A',
    '#E91E63',
    '#D81B60',
    '#C2185B',
    '#AD1457',
    '#880E4F',
    '#FF80AB',
    '#FF4081',
    '#F50057',
    '#C51162',
    '#9C27B0',
    '#F3E5F5',
    '#E1BEE7',
    '#CE93D8',
    '#BA68C8',
    '#AB47BC',
    '#9C27B0',
    '#8E24AA',
    '#7B1FA2',
    '#6A1B9A',
    '#4A148C',
    '#EA80FC',
    '#E040FB',
    '#D500F9',
    '#AA00FF',
    '#673AB7',
    '#EDE7F6',
    '#D1C4E9',
    '#B39DDB',
    '#9575CD',
    '#7E57C2',
    '#673AB7',
    '#5E35B1',
    '#512DA8',
    '#4527A0',
    '#311B92',
    '#B388FF',
    '#7C4DFF',
    '#651FFF',
    '#6200EA',
    '#3F51B5',
    '#E8EAF6',
    '#C5CAE9',
    '#9FA8DA',
    '#7986CB',
    '#5C6BC0',
    '#3F51B5',
    '#3949AB',
    '#303F9F',
    '#283593',
    '#1A237E',
    '#8C9EFF',
    '#536DFE',
    '#3D5AFE',
    '#304FFE',
    '#2196F3',
    '#E3F2FD',
    '#BBDEFB',
    '#90CAF9',
    '#64B5F6',
    '#42A5F5',
    '#2196F3',
    '#1E88E5',
    '#1976D2',
    '#1565C0',
    '#0D47A1',
    '#82B1FF',
    '#448AFF',
    '#2979FF',
    '#2962FF',
    '#03A9F4',
    '#E1F5FE',
    '#B3E5FC',
    '#81D4FA',
    '#4FC3F7',
    '#29B6F6',
    '#03A9F4',
    '#039BE5',
    '#0288D1',
    '#0277BD',
    '#01579B',
    '#80D8FF',
    '#40C4FF',
    '#00B0FF',
    '#0091EA',
    '#00BCD4',
    '#E0F7FA',
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
    '#0097A7',
    '#00838F',
    '#006064',
    '#84FFFF',
    '#18FFFF',
    '#00E5FF',
    '#00B8D4',
    '#009688',
    '#E0F2F1',
    '#B2DFDB',
    '#80CBC4',
    '#4DB6AC',
    '#26A69A',
    '#009688',
    '#00897B',
    '#00796B',
    '#00695C',
    '#004D40',
    '#A7FFEB',
    '#64FFDA',
    '#1DE9B6',
    '#00BFA5',
    '#4CAF50',
    '#E8F5E9',
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB6A',
    '#4CAF50',
    '#43A047',
    '#388E3C',
    '#2E7D32',
    '#1B5E20',
    '#B9F6CA',
    '#69F0AE',
    '#00E676',
    '#00C853',
    '#8BC34A',
    '#F1F8E9',
    '#DCEDC8',
    '#C5E1A5',
    '#AED581',
    '#9CCC65',
    '#8BC34A',
    '#7CB342',
    '#689F38',
    '#558B2F',
    '#33691E',
    '#CCFF90',
    '#B2FF59',
    '#76FF03',
    '#64DD17',
    '#CDDC39',
    '#F9FBE7',
    '#F0F4C3',
    '#E6EE9C',
    '#DCE775',
    '#D4E157',
    '#CDDC39',
    '#C0CA33',
    '#AFB42B',
    '#9E9D24',
    '#827717',
    '#F4FF81',
    '#EEFF41',
    '#C6FF00',
    '#AEEA00',
    '#FFEB3B',
    '#FFFDE7',
    '#FFF9C4',
    '#FFF59D',
    '#FFF176',
    '#FFEE58',
    '#FFEB3B',
    '#FDD835',
    '#FBC02D',
    '#F9A825',
    '#F57F17',
    '#FFFF8D',
    '#FFFF00',
    '#FFEA00',
    '#FFD600',
    '#FFC107',
    '#FFF8E1',
    '#FFECB3',
    '#FFE082',
    '#FFD54F',
    '#FFCA28',
    '#FFC107',
    '#FFB300',
    '#FFA000',
    '#FF8F00',
    '#FF6F00',
    '#FFE57F',
    '#FFD740',
    '#FFC400',
    '#FFAB00',
    '#FF9800',
    '#FFF3E0',
    '#FFE0B2',
    '#FFCC80',
    '#FFB74D',
    '#FFA726',
    '#FF9800',
    '#FB8C00',
    '#F57C00',
    '#EF6C00',
    '#E65100',
    '#FFD180',
    '#FFAB40',
    '#FF9100',
    '#FF6D00',
    '#FF5722',
    '#FBE9E7',
    '#FFCCBC',
    '#FFAB91',
    '#FF8A65',
    '#FF7043',
    '#FF5722',
    '#F4511E',
    '#E64A19',
    '#D84315',
    '#BF360C',
    '#FF9E80',
    '#FF6E40',
    '#FF3D00',
    '#DD2C00',
    '#795548',
    '#EFEBE9',
    '#D7CCC8',
    '#BCAAA4',
    '#A1887F',
    '#8D6E63',
    '#795548',
    '#6D4C41',
    '#5D4037',
    '#4E342E',
    '#3E2723',
    '#9E9E9E',
    '#FAFAFA',
    '#F5F5F5',
    '#EEEEEE',
    '#E0E0E0',
    '#BDBDBD',
    '#9E9E9E',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
    '#607D8B',
    '#ECEFF1',
    '#CFD8DC',
    '#B0BEC5',
    '#90A4AE',
    '#78909C',
    '#607D8B',
    '#546E7A',
    '#455A64',
    '#37474F',
    '#263238',
    '#000000',
    '#FFFFFF',
  ];


//e just means event
//mousemove checks if the mouse is moving when youre in a certain area, aka our container
  container.addEventListener('mousemove', (e) => {
    // this for loop is looping until it reaches the specified dot number to create, 
    //and adds them to the container witht the class of dot. basically, its creating the dots. 

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      //this is using the material design array to pick a random color and then assign it to the dot color
      const randomColor = mdColors[Math.floor(Math.random() * mdColors.length)];
      dot.style.backgroundColor = randomColor;
      
      container.appendChild(dot);
      dots.push(dot);
  
      // animate dot movement

      //using the Date.now() to be a reference point that we can use to find out how long the dots have been on the screen
      const startTime = Date.now();
      //gets the x value and y value from the event listener so that i can see where my mouse is 
      const startPos = { x: e.pageX, y: e.pageY };
      //does the same thing but uses that value to change the ending position
      //multiplying it by 220 then subtracting it by 100 makes it so that you get a value 220 pixels from where the mouse was 
      //I want the values to go a random way so thats why i added the -100, without it it was just too clear where the dots were headed
      const endPos = { x: e.pageX + Math.random() * 220-100, y: e.pageY + Math.random() * 220-100 };

      const animate = () => {
        //checks how long its been since starting
        const howLong = Date.now() - startTime;
        //checks how far along we are by divding it by the total duration, and math.min keeps it from going above 1
        //it sort of works like a percentage showing how far along to 1 we are
        const stuffLeft = Math.min(howLong / duration, 1);
        //updates x and y positions by getting the starting position added to the difference between the end and start, multiplied by 
        //the stuff left. basically, it takes that percentage of how far along you are, and calculates where the dot should be 
        //based on the start and end and how far along in the animation from 0 to 1 you are
        const x = startPos.x + (endPos.x - startPos.x) * stuffLeft;
        const y = startPos.y + (endPos.y - startPos.y) * stuffLeft;
        //then, you update the positions with the values we just got
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        //checks if theres animation time remaining
        if (stuffLeft < 1) {
            //if there is, it sets the animation to go again
          setTimeout(animate, interval);
        } else {
          // when its done,
          //remove the dot from the container and the index 
          //its remove child since the dot is the child and the container is the parent
          container.removeChild(dot);
          //the whole purpose of the array was that we wanted to keep track of what dots were being animated at any given time
          //the index of will search the array for the dot which just got finished animating, and return the location of it
          //then .splice removes it from the array, so that the array is only ever holding dots that we're currently animating.
          //the 1 means only remove 1 element, which is important cause otherwise it would remove all of them to the end of the array
          dots.splice(dots.indexOf(dot), 1);
        }
      };
      //animates each dot from the for loop
      animate();
    }
  });
  