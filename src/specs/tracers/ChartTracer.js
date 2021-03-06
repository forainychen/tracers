export default {
  name: 'ChartTracer',
  description: 'Visualize a one-dimensional array into a bar chart.',
  methods: [{
    name: 'ChartTracer',
    description: 'Create a ChartTracer object.',
    return: 'new',
    arguments: [
      { name: 'title', type: 'String', default: '\"ChartTracer\"' },
    ],
  }, {
    name: 'set',
    description: 'Set `array1d` to visualize.',
    return: 'ChartTracer',
    arguments: [
      { name: 'array1d', type: 'Object[]', default: '[]' },
    ],
  }, {
    name: 'reset',
    description: 'Reset data.',
    return: 'ChartTracer',
    arguments: [],
  }, {
    name: 'delay',
    description: 'Pause to show changes in all tracers.',
    return: 'ChartTracer',
    arguments: [],
  }, {
    name: 'patch',
    description: 'Notify that the value at (`x`) has been changed to `v`.',
    return: 'ChartTracer',
    arguments: [
      { name: 'x', type: 'int' },
      { name: 'v', type: 'Object' },
    ],
  }, {
    name: 'depatch',
    description: 'Stop notifying that the value at (`x`) has been changed.',
    return: 'ChartTracer',
    arguments: [
      { name: 'x', type: 'int' },
    ],
  }, {
    name: 'select',
    description: 'Select (`x`).',
    return: 'ChartTracer',
    arguments: [
      { name: 'x', type: 'int' },
    ],
  }, {
    name: 'select',
    description: 'Select from (`sx`) to (`ex`).',
    return: 'ChartTracer',
    arguments: [
      { name: 'sx', type: 'int' },
      { name: 'ex', type: 'int' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting (`x`).',
    return: 'ChartTracer',
    arguments: [
      { name: 'x', type: 'int' },
    ],
  }, {
    name: 'deselect',
    description: 'Stop selecting from (`sx`) to (`ex`).',
    return: 'ChartTracer',
    arguments: [
      { name: 'sx', type: 'int' },
      { name: 'ex', type: 'int' },
    ],
  }, {
    name: 'chart',
    description: 'Synchronize data with `chartTracer`.',
    return: 'ChartTracer',
    arguments: [
      { name: 'chartTracer', type: 'ChartTracer' },
    ],
  }],
};