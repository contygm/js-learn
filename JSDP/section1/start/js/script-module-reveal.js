// --------------
// MODULE PATTERN
// --------------
//
// NOTE:
// - ignoring nampspace for now
// - how to prevent accessing variable to anyone not us/not in sudoChat var?
// - NOW: only one access point to global scope

const chatModule = (function () {
	// NOTE: private scope in this area

	// info only lives within this function
	// - create var to ensure ^^
	let leadself = 'Me: ',
	leadcomputer = "PC: ",
	aSaid= ["This is a Cyber Chat"],
	msgYes = "Yes, that's a great idea.",
	msgNo = "No, that must be a mistake.",
	aSassyStuff = [
		"Like mold on books, grow myths on history.",
		"She moved like a poem and smiled like a sphinx.",
		"As long as we don’t die, this is gonna be one hell of a story.",
		"She laughed, and the desert sang.",
		"You’ve got about as much charm as a dead slug."
	];

	// named function
	function echo(msg) {
		aSaid.push("<div>" + msg + "</div>");

		// NOTE: putting things in variable lets you not have to dig into obj
		// - ends up less processor intensive
		//
		let aSaidLength = aSaid.length;
			start = Math.max(aSaidLength - 6, 0),
			out = "";

		// NOTE: limits chat in window to 6 lines
		//
		for(var i = start; i < aSaidLength; i++) {
			out += aSaid[i];
		}

		$('.advert').html(out);
		$('#talk span').text(msg);
	}
	// giving user of this function access to needed funcs
	// aka public functions
	//
	return {
		talk: function (msg) {
			echo(leadself + " " + msg);
		},

		replyYesNo: function () {
			let msg = Math.random() > .5 ? msgYes : msgNo;
			echo(leadcomputer + ": " + msg);
		},

		saySassyStuff: function () {
			// pick random sport in array -> randomNum < array.length
			let msg = aSassyStuff[ Math.floor(Math.random() * this.aSassyStuff.length)];

			echo(leadself + " " + msg);
		},
	};
})();

$(document)ready(function() {
	chatModule.talk('Yo');
	chatModule.replyYesNo();
	chatModule.saySassyStuff()
})
