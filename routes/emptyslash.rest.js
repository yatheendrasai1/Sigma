const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "Description": "This is a Web App which can be used as a constant reminder",
        "/tasks": "CRUD for creation of tasks"
    });
})
  
router.post('/',(req, res)=>{
    res.json({
        "Description": "This is a Web App which can be used as a constant reminder",
        "/tasks": "CRUD for creation of tasks"
    });
})

module.exports = router;