/**
 * Maps incoming request data (Portuguese) to Database Schema format (English)
 * @param {Object} data - Raw payload from request body
 * @returns {Object} - Transformed data for the Order model
 */
const mapRequestToDb = (data) => {
  return {
    // Converts the order number to string and cleans it if necessary
    orderId: data.numeroPedido ? data.numeroPedido.toString().split('-')[0] : null,
    value: data.valorTotal,
    creationDate: new Date(data.dataCriacao),
    items: data.items ? data.items.map(item => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    })) : []
  };
};

module.exports = { mapRequestToDb };