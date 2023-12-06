import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  строка: DS.attr('string'),
  класс: DS.belongsTo('i-i-s-nrprap-класс', { inverse: null, async: false })
});

export let ValidationRules = {
  строка: {
    descriptionKey: 'models.i-i-s-nrprap-прикол.validations.строка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  класс: {
    descriptionKey: 'models.i-i-s-nrprap-прикол.validations.класс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриколE', 'i-i-s-nrprap-прикол', {
    строка: attr('Строка', { index: 0 }),
    класс: belongsTo('i-i-s-nrprap-класс', 'Класс', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('ПриколL', 'i-i-s-nrprap-прикол', {
    строка: attr('Строка', { index: 0 }),
    класс: belongsTo('i-i-s-nrprap-класс', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
