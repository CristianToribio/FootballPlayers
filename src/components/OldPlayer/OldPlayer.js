import React from 'react';
import 'fontsource-roboto';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';

export function OldPlayers() {
    const [data, setData] = React.useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:9000/oldestPlayer');
        let texto = await response.json();
        setData(texto);
    };

    React.useEffect(() => {
        fetchData();
    }, []);


    return (
        <React.Fragment>
            <Container maxWidth="md">
                <p><b>El Jugador Mas Mayor de la tabla de los jugadores</b></p>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><u><b>ID</b></u></TableCell>
                                <TableCell align="center"><u><b>Nombre</b></u></TableCell>
                                <TableCell align="center"><u><b>Apellido</b></u></TableCell>
                                <TableCell align="center"><u><b>Equipo</b></u></TableCell>
                                <TableCell align="center"><u><b>Edad</b></u></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableCell align="left">{data.id}</TableCell>
                            <TableCell align="center">{data.nombre}</TableCell>
                            <TableCell align="center">{data.apellido}</TableCell>
                            <TableCell align="center">{data.equipo}</TableCell>
                            <TableCell align="center">{data.edad}</TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>
    );
}
