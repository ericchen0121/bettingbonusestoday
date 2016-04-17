// ROUTES
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/admin', function () {
  this.render('blogAdmin');
});

Router.route('/sportsBook', function () {
  this.render('sportsBook');
});

Router.route('/news', function () {
  this.render('news');
});


Router.route('/more', function () {
  this.render('more');
});


Router.route('/betting', function () {
  this.render('betting');
});
