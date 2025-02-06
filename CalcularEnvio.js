const moment = require('moment');


function calcularCostoEnvio(peso, distancia) {
  const costoBase = 50.00;
  let recargoPeso = 0;
  let recargoDistancia = 0;


  if (peso > 5) {
    recargoPeso = (peso - 5) * 20.00;
  }


  if (distancia > 50) {
    recargoDistancia = (distancia - 50) * 10.00;
  }


  const costoTotal = costoBase + recargoPeso + recargoDistancia;


  const fechaHoy = moment();
  const tiempoTransporte = Math.ceil(distancia / 100); 
  const fechaEntrega = fechaHoy.add(2 + tiempoTransporte, 'days').format('YYYY-MM-DD');


  console.log(`Costo base: L${costoBase.toFixed(2)}`);
  console.log(`Recargo por peso: L${recargoPeso.toFixed(2)}`);
  console.log(`Recargo por distancia: L${recargoDistancia.toFixed(2)}`);
  console.log(`Costo total: L${costoTotal.toFixed(2)}`);
  console.log(`Fecha estimada de entrega: ${fechaEntrega}`);
}
