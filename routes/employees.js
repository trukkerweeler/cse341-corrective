const router = require('express').Router();
const employeesController = require('../controllers/employees');

router.get('/', employeesController.getAll);

router.get('/:id', employeesController.getOne);

router.post('/', employeesController.createEmployee);

router.put('/:id', employeesController.updateEmployee);

router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;