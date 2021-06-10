class AdminWebServices{
    constructor(){
    //     this.URI = "http://localhost:3000/api/adminwebC";
    //     this.URI2 = "http://localhost:3000/api/adminwebP";
        this.URI = "/api/adminwebC";
        this.URI2 = "/api/adminwebP";
    }
    async getAdminC(){
        const respuesta= await fetch(this.URI);
        const adminwebc =respuesta.json();
        return adminwebc;
    }

    async getAdminP(){
        const respuesta= await fetch(this.URI2);
        const adminwebc =respuesta.json();
        return adminwebc;
    }

    async getAdminPU(id){
        const respuesta= await fetch(`${this.URI2}/${id}`);
        const adminwebc =respuesta.json();
        return adminwebc;
    }

    async deliteCatalago(id){
        const dele = await fetch(`${this.URI}/${id}`,{
            headers:{
                'content-type': 'application/json'
            },
            method:'DELETE'
        })
        const data = await dele.json();
    }

    async delitePromo(id){
        const dele = await fetch(`${this.URI2}/${id}`,{
            headers:{
                'content-type': 'application/json'
            },
            method:'DELETE'
        })
        const data = await dele.json();
        console.log(data)
    }
}

export default AdminWebServices