const game_field = document.querySelector(".game_field");
// const reg = document.querySelector(".reg");
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
const body = document.querySelector("body");
const true_answers = [1, 2, 3];
const answer_options = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
const img = ["img/ExT3QzvWgAMEbvz.jpg", "img/ExT3QzvWgAMEbvz.jpg"];
const slides = document.querySelectorAll('.final_com');
const final_window_hidden = document.querySelector(".final_window_hidden");
const final_text = document.querySelectorAll(".final_text");
let com_name_1 = undefined;
let com_name_2 = undefined;
let question = 0;
let count_1 = 1;
let count_2 = 1;

final_window_hidden.hidden = true;
game_field.hidden = true;
reg_hidden.hidden = false;

for (const slide of slides){
	slide.addEventListener('click', () => {
		clearActiveClasses();
		slide.classList.add("active");
	})
}

function clearActiveClasses(){
	slides.forEach((slide) => {
		slide.classList.remove("active");
	})
}

function final_game(){
	game_field.hidden = true;
	final_window_hidden.hidden = false;
	if (count_1 > count_2){
		final_game_card(com_name_1, com_name_2, 1);
	}
	else if(count_1 < count_2){
		final_game_card(com_name_2, com_name_1, 1);
	}
	else{
		final_game_card(com_name_1, com_name_2, 0);
	}
}

function final_game_card(win_com, lose_com, chouse){
	if (chouse == 1){
		final_text[0].innerHTML = "Победитель: " + win_com;
		final_text[1].innerHTML = "Проигравший: " + lose_com;
	}
	else{
		final_text[0].innerHTML = "Ничья: " + win_com;
		final_text[1].innerHTML = "Ничья: " + lose_com;
	}
}

function scoring_points(answer){
	let check = 0;
	if (answer == true_answers[question] && question % 2 == 0){
		score_com_1.innerHTML = count_1;
		right_answer(answer);
		count_1++;
	}
	else if(answer == true_answers[question] && question % 2 != 0){
		right_answer(answer);
		score_com_2.innerHTML = count_2;
		count_2++;
	}
	else {
		wrong_answer(answer);
		check = 1;
	}

	question++;
	if (check == 1){
		answers[true_answers[question]-1].onclick = () => {
			next_question();
		}
	}
	else next_question();
}

function next_question(){
	const asynchrony = new Promise(function(resolve, reject){
		setTimeout(()=>{
			answers.forEach((items) => {
					items.style.color = "black";
				});
			body.style.backgroundColor = "#F1F2F4";
			resolve();
		}, 2000);
	})
	asynchrony.then(()=>{
		if (question < 2){
			for (let i = 0; i < 5; i++){
				answers[i].onclick = () => scoring_points(i);
				answers[i].innerHTML = answer_options[question*5+i];
			}
			//photo.src = "img/photo_2021-07-09_11-42-03.jpg";
			photo.src = img[question];
		}
		else final_game();
	});
}

function right_answer(answer){
	answers[answer].style.color = "green";
	body.style.backgroundColor = "green";
	answers.forEach((items) => {
		items.onclick = undefined;
	});
}

function wrong_answer(answer){
	answers[answer].style.color = "red";
	answers[true_answers[question]].style.color = "green";
	body.style.backgroundColor = "red";
	answers.forEach((items) => {
		items.onclick = undefined;
	});
}

form.onsubmit = (e) => {
	e.preventDefault();
	game_field.hidden = false;
	reg_hidden.hidden = true;
	com_name_1 = input_com_1.value;
	com_name_2 = input_com_2.value;
	if (com_name_1 == "") com_name_1 = "Команда 1";
	if (com_name_2 == "") com_name_2 = "Команда 2";
	console.log(com_name_2);
	if (com_name_1) com_1.innerHTML = com_name_1
	if (com_name_2) com_2.innerHTML = com_name_2
}

 for (let i = 0; i < 5; i++){
 		answers[i].onclick = () => scoring_points(i);
 	}
