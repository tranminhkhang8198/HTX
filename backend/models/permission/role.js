const _ = require('lodash');
/**
 * Permission roles
 * G: GET
 * P: POST 
 * U: PATCH
 * D: DELETE
 * 
 */
class Role{

    constructor(app){
        this.app = app;
    }

    /**
     * Create new role
     * @param {string} role 
     * @param {callback fucntion} cb 
     */
    create(role, cb = () => {}){
        const collection = this.app.db.collection('role');
    
        const obj = {
            _id: _.get(role,'_id'),
            permission: _.get(role, 'permission'),
            created: new Date()
        }


        collection.insertOne(obj, (err, result) =>{

            if(err){
                return cb({error: "error iserting role"}, null);
            }
            else{
                return cb(null, result);
            }
        })

        
    }

    /**
     * Compare user method with allow method on resource
     * @param {string} method 
     * @param {string} allowRole 
     * @param {callback function} cb 
     */
    compare(method, allowRole, cb = () =>{}){


        // Get protocol id
        const collection = this.app.db.collection('role');
        const query = {
            permission: `${method}`
        }
        const options = {
            _id: 1
        }
        collection.find(query, options).limit(1).toArray((err, result) => {
            if(err || !_.get(result, '[0]')){
                return cb(err, null);
            }
            else{
                const compare = allowRole.indexOf(result[0]._id.toString())
                if(compare>-1){
                    return cb(null, true);
                }
                else{
                    return cb({err: "Access dinied"});
                }
            }
        })


    }
}

module.exports = Role