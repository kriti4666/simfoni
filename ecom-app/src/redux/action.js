import productActionType from "./actionType";
import axios from "axios";

export const getImages = () => async (dispatch) => {
  dispatch({type: productActionType.GET_IMAGE_REQUEST})

  const options = {
    method: "GET",
    url: "https://wayfair.p.rapidapi.com/products/get-images",
    params: { sku: "W003078383" },
    headers: {
      "X-RapidAPI-Key": "fd97ccea40mshf5e99247ef2ca55p19ca24jsnfbb63dde9cdd",
      "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data.response.data.product.images;
    dispatch({type: productActionType.GET_IMAGE_SUCCESS, payload: data})
} catch (error) {
    console.error(error);
    dispatch({type: productActionType.GET_IMAGE_FAILURE})
  }
};
