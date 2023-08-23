let activeHole = 1;

function getHole(index){
  return document.getElementById(`hole${index}`)
}

function deactivateHole(index){
  return getHole( index ).className = 'hole';
}

activateHole = index =>
  getHole( index ).className = 'hole hole_has-mole';

function next(){
  setTimeout(() => {
    deactivateHole( activeHole );
    activeHole = Math.floor( 1 + Math.random() * 16 );
    activateHole( activeHole );
    next();
  }, 800 );
}

next();
