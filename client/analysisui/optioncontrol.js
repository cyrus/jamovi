'use strict';

var _ = require('underscore');
var OptionControlBase = require('./optioncontrolbase');
var EnumPropertyFilter = require('./enumpropertyfilter');
var SuperClass = require('../common/superclass');

var OptionControl = function(params) {

    OptionControlBase.extendTo(this, params);

    this.registerSimpleProperty("optionId", null);
    this.registerSimpleProperty("disabled", false);
    this.registerSimpleProperty("label", null);
    this.registerSimpleProperty("style", "list", new EnumPropertyFilter(["list", "inline", "list-inline", "inline-list"], "list"));

    this.setEnabled = function(value) {
        this.setPropertyValue("disabled", !value);
    };

};

SuperClass.create(OptionControl);

module.exports = OptionControl;
