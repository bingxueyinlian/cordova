/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);		
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
		//dialogs info
		//alert
		document.getElementById('alert').addEventListener('click',function(){
			navigator.notification.alert(
					'You are the winner!',  // message
					function(){alert('alertDismissed');},         // callback
					'Game Over',            // title
					'Done'                  // buttonName
				);
		});
		//confirm
		document.getElementById('confirm').addEventListener('click',function(){
			navigator.notification.confirm(
					'You are the winner!',  // message
					function(buttonIndex){
						alert('You selected button ' + buttonIndex);
					},         // callback to invoke with index of button pressed
					'Game Over',            // title
					['Restart','Exit','Ignore']                  // buttonLabels
				);
		});
		//prompt
		document.getElementById('prompt').addEventListener('click',function(){
			navigator.notification.prompt(
				'Please enter your name',  // message
				function(results) {
					alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
				},                  // callback to invoke
				'Registration',            // title
				['Ok','Exit'],             // buttonLabels
				'Jane Doe'                 // defaultText
			);
		});
		//beep
		document.getElementById('beep').addEventListener('click',function(){
			// Beep twice!
			navigator.notification.beep(2);
		});
    }
};
