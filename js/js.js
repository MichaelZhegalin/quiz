const game_field = document.querySelector(".game_field");
const reg_hidden = document.querySelector(".reg-hidden");
const form = document.querySelector(".form");
const input_com_1 = document.querySelector(".log_1");
const input_com_2 = document.querySelector(".log_2");
const com_1 = document.querySelector(".com_1");
const com_2 = document.querySelector(".com_2");
const answers = document.querySelectorAll("li");
const score_com_1 = document.querySelector(".score_com_1");
const score_com_2 = document.querySelector(".score_com_2");
const photo = document.querySelector(".photo")
const true_answers = [1, 2, 3];
const answer_options = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
const img = ["img/ExT3QzvWgAMEbvz.jpg", "img/ExT3QzvWgAMEbvz.jpg"];
let question = 0;
let count_1 = 1;
let count_2 = 1;

game_field.hidden = true;
reg_hidden.hidden = false;

function scoring_points(answer){
	if (answer == true_answers[question] && question % 2 == 0){
		score_com_1.innerHTML = count_1;
		count_1++;
	}
	else if(answer == true_answers[question] && question % 2 != 0){
		score_com_2.innerHTML = count_2;
		count_2++;
	}
	question++;
	change_answer(question);
}

function change_answer(question){
	for (let i = 0; i < 5; i++){
 		answers[i].innerHTML = answer_options[question*5+i]
 	}
 	//photo.src = "img/photo_2021-07-09_11-42-03.jpg";
 	photo.src = img[question];
}

form.onsubmit = (e) => {
	e.preventDefault();
	game_field.hidden = false;
	reg_hidden.hidden = true;
	const com_name_1 = input_com_1.value;
	const com_name_2 = input_com_2.value;
	if (com_name_1) com_1.innerHTML = com_name_1
	if (com_name_2) com_2.innerHTML = com_name_2
}

 for (let i = 0; i < 5; i++){
 		answers[i].onclick = () => scoring_points(i);
 	}
