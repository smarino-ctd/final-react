import {Link} from 'react-router-dom'
import styles from './Card.module.css'
import userImg from '../../../public/card/user-img.jpg'

const Card = (props, {onObject}) => {

    const url = window.location.pathname

    const addFav = (newFav) => {

        props.onObject(newFav)

    }

    const delFav = (delFav) => {

        props.onObject(delFav)

    }

    return (

        <>
        
            <article className={styles.card}>

                <img src={userImg} alt="user" className={styles.cardImg}></img>

                <p className={styles.cardApellido}>{props.nombre}</p>
                <p className={styles.cardUsuario}>{props.usuario}</p>

                <Link to={`/detalles/${props.id}`} className={styles.infoBtn}>Información</Link>

                {url=="/" ? (props.favorito ? <button className={styles.disBtn} disabled>{'Ya existe'}</button> : <button className={styles.favBtn} id={props.id} onClick={() => addFav(props)}>{'\u2665 Favorito'}</button>) : undefined}

                {url=="/favoritos" ? <button className={styles.favBtn} id={props.id} onClick={() => delFav(props)}>{'Eliminar'}</button> : undefined}

            </article>
        
        </>

    )

}

export default Card