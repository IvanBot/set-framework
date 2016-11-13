
(function() {
	var _this = {
		ready: {
			jquery: false,
			extjs: false
		}
	}

	_this.ready = function (framework) {
		if (framework === "jquery") {
			_this.ready.jquery = true;
		} else if (framework === "extjs") {
			_this.ready.extjs = true;
		}

		if (_this.ready.jquery && _this.ready.extjs) {
			_this.on_ready();
		}
	};
	
	_this.on_ready = function () {
		//TODO
	};
	
	$(function () {
		_this.ready("jquery");
	}
	
	Ext.onReady(function () {
		_this.ready("extjs");
	});
	
	//TODO
	
})();