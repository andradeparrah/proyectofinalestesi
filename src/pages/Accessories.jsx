import { Card } from "../components/Card"

export const Accessories = () => {
  return (
    <div>
        <img src="public/assets/images/img4.avif" alt="" />
        <h1 className="text-4xl">Cascos</h1>
            <Card
            titulo={"Cannondale"}
            img="public/assets/images/helmet.jpeg"
            descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
            price={
              "$800.000"
            }
          />                    <Card
          titulo={"Cannondale"}
          img="public/assets/images/helmet2.jpeg"
          descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
          price={
            "$800.000"
          }
        />                    <Card
        titulo={"Cannondale"}
        img="public/assets/images/helmet3.jpeg"
        descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
        price={
          "$800.000"
        }
      />                    <Card
      titulo={"Cannondale"}
      img="public/assets/images/helmet4.jpeg"
      descripcion={"BICICLETA CANNONDALE 700 TOPSTONE 4 2023"}
      price={
        "$800.000"
      }
    />
    </div>
    
  )
}
