const BucketListModel = require("../models/bucketListModel")

async function getBucketList(req,res){
    try{
        let bucketlistItems = await BucketListModel.find({});
        console.log(bucketlistItems)
        res.send({bucketlist: bucketlistItems})
    } catch (err){
        res.send({message: err.message, response: false})
    }
}
module.exports = {
    getBucketList,
}