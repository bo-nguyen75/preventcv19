const messaging = firebase.messaging();
messaging.usingPublicVapidKey('BHhz_Pmlt9l6JXJbHqtb8lAfb7pvgfT2nqjxHu-TtwQpc_uoQ_z8I1LXrewap9bU6GChDOmBaYXgbym6gnopSQQ');
messaging.requestPermission()
.then(function(){
    console.log('Have permission');
    return messaging.getToken();
})
.then(function(token){
    console.log(token);
})
.catch(function(err){
    console.log('Error');
})

messaging.onMessage(function(payload){
    console.log('onMe');
})