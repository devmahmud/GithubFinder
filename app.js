//Initialize GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input EventListener
searchUser.addEventListener('keyup',(e)=>{
    // Get input text
    const userText = e.target.value;
    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found"){
               ui.showAlert('User not found', 'alert alert-danger');
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }else{
        ui.clearProfile();
    }
});