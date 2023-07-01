import { useState } from 'react';
import Card from "../components/card/Card";
import styles from './Favoritos.module.css'

const Favoritos = () => {

    const [listadoFavoritos, setListadoFavoritos] = useState(JSON.parse(localStorage.getItem("favoritos")))
    const url = window.location.pathname

    const delFav = (delFav) => {

        let indexFav = 0;

        listadoFavoritos.forEach(fav => {

            if(fav.id == delFav.id){

                indexFav = listadoFavoritos.indexOf(fav)

            }

        })

        listadoFavoritos.splice(indexFav, 1)

        localStorage.setItem("favoritos", JSON.stringify(listadoFavoritos))

    }

    return(

        <main className={styles.favMain}>

            <h1 className={styles.favTitle}>Tus dentistas favoritos</h1>

            {
            
                listadoFavoritos.length > 0 ? 
                
                    listadoFavoritos?.map((favorito) => (

                        <Card key={favorito.id} id={favorito.id} nombre={favorito.nombre} usuario={favorito.usuario} onObject={delFav}></Card>
            
                    ))
                
                : <h2>No tenes dentistas favoritos</h2>

            }

        </main>

    )

}

export default Favoritos;