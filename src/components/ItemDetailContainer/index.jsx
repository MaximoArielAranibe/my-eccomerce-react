import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const films = [
    { id: 1, image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_12aa5deef3794cc4ad0dfcd88426ef17.jpg" , title: "imagen1", category: "series"  },
    { id: 2, image: "https://media.gq.com.mx/photos/6212a377b3938d1f596f9108/16:9/w_2560%2Cc_limit/ioniq5kvs_4.jpg" , title: "imagen2", category: "series" },
    { id: 3, image: "https://http2.mlstatic.com/D_NQ_NP980813-MLA49352956352_032022-B.jpg" , title: "imagen3", category: "series" },
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { categoriaId } = useParams()
    const { detalleId } = useParams();

    useEffect(() => {
        const getdata = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(films);
            }, 3000);
        });

        getdata.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, []);

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;