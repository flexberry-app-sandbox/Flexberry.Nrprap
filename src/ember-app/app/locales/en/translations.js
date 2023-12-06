import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNrprapКлассLForm from './forms/i-i-s-nrprap-класс-l';
import IISNrprapПриколLForm from './forms/i-i-s-nrprap-прикол-l';
import IISNrprapКлассEForm from './forms/i-i-s-nrprap-класс-e';
import IISNrprapПриколEForm from './forms/i-i-s-nrprap-прикол-e';
import IISNrprapКлассModel from './models/i-i-s-nrprap-класс';
import IISNrprapПриколModel from './models/i-i-s-nrprap-прикол';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-nrprap-класс': IISNrprapКлассModel,
    'i-i-s-nrprap-прикол': IISNrprapПриколModel
  },

  'application-name': 'Nrprap',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Nrprap',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Nrprap',
          title: 'Nrprap'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        nrprap: {
          caption: 'Nrprap',
          title: 'Nrprap',
          'i-i-s-nrprap-класс-l': {
            caption: 'Класс',
            title: ''
          },
          'i-i-s-nrprap-прикол-l': {
            caption: 'Прикол',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-nrprap-класс-l': IISNrprapКлассLForm,
    'i-i-s-nrprap-прикол-l': IISNrprapПриколLForm,
    'i-i-s-nrprap-класс-e': IISNrprapКлассEForm,
    'i-i-s-nrprap-прикол-e': IISNrprapПриколEForm
  },

});

export default translations;
