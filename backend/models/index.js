const User = require('./user');
const Token = require('./token');
const Role = require('./permission/role');
const Resource = require('./permission/resource');
const Permission = require('./permission/permission');

class Model{

    constructor(app){

        this.app = app;
        this.user = new User(app);
        this.token = new Token(app);
        this.role = new Role(app);
        this.resource = new Resource(app);
        this.permission = new Permission(app);
    }
}
module.exports = Model;