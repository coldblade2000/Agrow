import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Form, Modal} from "react-bootstrap";
import {useForm} from "react-hook-form";

const Stages = ({sendAlert}) => {
    //Lista de etapas
    const [stages, setStages] = useState([])
    //Mostrar el popup de crear etapa
    const [showModal, setShowModal] = useState(false)
    //Hooks de React-hook-form
    const { register, handleSubmit } = useForm();

    // Se cargan las etapas del backend
    const loadStages = async () => {
        try {
            const loadedStages = await axios.get(process.env.REACT_APP_BACKEND_URL + "/stages")
            console.log(loadedStages)
            if (loadedStages && loadedStages.data.length > 0 && loadedStages.data !== stages)
                setStages(loadedStages.data)
        } catch (e) {
            console.error(e)
            if (stages !== [])
                setStages([])
        }

    }

    //Un metodo que corre cuando ya se renderea el componente, solo corre cada vez que cambia
    //  la longitud de stages. Ejecuta la funcion asincronica de loadStages()
    useEffect(() => {
        loadStages().catch()
    }, [stages.length])

    // Que hacer cuando una etapa nueva es creada en el formulario
    const submitNewStage = (data) => {
        const newStage = {
            name: data.formAddStageName,
            location: data.formAddStageLocation,
            description: data.formAddStageDescription
        }
        console.log("Creating new stage: ")
        console.log(newStage)
        axios.post(process.env.REACT_APP_BACKEND_URL + "/stages", newStage)
            .then((res)=>{
                loadStages()
                setShowModal(false)
            })
            .catch((e)=>{
                console.error(e)
                //Se muestra una alerta si hubo un error creando la etapa
                sendAlert("alert-danger", "Error while creating stage")
                setShowModal(false)
            })
    }

    return (
        <>
            <div className="landingDiv d-flex flex-column align-items-center h-100">
                <h2 className="text-center">Stages</h2>
                <div className="row w-100 justify-content-center">
                    <div className="col-md-6">
                        <Button variant="success" onClick={()=>setShowModal(true)}>+ Add stage</Button>
                        {/*Solo renderear las cards de las etapas si stages es un arreglo con mas de 0 elementos*/}
                        {stages && stages.map((stage) =>
                            <Card key={stage.id} className="w-100 my-2">
                                <Card.Body>
                                    <Card.Title>{stage.name}</Card.Title>
                                    {stage.location && <Card.Subtitle>{stage.location}</Card.Subtitle>}
                                    {stage.description && <Card.Text>
                                        {stage.description}
                                    </Card.Text>}
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
            {/*El modal para crear la etapa*/}
            {/*Referencias:
            Para crear y gestionar el formulario - React-hook-form: https://react-hook-form.com/get-started#Integratinganexistingform
            Para la parte visual de React-Bootstrap: https://react-bootstrap.github.io/forms/overview/
            */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add stage</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(submitNewStage)}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formAddStageName">
                            <Form.Label>Stage name</Form.Label>
                            <Form.Control {...register("formAddStageName", {required:true, minLength:1})} type="text" placeholder="Enter stage name"/>
                            <Form.Text className="text-muted">
                                We suggest something like 'Stage 7: Dehydration'
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAddStageLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control {...register("formAddStageLocation")} type="text" placeholder="Describe where the stage is carried out"/>
                            <Form.Text className="text-muted">
                                Optional
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddStageDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control {...register("formAddStageDescription")} type="text" placeholder="Describe the stage"/>
                            <Form.Text className="text-muted">
                                Optional
                            </Form.Text>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={() => setShowModal(false)}>
                            Save Stage
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
export default Stages
