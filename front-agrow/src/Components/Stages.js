import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Stages = ({}) => {
    const [stages, setStages] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        const loadStages = async () => {
            try {
                const loadedStages = await axios.get(process.env.BACKEND_URL)
                console.log(loadedStages)
                setStages(loadedStages.data)
            } catch (e) {
                console.error(e)
                setStages([])
            }

        }
        loadStages().catch()
    }, [stages])

    return (
        <>
            <div className="landingDiv d-flex flex-column align-items-center h-100">
                <h2 className="text-center">Stages</h2>
                <Link to={"/stages"}>
                    <button type="button" className="btn btn-success" onClick={()=>setShowModal(true)}>Try Agrow</button>
                </Link>
            </div>
            {showModal && <div className="modal show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Crear etapa</h5>
                            <button type="button" className="btn-close" onClick={()=>setShowModal(false)}
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={()=>setShowModal(false)}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
export default Stages
