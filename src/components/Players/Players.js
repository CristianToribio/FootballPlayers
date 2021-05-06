import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export function Players() {
    const [data, setData] = React.useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:9000/players');
        let texto = await response.json();
        setData(texto);
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    const columna = [
        { field: 'id', headerName: 'Identificador', description: 'Id del Jugador.', width: 150 },
        { field: 'nombre', headerName: 'Nombre', description: 'Nombre del Jugador.', width: 150 },
        { field: 'apellido', headerName: 'Apellido', description: 'Apellido del Jugador.', width: 150 },
        { field: 'equipo', headerName: 'Equipo', description: 'Equipo del Jugador.', width: 250, },
        { field: 'edad', headerName: 'Edad', description: 'Edad del Jugador.', width: 200, },
        { field: 'url', headerName: 'Wikipedia', description: 'Wikipedia del Jugador.', width: 400, },
    ];

    const filas = () => {
        let array = [];
        for (let i = 0; i < data.length; i++) {
            array.push({ id: data[i].id, nombre: data[i].nombre, apellido: data[i].apellido, equipo: data[i].equipo, edad: data[i].edad, url: data[i].url })
        }
        return array
    };

    let arrayfilas = filas();

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={arrayfilas} columns={columna} pageSize={25} onRowClick={(row, index) => {
                console.log(`row.${row.id}`, row);
                console.log('->', index)
            }} />
        </div>
    );
}
