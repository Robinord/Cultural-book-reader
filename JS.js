// JavaScript Document


 const stories =[["The farmer who bought a well", "A rich man once sold a well to a poor farmer so that the farmer could use the well's water to irrigate his land. The rich man's price was accepted by the farmer. The farmer attempted to draw water from the well the following day, but the wealthy man stopped him and forbade him from doing so.<br><br>He claimed that the farmer had only purchased the well from him and not the water. As a result, he is unable to use the well's water. The farmer went to the king's court and informed Akbar about his propensity because he was unsure of what to do. Birbal received the case from Akbar.", "Birbal went to see the wealthy man who was troubling the farmer. Birbal responded, \"Since you have sold the well and not the water to the farmer, you will have to move all the water or pay the farmer rent to keep the water in the well,\" in response to the rich man repeating what he had said to the farmer. <br> When the wealthy man realised his scheme would fail, he allowed the farmer to draw water from the well.", "Do not try to deceive people as you will end up paying the price."] , ["The thief who robbed the merchant", "One day, a rich merchant went to Birbal and complained to him that his house was robbed. He also told him that he suspects one of his servants to have robbed the house. Birbal went to the merchant’s house, rounded up all the servants and asked them who robbed the house. As expected, the robber did not come forward to confess his crime.", "Birbal then handed a stick to each servant and told them that the robber’s stick will grow 2 inches longer the next morning. That way, they will be able to identify who robbed the merchant. The next morning, Birbal asked the servants for the sticks and pointed out the culprit to the merchant. The robber had reduced the length of the stick by 2 inches anticipating the stick to grow by the next morning. That’s how Birbal figured who the robber was.", "No matter how hard you try, you can never hide the truth for long."] , ["The number of crows in Akbar’s kingdom","Akbar and Birbal were taking a stroll in the king’s garden one pleasant morning. Akbar saw the crows in his garden and wondered how many crows there are in his kingdom. He posed the question to Birbal.", "Birbal gave it some thought and said that there are ninety thousand two hundred and forty-nine crows in the kingdom. Akbar was amazed by his quick response and asked him, \"What if there is a higher number of crows than the number you just mentioned?\". Birbal replied, \"Then, crows from the neighbouring kingdoms must be visiting.\" Then Akbar asked, \"What if the number is fewer than what you mentioned?\". Birbal calmly replied, \"Then, the crows must have gone on a vacation to the neighbouring kingdom.\"" , "You can always find a way out if you think at ease."]];
var page = 0;		
function next(item) {
	//make this code work when arrow keys are pressed
	if (page < stories.length-1){
		page++;
		document.getElementById("backRightStory").innerHTML = stories[page][2];
		document.getElementById("rightPage").style.transition = null;
		document.getElementById("rightPage").style.transform = "rotateY(0deg)";
		document.getElementById("rightStory").style.transform = "rotateY(0deg)";
		document.getElementById("leftPage").style.zIndex = "0";
		document.getElementById("rightPage").style.zIndex = "1";
		document.getElementById("leftPage").style.transition = null;
		document.getElementById("leftPage").style.transform = "rotateY(0deg)";
		document.getElementById("leftStory").style.transform = "rotateY(0deg)";
		setTimeout(() => {
		document.getElementById("rightPage").style.transition = "transform 1s linear";
		document.getElementById("rightPage").style.transform = "rotateY(-0.25turn)";	
		}, 1 )

		setTimeout(() => {
			document.getElementById("title").innerHTML = stories[page][0];
			document.getElementById("rightStory").innerHTML = stories[page][1];
			document.getElementById("moral").innerHTML = "Moral: " + stories[page][3];
			document.getElementById("rightStory").style.transform = "rotateY(-0.5turn)";
			document.getElementById("rightPage").style.transform = "rotateY(-0.5turn)";
			
		}, 995)
	}

}

function back(item) {
	if (page > 0){
		document.getElementById("backLeftStory").innerHTML = stories[page][1];
		document.getElementById("rightPage").style.transition = null;
		document.getElementById("rightPage").style.transform = "rotateY(0deg)";
		document.getElementById("rightStory").style.transform = "rotateY(0deg)";
		document.getElementById("leftPage").style.zIndex = "1";
		document.getElementById("rightPage").style.zIndex = "0";
		document.getElementById("leftPage").style.transition = null;
		document.getElementById("leftPage").style.transform = "rotateY(0deg)";
		document.getElementById("leftStory").style.transform = "rotateY(0deg)";
		page--;
		document.getElementById("leftPage").style.transition = null;
		document.getElementById("leftPage").style.transform = "rotateY(0deg)";
		document.getElementById("leftStory").style.transform = "rotateY(0deg)";
		setTimeout(() => {
		document.getElementById("leftPage").style.transition = "transform 1s linear";
		document.getElementById("leftPage").style.transform = "rotateY(0.25turn)";	
		}, 1 )

		setTimeout(() => {
			document.getElementById("title").innerHTML = stories[page][0];
			document.getElementById("leftStory").innerHTML = stories[page][2];
			document.getElementById("moral").innerHTML = "Moral: " + stories[page][3];
			document.getElementById("leftStory").style.transform = "rotateY(0.5turn)";
			document.getElementById("leftPage").style.transform = "rotateY(0.5turn)";
			
		}, 995)
	}


}

