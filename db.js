module.exports = () => ({
    players: players,
    oldestPlayer: oldestPlayer(players),
    youngestPlayer: youngestPlayer(players),
    middleages: middleages(players),
    sub21Players: sub21Players(players)
});

const generatePlayers = (num) => {
    const data = []
    const nombres = ["Sergio", "Rafael", "Karim", "Jordi", "Lionel"];
    const apellidos = ["Ramos", "Varane", "Benzema", "Alba", "Messi"];
    const equipos = ["Real Madrid", "Barcelona"];
    const url = ["https://es.wikipedia.org/wiki/Sergio_Ramos", "https://es.wikipedia.org/wiki/Rapha%C3%ABl_Varane", "https://es.wikipedia.org/wiki/Karim_Benzema", "https://es.wikipedia.org/wiki/Jordi_Alba", "https://es.wikipedia.org/wiki/Lionel_Messi"];
    let aleatorio
    let edad
    for (let i = 0; i < num; i++) {
        aleatorio = Math.floor((Math.random() * (4 - 0 + 1)) + 0)
        edad = Math.floor((Math.random() * (45 - 16 + 1)) + 16)
        switch (aleatorio) {
            case 0:
                data.push({ id: i + 1, nombre: nombres[aleatorio], apellido: apellidos[aleatorio], equipo: equipos[0], edad: edad, url: url[0] })
                break;
            case 1:
                data.push({ id: i + 1, nombre: nombres[aleatorio], apellido: apellidos[aleatorio], equipo: equipos[0], edad: edad, url: url[1] })
                break;
            case 2:
                data.push({ id: i + 1, nombre: nombres[aleatorio], apellido: apellidos[aleatorio], equipo: equipos[0], edad: edad, url: url[2] })
                break;
            case 3:
                data.push({ id: i + 1, nombre: nombres[aleatorio], apellido: apellidos[aleatorio], equipo: equipos[1], edad: edad, url: url[3] })
                break;
            case 4:
                data.push({ id: i + 1, nombre: nombres[aleatorio], apellido: apellidos[aleatorio], equipo: equipos[1], edad: edad, url: url[4] })
                break;
        }
    }
    return data
}

function oldestPlayer(data) {
    let datosmayor = ""
    let max = data[0].edad
    data.forEach(FuncMayor)
    function FuncMayor(value) {
        if (value.edad > max) {
            max = value.edad
            datosmayor = value
        }
    }
    return datosmayor
}

function youngestPlayer(data) {
    let datosmenor = ""
    let min = data[0].edad
    data.forEach((value) => {
        if (value.edad < min) {
            min = value.edad
            datosmenor = value
        }
    });
    return datosmenor
}

function middleages(data = []) {
    let media = data.reduce(function (acumulador, siguienteValor) {
        return {
            edad: acumulador.edad + siguienteValor.edad
        };
    });
    media.edad = media.edad / data.length
    return { edad: Math.round(media.edad) }
}

function sub21Players(data = []) {

    let jugadores21 = []

    for (let i = 0; i < data.length; i++) {
        if (data[i].edad <= 21) {
            jugadores21.push({ id: data[i].id, nombre: data[i].nombre, apellido: data[i].apellido, equipo: data[i].equipo, edad: data[i].edad, url: data[i].url })
        }
    }
    return jugadores21

}

const players = generatePlayers(1000);
