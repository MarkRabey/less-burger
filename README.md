Less Burger
==============
[![Gitter chat](https://badges.gitter.im/MarkRabey/less-burger.png)](https://gitter.im/MarkRabey/less-burger "Gitter chat")

[![devDependencies](https://david-dm.org/MarkRabey/less-burger/dev-status.svg)](https://david-dm.org/MarkRabey/less-burger#info=devDependencies&view=table) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Issues](http://img.shields.io/github/issues/MarkRabey/less-burger.svg)]( https://github.com/MarkRabey/less-burger/issues )
___

A port of [Sass Burger](https://github.com/jorenvanhee/sass-burger) by [Joren Van Hee](http://joren.co/) to Less.

Check [here](http://MarkRabey.github.io/less-burger/) for a demo.

## Installation
### Bower

	bower install less-burger --save

### NPM

	npm install less-burger --save

### Without a Package Manager
Clone repo, or download [zip](https://github.com/MarkRabey/less-burger/archive/master.zip), and copy the files from `dist/css` and `dist/js` to your project's assets folder.

You can either copy `dist/css/less-burger-menu.min.css` to your projects assets. Or, you can import `src/less/less-burger.less` into your Less project for use as a mixin.

## Usage of Compiled CSS

### Sample HTML structure:

```html
...
<head>
	...
	<link rel="stylesheet" href="path/to/css/less-burger-menu.min.css">
</head>

<body>
	<a id="menuButton" href="#" class="menu-button">
		<span class="burger-icon"></span>
	</a>

...

	<script>
		var menuButton = document.getElementById('menuButton');
		menuButton.addEventListener('click', function (e) {
			menuButton.classList.toggle('is-active');
			e.preventDefault();
		});
	</script>
</body>
```

### Sample using Less mixin

```less
@import "less-burger.less";

.menu-button {
	display: inline-block;
	padding: .5em;
	background-color: #fafafa;
	border: 1px solid #ccc;
}

.burger-icon {
	.burger(25px, 3px, 5px, #444);
}

.menu-button.is-active .burger-icon {
	.burger-to-cross(3px, 5px);
}
```

## Development
Feel free to do what you'd like with this. Clone or fork the repo, type `npm install` and have your way with it. Please keep reference to both myself ([Mark Rabey](http://markrabey.com)) and [Joren Van Hee](http://joren.co/).


---
**Less Burger** © 2015, Mark Rabey. Released under the [MIT] License.<br>
Authored and maintained by Mark Rabey

> [http://markrabey.com](http://markrabey.com) &nbsp;&middot;&nbsp;
> GitHub [@MarkRabey](https://github.com/MarkRabey) &nbsp;&middot;&nbsp;
> Twitter [@MarkRabey](https://twitter.com/MarkRabey)

[MIT]: http://MIT-license.org/
