// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function asignarAmigoSecreto(participantes) {
    if (participantes.length < 2) {
        console.log("Se necesitan al menos dos participantes.");
        return;
    }
    
    let asignaciones = {};
    let disponibles = [...participantes];
    
    for (let participante of participantes) {
        let posibles = disponibles.filter(p => p !== participante);
        
        if (posibles.length === 0) {
            return asignarAmigoSecreto(participantes); // Reintentar si no hay opciones válidas
        }
        
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[participante] = elegido;
        disponibles = disponibles.filter(p => p !== elegido);
    }
    
    return asignaciones;
}

// Ejemplo de uso
let participantes = ["Ana", "Luis", "Pedro", "Sofía", "Carlos"];
let resultado = asignarAmigoSecreto(participantes);
console.log(resultado);
