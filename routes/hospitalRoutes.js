const express = require("express");
const router = express.Router();
const{getHospitalData, postHospitalData, putHospitalData, deleteHospitalData} = require("../controllers/hospitalController")

router.route('/').get(getHospitalData).post(postHospitalData);
router.route('/:id').put(putHospitalData).delete(deleteHospitalData);

module.exports = router;