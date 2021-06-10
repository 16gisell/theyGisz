class UsuarioServices{
    constructor(){
        // this.URI = "http://localhost:3000/api/usuario";
        this.URI = "/api/usuario";
    }

    async postLogin(user){
        console.log(user, "user servise")
        const res = await fetch(this.URI+'/login', {
            method:'POST',
            body:user,
            headers:{
                'content-type': 'application/json'
            }
        });
        const data = await res.json();
    }

    async setUser(user){
        let user_string =JSON.stringify(user);
        localStorage.setItem('currenUser', user_string);
    }

    async setToken(token){ //una vez que elusuario este 
        localStorage.setItem('accessToken', token);
    }

    getCurrenUser() {//saber el usuario que este logado en ese momento 
        let user_string =localStorage.getItem('currenUser');
        if(user_string){
            let user = JSON.parse(user_string)
            return user;
        }else{
            return null;
        }
    }

    async getToken(){
        return localStorage.getItem('accessToken');
    }
}

export default UsuarioServices