var express = require('express');
const Stage = require("../models/Stage");
var router = express.Router();

/* GET stages listing. */
router.get('/', function (req, res, next) {
    Stage.findAll().then((stages)=>{
        res.send(stages)
    }).catch((e)=>{
        console.error(e)
        res.status(500).send("ERROR: No se pudo conseguir todas las etapas")
    })
});

/* POST stages listing. */
router.post('/', async function (req, res, next) {
    try{
        const stage = await Stage.create(req.body)
        console.log("Se creo etapa: " + JSON.stringify(stage))
        const stages = Stage.findAll()
        res.send(stages)
    }catch (e) {
        console.error(e)
        res.status(500).send("ERROR: No se pudo guardar la etapa")
    }
});

/* PUT stages listing. */
router.put('/:id', async function (req, res, next) {
    try{
        const sequelizeResponse = await Stage.update(req.body, {where:{ id: req.params.id }})
        if (sequelizeResponse[0] !== 0){
            console.log("Se edito etapa")
            res.send("Etapa actualizada")
        }else{
            console.log("No se encontro la etapa "+req.params.id)
            res.status(404).send(`Etapa de ID ${req.params.id} no se encontro`)
        }

    }catch (e) {
        console.error(e)
        res.status(500).send("ERROR: No se pudo editar la etapa")
    }
});

router.delete("/:id", (req, res) => {
    Stage.destroy({
        where: {
            id: req.params.id,
        },
    }).then((response) => {
        if (response === 1) res.status(204).send();
        else res.status(404).send({message: `Etapa de ID ${req.params.id} no se encontro`});
    });
});

module.exports = router;
