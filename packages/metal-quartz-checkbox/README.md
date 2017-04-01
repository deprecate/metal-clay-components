# metal-quartz-checkbox

A Metal Quartz component for rendering a checkbox element.

Rendering a Checkbox
```javascript
new metal.MetalQuartzCheckbox({});

```

Rendering a Checkbox with Label and Attributes
```javascript
new metal.MetalQuartzCheckbox({
	checked: true,
	disabled: true,
	label: 'My Checkbox',
	name: 'myCheckboxName'
});
```

Rendering an Inline Checkbox
```javascript
new metal.MetalQuartzCheckbox({
	checkboxInline: [{
		label: 'Checkbox 1'
	}, {
		label: 'Checkbox 2'
	}, {
		checked: true,
		disabled: true,
		label: 'Checkbox 3'
	}]
});
```

## Setup

1. See [metal-quartz-components/README.md](https://github.com/metal/metal-quartz-components/blob/master/README.md)

2. Build the code:

  ```
  npm run build
  ```

3. Watch task:

  ```
  npm run watch
  ```

## Contribute

We'd love to get contributions from you! Please, check our [Contributing Guidelines](https://github.com/metal/metal-quartz-components/blob/master/CONTRIBUTING.md) to see how you can help us improve.
