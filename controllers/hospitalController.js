const fs = require("fs");

const getHospitalData = (req,res) => {
    res.status(200).json({message: 'Get Hospital Data'});
};

const postHospitalData = (req,res) => {
    // console.log(req.body)
    
    const data = req.body
    const hospitalDatas = JSON.parse(fs.readFileSync('hospitalData.json', "utf-8"))
    const hospitalList = hospitalDatas.hospitalData
    hospitalList.push(data)
    hospitalDatas.hospitalData = hospitalList


    fs.writeFileSync("hospitalData.json", JSON.stringify(hospitalDatas), () => {
    if (error) {
        console.log("error", error);
    }
    console.log("write complete");
    });
    res.status(200).json({message: 'Added Hopsital Data'});
};

const putHospitalData = (req,res) => {
    res.status(200).json({message: `Update data with id ${req.params.id}`});
}

const deleteHospitalData = (req,res) => {
    res.status(200).json({message: `Deleted data with id ${req.params.id}`});
}


module.exports = {getHospitalData, postHospitalData, putHospitalData, deleteHospitalData}