import ItemCount from '../ItemCount';
import Title from '../Title';
import ItemList from '../ItemList';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const films = [
    { id: 1, image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_12aa5deef3794cc4ad0dfcd88426ef17.jpg" , title: "imagen1", category: "films"  },
    { id: 2, image: "https://media.gq.com.mx/photos/6212a377b3938d1f596f9108/16:9/w_2560%2Cc_limit/ioniq5kvs_4.jpg" , title: "imagen2", category: "series" },
    { id: 3, image: "https://http2.mlstatic.com/D_NQ_NP980813-MLA49352956352_032022-B.jpg" , title: "imagen3", category: "series" }
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve =>{ setTimeout(() => {
                resolve(films);
            }, 1000);
        });

        if (categoriaId){
        getData.then(res => setData(res.filter(film => film.category === categoriaId)));
    } else {
        getData.then(res => setData(res));
    }
}, [categoriaId]);
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
        <Title greeting={texto} />
        <ItemCount initial = {1} stock={10} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;