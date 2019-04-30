class GitHub{
    constructor(){
        this.client_id = "b538be69eaef6f6b6559";
        this.client_secret = "0f478dbe8a73c409c92c44a5d9aae98e7f4efd8d";
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}