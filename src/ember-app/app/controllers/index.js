import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.nrprap.caption'),
          title: i18n.t('forms.application.sitemap.nrprap.title'),
          children: [{
            link: 'i-i-s-nrprap-класс-l',
            caption: i18n.t('forms.application.sitemap.nrprap.i-i-s-nrprap-класс-l.caption'),
            title: i18n.t('forms.application.sitemap.nrprap.i-i-s-nrprap-класс-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-nrprap-прикол-l',
            caption: i18n.t('forms.application.sitemap.nrprap.i-i-s-nrprap-прикол-l.caption'),
            title: i18n.t('forms.application.sitemap.nrprap.i-i-s-nrprap-прикол-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})