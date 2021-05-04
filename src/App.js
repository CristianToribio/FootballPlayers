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



function Players() {
  const [dataplayers, setDataPlayers] = React.useState([]);
  const [dataold, setDataOld] = React.useState([]);
  const [datayoung, setDataYoung] = React.useState([]);
  const [datasub, setDataSub] = React.useState([]);
  const [dataages, setDataAges] = React.useState([]);

  const fetchData = async () => {
    const responseplayers = await fetch('http://localhost:9000/players');
    const responseold = await fetch('http://localhost:9000/oldestPlayer');
    const responseyoung = await fetch('http://localhost:9000/youngestPlayer');
    const responsesub = await fetch('http://localhost:9000/sub21Players');
    const responseages = await fetch(' http://localhost:9000/middleages');


    let textoplayers = await responseplayers.json();
    let textoold = await responseold.json();
    let textoyoung = await responseyoung.json();
    let textosub = await responsesub.json();
    let textoages = await responseages.json();

    setDataPlayers(textoplayers);
    setDataOld(textoold);
    setDataYoung(textoyoung);
    setDataSub(textosub);
    setDataAges(textoages);
  };

  React.useEffect(() => {
    fetchData();
  }, []);


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
    </Typography>
        <Button color="inherit">Login</Button>
        <React.Fragment>
          <Container maxWidth="md">
            <p><b>Todos los Jugadores del JSON:</b></p>
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
                  {dataplayers.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.nombre}</TableCell>
                      <TableCell align="center">{row.apellido}</TableCell>
                      <TableCell align="center">{row.equipo}</TableCell>
                      <TableCell align="center">{row.edad}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                  <TableCell align="left">{dataold.id}</TableCell>
                  <TableCell align="center">{dataold.nombre}</TableCell>
                  <TableCell align="center">{dataold.apellido}</TableCell>
                  <TableCell align="center">{dataold.equipo}</TableCell>
                  <TableCell align="center">{dataold.edad}</TableCell>
                </TableBody>
              </Table>
            </TableContainer>
            <p><b>El Jugador Mas Joven de la tabla de los jugadores</b></p>
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
                  <TableCell align="left">{datayoung.id}</TableCell>
                  <TableCell align="center">{datayoung.nombre}</TableCell>
                  <TableCell align="center">{datayoung.apellido}</TableCell>
                  <TableCell align="center">{datayoung.equipo}</TableCell>
                  <TableCell align="center">{datayoung.edad}</TableCell>
                </TableBody>
              </Table>
            </TableContainer>
            <p><b>Los Jugadores Sub21:</b></p>
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
                  {datasub.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.nombre}</TableCell>
                      <TableCell align="center">{row.apellido}</TableCell>
                      <TableCell align="center">{row.equipo}</TableCell>
                      <TableCell align="center">{row.edad}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <p><b>La media de la edad de los Jugadores de la tabla</b></p>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><u><b>Edad Media:</b></u></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell align="center">{dataages.edad}</TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </React.Fragment>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return <Players />;

}

export default App;