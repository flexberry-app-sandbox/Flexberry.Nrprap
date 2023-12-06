import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-nrprap-класс', 'Unit | Serializer | i-i-s-nrprap-класс', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-nrprap-класс',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-nrprap-t-дейтсвие',

    'model:i-i-s-nrprap-класс',
    'model:i-i-s-nrprap-прикол',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
