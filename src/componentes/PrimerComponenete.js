import React from "react";
import Header from "./Header";
import Productos from "./Productos";
import Footer from "./footer";
class PrimerComponenete extends React.Component {
    render() {
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
export default PrimerComponenete