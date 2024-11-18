import Menu from "../Menu/Menu";
import powerballoonicon from "../../app/favicon.ico";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header className="bg-dark-blue text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Image src={powerballoonicon} alt="PowerBalloon Logo" width={50} height={50}/>
          <h1 className="text-2xl font-bold">PowerBalloon</h1>
        </div>
        <Menu/>
      </div>
    </header>
  );
}