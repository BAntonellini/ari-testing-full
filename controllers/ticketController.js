const request = require('request');

const TC_ORIGEN = "Autogestión";
const REQUESTED_BY = "X001906";
const SERVICIO_AFECTADO = "Mis Dispositivos";
const CATEGORIAS = ['INCIDENTE', 'SOLICITUD'];
const SUBCATEGORIAS = ['ACCESO', 'ADMINISTRACION', 'APLICACION', 'CONECTIVIDAD', 'CORREO', 'DATOS', 'FALLA', 'HARDWARE', 'INFORMACION GENERAL', 'INFORMACION IT', 'SOFTWARE']
const AREA = "RECURSOS INSUFICIENTES";
const IMPACTO = "4";
const URGENCIA = "4";
const GRUPO_DE_ASIGNACION = "MI_T_AMBA_X_LOGISTICA";


/*var ticketStructure = {
    "IMmain":{        
    "Tc_Origen":"Autogestión",        
    "Requested_By":"Z001482",        
    "Servicio_afectado":"Mis Dispositivos",        
    "CI_afectado":"0002716215",        
    "Contacto":"U166133",        
    "Título":"Falla en el hardware",        
    "Descripción":"No está funcionando bien el dispositivo",        
    "Categoría":"INCIDENTE",        
    "Subcategoría":"HARDWARE",        
    "Área":"RECURSOS INSUFICIENTES",        
    "Impacto":"4",        
    "Urgencia":"4",        
    "Grupo_de_asignación":"MI_T_AMBA_X_LOGISTICA"        
    }        
}*/

exports.ticketHome = async (req, res) => {
    res.render('index', {
        nombrePagina: "Home",
    })
}

exports.crearTicket = async (req, res) => {
    res.render('crearTicket', {
        nombrePagina: 'Creacion de Ticket',
        categorias: CATEGORIAS,
        subcategorias: SUBCATEGORIAS,
    })
}

exports.formularioTickets = async (req, res, next) => {
    var ticket = {
        "IMmain": {
            "Tc_Origen": TC_ORIGEN,
            "Requested_By": REQUESTED_BY,
            "Servicio_afectado": SERVICIO_AFECTADO,
            "CI_afectado": req.body.ci_afectado,
            "Contacto": req.body.contacto,
            "Título": req.body.titulo,
            "Descripción": req.body.descripcion,
            "Categoría": req.body.categoria,
            "Subcategoría": req.body.subcategoria,
            "Área": AREA,
            "Impacto": IMPACTO,
            "Urgencia": URGENCIA,
            "Grupo_de_asignación": GRUPO_DE_ASIGNACION,
        }
    }
    console.log(req.body);
    console.log(typeof (req.body));

    var auth = new Buffer("X001906" + ':' + "bVjrEKZqVrJhctWoTC").toString('base64');
    var requestTktCreation = {
        url: 'http://10.75.255.51:13080/SM/9/rest/incidentes',
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + auth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket),
    }


    request(requestTktCreation, callback);

    function callback(err, res, body) {
        console.log(body);
    }

    next();
}


exports.editTicket = async (req, res) => {

}

exports.cerrarTicket = async (req, res) => {

}

exports.borrarTicket = async (req, res) => {

}