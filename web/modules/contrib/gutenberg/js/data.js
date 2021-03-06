/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/"use strict";

(function (wp, drupalSettings) {
  var uid = drupalSettings.user ? drupalSettings.user.uid || 1 : 1;
  var storageKey = "WP_DATA_USER_" + uid;
  var data = wp.data;


  data.use(data.plugins.persistence, { storageKey: storageKey });
  data.plugins.persistence.__unstableMigrate({ storageKey: storageKey });
})(wp, drupalSettings);