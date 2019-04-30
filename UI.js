class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
       this.profile.innerHTML = `
       <div class="card card-body mb-3">
           <div class="row">
               <div class="col-md-3">
                   <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                   <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
               </div>
               <div class="col-md-9">
                   <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                   <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                   <span class="badge badge-success">Followers: ${user.followers}</span>
                   <span class="badge badge-info">Following: ${user.following}</span>
                   <br><br>
                   <ul class="list-group">
                       <li class="list-group-item">Company: ${user.company}</li>
                       <li class="list-group-item">Website/Blog: ${user.blog}</li>
                       <li class="list-group-item">Location: ${user.location}</li>
                       <li class="list-group-item">Member Since: ${user.created_at}</li>
                   </ul>
               </div>
           </div>
           <h3 class="page-heading mb-3">Latest Repos</h3>
           <div id="repos"></div>
       </div>
       `
       console.log(user);
       
    }
    // Show user repos
    showRepos(repos){
        let output = '';
        repos.forEach((repos)=>{
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repos.html_url}" target="_blank">${repos.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repos.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repos.watchers_count}</span>
                        <span class="badge badge-info">Forks: ${repos.forks_count}</span>
                    </div>
                </div>
            </div>
            `
        });
        // output the reository
        document.getElementById('repos').innerHTML = output;
    }


    // Show Alert Message
    showAlert(msg, className){
        // Clear previuous alert
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add Text
        div.appendChild(document.createTextNode(msg));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Saerch Box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div,search);

        // Time out after 3 sec
        setTimeout(()=>{
            this.clearAlert();
        },3000);

    }
    // Clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }

    }

    // Clear profile
    clearProfile(){
        this.profile.innerHTML = "";
    }
}