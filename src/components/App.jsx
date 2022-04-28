import { useDispatch } from "react-redux";
import { setName } from "../store/actions";

const App = () => {
  const dispatch = useDispatch();

  const changeName = () => {
    dispatch(
      setName({
        name: "Luke"
      })
    );
  };

  return <button onClick={changeName}> Change Name </button>;
};

export default App;
