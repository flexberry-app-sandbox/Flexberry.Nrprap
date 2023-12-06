import {
  defineNamespace,
  defineProjections,
  Model as ПриколMixin
} from '../mixins/regenerated/models/i-i-s-nrprap-прикол';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриколMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
