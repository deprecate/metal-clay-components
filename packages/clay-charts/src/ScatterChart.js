import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Scatter Chart component.
 * @augments Chart
 */
class ScatterChart extends Chart {}

ScatterChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof ScatterChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.arrayOf(
		Config.shapeOf({
			axis: Config.oneOf(['y', 'y2']),
			class: Config.string(),
			color: Config.string(),
			data: Config.array().required(),
			hide: Config.bool(),
			id: Config.required().string(),
			name: Config.string(),
			regions: Config.array(),
			type: Config.oneOf(types.point),
			x: Config.string(),
		})
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof ScatterChart
	 * @type {?string|undefined}
	 * @default scatter
	 */
	type: Config.oneOf(types.point).value('scatter'),
};

export {ScatterChart};
export default ScatterChart;
