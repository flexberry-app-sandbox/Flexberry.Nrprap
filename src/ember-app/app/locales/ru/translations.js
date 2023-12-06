import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Nrprap',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Nrprap',
          title: 'Nrprap'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-nrprap-класс-l': IISNrprapКлассLForm,
    'i-i-s-nrprap-прикол-l': IISNrprapПриколLForm,
    'i-i-s-nrprap-класс-e': IISNrprapКлассEForm,
    'i-i-s-nrprap-прикол-e': IISNrprapПриколEForm
  },

});

export default translations;
