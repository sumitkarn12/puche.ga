
Parse.initialize("ACfyU2xAYFifFcKfK1ywwx7uuo6kLnlX2VixszvR", "ifOlCEcNsG8DOCiGmsPUAnTUJ1tDXZgDGy7h4f4N");
Parse.serverURL = 'https://parseapi.back4app.com/'
Parse.Config.get();
const Feedback = Parse.Object.extend( "feedback" );

let app = new Vue({
	el: ".app",
	data: {
		notLogged: true,
		pin: "",
		submit_btn_icon: "send",
		message: "",
		recent: []
	},
	created: function() {
		let val = localStorage.getItem("status");
		if( val != null ) {
			val = JSON.parse( val );
			if( (val.at+(Parse.Config.current().get("codeRequiredAfter")*60*1000)) < Date.now() ) {
				val = null;
				localStorage.removeItem( "status" );
			} else {
				this.notLogged = false;
			}
		}
	},
	watch: {
		pin: function( val ) {
			if( val.length == 4 && val == Parse.Config.current().get( "secureCode" ) ) {
				this.notLogged = false;
				localStorage.setItem("status", JSON.stringify({
					verified: true,
					at: Date.now()
				}));
			} else if ( val.length == 4 ) {
				$.message.warning(Parse.Config.current().get("invalidCode"));
			}
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
					message: self.message
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
						self.recent.push( feedbackEntity.get("message") );
						document.getElementById("message").focus();
					},
					error: function( er ) {
						rolling.close();
						console.log( er );
						self.message = feedbackEntity.get( "message" );
						setTimeout(function(){ self.submit_btn_icon="send"; }, 2000);
						self.submit_btn_icon = "sentiment_very_dissatisfied";
						$.message.success( Parse.Config.current().get("errorMessage") );
						document.getElementById("message").focus();
					}
				});
			}
		}
	}
});

let url = `https://source.unsplash.com/collection/148041/${window.innerWidth}x${window.innerHeight}`;
$(".backpanel").css({ "background-image": `url(${url})` });

document.onreadystatechange = function() {
	if( document.readyState == "complete" ) {
		$(".splash").hide();
		$(".app").show();
	} else {
		console.log( document.readyState );
	}
};