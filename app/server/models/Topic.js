const Model = require('./Model');

module.exports = class extends Model {

  static get tableName(){ return 'topics'; }

  static relationMappings = {
    options: {
      modelClass = './Option',
      relation: Model.HasManyRelation,
      join: {
        from: 'topics.id',
        to: 'options.topic_id'
      }
    }
  }

};
