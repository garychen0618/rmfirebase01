'use strict';
 
app.factory('RMView', function ($firebase, FIREBASE_URL, User) {
  //return $resource('https://rmtest.firebaseio.com/test/:id.json');
  var ref = new Firebase(FIREBASE_URL + 'rmapp');
  var rmlists = $firebase(ref);
  var Rmlist = {
    all: rmlists
    };
  return Rmlist;
});