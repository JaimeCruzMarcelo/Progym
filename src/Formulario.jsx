import React, {Component} from "react"

class Formulario extends Component{

    constructor(props){
        super(props)
        
        this.state ={
            nombre : " ",
            correo : " "
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)

    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }

    render(){
        return(
            <div className="ed-grid">
                <h1>Proceso de registro</h1>
                <h2>Un gran cambio se aproxima!!</h2>
                <form>
                    <div className="form_item">
                        <label>Nombre Completo: </label>
                        <input type= "text" 
                        onChange={this.cambiarNombre}
                        />
                    </div>
                    <div className="form_item">
                        <label>Email: </label>
                        <input type= "email" 
                        onChange={this.cambiarCorreo}
                        />
                    </div>
                    <div className="form_item">
                        <input className="button full" type="submit" value="Registar"/>
                    </div>
                </form>
                <div>
                    <h2>{`hola Bienvenido a SUPREAM GYM ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }
}

export default Formulario;