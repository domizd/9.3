var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period";
var dinosaur = "triceratops";
var dinosaurUppercase = dinosaur.toUpperCase();
var changendSentence = text.replace('Velociraptor', dinosaurUppercase);
var textLength = text.length;
console.log(changendSentence.slice(0,textLength/2));