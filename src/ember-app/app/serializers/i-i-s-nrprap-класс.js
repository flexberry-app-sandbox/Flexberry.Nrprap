import { Serializer as КлассSerializer } from
  '../mixins/regenerated/serializers/i-i-s-nrprap-класс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлассSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
