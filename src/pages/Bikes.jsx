import { Card } from "../components/Card"


export const Bikes = () => {

  return (
    <>
    <h1 className="text-3xl flex justify-center font-bold">Bicicletas de ruta</h1>
    <img className="p-2 rounded-sm" src="/assets/images/img3.avif" alt="bikes" />
    <p className="p-6 text-center">Ya sean en pasos ondulantes caminos de grava fuera de la ciudad, el paseo en el club de los sábados con amigos o los vientos cruzados de Farellones, nuestras bicicletas de ruta establecen el estándar por el que se miden todas las demás.</p>
          <Card 
            titulo={"Cannondale"}
            img="/assets/images/bike.jpeg"
            descripcion={"BICICLETA CANNONDALE 700 SYNAPSE 2"}
            price={
              "$1.200.000"
            }
            agregar="agregar"
          />
                    <Card
            titulo={"Cannondale"}
            img="/assets/images/bike2.jpeg"
            descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 2 2023"}
            price={
              "$1.000.000"
            }
            agregar="agregar"
            
          />
                    <Card
            titulo={"Cannondale"}
            img="/assets/images/bike3.jpeg"
            descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
            price={
              "$800.000"
            }
            agregar="agregar"
          />
                    <Card
            titulo={"Cannondale"}
            img="/assets/images/bike5.jpeg"
            descripcion={"BICICLETA CANNONDALE 29 TRAIL 7"}
            price={
              "$500.000"
            }
            agregar="agregar"
          />
                    <Card
            titulo={"Cannondale"}
            img="/assets/images/bike6.jpeg"
            descripcion={"BICICLETA CANNONDALE 29 TRAIL 7"}
            price={
              "$460.000"
            }
            agregar="agregar"
          />
    </>
  )
}
