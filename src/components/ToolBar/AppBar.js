import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const options = [
  'Jugadores',
  'Jugador Más Veterano',
  'Jugador Más Joven',
  'Edad Media',
  'Sub21',
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function ElevateAppBar(props) {
  const { onChange } = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //actualiza la url a la misma url
  const actualizar = () => {
    window.location.href = window.location.href;
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    onChange(index);
    setAnchorEl(null);
    cambiarTitulo(index);
  };

  //cambia el titulo segun la tabla que se muestra
  function cambiarTitulo(index) {
    document.getElementById('titulo').innerHTML = options[index];
  };


  //para hacer que baje quitar la opcion de position sticky
  return (
    <div className={classes.root}>
      <AppBar position="sticky"> 
        <Toolbar>
          <Typography variant="h6" className={classes.title} align="center">
            <h5 id="titulo">Jugadores</h5>
          </Typography>
          <div>
            <IconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
