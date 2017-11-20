import 'clay-button';
import 'clay-icon';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayAlert.soy.js';

/**
 * Metal Clay Alert component.
 */
class ClayAlert extends Component {
	/**
	 * @inheritDoc
	 */
	rendered() {
		if (
			this.autoClose &&
			(this.type === 'stripe' || this.type === 'toast')
		) {
			if (this.delayTime_ === undefined || this.delayTime_ > 0) {
				this.delayTime_ =
					(this.element.querySelector('a') ? 10 : 5) * 1000;
			}

			this.resumeTimeout_();
		}
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		if (this.timer_) {
			clearTimeout(this.timer_);
			this.timer_ = undefined;
		}
		this.delayTime_ = undefined;
		this.startDelayTime_ = undefined;
	}

	/**
	 * Hides the alert and destroy it if proceed.
	 * @private
	 */
	close() {
		this.delayTime_ = 0;
		this.visible_ = false;

		if (this.timer_) {
			clearTimeout(this.timer_);
		}

		if (this.destroyOnHide) {
			this.dispose();
		}
	}

	/**
	 * Handles onclick event for the close button in case of closeable alert.
	 * @private
	 */
	handleCloseClick_() {
		this.close();
	}

	/**
	 * Handles mouseot event for the alert.
	 * @private
	 */
	handleMouseOut_() {
		this.resumeTimeout_();
	}

	/**
	 * Handles mouseover event for the alert.
	 * @private
	 */
	handleMouseOver_() {
		this.pauseTimeout_();
	}

	/**
	 * Pauses the closing delay time.
	 * @private
	 */
	pauseTimeout_() {
		if (this.timer_) {
			clearTimeout(this.timer_);
			this.timer_ = undefined;
			this.delayTime_ -= new Date() - this.startDelayTime_;
		}
	}

	/**
	 * Resumes the closing delay time.
	 * @private
	 */
	resumeTimeout_() {
		if (this.delayTime_ > 0) {
			this.startDelayTime_ = new Date();
			this.timer_ = setTimeout(() => {
				this.close();
			}, this.delayTime_);
		}
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayAlert.STATE = {
	/**
	 * Flag to indicate if alert should be automatically closed.
	 * @instance
	 * @memberof ClayAlert
	 * @type {?bool}
	 * @default false
	 */
	autoClose: Config.bool().value(false),

	/**
	 * Flag to indicate if the alert is closeable.
	 * @instance
	 * @memberof ClayAlert
	 * @type {?bool}
	 * @default false
	 */
	closeable: Config.bool().value(false),

	/**
	 * Flag to indicate if the alert should be destroyen when close.
	 * @instance
	 * @memberof ClayAlert
	 * @type {?bool}
	 * @default false
	 */
	destroyOnHide: Config.bool().value(false),

	/**
	 * The message of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {!html|string}
	 */
	message: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayIcon
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * The style of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string}
	 * @default info
	 */
	style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

	/**
	 * The title of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {!string}
	 * @default undefined
	 */
	title: Config.string().required(),

	/**
	 * The type of alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {?string}
	 * @default embedded
	 */
	type: Config.oneOf(['embedded', 'stripe', 'toast']).value('embedded'),

	/**
	 * Flag to indicate the visibility of the alert
	 * @instance
	 * @memberof ClayAlert
	 * @type {?bool}
	 * @default true
	 */
	visible_: Config.bool()
		.internal()
		.value(true),
};

defineWebComponent('clay-alert', ClayAlert);

Soy.register(ClayAlert, templates);

export {ClayAlert};
export default ClayAlert;
