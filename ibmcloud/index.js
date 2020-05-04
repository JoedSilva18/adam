/**
 *
 * main() será executado quando você chamar essa ação
 *
 * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
 *
 * @return A saída dessa ação, que deve ser um objeto JSON.
 *
 */

const axios = require('axios');

async function main(params) {
  switch (params.intent) {
    case 'verificaDisponibilidade': {
      const { productId, userId } = params;

      const { data } = await axios.get(
        `https://adam-backend.herokuapp.com/findEstoque/user/${userId}/product/${productId}`
      );

      return { result: data.result };
    }

    case 'caracteristicasProduto': {
      const { atributos, productId, userId, intent, input } = params;

      await axios.post(
        `https://adam-backend.herokuapp.com/storeAnalytics/user/${userId}/product/${productId}/atributos/${intent}`
      );

      let result;

      if (atributos != null) {
        result = await axios.get(
          `https://adam-backend.herokuapp.com/checkProduct/user/${userId}/product/${productId}/atributos/${atributos}`
        );
        return { result: result.data.result };
      }

      if (atributos === null || result.data.result === '') {
        result = await axios.post(
          `https://adam-backend.herokuapp.com/checkQuestion/product/${productId}`,
          {
            input,
          }
        );

        return { result: result.data.result };
      }

      return { result: input };
    }

    case 'formaPagamento': {
      const { productId, userId, intent } = params;

      await axios.post(
        `https://adam-backend.herokuapp.com/storeAnalytics/user/${userId}/product/${productId}/atributos/${intent}`
      );

      return { result: '' };
    }

    case 'freteEPrazo': {
      const { productId, userId, intent } = params;

      await axios.post(
        `https://adam-backend.herokuapp.com/storeAnalytics/user/${userId}/product/${productId}/atributos/${intent}`
      );

      return { result: '' };
    }

    case 'NFEGarantia': {
      const { productId, userId, intent } = params;

      await axios.post(
        `https://adam-backend.herokuapp.com/storeAnalytics/user/${userId}/product/${productId}/atributos/${intent}`
      );

      return { result: '' };
    }

    case 'originalidade': {
      const { productId, userId, intent } = params;

      await axios.post(
        `https://adam-backend.herokuapp.com/storeAnalytics/user/${userId}/product/${productId}/atributos/${intent}`
      );

      return { result: '' };
    }

    case 'SPAM': {
      const { productId, userId, intent } = params;

      await axios.post(
        `https://adam-backend.herokuapp.com/storeAnalytics/user/${userId}/product/${productId}/atributos/${intent}`
      );

      return { result: '' };
    }

    case 'naoIdentificado': {
      const { productId, userId, intent, input } = params;

      await axios.post(
        `https://adam-backend.herokuapp.com/storeAnalytics/user/${userId}/product/${productId}/atributos/${intent}`
      );

      const result = await axios.post(
        `https://adam-backend.herokuapp.com/checkQuestion/product/${productId}`,
        {
          input,
        }
      );

      return { result: result.data.result };
    }

    default:
      break;
  }
  return { result: params.color };
}
