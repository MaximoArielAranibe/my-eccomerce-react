import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';

const film = { id: 1, image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_12aa5deef3794cc4ad0dfcd88426ef17.jpg" , title: "imagen1"  };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getdata = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(film);
            }, 3000);
        });

        getdata.then(res => setData(res));
    }, []);

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;