var con = require('../config/connectionServices');
var connection = con.connection;

/*To get risk by Their date*/
exports.getrisk = function (req, res) {
  var myActualQuery = 'SELECT * from tbl_Risk WHERE RecordTime >= \'2018-11-11\' AND RecordTime <= date_add( \''+ req.params.date +'\', INTERVAL 1 DAY)AND IsActive = 1';
  connection.query(myActualQuery, function (error, results, fields) {
    if (error){
        res.json({
            status:false,
            message:'there are some error with query',
            data : (!results)?error.sqlMessage:results
        })
    }else{
      res.json({
          status:true,
          message:'All risk data',
          data:results
      })
    }
  });
};

/*to create and update the risk*/
exports.setrisk = function (req, res) {
  var myActualQuery = null;
  console.log(req.body);
  if(req.body.RiskId > 0){
    myActualQuery = 'SELECT * from tbl_RiskUpdate WHERE UpdatedRiskDate = \''+ req.body.UpdatedRiskDate +'\' AND IsActive = 1';
    console.log(myActualQuery);
    connection.query(myActualQuery, req.body , function (error, results, fields) {
      if (error){
          res.json({
              status:false,
              message:'there are some error with query',
              data : (!results)?error.sqlMessage:results
          })
      }else{
        if(results.length > 0){
          console.log(results);
          myActualQuery = 'UPDATE tbl_RiskUpdate SET ? WHERE RiskId =' + req.body.RiskId + ' AND UpdatedRiskDate = \''+ req.body.UpdatedRiskDate +'\'';
        }else{
          console.log(results);
          myActualQuery = 'INSERT INTO tbl_RiskUpdate SET ?';
        }
        console.log(myActualQuery);
        connection.query(myActualQuery, req.body , function (error, results, fields) {
          if (error){
              console.log(results , error, fields);
              res.json({
                  status:false,
                  message:'there are some error with query',
                  data : (!results)?error.sqlMessage:results
              })
          }else{
            console.log('2');
            res.json({
                status:true,
                message:(req.body.RiskId > 0) ? 'Record Updated Successfully' : 'Record Inserted successfully',
                data:results
            })
          }
        });
      }
    });
  }else{
    myActualQuery = 'INSERT INTO tbl_Risk SET ?';
    connection.query(myActualQuery, req.body , function (error, results, fields) {
      if (error){
          res.json({
              status:false,
              message:'there are some error with query',
              data : (!results)?error.sqlMessage:results
          })
      }else{
        res.json({
            status:true,
            message:(req.body.Id > 0) ? 'Record Updated Successfully' : 'Record Inserted successfully',
            data:results
        })
      }
    });
  }
};

/*to delete the record*/
exports.deleterisk = function (req, res) {
  var myActualQuery = 'UPDATE tbl_Risk SET IsActive = 0 WHERE Id =' + req.body.Id;
  connection.query(myActualQuery, req.body , function (error, results, fields) {
    if (error){
        res.json({
            status:false,
            message:'there are some error with query',
            data : (!results)?error.sqlMessage:results
        })
    }else{
      res.json({
          status:true,
          message:'Record Deleted Successfully',
          data:results
      })
    }
  });
};