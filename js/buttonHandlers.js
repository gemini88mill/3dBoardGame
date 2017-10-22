var sit1 = 'Your girlfriend has not been taking your calls, any attempts to reach her have been met with nervous avoidance' +
    'you recently found out that she has been meeting with your best friend Chuck. She has always commented on how attractive ' +
    'he is. You come to find that her texts to Chuck have mysteriously vanished from her phone. You suspect her of cheating.';

var sit2 = 'You come to find a book that is titled <<how I did it>> by Jack the Ripper, you find it in an underground room with ' +
    'a skeleton with clothes from the same period as when he would have lived.';

var sit3 = 'There is a man standing behind as you approach the ATM. The man is poorly dressed and looks a bit odd. He has his ' +
    'hands in his pocket and calls out to ask you a question.';

var con1 = [
    'You decide to forget about the situation, and play baseball. When you get home you find that your girlfriend has thrown ' +
        'a surprise party in your honor.',
    'You decide that she isnt cheating and you go on about your day. When you arrive home you find that she and your friend' +
    'have thrown a surprise party in your honor',
    'you decide to take a step back and try to analyze the situation from a different angle. When you get home you find' +
    'that your friend and your girlfriend have thrown a surprise party in your honor',
    'you think again about your conclusion and think once again that she is cheating, you call your ex-girlfriend and have' +
    'and invite her to some drinks. After a few you decide to take her back to your place. As you open the door full of ' +
    'laughs and giggles you open the door to all of your friends yelling SURPRISE as they have thrown a party in your honor' +
    'there is no amount of wiping to remove the egg from your face. ',
    'You decide to go wild with your gut feeling, you get upset and decide to confront your best friend. Accusations are thrown' +
    'along with punches. As you are satisfied with the damage that you have done to your best friend of 15 years you come ' +
    'home to put an ice pack on your eye from a clean hit that he got back at you. you arrive to a surprise party in your' +
    'honor thrown none other by your girlfriend. ',
    'theres no point to your wild accusations and decide to go on holiday',
    'you have no idea whats going on and you decide to drive north for an undetermined amount of time.',
    'you accept the fact that your girlfriend is cheating, after all you are a poor miserable slob that is lucky to have her' +
    'you come home to a party thrown in your honor and you are pleasantly surprised ',
    'you lose your ticket at the bus station and have to sleep on the sidewalk. ',
    'you suspect your girlfriend of cheating, you demand that she speak with you and you cause an argument at her place of' +
    'work. she then breaks up with you on the spot and you come home to your best friend throwing you a surprise party. ',
    'you agree that your girlfriend is cheating, you then proceed to confront your best friend and punch him in the face ' +
    'as you arrive at home you see your girlfriend moving out all of her stuff and the remnants of a surprise party for you' +
    'left in your apartment. ',
    'jump again'
];

var con2 = [
    'You decide to go play baseball and not think about serial killers from the 19th century',
    'You decide that there is no way that this could be real and go on about your life',
    'you take a step back and reanalyze the situation, you come to find that there is tests that you could preform to verify' +
    'the authenticity of your findings. You verify that you are indeed correct and you come to profit from your discovery ',
    'you think back and decide that maybe this isnt all that it seems you leave the room and call the police department who' +
    'then credit their discovery',
    'you decide to call the reporters who promote you to 15 minutes of fame. You write your own book that becomes a best seller' +
    'titled how I found how I did it. ',
    'For all you know this itself could be a scam.',
    'you have no idea and think its best not to worry about it',
    'You accept the fact that you have found jack the rippers remains you call the police and they take credit for the discovery',
    'you trip and fall into the skeleton, which sponteniously combusts. ',
    'you decide that you might have found jack the ripper, but deicde to do nothing about it. A few months later someone else' +
    'is making a book about their findings',
    'You decide you have found Jack the ripper, you call the authorities who congratulate you on your findings',
    'jump again'
];

var con3 = [
  'you grab your baseball bat and hit the man behind you in the face, you are arrested for assault with a deadly weapon',
  'you think that this is just a weird looking guy, and ignore him',
  'you take a step back into the man, he pushes you back into the atm. ',
  'you think that your in a nice neighborhood and there are cameras and things, you then shows you that he is an eccentric ' +
  'billionaire and would like to transfer all of his money stored his account to yours. ',
  'you turn around and act like a monkey for 20 minutes, police are called.',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
];

function getSituation(){

}

function createSituation(){
    var sitn = window.prompt("add situation here");
}

function howToPlay(){
    document.getElementById('hud').innerHTML =
        'Welcome to the Jump to Conclusions mat!!! The object of the game is to allow the jump to conclusions board to ' +
        'let you come to any conclusions without you having to think of anything hard or difficult. If you have to decide' +
        'by critical thinking, let the Jump to Conclusions mat do the thinking for you.' + "\n" +
        'Some preset cards allow you to test out the features of this wonderful mat, if you would like to create your' +
        'own, a button has been provided for you. ' + "\n" +
        'If you would like to see where your conclusions made out of the situation, click on the following square.'
    ;
}