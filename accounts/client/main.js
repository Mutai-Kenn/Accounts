
if (Meteor.isClient) {
  Template.signup.events({
    'submit form': function(event) {
      event.preventDefault();
      var emailVar = event.target.signupEmail.value;
      var passwordVar = event.target.signupPassword.value;
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      });
    }
  });

  Template.login.events({
    'submit form': function(event) {
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(emailVar, passwordVar, function(error){
        if(error){
          console.log(error.reason);
        } else{
          Router.go("main");
        }
      });
    }
  });
}

Template.settings.events({
    'click .logout': function(event) {
      event.preventDefault();
      Meteor.logout();
    }
  });

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
