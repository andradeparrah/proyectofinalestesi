import { Card } from "../components/Card"


export const Bikes = () => {

  //state useEfect map del array y se renderiza 
  return (
    <>
    <img src="public/assets/images/img3.avif" alt="" />
    <h1 className="flex justify-center font-bold">Bicicletas de ruta</h1>
    <p>Ya sean en pasos ondulantes caminos de grava fuera de la ciudad, el paseo en el club de los sábados con amigos o los vientos cruzados de Farellones, nuestras bicicletas de ruta establecen el estándar por el que se miden todas las demás.</p>
          <Card 
            titulo={"Cannondale"}
            img="public/assets/images/bike.jpeg"
            descripcion={"BICICLETA CANNONDALE 700 SYNAPSE 2"}
            price={
              "$1.200.000"
            }
          />
                    <Card
            titulo={"Cannondale"}
            img="public/assets/images/bike2.jpeg"
            descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 2 2023"}
            price={
              "$1.000.000"
            }
          />
                    <Card
            titulo={"Cannondale"}
            img="public/assets/images/bike3.jpeg"
            descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
            price={
              "$800.000"
            }
          />
                    <Card
            titulo={"Cannondale"}
            img="public/assets/images/bike5.jpeg"
            descripcion={"BICICLETA CANNONDALE 29 TRAIL 7"}
            price={
              "$500.000"
            }
          />
                    <Card
            titulo={"Cannondale"}
            img="public/assets/images/bike6.jpeg"
            descripcion={"BICICLETA CANNONDALE 29 TRAIL 7"}
            price={
              "$460.000"
            }
          />
    </>
  )
}
