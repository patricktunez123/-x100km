import { db } from "../../../config/firebase";
import { carActionTypes } from "../../actionTypes";

export const getCars = () => async (dispatch) => {
  try {
    dispatch({
      type: carActionTypes.GET_ALL_CARS_REQUEST,
    });

    await db.collection("cars").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data()?.name,
        Cilindrata: doc.data()?.Cilindrata,
        Potenza: doc.data()?.Potenza,
        subName: doc.data()?.subName,
        color: doc.data()?.color,
        kms: doc.data()?.kms,
        Tipo: doc.data()?.Tipo,
        button: doc.data()?.button,
      }));

      dispatch({
        type: carActionTypes.GET_ALL_CARS_SUCCESS,
        payload: data,
      });
    });
  } catch (error) {
    dispatch({
      type: carActionTypes.GET_ALL_CARS_FAIL,
      payload: error,
    });
  }
};
