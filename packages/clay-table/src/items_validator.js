import {Config} from 'metal-state';

let actionItems = {
	disabled: Config.bool().value(false),
	icon: Config.string(),
	label: Config.string(),
	quickAction: Config.bool().value(false),
	separator: Config.bool().value(false),
	url: Config.string().required(),
};

let columns = {
	elementClasses: Config.string(),
	label: Config.string(),
	labelStyle: Config.oneOf([
		'danger',
		'info',
		'secondary',
		'success',
		'warning',
	]).value('secondary'),
	progressBar: Config.shapeOf({
		maxValue: Config.number(),
		minValue: Config.number(),
		status: Config.oneOf(['complete', 'warning']),
		value: Config.number(),
	}),
	text: Config.string(),
	url: Config.string(),
	useEllipse: Config.bool().value(false),
};

let items = {
	actionItems: Config.arrayOf(Config.shapeOf(actionItems)),
	columns: Config.arrayOf(Config.shapeOf(columns)),
	disabled: Config.bool().value(false),
	group: Config.string(),
	inputName: Config.string(),
	inputValue: Config.string(),
	selectable: Config.bool().value(false),
	selected: Config.bool().value(false),
	stickerImageAlt: Config.string(),
	stickerImageSrc: Config.string(),
	stickerLabel: Config.string(),
	stickerShape: Config.string().value('circle'),
	stickerStyle: Config.oneOf([
		'danger',
		'dark',
		'info',
		'light',
		'primary',
		'secondary',
		'success',
		'warning',
	]).value('primary'),
};

const actionsItemsValidator = Config.arrayOf(Config.shapeOf(actionItems));
const columnsValidator = Config.arrayOf(Config.shapeOf(columns));
const itemsValidator = Config.arrayOf(Config.shapeOf(items));

export {actionsItemsValidator, columnsValidator, itemsValidator};
export default itemsValidator;
