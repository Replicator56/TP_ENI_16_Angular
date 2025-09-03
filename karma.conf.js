module.exports = function (config) {
  config.set({
    // Base path relative à ce fichier
    basePath: '',

    // Frameworks de test
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    // Plugins nécessaires
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    // Reporters
    reporters: ['progress', 'kjhtml'],

    // Configuration du serveur Karma
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    // Ne pas relancer automatiquement les tests
    autoWatch: false,
    singleRun: true,
    restartOnFileChange: false,

    // Navigateurs
    browsers: ['ChromeHeadlessNoSandbox'],

    // Configuration pour les tests headless (utile en CI)
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
      }
    },

    // Configuration du coverage reporter
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },

    // Timeout pour Chrome en CI
    browserNoActivityTimeout: 60000,
    browserDisconnectTolerance: 3
  });
};
