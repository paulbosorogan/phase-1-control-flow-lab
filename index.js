function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400){
    return 'This one is on me!'
  }
  if (ride >=400 && ride <=2000){
    return 'That will be twenty bucks.'
  }
  if (ride >=2000 && ride <=2500) {
    return 'I will gladly take your thirty bucks.'
  }
  if (ride >=2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let cityName = '';
  city === 'NYC' ? (cityName = 'Ok, sounds good.') : (cityName ='No go.');
  return cityName;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let goodbye = '';
  switch(tip){
    case 'generous' : goodbye = 'Thank you so much.';
    break;
    case 'not as generous' : goodbye = 'Thank you.';
    break;
    default : goodbye = 'Bye.';
  }
  return goodbye;
}