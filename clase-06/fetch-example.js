/* 
    1. fetchWithTimeout: Implementa un tiempo de espera para evitar que las 
    solicitudes se queden colgadas indefinidamente.
    2. Manejo de errores: Se verifica si la respuesta es válida (response.ok)
    y se captura cualquier error.
    3. Paginación: Se recorren todas las páginas de resultados utilizando el 
    campo info.next de la API.
    4. Configuración avanzada: Incluye encabezados personalizados y soporte
    para métodos HTTP.
    Este ejemplo es útil para manejar grandes volúmenes de datos y garantizar
    que las solicitudes sean robustas.
*/

const fetchWithTimeout = (url, options, timeout = 3000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout)
    ),
  ]);
};

const fetchRickAndMortyData = async (endpoint, config) => {
  try {
    const response = await fetchWithTimeout(`https://rickandmortyapi.com/api/${endpoint}`, config);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data:', data);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const config = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token', // Reemplaza con un token válido si es necesario
  },
};

const fetchAllCharacters = async () => {
  let nextPage = 'character';
  const allCharacters = [];

  while (nextPage) {
    const data = await fetchRickAndMortyData(nextPage, config);
    if (data) {
      allCharacters.push(...data.results);
      nextPage = data.info.next ? data.info.next.replace('https://rickandmortyapi.com/api/', '') : null;
    } else {
      nextPage = null;
    }
  }

  console.log('All Characters:', allCharacters);
};

fetchAllCharacters();