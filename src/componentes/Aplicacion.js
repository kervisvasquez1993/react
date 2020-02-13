import React from "react";
import Header from "./Header";
import Productos from "./Productos";
import Footer from "./footer";
class Aplicacion extends React.Component {
    render() {
        const productos = [
            {nombre: 'libro', precio}
        ]
        return (
            <div>
                <Header
                    titulo = "Nuestra tienda online"
                />
                <Productos/>
                <Footer/>
            </div>
        )
    }
}
export default Aplicacion