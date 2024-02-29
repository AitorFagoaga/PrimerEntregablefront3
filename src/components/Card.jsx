import CardStyles from '../Styles/Card.module.css';

const inlineExample = {
    // backgroundColor: 'white'
}

const Card = ({ name, carBrand, modelName }) => {

  const addCart = () => {
    setCart((prevCart) => [...prevCart, pizza])
  }
  return (
    <div className={CardStyles.cardContainer} style={inlineExample}>
        
        <h4>Gracias, {name}!</h4>
        <h4>Tu vehículo de eleccion fue: {carBrand} {modelName}.</h4>
            
        {/* <h3>{pizza.tipo}</h3>
        <h4 style={{color: 'black'}}>{pizza.precio}</h4> */}
    </div>
  )
}

export default Card