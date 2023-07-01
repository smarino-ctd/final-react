import {useEffect, useState} from "react";
import styles from './Dentista.module.css'
import { useParams } from "react-router-dom";

const Dentista = () => {

    const {userId} = useParams()

    const [nombre, setNombre] = useState("")

    const [email, setEmail] = useState("")

    const [telefono, setTelefono] = useState("")

    const [web, setWeb] = useState("")


    useEffect(() => {

        const listaDentistas = async () => {

            const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    
            try {
    
                const response = await fetch(url)
    
                const data = await response.json()

                setNombre(data.name)

                setEmail(data.email)

                setTelefono(data.phone)

                setWeb(data.website)
                
            } catch (error) {
    
                console.error("Error en la consulta",error)
                
            }

        }

        listaDentistas()
        
    })

    return(

        <>

            <main>

                
                <table className={styles.detallesTable}>

                    <thead className={styles.filaSuperior}>

                        <tr>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Teléfono</th>

                            <th>Sitio Web</th>

                        </tr>

                    </thead>

                    <tbody className={styles.filaInferior}>

                        <tr>

                            <th>{nombre}</th>

                            <th>{email}</th>

                            <th>{telefono}</th>

                            <th>{web}</th>

                        </tr>

                    </tbody>

                </table>

            </main>
        
        </>

    )

}

export default Dentista;