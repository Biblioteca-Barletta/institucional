
import './Proyectos.css'
import Card from '../Card/Card'
import Navbar from '../Navbar/Navbar'

import imgIndice from '../../assets/images/IndiceCASLA.svg'
import imgRepo from '../../assets/images/RepoCASLA.svg'



const Proyectos = () => {
    return (
        <>
            <Navbar />
            <div className='containerProy'>
                <Card
                    link="https://indice.archivocasla.com.ar"
                    imageUrl={imgIndice}
                    altText="Indice Político CASLA"
                />

                <Card
                    link="https://repositorio.archivocasla.com.ar"
                    imageUrl={imgRepo}
                    altText="Repositorio Digital CASLA"
                />
            </div>
        </>
    )
}

export default Proyectos