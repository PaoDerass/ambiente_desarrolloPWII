
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
  }
  