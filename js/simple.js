var count = 0;
//количество фото
var anountImg = 5;
var photo = document.getElementById( 'big' );
var btnPrev = document.getElementById( 'prev' );
var btnNext = document.getElementById( 'next' );
var buttons = document.querySelectorAll('div a');
var btnPlay = document.getElementById('play');
//назначаем обработчик события при клике на кнопку
// btnNext.addEventListener('click', nextImg )
// btnPrev.addEventListener('click', prevImg )
// назначаем обработчик события при клике
//кол-вщ кнопок элементов 
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', fixedPhoto);
}

//подставить след из-е
//буд ф-я
btnPlay.addEventListener('click', playImg );
function nextImg(){
	if(count>=anountImg){
		count = 0;
	}else{
		count++;
	}
	changePhoto (count);
}
function prevImg(){
	if(count<=0){
		count = anountImg;
	}else{
		count--;
	}
	changePhoto (count);
}
function changePhoto (count){
	photo.src = 'img/'+count+'.jpg';
}
function fixedPhoto(event){
	// изссылки на которую нажали получить значение href и присвоить полученное значение в count
	//получить значение аттрибута href
	//console.log(this.getAttribute('href'))
	count = this.getAttribute('href');
	changePhoto (count);


	event.preventDefault();
	//this ссылка на которую нажали
	
}
function playImg(event){
	timer = setInterval( nextImg , 1000 );
	this.innerHTML = 'stop MOTHERFUCKER'
	this.removeEventListener('click', playImg)
	this.addEventListener('click', stopImg)
	event.preventDefault();
}
function stopImg(){
	clearInterval(timer)
	this.innerHTML = 'play';
	this.addEventListener('click', playImg);
	this.removeEventListener('click', stopImg);
}