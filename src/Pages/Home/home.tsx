import { useNavigate } from "react-router-dom";
import { Chartjs } from "../../components/ChartJs/teste";
import { Chartjs2 } from "../../components/ChartJs/teste2";
import { Chartjs3 } from "../../components/ChartJs/teste3";
import { Chartjs4 } from "../../components/ChartJs/teste4";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-around">
        <div />
        <p className="mt-10 text-center font-Anton text-3xl">CHART JS</p>
        <button
          onClick={() => navigate("/home2")}
          className="bg-violet-600 p-3 rounded-md  text-white"
        >
          eChart
        </button>
      </div>
      <Chartjs />
      <Chartjs2 />
      <Chartjs3 />
      <Chartjs4 />
    </div>
  );
}
