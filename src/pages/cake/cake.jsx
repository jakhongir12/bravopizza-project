import React, { useEffect } from "react";
import { useFetch } from "../../components/useFetch";
import Main from "../Main/main";
import { useDispatch } from "react-redux";
import { foodsData } from "../../store/item/item-action";
import Loader from "../loader/loader";

const Cake = () => {
  const dispatch = useDispatch();

  const APP_ID = "57e2140e";
  const APP_KEY = "8296dd333e28a28ed070e8554821dfeb";
  const { data, error, loading } = useFetch(
    `https://api.edamam.com/search?q=cake&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`
  );

  const pizza = data?.hits?.map((item) => item.recipe);

  useEffect(() => {
    if (data?.hits) {
      dispatch(foodsData(data.hits.map((item) => item.recipe)));
    }
  }, [data, dispatch]);

  return (
    <div>
      {error && <p role="alert">Unable to load recipes: {error}</p>}
      <Main pizza={pizza} />
      <Loader loading={loading} />
    </div>
  );
};

export default Cake;


// created by Ravshan
