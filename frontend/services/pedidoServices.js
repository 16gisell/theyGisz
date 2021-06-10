class PedidoServices{
    constructor(){
        // this.URI = "http://localhost:3000/api/pedidos";
        this.URI = "/api/pedidos";
    }

    async getPedidos(){
        const respuesta= await fetch(this.URI);
        const pedido =respuesta.json();
        return pedido;
    }

    async postPedido(pedido){
        const res = await fetch(this.URI, {
            method:'POST',
            body:pedido,
            headers:{
                'content-type': 'application/json'
            }
        });
        const data = await res.json();
    }

    async delitePedido(id){
        const dele = await fetch(`${this.URI}/${id}`,{
            headers:{
                'content-type': 'application/json'
            },
            method:'DELETE'
        })
        const data = await dele.json();
    }

    async ActualizarPedido(id, pedido){
        const dele = await fetch(`${this.URI}/${id}`,{
            method:'PUT',
            body:pedido,
            headers:{
                'content-type': 'application/json'
            }            
        })
        const data = await dele.json();
    }

    async getGastosU(id){
        const respuesta= await fetch(`${this.URI}/${id}`);
        const gasto =respuesta.json();
        return gasto;
    }
}

export default PedidoServices