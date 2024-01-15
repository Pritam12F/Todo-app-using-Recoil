import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RecoilRoot } from "recoil";
import { Todos } from "./components/Todos";
import { Add } from "./components/Add";

function App() {
  return (
    <RecoilRoot>
      <Todos></Todos>
      <Add></Add>
    </RecoilRoot>
  );
}

export default App;
