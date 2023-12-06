import { Serializer as ПриколSerializer } from
  '../mixins/regenerated/serializers/i-i-s-nrprap-прикол';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриколSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
