import { useSelector } from "react-redux";

// получаем данные

const ViewName = () => {
  // Берет значение из редюсера ?
  const storeName = useSelector((state) => state.nameReducer.name);

  return <h1> {storeName} </h1>;
};

export default ViewName;
