import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-nrprap-класс-l');
  this.route('i-i-s-nrprap-класс-e',
  { path: 'i-i-s-nrprap-класс-e/:id' });
  this.route('i-i-s-nrprap-класс-e.new',
  { path: 'i-i-s-nrprap-класс-e/new' });
  this.route('i-i-s-nrprap-прикол-l');
  this.route('i-i-s-nrprap-прикол-e',
  { path: 'i-i-s-nrprap-прикол-e/:id' });
  this.route('i-i-s-nrprap-прикол-e.new',
  { path: 'i-i-s-nrprap-прикол-e/new' });
});

export default Router;
