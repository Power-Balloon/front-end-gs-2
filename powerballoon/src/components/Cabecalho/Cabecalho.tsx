import Menu from "../Menu/Menu";
import powerballoonicon from "../../app/favicon.ico";
import Image from "next/image";

export default function Cabecalho(){
    return(
        <header>
            <div className="logo">
                <Image src={powerballoonicon} alt="PowerBalloon Logo" width={100} height={100}/>
            <h1 className="cabecalho">Cabecalho</h1>
            </div>
            <Menu/>
        </header>
    )
}