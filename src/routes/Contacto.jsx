import { useState } from 'react'
import styles from './Contacto.module.css'

const Contacto = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [envioValido, setEnvioValido] = useState("")

    const resetForm = () => {

        setTimeout(() => {

            setMensaje("")

        },1000)

    }

    const submitEvent = (e) => {

        e.preventDefault()

        if(nombre.length > 5 && email.includes('@')){

            setEnvioValido(true)

            setMensaje("Gracias, te responderemos pronto")

            resetForm()

        }
        else{

            setEnvioValido(false)

            setMensaje("Alguno de los datos es incorrecto")

        }
        
    }

    return(

        <main className={styles.formMain}>

            <h1 className={styles.formTitle}>¿Querés saber más?</h1>

            <h3 className={styles.formSubtitle}>Dejanos tus datos y nos pondremos en contacto</h3>

            <form className={styles.contactoForm} onSubmit={submitEvent}>

                <input type="text" name="nombre" placeholder="Nombre" className={styles.formInput} onChange={(e) => setNombre(e.target.value)}/>
                
                <input type="email" name="email" placeholder="Email" className={styles.formInput} onChange={(e) => setEmail(e.target.value)}/>

                <button className={styles.formBtn}>Enviar</button>

                {envioValido ? <p className={styles.envioValido}>{mensaje}</p> : <p className={styles.errorEnvio}>{mensaje}</p>}

            </form>

        </main>

    ) 

}

export default Contacto;