import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "../features/data/dataSlice";

const DataLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      dispatch(fetchStart());
      try {
        const res = await fetch("/portfolioInfo.json");
        if (!res.ok) throw new Error("Failed to load JSON");
        const json = await res.json();
        dispatch(fetchSuccess(json));
      } catch (err) {
        dispatch(fetchFailure(err.message));
      }
    };

    loadData();
  }, [dispatch]);

  return null;
};

export default DataLoader;
