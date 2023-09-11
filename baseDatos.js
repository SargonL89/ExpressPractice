async function placas() {
    try {
        const response = await fetch('https://64b93c8879b7c9def6c0ca35.mockapi.io/graphic-cards');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al solicitar las tarjetas gráficas:", error);
        throw error
    }
};

module.exports = placas