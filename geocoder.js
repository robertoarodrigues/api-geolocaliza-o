const NodeGeocoder = require('node-geocoder')

const distance = (lat1, lon1, lat2, lon2, unit) => {
    
      if ((lat1 == lat2) && (lon1 == lon2)) {
              return 0;
      }
      else {
              const radlat1 = Math.PI * lat1/180;
              const radlat2 = Math.PI * lat2/180;
              const theta = lon1-lon2;
              const radtheta = Math.PI * theta/180;
              let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
              if (dist > 1) {
                dist = 1;
              }
              dist = Math.acos(dist);
              dist = dist * 180/Math.PI;
              dist = dist * 60 * 1.1515;
              if (unit=='K') { dist = dist * 1.609344 }
              if (unit=='N') { dist = dist * 0.8684 }
              
              return dist;
    }
}

var options = {
      provider: 'google',
      httpAdapter: 'https', 
      apiKey: 'Inserir Chave de Acesso da aqui', 
      formatter: null        
  }

  const geocoder = NodeGeocoder(options)

  const batchGeocode = (adress) => {
    return new Promise((resolve, reject) => {
           geocoder.batchGeocode(adress, (err, results) => {
                  if (err) reject(err)
                      resolve(results)
                    })
            })
}

const distanciascalculadas = []

module.exports = async address => {
    
    const results = await batchGeocode(address)
    const values = results.map(item => item.value)

    for (let i = 0; i < values.length; i++) {
      for (let k = i + 1; k < values.length; k++) {
        
        const atual = values[i]
        const proximo = values[k]
  
        const lat1 = atual[0].latitude
        const log1 = atual[0].longitude
  
        const lat2 = proximo[0].latitude
        const log2 = proximo[0].longitude

        
        const distancia = `Distancia: ${distance(lat1, log1, lat2, log2, 'K')}
                          Origem: ${atual[0].streetName}
                          Destino: ${proximo[0].streetName}
                          `

        distanciascalculadas.push(distancia)
      }
    }
            
   return distanciascalculadas.sort()

  }



 