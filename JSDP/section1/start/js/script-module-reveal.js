// --------------
// MODULE REVEAL PATTERN
// --------------
//
// NOTE:
// - reveal process is different from creation process

const chatModule = (function () {
	// NOTE: underscore notation means private
	//
	let _leadself = 'Me: ',
	_leadcomputer = "PC: ",
	_aSaid= ["This is a Cyber Chat"],
	_msgYes = "Yes, that's a great idea.",
	_msgNo = "No, that must be a mistake.",
	_aSassyStuff = [
		"Like mold on books, grow myths on history.",
		"She moved like a poem and smiled like a sphinx.",
		"As long as we don’t die, this is gonna be one hell of a story.",
		"She laughed, and the desert sang.",
		"You’ve got about as much charm as a dead slug."
	];

	// named functions
	function _echo(msg) {
		_aSaid.push("<div>" + msg + "</div>");

		// NOTE: putting things in variable lets you not have to dig into obj
		// - ends up less processor intensive
		//
		let _aSaidLength = _aSaid.length;
			_start = Math.max(_aSaidLength - 6, 0),
			_out = "";

		// NOTE: limits chat in window to 6 lines
		//
		for(var i = _start; i < _aSaidLength; i++) {
			_out += _aSaid[i];
		}

		$('.advert').html(_out);
		$('#talk span').text(msg);
	}

	function talk(msg) {
		_echo(_leadself + " " + msg);
	}

	function replyYesNo() {
		let msg = Math.random() > .5 ? _msgYes : _msgNo;
		_echo(_leadcomputer + ": " + msg);
	}

	function saySassyStuff() {
		// pick random sport in array -> randomNum < array.length
		let msg = _aSassyStuff[ Math.floor(Math.random() * _aSassyStuff.length)];

		_echo(_leadself + " " + msg);
	}
	// giving user of this function access to needed funcs
	// aka public functions
	//
	return {
		talk: talk,
		replyYesNo: replyYesNo,
		saySassyStuff: saySassyStuff,
	};
})();

$(document).ready(function() {
	chatModule.talk('Yo');
	chatModule.replyYesNo();
	chatModule.saySassyStuff()
})
