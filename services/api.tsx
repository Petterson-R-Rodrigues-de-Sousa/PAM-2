const API_HOST = 'https://dattebayo-api.onrender.com';
//URL usada para se conectar ao site

export default async function fetchCharacters () {
    try {
        const response = await fetch (`${API_HOST}/characters`)
        //O API_HOST serve como variável para se conectar ao site, o /characters serve como ponto de parada

        // verifica a resposta
        if (!response.ok) {
            throw Error(`${response.status} - ${response.statusText}`);
            //Serve para dizer o status da conexão
        }
        return await response.json();
    } catch (error) {
        console.log ("Erro ao buscar personagens: ", error)
        return [];
    }
}