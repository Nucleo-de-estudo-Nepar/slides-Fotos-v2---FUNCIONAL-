let count = 1;
document.getElementById("radio1").Checked = true;

setInterval(function(){
	nextImage();
},5000)


function nextImage(){
	count++;
	if (count>6){
		count = 1;
	}

	document.getElementById("radio"+count).Checked = true;
}
/*
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
	idx++;
	
	if (idx > img.lenght - 1){
		idx = 0;
	}
	
	imgs.style.transform = `translateX(${-idx *350}px)`;

}
setInterval(carrossel,1700);

*/