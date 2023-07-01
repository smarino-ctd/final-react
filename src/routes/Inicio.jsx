import { useEffect, useState } from "react";
import styles from './Inicio.module.css'
import Card from "../components/card/Card";

const Inicio = () => {

    const [fetchedData, setFetchedData] = useState(null)
    const [esFavorito, setEsFavorito] = useState(false)
    
    const favorito = []

    useEffect(() => {

        const listaDentistas = async () => {

            const url = "https://jsonplaceholder.typicode.com/users"
    
            try {
    
                const response = await fetch(url)
    
                const data = await response.json()
    
                setFetchedData(data)
                
            } catch (error) {
    
                console.error("Error en la consulta",error)
                
            }

        }

        listaDentistas()
        
    })

    const addFav = (favDent) => {

        const listadoFavoritos = JSON.parse(localStorage.getItem('favoritos'))

        if(listadoFavoritos == null){

            localStorage.setItem('favoritos', JSON.stringify([favDent]))

        }
        
        listadoFavoritos.forEach(fav => {

            favorito.push(fav.id)

        })

        if(favorito.includes(favDent.id)){

            setEsFavorito(true)

        }
        else{

            listadoFavoritos.push(favDent)

            localStorage.setItem('favoritos', JSON.stringify(listadoFavoritos))

        }

    }
        
    return(

        <>

            <main className={styles.incioMain}>

                <h1 className={styles.inicioTitle}>Estos son nuestos dentistas</h1>

                {
                
                    fetchedData?.map((dentista) => (

                        <Card key={dentista.id} id={dentista.id} nombre={dentista.name} usuario={dentista.username} favorito={esFavorito} onObject={addFav}></Card>

                    ))

                }

            </main>

        </>

    )

}

export default Inicio