
Parse.initialize("ACfyU2xAYFifFcKfK1ywwx7uuo6kLnlX2VixszvR", "ifOlCEcNsG8DOCiGmsPUAnTUJ1tDXZgDGy7h4f4N");
Parse.serverURL = 'https://parseapi.back4app.com/'
const Feedback = Parse.Object.extend( "feedback" );
let image = ["https://images.unsplash.com/photo-1501845073335-1cb7bf68ff55?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=180a270155ea309097529756ec2705c4","https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c37f26fa69ce9fe15127c1045ba6e499","https://images.unsplash.com/photo-1504447660567-77a0a12ebb75?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=6ef4a149417ef503ceb15a1765293166","https://images.unsplash.com/photo-1488600779855-8151a2b2e4eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=32c3de0347be224ba2bf7e4daf9a106c","https://images.unsplash.com/photo-1504095100110-7668ecb3ee6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=eb796d1bdf34ae775fca8a5beb0b06a2","https://images.unsplash.com/photo-1455541053858-f5c756ccb2e7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4f429695ab6f63387098222b500a6834","https://images.unsplash.com/photo-1502913129495-481222be23d9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=10f9df782b480a0fafa74a7013fbc384"];
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

const db = new Dexie("question-database");
db.version(1).stores({ question: 'objectId, message, user, createdAt, updatedAt, pin' });

const app = new Vue({
	el: ".app",
	data: {
		notLogged: true,
		net_status: true,
		net_warning: null,
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
		let self = this;
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
		db.question.hook("creating", function(id, obj,txn) {
			let dummy = $.extend({}, obj);
			dummy.className = "feedback";
			let model = Parse.Object.fromJSON(dummy);
			self.addToView( model );
		});
		db.question.hook("updating", function(modifications, id, obj,txn) {
			let dummy = $.extend({}, modifications, obj);
			dummy.className = "feedback";
			let model = Parse.Object.fromJSON(dummy);
			self.addToView( model );
		});
		setTimeout(()=>{
			this.net_status = navigator.onLine;
		}, 3000);
	},
	watch: {
		pin: function( val ) {
			let self = this;
			if( val.length == 4 ) {
				this.notLogged = false;
				sessionStorage.setItem("status", val);
				db.question.where("pin").equals( this.pin ).toArray().then(res=>{
					res.forEach(v=>{
						let dummy = $.extend({}, v);
						dummy.className = "feedback";
						self.addToView( Parse.Object.fromJSON(dummy) );
					});
					self.recent.sort((b,a)=> b.createdAtAsDate-a.createdAtAsDate );
					self.sync();
				});
			}
		},
		message: function( v ) {
			if( v == "" )
				$(".message #message").height( 34 );
		},
		net_status: function( status ) {
			if( !status ) {
				this.net_warning = $.message.warning({
					message: Parse.Config.current().get("not_connected_message"),
					duration:0
				});
				$("body").addClass('w3-sepia');
			} else {
				$("body").removeClass('w3-sepia');
				this.net_warning.close();
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
			} else if ( this.net_status ) {
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
						db.question.put( feedbackEntity.toJSON() ).then(console.log);
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
			} else {
				$.message.error( Parse.Config.current().get("errorMessage") );
			}
		},
		increaseHeight: function( ev ) {
			let el = $( ev.currentTarget );
			let height = el.height();
			if( ev.code == "Enter" ) {
				el.height(height+14);
			}
		},
		sync: function() {
			if( this.net_status ) {
				let self = this;
				let q = new Parse.Query( Feedback );
				q.equalTo( "pin", this.pin );
				q.ascending( "createdAt" );
				q.find().then( function( res ) {
					let container = $( self.$el );
					let responses = res.map(v=>v.toJSON());
					db.question.bulkPut( responses ).then(()=>{
						self.recent.sort((b,a)=> b.createdAtAsDate-a.createdAtAsDate )
					});
				}).catch( console.warn);
			}
		},
		addToView: function( model ) {
			let self = this;
			let json = model.toJSON();
			json.id = model.id;
			json.response_count = 0;
			json.createdAtAsDate = model.get("createdAt");
			json.createdAt = model.get("createdAt").toLocaleString();
			json.message = model.get("message").replace("\n", "<br/>")
			if( json.hasOwnProperty("response") ) json.response_count = json.response.length;
			if( json.user == current.me() ) json.type = "my-question";
			if( self.cache.has( model.id ) ) {
				json = self.recent.filter(v=>v.id.match(model.id))[0];
				json.createdAtAsDate = model.get("createdAt");
				json.message = model.get("message").replace("\n", "<br/>")
				json.createdAt = model.get("createdAt").toLocaleString();
				if( model.has("response") ) json.response_count = model.get("response").length;
			} else {
				self.recent.push( json );
			}
			self.cache.set( model.id, model );
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
			if( response != null ) {
				response.forEach(v=>{
					self.addResponseToView( v );
				});
				if( response.length == 0 )
					$("#response-modal .responses").append( `<h3 class='no-response'>${Parse.Config.current().get("no_response_template")}</h3>` );
			} else {
				$("#response-modal .responses").append( `<h3 class='no-response'>${Parse.Config.current().get("no_response_template")}</h3>` );
			}
		},
		submitResponse: function( ev ) {
			if( this.net_status ) {
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
					db.question.put( r.toJSON() );
					self.addResponseToView( response );
					rolling.close();
					$.message.success( Parse.Config.current().get("successMessage") );
				}).catch( err => {
					rolling.close();
					console.log( err );
					$.message.error( Parse.Config.current().get("errorMessage") );
				});
				this.response_text = "";
			} else {
				$.message.error( Parse.Config.current().get("errorMessage") );
			}
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

$.getJSON("/js/gradients.json").then( grds => {
	let obj = grds[Math.floor(Math.random()*grds.length)];
	let color = obj.colors.join(",");
	$("body").css({ "background": `linear-gradient( ${color} )` });
});
$(".backpanel").css({ "background-image": `url( ${image[Math.floor(Math.random()*image.length)]})` });

document.onreadystatechange = function() {
	if( document.readyState == "complete" ) {
		$(".splash").hide();
		$(".app").show();
	}
};

window.addEventListener('online', ()=> InformConnectivity( true ) );
window.addEventListener('offline', ()=> InformConnectivity( false )  );

function InformConnectivity( status ) { app.net_status = status; }

