// --------------
// MODULE PATTERN
// --------------
let leadself = 'Me: ',
		leadcomputer = "PC: ",
		aSaid= ["This is a Cyber Chat"],
		msgYes = "Yes, that's a great idea.",
		msgNo = "No, that must be a mistake.",
		aSassyStuff = ["Like mold on books, grow myths on history.",
									"She moved like a poem and smiled like a sphinx.",
									"As long as we don’t die, this is gonna be one hell of a story.",
									"She laughed, and the desert sang.",
									"You’ve got about as much charm as a dead slug."];


// NOTE: Methods are public
// - can use in inspector console
//
function talk(msg) {
	echo(leadself + " " + msg);
}

function replyYesNo() {
	let msg = Math.random() > .5 ? msgYes : msgNo;
	echo(leadcomputer + ": " + msg);
}

function saySassyStuff() {
	// pick random sport in array -> randomNum < array.length
	let msg = aSassyStuff[ Math.floor(Math.random() * aSassyStuff.length)];

	echo(leadself + " " + msg);
}

function echo(msg) {
	aSaid.push("<div>" + msg + "</div>");

	// NOTE: putting things in variable lets you not have to dig into obj
	// - ends up less processor intensive
	//
	let aSaidLength = aSaid.length;
		start = Math.max(aSaidLength - 6, 0),
		out = "";

	for(var i = start; i < aSaid.length; i++) {
		out += aSaid[i];
	}

	$('.advert').html(out);
	$('#talk span').text(msg);
}
