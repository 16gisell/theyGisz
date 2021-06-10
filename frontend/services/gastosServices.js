class GastoServices{
    constructor(){
        // this.URI = "http://localhost:3000/api/gastos";
        this.URI = "/api/gastos";
    }

    async getGastos(){
        const respuesta= await fetch(this.URI);
        const gasto =respuesta.json();
        return gasto;
    }

    async postGastos(gasto){
        const res = await fetch(this.URI, {
            method:'POST',
            body:gasto,
            headers:{
                'content-type': 'application/json'
            }
        });
        const data = await res.json();
    }

    async getGastosU(id){
        const respuesta= await fetch(`${this.URI}/${id}`);
        const gasto =respuesta.json();
        return gasto;
    }

    async editGasto(id, gasto){
        const dele = await fetch(`${this.URI}/${id}`,{
            method:'PUT',
            body:gasto,
            headers:{
                'content-type': 'application/json'
            }            
        })
        const data = await dele.json();
    }

    async deliteGasto(id){
        const dele = await fetch(`${this.URI}/${id}`,{
            headers:{
                'content-type': 'application/json'
            },
            method:'DELETE'
        })
        const data = await dele.json();
    }
}

export default GastoServices