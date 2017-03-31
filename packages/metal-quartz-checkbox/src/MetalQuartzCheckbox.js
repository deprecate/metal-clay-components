'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import { validators } from 'metal-state';

import templates from './MetalQuartzCheckbox.soy.js';

/**
 * Implementation of the Metal Quartz Checkbox.
 */
class MetalQuartzCheckbox extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzCheckbox.STATE = {
};

Soy.register(MetalQuartzCheckbox, templates);

export default MetalQuartzCheckbox;