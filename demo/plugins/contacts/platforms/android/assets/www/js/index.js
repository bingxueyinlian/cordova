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
		//create
        var create = document.getElementById('create');
		 create.addEventListener('click', function(){
			var myContact = navigator.contacts.create({"displayName": "TestUser2"});
			myContact.save(function(){alert('myContact saved');});			
			var  myContactClone = myContact.clone();			
			myContactClone.displayName='TestUser3';
			myContactClone.save(function(){alert('myContactClone saved');});		
		 }, false);
		 
		 //find
		var find = document.getElementById('find');
		find.addEventListener('click', function(){
			var options = new ContactFindOptions();
			options.filter   = "TestUser";
			options.multiple = true;	
			options.desiredFields = [navigator.contacts.fieldType.id];
			var fields  = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
			navigator.contacts.find(fields
				,function(contacts){
					//Success
					 alert('Found ' + contacts.length + ' contacts.');				 
					 
				},function(err){
					//Error
					alert('Error:'+err);
				},options
			);			
		 }, false);
		 
		//pickContact
		var pickContact = document.getElementById('pickContact');
		pickContact.addEventListener('click', function(){
			navigator.contacts.pickContact(
				function(contact){
					//Success
					 alert('The following contact has been selected:' + JSON.stringify(contact));		
					 if(contact.displayName.indexOf('Test')>-1){
						contact.remove();
						alert(contact.displayName+' 删除成功!');
					 }
				},function(err){
					//Error
					alert('Error:'+err);
				}
			);			
		 }, false);	 
		
    },
   
};
