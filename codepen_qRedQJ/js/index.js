(function() {
  var AppRouter, WeatherView, appRouter,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  WeatherView = (function(superClass) {
    extend(WeatherView, superClass);

    function WeatherView() {
      return WeatherView.__super__.constructor.apply(this, arguments);
    }

    WeatherView.prototype.template = Handlebars.compile($("#home-template").html());

    WeatherView.prototype.weather = {
      apiKey: "15b63a28fedd5d6f7e4d6d6267458e33",
      geolocationSupport: true,
      location: "",
      description: "",
      metric: false,
      temp: "",
      icon: "",
      minTemp: "",
      maxTemp: "",
      code: "",
      timeOfDay: "",
      time: "",
      hidden: false
    };

    WeatherView.prototype.events = {
      "click #units": "switchUnits"
    };

    WeatherView.prototype.initialize = function() {
      setInterval(((function(_this) {
        return function() {
          return _this.getTime();
        };
      })(this)), 1000);
      setInterval(((function(_this) {
        return function() {
          return _this.getParams();
        };
      })(this)), 300000);
      this.getParams();
      return this.render();
    };

    WeatherView.prototype.render = function() {
      return this.$el.html(this.template(this.weather));
    };

    WeatherView.prototype.getTime = function() {
      var now, time;
      now = new Date;
      time = now.toLocaleTimeString();
      this.weather.time = time;
      return this.render();
    };

    WeatherView.prototype.switchUnits = function() {
      this.weather.metric = this.weather.metric ? false : true;
      this.weather.hidden = true;
      return this.getParams();
    };

    WeatherView.prototype.getBackground = function(id) {
      var imageURL, windowHeight, windowWidth;
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      imageURL = "url('source.unsplash.com/" + id + "/" + windowWidth + "x" + windowHeight + "') no-repeat center center fixed";
      $('body').css('background', imageURL);
      return this.render();
    };

    WeatherView.prototype.getParams = function() {
      var i, key, len, pair, params, query, raw_vars, ref, value;
      query = window.location.search.substring(1).toLowerCase();
      raw_vars = query.split("&");
      params = {};
      for (i = 0, len = raw_vars.length; i < len; i++) {
        pair = raw_vars[i];
        ref = pair.split("="), key = ref[0], value = ref[1];
        params[key] = decodeURIComponent(value);
      }
      this.weather.apiKey = params.appid;
      if (this.weather.apiKey) {
        return this.getGeoLocation();
      }
    };

    WeatherView.prototype.getGeoLocation = function() {
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition((function(_this) {
          return function(position) {
            return _this.getWeather(position.coords.latitude, _this.weather.longitude = position.coords.longitude);
          };
        })(this));
      } else {
        return this.weather.geolocationSupport = false;
      }
    };

    WeatherView.prototype.getWeatherPic = function() {
      var code, i, j, k, l, m, n, results, results1, results2, results3, results4, results5;
      code = parseInt(this.weather.code);
      switch (false) {
        case !(indexOf.call((function() {
            results = [];
            for (i = 200; i <= 232; i++){ results.push(i); }
            return results;
          }).apply(this), code) >= 0 && this.weather.timeOfDay === 'd'):
          return this.getBackground('LYq7W1lRal4');
        case !(indexOf.call((function() {
            results1 = [];
            for (j = 200; j <= 232; j++){ results1.push(j); }
            return results1;
          }).apply(this), code) >= 0 && this.weather.timeOfDay === 'n'):
          return this.getBackground('gm8z8B_Z-vQ');
        case !(indexOf.call((function() {
            results2 = [];
            for (k = 300; k <= 531; k++){ results2.push(k); }
            return results2;
          }).apply(this), code) >= 0 && this.weather.timeOfDay === 'd'):
          return this.getBackground('_87lZuOyg64');
        case !(indexOf.call((function() {
            results3 = [];
            for (l = 300; l <= 531; l++){ results3.push(l); }
            return results3;
          }).apply(this), code) >= 0 && this.weather.timeOfDay === 'n'):
          return this.getBackground('VR0s3Yqm2RA');
        case !(indexOf.call((function() {
            results4 = [];
            for (m = 600; m <= 622; m++){ results4.push(m); }
            return results4;
          }).apply(this), code) >= 0 && this.weather.timeOfDay === 'd'):
          return this.getBackground('lOXSEYO6a90');
        case !(indexOf.call((function() {
            results5 = [];
            for (n = 600; n <= 622; n++){ results5.push(n); }
            return results5;
          }).apply(this), code) >= 0 && this.weather.timeOfDay === 'n'):
          return this.getBackground('Qh6wsKk1HWg');
        case !(code === 800 && this.weather.timeOfDay === 'd'):
          return this.getBackground('HzXhY9Wgzbw');
        case !(code === 800 && this.weather.timeOfDay === 'n'):
          return this.getBackground('KTIVMMOXNu8');
        case !((indexOf.call([801, 802, 803, 804], code) >= 0 || (code === 701 || code === 721 || code === 741)) && this.weather.timeOfDay === 'd'):
          return this.getBackground('T12tlLGd3EE');
        case !(indexOf.call([801, 802, 803, 804], code) >= 0 && this.weather.timeOfDay === 'n'):
          return this.getBackground('w8yLxjJVn4U');
        default:
          return this.getBackground('HzXhY9Wgzbw');
      }
    };

    WeatherView.prototype.getWeather = function(latitude, longitude) {
      var units, url;
      units = this.weather.metric ? 'metric' : 'imperial';
      url = "api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + this.weather.apiKey + "&units=" + units;
      console.log(url);
      return $.get(url, (function(_this) {
        return function(data) {
          _this.$('.working').addClass('animate fadeOut');
          _this.weather.location = data.name;
          _this.weather.description = data.weather[0].description.toUpperCase();
          _this.weather.temp = Math.round(data.main.temp);
          _this.weather.icon = "openweathermap.org/img/w/" + data.weather[0].icon + ".png";
          _this.weather.minTemp = Math.round(data.main.temp_min);
          _this.weather.maxTemp = Math.round(data.main.temp_max);
          _this.weather.hidden = false;
          _this.weather.code = data.weather[0].id;
          if (data.dt > data.sys.sunrise && data.dt < data.sys.sunset) {
            _this.weather.timeOfDay = "d";
          } else {
            _this.weather.timeOfDay = "n";
          }
          _this.getWeatherPic();
          return _this.render();
        };
      })(this));
    };

    return WeatherView;

  })(Backbone.View);

  AppRouter = Backbone.Router.extend({
    routes: {
      '': 'homeRoute',
      'home': 'homeRoute'
    },
    homeRoute: function() {
      var homeView;
      homeView = new WeatherView();
      return $("#content").html(homeView.el);
    }
  });

  appRouter = new AppRouter();

  Backbone.history.start();

}).call(this);