var cookie = {
  _handle: function (key, value, options) {
    // write
    var option = options ? options : {};
    if (!option.expires) {
      option.expires = 365;
    }
    if (arguments.length > 1) {
      if (typeof option.expires === 'number') {
        var days = option.expires;
        var t = option.expires = new Date();
        t.setMilliseconds(t.getMilliseconds() + days * 864e+5);

        return (document.cookie = [
  				key, '=', String(value),
  				option.expires ? '; expires=' + option.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
  				option.path    ? '; path=' + option.path : '',
  				option.domain  ? '; domain=' + option.domain : '',
  				option.secure  ? '; secure' : ''
        ].join(''));
      }
    }
    // read
    var result = key ? undefined : {};
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    for (var i = 0; i < cookies.length; i++) {
  		var parts = cookies[i].split('=');
  		var name = parts.shift();
  		var	cookie = parts.join('=');

  		if (key === name) {
  			result = cookie;
  			break;
  		}

  		if (!key) {
  			result[name] = cookie;
  		}
  	}
    return result;
  },

  get: function (key) {
    return key ? this._handle.call(this, key) : this._handle.call();
  },

  set: function (key, value, options) {
    return this._handle.call(this, key, value, options);
  },

  remove: function (key) {
    this._handle.call(this, key, '', { expires: -1 });
    return !this._handle(key);
  }
};
