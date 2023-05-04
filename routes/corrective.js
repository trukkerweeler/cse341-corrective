const router = require('express').Router();
const correctiveController = require('../controllers/corrective');
const validateDescription = require('../validator');

router.get('/', correctiveController.getAll);

router.get('/:id', correctiveController.getOne);

// router.post('/', validateDescription.validateAssignedTo, correctiveController.createCorrective);
router.post('/', correctiveController.createCorrective);

router.put('/:id', correctiveController.updateCorrective);

router.delete('/:id', correctiveController.deleteCorrective);

module.exports = router;