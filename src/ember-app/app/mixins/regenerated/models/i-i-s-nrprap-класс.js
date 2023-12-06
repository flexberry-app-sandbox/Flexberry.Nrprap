import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  действия: DS.attr('i-i-s-nrprap-t-дейтсвие'),
  номер: DS.attr('number')
});

export let ValidationRules = {
  действия: {
    descriptionKey: 'models.i-i-s-nrprap-класс.validations.действия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-nrprap-класс.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлассE', 'i-i-s-nrprap-класс', {
    номер: attr('Номер', { index: 0 })
  });

  modelClass.defineProjection('КлассL', 'i-i-s-nrprap-класс', {
    номер: attr('Номер', { index: 0 })
  });
};
