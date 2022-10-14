// JavaScript Document

const funFacts = [["India is the wettest inhabited place in earth.","India was the first country to mine diamonds."] , ["India has 22 official languages.","India has the highest population of vegetarians."] , ["India has 26 official public holidays each year.","The world's largest sundial is located in India."],["Tea is the national beverage of India.","Around 70% of world's spices come from India."],["India was the first country to refine and consume sugar.","Shampoo was first created in India."] , ["India is the home to the most post offices.","In India all cows are protected by law and are considered sacred."],["Chess was invented in India","Indian cuisine is the oldest in human history"]];
const stories =[["The farmer who bought a well", "A rich man once sold a well to a poor farmer so that the farmer could use the well's water to irrigate his land. The rich man's price was accepted by the farmer. The farmer attempted to draw water from the well the following day, but the wealthy man stopped him and forbade him from doing so.<br><br>He claimed that the farmer had only purchased the well from him and not the water. As a result, he is unable to use the well's water. The farmer went to the king's court and informed Akbar about his propensity because he was unsure of what to do. Birbal received the case from Akbar.", "Birbal went to see the wealthy man who was troubling the farmer. Birbal responded, \"Since you have sold the well and not the water to the farmer, you will have to move all the water or pay the farmer rent to keep the water in the well,\" in response to the rich man repeating what he had said to the farmer. <br> When the wealthy man realised his scheme would fail, he allowed the farmer to draw water from the well.", "Do not try to deceive people as you will end up paying the price."] , ["The thief who robbed the merchant", "One day, a rich merchant went to Birbal and complained to him that his house was robbed. He also told him that he suspects one of his servants to have robbed the house. Birbal went to the merchant’s house, rounded up all the servants and asked them who robbed the house. As expected, the robber did not come forward to confess his crime.", "Birbal then handed a stick to each servant and told them that the robber’s stick will grow 2 inches longer the next morning. That way, they will be able to identify who robbed the merchant.<br><br>The next morning, Birbal asked the servants for the sticks and pointed out the culprit to the merchant. The robber had reduced the length of the stick by 2 inches anticipating the stick to grow by the next morning. That’s how Birbal figured who the robber was.", "No matter how hard you try, you can never hide the truth for long."] , ["The number of crows in Akbar’s kingdom","Akbar and Birbal were taking a stroll in the king’s garden one pleasant morning. Akbar saw the crows in his garden and wondered how many crows there are in his kingdom. He posed the question to Birbal.<br><br>Birbal gave it some thought and said that there are ninety thousand two hundred and forty-nine crows in the kingdom.", "Akbar was amazed by his quick response and asked him, \"What if there is a higher number of crows than the number you just mentioned?\". Birbal replied, \"Then, crows from the neighbouring kingdoms must be visiting.\" Then Akbar asked, \"What if the number is fewer than what you mentioned?\". Birbal calmly replied, \"Then, the crows must have gone on a vacation to the neighbouring kingdom.\"" , "You can always find a way out if you think at ease."] , ["Akbar’s stolen ring", "One time Akbar misplaced a ring his father had given him. He immediately contacted Birbal and requested his assistance. Birbal promised to assist him in locating his ring. He then informed the assembled courtiers that he was aware of one of them stealing the ring.","Akbar demanded angrily to know which of them had taken his ring. Birbal retorted that the courtier carrying the king's ring is the one with the straw in his beard. The guilty courtier immediately felt for the straw in his beard. Akbar was informed that he is the culprit by Birbal, who pointed at him.", "A guilty conscience will always give it away."] , ["The pot full of wit","Birbal once infuriated Akbar to the point where he exiled him from his realm. Birbal made his way to a remote village, took on a new identity, and began working as a farmer. After a few weeks, Akbar began to miss Birbal. As a result, he ordered his soldiers to locate Birbal and return him to the kingdom. The soldiers looked all over the kingdom, but they were unable to locate Birbal.<br><br>Akbar then came up with an idea to find Birbal. He sent word across the kingdom that the head of each village has to send him a pot full of wit. Anyone who cannot send the pot full of wit can instead fill up the pot with gold and diamonds and send it to him.","The announcement was absurd to the residents of Birbal's village, who wondered how to add humour to the situation. Birbal intervened to provide assistance and devised a solution to grant the king's request. He left the watermelon's vine attached and dropped a small piece of it into the pot. He gave it daily waterings until it had filled the entire space in the pot.<br><br>The watermelon was then separated from the vine, and Birbal sent the pot to the king. You can find the wit in the pot if you carefully remove the watermelon without cutting it, according to the instructions that came with the pot. Only Birbal, Akbar realised, could have sent the pot. He drove Birbal back to the city after visiting the village himself.","Even the toughest questions can be answered cleverly if you think hard."]];
var page = 0;
var fact = 0;
function next() {
	if (page < stories.length-1){
		document.getElementById("back").style.backgroundImage = "radial-gradient(#ede2d4, #cfa553)"
		document.getElementById("backLeftStory").innerHTML = stories[page][1];
		document.getElementById("turnPage").style.transition = null;
		document.getElementById("turnPage").style.transform = "rotateY(-0deg)";
		document.getElementById("story").style.transform = "rotateY(-0deg)";
		document.getElementById("story").innerHTML = stories[page][2];
		page++;
		fact++;
		if (fact === funFacts.length){fact = 0;}
		setTimeout(() => {
		document.getElementById("title").style.opacity = 0;
		document.getElementById("moral").style.opacity = 0;
		document.getElementById("rightFact").style.opacity = 0;
		document.getElementById("leftFact").style.opacity = 0;
		document.getElementById("backRightStory").innerHTML = stories[page][2];
		document.getElementById("turnPage").style.transition = "transform 1s linear";
		document.getElementById("turnPage").style.transform = "rotateY(-90deg)";	
		}, 1 )
		setTimeout(() => {
			document.getElementById("title").innerHTML = stories[page][0];
			document.getElementById("story").innerHTML = stories[page][1];
			document.getElementById("leftFact").innerHTML = funFacts[fact][0];
			document.getElementById("rightFact").innerHTML = funFacts[fact][1];
			document.getElementById("moral").innerHTML = "Moral:  " + stories[page][3];
			document.getElementById("title").style.opacity = 1;
			document.getElementById("moral").style.opacity = 1;
			document.getElementById("rightFact").style.opacity = 1;
			document.getElementById("leftFact").style.opacity = 1;
			document.getElementById("story").style.transform = "rotateY(-180deg)";
			document.getElementById("turnPage").style.transform = "rotateY(-180deg)";	
		}, 995)
		if (page === stories.length-1){document.getElementById("next").style.backgroundImage = "radial-gradient(#B8B6CC, #C79F5A)";}
	}

}

function back() {
		if (page > 0){
		document.getElementById("next").style.backgroundImage = "radial-gradient(#ede2d4, #cfa553)";
		document.getElementById("backRightStory").innerHTML = stories[page][2];
		document.getElementById("turnPage").style.transition = null;
		document.getElementById("turnPage").style.transform = "rotateY(-180deg)";
		document.getElementById("story").style.transform = "rotateY(-180deg)";
		document.getElementById("story").innerHTML = stories[page][1];
		fact++;
		if (fact === funFacts.length){fact = 0;}
		page--;
		setTimeout(() => {
		document.getElementById("title").style.opacity = 0;
		document.getElementById("moral").style.opacity = 0;
		document.getElementById("rightFact").style.opacity = 0;
		document.getElementById("leftFact").style.opacity = 0;
		document.getElementById("backLeftStory").innerHTML = stories[page][1];
		document.getElementById("turnPage").style.transition = "transform 1s linear";
		document.getElementById("turnPage").style.transform = "rotateY(-90deg)";	
		}, 1 )
		setTimeout(() => {
			document.getElementById("title").innerHTML = stories[page][0];
			document.getElementById("story").innerHTML = stories[page][2];
			document.getElementById("leftFact").innerHTML = funFacts[fact][0];
			document.getElementById("rightFact").innerHTML = funFacts[fact][1];
			document.getElementById("moral").innerHTML = "Moral: " + stories[page][3];
			document.getElementById("title").style.opacity = 1;
			document.getElementById("moral").style.opacity = 1;
			document.getElementById("rightFact").style.opacity = 1;
			document.getElementById("leftFact").style.opacity = 1;
			document.getElementById("story").style.transform = "rotateY(-0deg)";
			document.getElementById("turnPage").style.transform = "rotateY(-0deg)";	
		}, 995)
		if (page === 0){document.getElementById("back").style.backgroundImage = "radial-gradient(#B8B6CC, #C79F5A)";}
	}
}

