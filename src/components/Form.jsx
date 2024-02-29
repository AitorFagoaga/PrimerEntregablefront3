import { useState } from "react";
import Card from "./Card";

const btnStyle = {
    backgroundColor: '#01386A',
    color:'#ffff',
    marginTop:'2rem', 
    borderRadius:'10px',
    border: 'none',
    height:'50px',
    width:'530px'
}

const Form = () => {
    const [customer, setCustomer] = useState({
        name: '',
        carBrand: '',
        modelName:'',
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(customer.name === customer.name.trimStart() && customer.name.length >= 3 && customer.carBrand.length >= 6 ){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(customer)
  return (
    <div>
        {show ? null :
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{display: 'flex', marginTop:'2rem'}}>
                    {/* <label htmlFor="name" style={{marginTop: 'auto', marginBottom:'auto'}} >
                        Nombre 
                        </label> */}
                    <input id="name" type="text" placeHolder=" Nombre" style={{width:"30vw", marginLeft:"0.2vw", height:"5vh", fontSize:"20px"}} 
                    onChange={(event) => setCustomer({...customer, name: event.target.value})}/>
                </div>
                <div style={{display: 'flex', marginTop:'2rem'}}>
                {/* <label style={{marginTop: 'auto', marginBottom:'auto'}}>
                    Marca 
                    </label> */}
                <input type="text"  placeHolder=" Marca" style={{width:"30vw", marginLeft:"0.2vw", height:"5vh", fontSize:"20px"}} 
                    onChange={(event) => setCustomer({...customer, carBrand: event.target.value})}/>
                </div>
               <div style={{display: 'flex', marginTop:'2rem'}}>
               {/* <label style={{marginTop: 'auto', marginBottom:'auto'}}>
                   Modelo
                </label> */}
                <input type="text" placeHolder=" Modelo" style={{width:"30vw", marginLeft:"0.2vw", height:"5vh", fontSize:"20px"}} 
                    onChange={(event) => setCustomer({...customer, modelName: event.target.value})}/>
               </div>
                
                <button style={btnStyle}>Enviar</button>
            </form>
        }

        {show ? 
        <Card name={customer.name} carBrand={customer.carBrand} modelName={customer.modelName} />
            
        : <p></p>
        }
        {error && <h4 style={{color: 'red'}}>Debe colocar la información correctamente</h4>}
    </div>
  )
}

export default Form


// {condicion ? true : false}
// {condicion && true}