var vdo = $('.vdo')
vdo.on('mouseenter', function (){
    vdo.get(0).play();
});
vdo.on('mouseout', function (){
    vdo.get(0).pause();
});