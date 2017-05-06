const Model = require('./Model');

module.exports = class extends Model {

  static get tableName(){ return 'options'; }

  static relationMappings = {
    topic: {
      modelClass: './Topic'
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'options.topic_id',
        to: 'topics.id'
      }
    }
  }

};
