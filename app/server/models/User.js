const bcrypt = require('bcryptjs');
const Model = require('./Model');

module.exports = class extends Model {

  static get tableName(){ return 'users'; }

  static relationMappings = {
    votes: {
      modelClass: './Option',
      relation: Model.ManyToManyRelation,
      join: {
        from: 'users.id',
        through: {
          modelClass: './Vote'
          from: 'votes.user_id',
          to: 'votes.option_id'
        }
        to: 'options.id'
      }
    }
  }

};

// const bcrypt = require('bcryptjs');
// const Bookshelf = require('../utils/bookshelf');
//
// require('./Vote');
// const User = Bookshelf.model('User', {
//
//   tableName: 'users',
//
//   initialize(){
//     this.on('creating', async (model, attrs, options) => {
//       this.set('password', await bcrypt.hash(this.get('password'), 10));
//     });
//   },
//
//   votes(){ return this.hasMany('Vote'); },
//
//   authenticate(password){
//     return bcrypt.compare(password, this.get('password'));
//   }
//
// });
//
// module.exports = {
//   Model: User,
//   Collection: Bookshelf.Collection.extend({model: User})
// }
