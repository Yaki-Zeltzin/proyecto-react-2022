import { useParams } from "react-router-dom";
import usePetition from "../hocks/usePetition";
import "./CriptoPage.css"
import CriptoHitorial from "./info/CriptoHistorial";
import CriptoInfo from "./info/CriptoInfo";

const CriptoPage = () => {

    const params = useParams();

    const cripto = usePetition(`assets/${params.id}`);
    const history = usePetition(`assets/${params.id}/history?interval=d1`);

    return (
        <div className="cripto-page-container">
            {
                cripto && <CriptoInfo cripto={cripto} />
            }
            {
                history && <CriptoHitorial history={history}/>
            }
        </div>
    )
}

export default CriptoPage;