class hero {
    constructor(tipoHeroi){
        this.tipoHeroi = tipoHeroi
    }
    atacar(){
        if (this.tipoHeroi === "mago")
            console.log(`O ${this.tipoHeroi} atacou usando magia`)
        else  if (this.tipoHeroi === "guerreiro")
            console.log(`O ${this.tipoHeroi} atacou usando espada`)
        else  if (this.tipoHeroi === "monge")
            console.log(`O ${this.tipoHeroi} atacou usando artes marciais`)
        else  if (this.tipoHeroi === "ninja")
            console.log(`O ${this.tipoHeroi} atacou usando shiruken`)
    }
}

let mago = new hero("mago")
let guerreiro = new hero("guerreiro")
let monge = new hero("monge")
let ninja = new hero("ninja")

mago.atacar() 
guerreiro.atacar()
monge.atacar()
ninja.atacar()