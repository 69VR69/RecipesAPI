import express from 'express';
import { StepService } from '../services/stepService.js';
import { StepIdValidator, StepValidator } from './stepValidator.js';

const router = express.Router();
const stepService = new StepService();

// GET Get all step of the recipe
router.get('/', (req,resp) => {
    stepService.getSteps(req,resp)
    .then((step) => {
        resp.status(200).json(step);
    })

});

// POST  add a new step to a recipe
router.post('/', (req,resp) => {
    let step = req.body;

    const res = StepValidator.validate(step)
    if (res.error) {
        resp.status(400).send(res.error.message);
        return;
    }

    stepService.createStep(step, resp)
        .then((step) => {
            resp.status(201).json(step);
        })
        .catch((error) => {
            console.error(error);
            resp.status(500).send('Internal Server Error');
        });

    
});

//GET  get a stepe by id 
router.get('/:id', (req,resp) => {
    const stepId = req.params.id;
        if (!stepId) {
            resp.status(400).send('Step ID is required');
            return;
        }

        if (StepValidator.validate({ id: stepId }).error) {
            resp.status(400).send('Step ID must be a number');
            return;
        }

        const id = parseInt(stepId);

        stepService.getStep(id, resp);
});

//PUT Update a a step 
router.put('/:id', (req,resp) => {
    const step = req.body;
    const stepId = req.params.id;

    const res = StepValidator.validate(step)
    if (res.error) {
        resp.status(400).send(res.error.message);
        return;
    }

    if (StepIdValidator.validate({ id: stepId }).error) {
        resp.status(400).send('Step ID must be a number');
        return;
    }

    //const id = parseInt(stepId);

    stepService.updateStep( step, resp)
        .then((step) => {
            resp.status(204).json(step);
        })
        .catch((error) => {
            console.error(error);
            resp.status(500).send('Internal Server Error');
        });
}
);

//DELETE  Delete a step 
router.delete('/:id', (req,resp) => {
    const StepId = req.params.id;

        // check if the recipe id is a number
        if (StepIdValidator.validate({ id: StepId }).error) {
            resp.status(400).send('Step ID must be a number');
            return;
        }

        //const id = parseInt(StepId);

        stepService.deleteStep(req, resp)
            .then(() => {
                resp.status(204).send();
            })
            .catch((error) => {
                console.error(error);
                resp.status(500).send('Internal Server Error');
            });
    }
);




export default router;