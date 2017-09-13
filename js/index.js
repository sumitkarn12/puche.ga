
Parse.initialize("ACfyU2xAYFifFcKfK1ywwx7uuo6kLnlX2VixszvR", "ifOlCEcNsG8DOCiGmsPUAnTUJ1tDXZgDGy7h4f4N");
Parse.serverURL = 'https://parseapi.back4app.com/'
const Feedback = Parse.Object.extend( "feedback" );
let gradient = ["rgb(252, 92, 125), rgb(106, 130, 251)", "rgb(252, 70, 107), rgb(63, 94, 251)", "rgb(201, 75, 75), rgb(75, 19, 79)", "rgb(35, 7, 77), rgb(204, 83, 51)", "rgb(255, 251, 213), rgb(178, 10, 44)", "rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62)", "rgb(0, 176, 155), rgb(150, 201, 61)", "rgb(211, 204, 227), rgb(233, 228, 240)", "rgb(60, 59, 63), rgb(96, 92, 60)", "rgb(202, 197, 49), rgb(243, 249, 167)", "rgb(128, 0, 128), rgb(255, 192, 203)", "rgb(252, 74, 26), rgb(247, 183, 51)", "rgb(225, 238, 195), rgb(240, 80, 83)", "rgb(116, 235, 213), rgb(172, 182, 229)", "rgb(109, 96, 39), rgb(211, 203, 184)", "rgb(3, 0, 30), rgb(115, 3, 192), rgb(236, 56, 188), rgb(253, 239, 249)", "rgb(102, 125, 182), rgb(0, 130, 200), rgb(0, 130, 200), rgb(102, 125, 182)", "rgb(173, 169, 150), rgb(242, 242, 242), rgb(219, 219, 219), rgb(234, 234, 234)", "rgb(225, 238, 195), rgb(240, 80, 83)", "rgb(26, 42, 108), rgb(178, 31, 31), rgb(253, 187, 45)", "rgb(34, 193, 195), rgb(253, 187, 45)", "rgb(255, 153, 102), rgb(255, 94, 98)", "rgb(127, 0, 255), rgb(225, 0, 255)", "rgb(201, 214, 255), rgb(226, 226, 226)", "rgb(57, 106, 252), rgb(41, 72, 255)", "rgb(217, 167, 199), rgb(255, 252, 220)", "rgb(7, 0, 0), rgb(76, 0, 1), rgb(7, 0, 0)", "rgb(0, 0, 0), rgb(229, 0, 141), rgb(255, 7, 11)", "rgb(12, 235, 235), rgb(32, 227, 178), rgb(41, 255, 198)", "rgb(6, 190, 182), rgb(72, 177, 191)", "rgb(100, 43, 115), rgb(198, 66, 110)", "rgb(28, 146, 210), rgb(242, 252, 254)", "rgb(0, 0, 0), rgb(15, 155, 15)", "rgb(54, 209, 220), rgb(91, 134, 229)", "rgb(203, 53, 107), rgb(189, 63, 50)", "rgb(58, 28, 113), rgb(215, 109, 119), rgb(255, 175, 123)", "rgb(40, 60, 134), rgb(69, 162, 71)", "rgb(239, 59, 54), rgb(255, 255, 255)", "rgb(192, 57, 43), rgb(142, 68, 173)", "rgb(21, 153, 87), rgb(21, 87, 153)", "rgb(0, 0, 70), rgb(28, 181, 224)", "rgb(0, 121, 145), rgb(120, 255, 214)", "rgb(86, 204, 242), rgb(47, 128, 237)", "rgb(242, 153, 74), rgb(242, 201, 76)", "rgb(235, 87, 87), rgb(0, 0, 0)", "rgb(228, 77, 38), rgb(241, 101, 41)", "rgb(74, 194, 154), rgb(189, 255, 243)", "rgb(178, 254, 250), rgb(14, 210, 247)", "rgb(48, 232, 191), rgb(255, 130, 53)", "rgb(214, 109, 117), rgb(226, 149, 135)", "rgb(32, 0, 44), rgb(203, 180, 212)", "rgb(195, 55, 100), rgb(29, 38, 113)", "rgb(247, 151, 30), rgb(255, 210, 0)", "rgb(52, 232, 158), rgb(15, 52, 67)", "rgb(97, 144, 232), rgb(167, 191, 232)", "rgb(68, 160, 141), rgb(9, 54, 55)", "rgb(32, 1, 34), rgb(111, 0, 0)", "rgb(5, 117, 230), rgb(2, 27, 121)", "rgb(69, 104, 220), rgb(176, 106, 179)", "rgb(67, 198, 172), rgb(25, 22, 84)", "rgb(9, 48, 40), rgb(35, 122, 87)", "rgb(67, 198, 172), rgb(248, 255, 174)", "rgb(255, 175, 189), rgb(255, 195, 160)", "rgb(240, 242, 240), rgb(0, 12, 64)", "rgb(232, 203, 192), rgb(99, 111, 164)", "rgb(220, 227, 91), rgb(69, 182, 73)", "rgb(192, 192, 170), rgb(28, 239, 255)", "rgb(219, 230, 246), rgb(197, 121, 109)", "rgb(52, 148, 230), rgb(236, 110, 173)", "rgb(103, 178, 111), rgb(76, 162, 205)", "rgb(243, 144, 79), rgb(59, 67, 113)", "rgb(238, 9, 121), rgb(255, 106, 0)", "rgb(167, 112, 239), rgb(207, 139, 243), rgb(253, 185, 155)", "rgb(65, 41, 90), rgb(47, 7, 67)", "rgb(244, 196, 243), rgb(252, 103, 250)", "rgb(0, 195, 255), rgb(255, 255, 28)", "rgb(255, 126, 95), rgb(254, 180, 123)", "rgb(255, 252, 0), rgb(255, 255, 255)", "rgb(255, 0, 204), rgb(51, 51, 153)", "rgb(222, 97, 97), rgb(38, 87, 235)", "rgb(239, 50, 217), rgb(137, 255, 253)", "rgb(58, 97, 134), rgb(137, 37, 62)", "rgb(78, 205, 196), rgb(85, 98, 112)", "rgb(161, 255, 206), rgb(250, 255, 209)", "rgb(190, 147, 197), rgb(123, 198, 204)", "rgb(189, 195, 199), rgb(44, 62, 80)", "rgb(255, 216, 155), rgb(25, 84, 123)", "rgb(128, 128, 128), rgb(63, 173, 168)", "rgb(252, 234, 187), rgb(248, 181, 0)", "rgb(248, 80, 50), rgb(231, 56, 39)", "rgb(247, 157, 0), rgb(100, 243, 140)", "rgb(203, 45, 62), rgb(239, 71, 58)", "rgb(86, 171, 47), rgb(168, 224, 99)", "rgb(0, 4, 40), rgb(0, 78, 146)", "rgb(66, 39, 90), rgb(115, 75, 109)", "rgb(20, 30, 48), rgb(36, 59, 85)", "rgb(240, 0, 0), rgb(220, 40, 30)", "rgb(44, 62, 80), rgb(253, 116, 108)", "rgb(44, 62, 80), rgb(76, 161, 175)", "rgb(233, 100, 67), rgb(144, 78, 149)", "rgb(11, 72, 107), rgb(245, 98, 23)", "rgb(58, 123, 213), rgb(58, 96, 115)", "rgb(0, 210, 255), rgb(146, 141, 171)", "rgb(33, 150, 243), rgb(244, 67, 54)", "rgb(255, 95, 109), rgb(255, 195, 113)", "rgb(255, 75, 31), rgb(255, 144, 104)", "rgb(22, 191, 253), rgb(203, 48, 102)", "rgb(238, 205, 163), rgb(239, 98, 159)", "rgb(29, 67, 80), rgb(164, 57, 49)", "rgb(168, 0, 119), rgb(102, 255, 0)", "rgb(247, 255, 0), rgb(219, 54, 164)", "rgb(255, 75, 31), rgb(31, 221, 255)", "rgb(186, 83, 112), rgb(244, 226, 216)", "rgb(224, 234, 252), rgb(207, 222, 243)", "rgb(76, 161, 175), rgb(196, 224, 229)", "rgb(0, 0, 0), rgb(67, 67, 67)", "rgb(75, 121, 161), rgb(40, 62, 81)", "rgb(131, 77, 155), rgb(208, 78, 214)", "rgb(0, 153, 247), rgb(241, 23, 18)", "rgb(41, 128, 185), rgb(44, 62, 80)", "rgb(90, 63, 55), rgb(44, 119, 68)", "rgb(77, 160, 176), rgb(211, 157, 56)", "rgb(86, 20, 176), rgb(219, 214, 92)", "rgb(47, 115, 54), rgb(170, 58, 56)", "rgb(30, 60, 114), rgb(42, 82, 152)", "rgb(17, 67, 87), rgb(242, 148, 146)", "rgb(253, 116, 108), rgb(255, 144, 104)", "rgb(234, 205, 163), rgb(214, 174, 123)", "rgb(106, 48, 147), rgb(160, 68, 255)", "rgb(69, 127, 202), rgb(86, 145, 200)", "rgb(178, 69, 146), rgb(241, 95, 121)", "rgb(192, 36, 37), rgb(240, 203, 53)", "rgb(64, 58, 62), rgb(190, 88, 105)", "rgb(194, 229, 156), rgb(100, 179, 244)", "rgb(255, 183, 94), rgb(237, 143, 3)", "rgb(142, 14, 0), rgb(31, 28, 24)", "rgb(118, 184, 82), rgb(141, 194, 111)", "rgb(103, 58, 183), rgb(81, 45, 168)", "rgb(0, 201, 255), rgb(146, 254, 157)", "rgb(244, 107, 69), rgb(238, 168, 73)", "rgb(0, 92, 151), rgb(54, 55, 149)", "rgb(229, 57, 53), rgb(227, 93, 91)", "rgb(252, 0, 255), rgb(0, 219, 222)", "rgb(44, 62, 80), rgb(52, 152, 219)", "rgb(204, 204, 178), rgb(117, 117, 25)", "rgb(48, 67, 82), rgb(215, 210, 204)", "rgb(238, 156, 167), rgb(255, 221, 225)", "rgb(186, 139, 2), rgb(24, 24, 24)", "rgb(82, 82, 82), rgb(61, 114, 180)", "rgb(0, 79, 249), rgb(255, 249, 76)", "rgb(106, 145, 19), rgb(20, 21, 23)", "rgb(241, 242, 181), rgb(19, 80, 88)", "rgb(209, 145, 60), rgb(255, 209, 148)", "rgb(123, 67, 151), rgb(220, 36, 48)", "rgb(142, 158, 171), rgb(238, 242, 243)", "rgb(19, 106, 138), rgb(38, 120, 113)", "rgb(0, 191, 143), rgb(0, 21, 16)", "rgb(255, 0, 132), rgb(51, 0, 27)", "rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69)", "rgb(254, 172, 94), rgb(199, 121, 208), rgb(75, 192, 200)", "rgb(100, 65, 165), rgb(42, 8, 69)", "rgb(255, 179, 71), rgb(255, 204, 51)", "rgb(67, 206, 162), rgb(24, 90, 157)", "rgb(255, 161, 127), rgb(0, 34, 62)", "rgb(54, 0, 51), rgb(11, 135, 147)", "rgb(148, 142, 153), rgb(46, 20, 55)", "rgb(30, 19, 12), rgb(154, 132, 120)", "rgb(211, 131, 18), rgb(168, 50, 121)", "rgb(115, 200, 169), rgb(55, 59, 68)", "rgb(171, 186, 171), rgb(255, 255, 255)", "rgb(253, 252, 71), rgb(36, 254, 65)", "rgb(131, 164, 212), rgb(182, 251, 255)", "rgb(72, 85, 99), rgb(41, 50, 60)", "rgb(82, 194, 52), rgb(6, 23, 0)", "rgb(254, 140, 0), rgb(248, 54, 0)", "rgb(0, 198, 255), rgb(0, 114, 255)", "rgb(112, 225, 245), rgb(255, 209, 148)", "rgb(85, 98, 112), rgb(255, 107, 107)", "rgb(157, 80, 187), rgb(110, 72, 170)", "rgb(120, 2, 6), rgb(6, 17, 97)", "rgb(179, 255, 171), rgb(18, 255, 247)", "rgb(170, 255, 169), rgb(17, 255, 189)", "rgb(0, 0, 0), rgb(231, 76, 60)", "rgb(240, 194, 123), rgb(75, 18, 72)", "rgb(255, 78, 80), rgb(249, 212, 35)", "rgb(173, 209, 0), rgb(123, 146, 10)", "rgb(251, 211, 233), rgb(187, 55, 125)", "rgb(0, 0, 0), rgb(83, 52, 109)", "rgb(96, 108, 136), rgb(63, 76, 107)", "rgb(201, 255, 191), rgb(255, 175, 189)", "rgb(100, 145, 115), rgb(219, 213, 164)", "rgb(185, 147, 214), rgb(140, 166, 219)", "rgb(135, 0, 0), rgb(25, 10, 5)", "rgb(0, 210, 255), rgb(58, 123, 213)", "rgb(211, 149, 155), rgb(191, 230, 186)", "rgb(218, 210, 153), rgb(176, 218, 185)", "rgb(230, 218, 218), rgb(39, 64, 70)", "rgb(93, 65, 87), rgb(168, 202, 186)", "rgb(221, 214, 243), rgb(250, 172, 168)", "rgb(97, 97, 97), rgb(155, 197, 195)", "rgb(80, 201, 195), rgb(150, 222, 218)", "rgb(33, 95, 0), rgb(228, 228, 217)", "rgb(194, 21, 0), rgb(255, 197, 0)", "rgb(239, 239, 187), rgb(212, 211, 221)", "rgb(255, 238, 238), rgb(221, 239, 187)", "rgb(102, 102, 0), rgb(153, 153, 102)", "rgb(222, 98, 98), rgb(255, 184, 140)", "rgb(233, 211, 98), rgb(51, 51, 51)", "rgb(213, 51, 105), rgb(203, 173, 109)", "rgb(167, 55, 55), rgb(122, 40, 40)", "rgb(248, 87, 166), rgb(255, 88, 88)", "rgb(75, 108, 183), rgb(24, 40, 72)", "rgb(252, 53, 76), rgb(10, 191, 188)", "rgb(65, 77, 11), rgb(114, 122, 23)", "rgb(228, 58, 21), rgb(230, 82, 69)", "rgb(192, 72, 72), rgb(72, 0, 72)", "rgb(95, 44, 130), rgb(73, 160, 157)", "rgb(236, 111, 102), rgb(243, 161, 131)", "rgb(116, 116, 191), rgb(52, 138, 199)", "rgb(236, 233, 230), rgb(255, 255, 255)", "rgb(218, 226, 248), rgb(214, 164, 164)", "rgb(237, 66, 100), rgb(255, 237, 188)", "rgb(220, 36, 36), rgb(74, 86, 157)", "rgb(36, 198, 220), rgb(81, 74, 157)", "rgb(40, 48, 72), rgb(133, 147, 152)", "rgb(61, 126, 170), rgb(255, 228, 122)", "rgb(28, 216, 210), rgb(147, 237, 199)", "rgb(35, 37, 38), rgb(65, 67, 69)", "rgb(117, 127, 154), rgb(215, 221, 232)", "rgb(92, 37, 141), rgb(67, 137, 162)", "rgb(19, 78, 94), rgb(113, 178, 128)", "rgb(43, 192, 228), rgb(234, 236, 198)", "rgb(8, 80, 120), rgb(133, 216, 206)", "rgb(71, 118, 230), rgb(142, 84, 233)", "rgb(97, 67, 133), rgb(81, 99, 149)", "rgb(31, 28, 44), rgb(146, 141, 171)", "rgb(22, 34, 42), rgb(58, 96, 115)", "rgb(255, 128, 8), rgb(255, 200, 55)", "rgb(29, 151, 108), rgb(147, 249, 185)", "rgb(235, 51, 73), rgb(244, 92, 67)", "rgb(221, 94, 137), rgb(247, 187, 151)", "rgb(76, 184, 196), rgb(60, 211, 173)", "rgb(31, 162, 255), rgb(18, 216, 250), rgb(166, 255, 203)", "rgb(29, 43, 100), rgb(248, 205, 218)", "rgb(255, 81, 47), rgb(240, 152, 25)", "rgb(26, 41, 128), rgb(38, 208, 206)", "rgb(170, 7, 107), rgb(97, 4, 95)", "rgb(255, 81, 47), rgb(221, 36, 118)", "rgb(240, 152, 25), rgb(237, 222, 93)", "rgb(64, 59, 74), rgb(231, 233, 187)", "rgb(229, 93, 135), rgb(95, 195, 228)", "rgb(0, 57, 115), rgb(229, 229, 190)", "rgb(204, 149, 192), rgb(219, 212, 180), rgb(122, 161, 210)", "rgb(60, 165, 92), rgb(181, 172, 73)", "rgb(52, 143, 80), rgb(86, 180, 211)", "rgb(218, 34, 255), rgb(151, 51, 238)", "rgb(2, 170, 176), rgb(0, 205, 172)", "rgb(237, 229, 116), rgb(225, 245, 196)", "rgb(211, 16, 39), rgb(234, 56, 77)", "rgb(22, 160, 133), rgb(244, 208, 63)", "rgb(96, 56, 19), rgb(178, 159, 148)", "rgb(229, 45, 39), rgb(179, 18, 23)", "rgb(255, 110, 127), rgb(191, 233, 255)", "rgb(119, 161, 211), rgb(121, 203, 202), rgb(230, 132, 174)", "rgb(49, 71, 85), rgb(38, 160, 218)", "rgb(43, 88, 118), rgb(78, 67, 118)", "rgb(230, 92, 0), rgb(249, 212, 35)", "rgb(33, 147, 176), rgb(109, 213, 237)", "rgb(204, 43, 94), rgb(117, 58, 136)", "rgb(236, 0, 140), rgb(252, 103, 103)", "rgb(20, 136, 204), rgb(43, 50, 178)", "rgb(0, 70, 127), rgb(165, 204, 130)"];
let colors = ["w3-amber","w3-aqua","w3-blue","w3-light-blue","w3-brown","w3-cyan","w3-blue-grey","w3-green","w3-light-green","w3-indigo","w3-khaki","w3-lime","w3-orange","w3-deep-orange","w3-pink","w3-purple","w3-deep-purple","w3-red","w3-sand","w3-teal","w3-yellow","w3-white","w3-black","w3-grey","w3-light-grey","w3-dark-grey","w3-pale-red","w3-pale-green","w3-pale-yellow","w3-pale-blue"];
String.prototype.hashCode = function() {
	var hash = 0, i, chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
		chr   = this.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};

const app = new Vue({
	el: ".app",
	data: {
		notLogged: true,
		pin: "",
		submit_btn_icon: "send",
		message: "",
		guard_key_placeholder: "",
		message_placeholder: "",
		response_placeholder: "",
		response_id: "",
		response_text: "",
		cache: new Map(),
		recent: []
	},
	created: function() {
		let val = sessionStorage.getItem("status");
		if( val != null ) this.pin = val;
		this.guard_key_placeholder = Parse.Config.current().get( "guard_key_placeholder" );
		this.message_placeholder = Parse.Config.current().get( "message_placeholder" );
		if( location.hash != "" ) {
			let code = location.hash.substring( 1 );
			if( !isNaN( parseInt( code ) ) ) {
				this.pin = code;
			}
		}
	},
	watch: {
		pin: function( val ) {
			if( val.length == 4 ) {
				this.notLogged = false;
				sessionStorage.setItem("status", val);
				this.getAllByPin();
			}
		},
		message: function( v ) {
			if( v == "" )
				$(".message #message").height( 34 );
		}
	},
	methods: {
		submitMessage: function( ev ) {
			if( this.message.trim() == "" ) {
				this.submit_btn_icon = "sentiment_very_dissatisfied";
				$.message.error( Parse.Config.current().get("emptyMessage") );
				let self = this;
				setTimeout(function(){ self.submit_btn_icon="send"; }, 2000);
			} else {
				let self = this;
				this.submit_btn_icon = "more_horiz";
				let feedbackEntity = new Feedback({
					message: self.message,
					pin: self.pin,
					user: current.me( true )
				});
				self.message = "";
				let rolling = $.message.info({ message: Parse.Config.current().get("loadingMessage"), duration: 0 });
				feedbackEntity.save(null,{
					success: function() {
						self.message=""
						setTimeout(function(){ self.submit_btn_icon="send"; }, 2000);
						self.submit_btn_icon = "sentiment_very_satisfied";
						rolling.close();
						$.message.success( Parse.Config.current().get("successMessage") );
						self.addToView( feedbackEntity );
						document.getElementById("message").focus();
					},
					error: function( er ) {
						rolling.close();
						console.log( er );
						self.message = feedbackEntity.get( "message" );
						setTimeout(function(){ self.submit_btn_icon="send"; }, 2000);
						self.submit_btn_icon = "sentiment_very_dissatisfied";
						$.message.error( Parse.Config.current().get("errorMessage") );
						document.getElementById("message").focus();
					}
				});
			}
		},
		increaseHeight: function( ev ) {
			let el = $( ev.currentTarget );
			let height = el.height();
			if( ev.code == "Enter" ) {
				el.height(height+34);
			}
		},
		getAllByPin: function() {
			let self = this;
			let q = new Parse.Query( Feedback );
			q.equalTo( "pin", this.pin );
			q.ascending( "createdAt" );
			q.find().then( function( res ) {
				let container = $( self.$el );
				res.forEach(v=> self.addToView( v ) );
			}).catch( console.warn);
		},
		addToView: function( model ) {
			let self = this;
			self.cache.set( model.id, model );
			let json = {
				id: model.id,
				response_count: 0,
				createdAt: model.get("createdAt").toLocaleString(),
				user: model.get("user"),
				message: model.get("message").replace("\n", "<br/>")
			}
			if( model.get("user") == current.me() ) json.type = "my-question";
			else json.type = "others-question";
			if( model.has("response") ) json.response_count = model.get("response").length;
			self.recent.push( json );
		},
		closeResponse: function( ev ) {
			document.querySelector("#response-modal").style.display = "none";
			this.response_id = "";
			this.response_text = "";
		},
		openResponses: function( ev ) {
			let self = this;
			let id = $( ev.currentTarget ).attr("id");
			let model = this.cache.get( id );
			this.response_id = id;
			this.$el.querySelector("#response-modal").style.display="block";
			document.querySelector("#response-modal .w3-input").focus();
			document.querySelector("#response-modal .responses").innerHTML = "";
			let response = model.get( "response" );
			if( response != null )
				response.forEach(v=>{
					self.addResponseToView( v );
				});
		},
		submitResponse: function( ev ) {
			let rolling = $.message.info({ message: Parse.Config.current().get("loadingMessage"), duration: 0 });
			let self = this;
			let model = this.cache.get( this.response_id );
			let response = {
				user: current.me(),
				createdAt: new Date(),
				message: self.response_text
			};
			model.add( "response", response );
			model.save().then( r => {
				self.addResponseToView( response );
				rolling.close();
				$.message.success( Parse.Config.current().get("successMessage") );
			}).catch( err => {
				rolling.close();
				console.log( err );
				$.message.error( Parse.Config.current().get("errorMessage") );
			});
			this.response_text = "";
		},
		addResponseToView: function( response ) {
			let template = $(`
								<div class="message-card">
									<div class="w3-card w3-shadow w3-round-xxlarge w3-white">
										<div class="message"></div>
										<div class="w3-tiny created-at"></div>
									</div>
								</div>
								`);
			template.find('.message').html( response.message );
			template.find('.created-at').html( response.createdAt.toLocaleString() );
			if( response.user == current.me() ) template.addClass('my-question');
			$("#response-modal .responses").append( template );
		}
	}
});
Parse.Config.get().then( res => {
	let keys = Object.keys( res.attributes );
	$.each(keys, function(index, el) {
		if( app.hasOwnProperty( el ) ) app[el] = res.get( el );
	});
});

const current = {
	me: function ( createIfNot ) {
		let uid = localStorage.getItem( "userId" );
		if( !uid && createIfNot ) {
			let uid = this.getNewUid( 20 );
			localStorage.setItem( "userId", uid );
			return uid;
		} else 
			return uid;
	},
	getNewUid: function( size ) {
		this.dec2hex = function(dec) {
			return ('0' + dec.toString(16)).substr(-2);
		};
		this.generateId= function( len ) {
			let arr = new Uint8Array( len || 20 );
			window.crypto.getRandomValues(arr);
			return Array.from(arr, this.dec2hex).join('');
		};
		return this.generateId( size );
	}
}

$("body").css({
	"background": `linear-gradient( ${gradient[Math.floor(Math.random()*gradient.length)]})`,
	"background-attachment": "fixed"
});

let url = `https://source.unsplash.com/collection/148041/${window.innerWidth}x${window.innerHeight}`;
if (navigator.onLine) $(".backpanel").css({ "background-image": `url(${url})` });

document.onreadystatechange = function() {
	if( document.readyState == "complete" ) {
		$(".splash").hide();
		$(".app").show();
	}
};

