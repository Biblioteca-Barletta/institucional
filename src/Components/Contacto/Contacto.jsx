import './Contacto.css'
import Navbar from '../Navbar/Navbar'
import X from '../../assets/icons/X.svg'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'

const Contacto = () => {
    return (
        <>
            <Navbar />
            <fieldset className="border rounded-md mt-5">
                <legend>Formulario de contacto</legend>
                <form>
                    <label className=''>Mail</label>
                    <p className='m-2'>info@archivocasla.com.ar</p>
                    <p className='m-2'>archivocasla@gmail.com</p>
                    <hr></hr>
                    <label>Redes sociales</label>
                    <div className='flex flex-row justify-evenly'>
                        <a href="https://www.facebook.com/archivocasla">
                            <img src={facebook} alt="facebook" className='imgRedes'/>
                        </a>
                        <a href="https://www.instagram.com/archivocasla">
                            <img src={instagram} alt="instagram" className='imgRedes'/>
                        </a>
                        <a href="https://x.com/archivocasla">
                            <img src={X} alt="X" className='imgRedes'/>
                        </a>
                    </div>
                </form>
            </fieldset>
        </>
    )
}

export default Contacto