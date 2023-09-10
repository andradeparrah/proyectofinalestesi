import { Card } from "../components/Card"

export const Accessories = () => {
  return (
    <div>
        <h1 className="text-3xl flex justify-center font-bold">Cascos</h1>
        <img className="p-2" src="public/assets/images/img4.avif" alt="" />
            <Card
            titulo={"Cannondale"}
            img="public/assets/images/helmet.jpeg"
            descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
            price={
              "$800.000"
            }
            agregar="Agregar"
          />                    <Card
          titulo={"Cannondale"}
          img="public/assets/images/helmet2.jpeg"
          descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
          price={
            "$800.000"
          }
          agregar="Agregar"
        />                    <Card
        titulo={"Cannondale"}
        img="public/assets/images/helmet3.jpeg"
        descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
        price={
          "$800.000"
        }
        agregar="Agregar"
      />                    <Card
      titulo={"Cannondale"}
      img="public/assets/images/helmet4.jpeg"
      descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
      price={
        "$800.000"
      }
      agregar="Agregar"
    />
    </div>
    
  )
}
