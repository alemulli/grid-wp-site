# Origins

Origins was designed to make Wordpress development enjoyable, progressive, and efficient. It's an opinionated Wordpress theme using [Timber](https://www.upstatement.com/timber/), [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/), [Tailwind](https://tailwindcss.com/), [HTMX](https://htmx.org/), and [Alpine.js](https://alpinejs.dev/) to create a modern development experience.

Origins is composed of a few key packages.

- [og-ajax](https://github.com/LeadPoint-Digital/og-ajax)
- [og-blocks](https://github.com/LeadPoint-Digital/og-blocks)
- [og-cli](https://github.com/LeadPoint-Digital/og-cli)
- [og-core](https://github.com/LeadPoint-Digital/og-core)

## Inspiration/Acknowledgements

Many great projects inspired the creation of Origins. Below are a few of those projects.

- [WordPressMVC](https://www.wordpress-mvc.com/)
- [Timber Starter Theme](https://github.com/timber/starter-theme)
- [Timberland](https://github.com/cearls/timberland)
- [ACF Blocks](https://www.advancedcustomfields.com/resources/blocks/)
- And many more...

## Installation

1. Initiate a local Wordpress Environment and install [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/).
2. Clone the theme directory into your local sites `/app/public/wp-content/themes/` folder.
3. Run `composer install` in the theme directory. Composer will install the packages for [og-core](https://github.com/LeadPoint-Digital/og-core) and [og-blocks](https://github.com/LeadPoint-Digital/og-blocks).
4. Run `bun install` or `npm install` in the theme directory.
5. Run `bun run build` or `npm run build` in the theme directory.
6. Activate the theme in Appearance > Themes.

## Development

Run `bun run dev` or `npm run dev` from the root directory. This will compile your assets and watch for changes.

---

### Versioning

To assist with long-term caching, file hashing (e.g. `app-ac157be0.js`) is enabled by default. This is useful for cache-busting purposes.

## Production

When you're ready for production, run `bun run build` or `npm run build` from the theme directory in the terminal.

The `dist` directory is ignored from version control and not deployed to production as it is ran on the server.

## Blocks

A block is a self-contained component/section. Blocks are created using [ACF Blocks](https://www.advancedcustomfields.com/resources/blocks/). Each block has its own template, script and style files. Edit the `block.json` to extend block availability to specific post types, dictate block alignment, enable jsx for InnerBlocks, etc.
You can add an optional link for blocks where the content is edited in different locdations using the "example" key in the `block.json`.

```json
"example": {
        "attributes": {
            "editLink": "/wp-admin/edit.php?post_type=testimonial",
            "editTooltip": "Choose testimonials using the ACF field. Testimonials can be edited or added on the Testimonials page. Click to open Testimonials.",
            "message": ""
        }
    },
```

The code above inserts a button with an edit pencil, which links to the page where you can edit testimonials in a new tab. The `editTooltip` key shows on hover to provide information to the editor.

The edit button can be customized by editing the ``editor.css`` file using
```css
.edit-link /** Button */
.edit-tooltip /** Hover Tooltip */
.edit-wrapper /** Wrapper */
```
Below is an example block, which is located in `blocks/Example`.

```text
Example
┣ Example.php
┣ block.json
┣ editor.twig *
┣ index.twig
┣ script.js
┗ style.css
```
To create a new block, create a directory in `blocks`. Add your `index.twig` and optional style.css, script.js and functions.php files and it's ready to be used with the WordPress block editor. Add editable fields by creating a new ACF field group and setting the location rule to your new block. You can now use these fields with your block in the block editor.

Use can also use the command `og make:block BlockName` from [og-cli](https://github.com/LeadPoint-Digital/og-cli) to automatically generate the necessary and optional files for a new block. The block name must be PascalCase.

Blocks have their own context, while also having access to the global context.
Add context to a block in that blocks Block.php file.

```php
$context = 'Put this into context!'
$this->add('custom_context': $context);
```

Then you can access that context with

```html
<pre>
	dump(data.custom_context)
</pre>
```

### \* Admin specific blocks

By adding an `editor.twig` file in the blocks folder you can customize what's shown in the editor. This is useful for adding a preview image/description of the block or disabling javascript/anchors that interferes with the editor experience.

Example:

```html
<!-- index.twig -->

<div>
	<a href="#">
		<!-- Normally would put our InnerBlocks here but if the user tried to click on the inner blocks to edit them in the editor, it would end up linking tem to a separate page. -->
		<a href={{ fields.link }}>
			{{ content }}
		</a>
	</a>
</div>
```

```html
<!-- editor.twig -->

<div>
	<!-- To work around this we make an editor.twig file, remove the <a> tag so the person editing the page doesn't have link even though one is rendered on the front end, use our InnerBlocks here, and then edit our index.twig to just display the content of our InnerBlocks. -->
	<div>
		<InnerBlocks template="{{ get_pattern('icon')|e}}" />
	</div>
</div>
```

***Note:*** InnerBlocks is a placeholder for wordpress to allow editable actions in gutenberg. The contents of InnerBlocks is saved in the post, hence why we can use ``{{ content }}`` in the index.twig file.

***Gotcha Note:*** Only one ``InnerBlocks`` per block can be used.

### Accessing Fields

You access your block's fields in the index.twig file by using the `fields` variable. The example below shows how to display a block's field. We'll use "heading" as the example ACF field name, but it could be whatever name you give your field.

```twig
{{ fields.heading }}
```

Here's an example of how to loop through a repeater field where "features" is the ACF field name and the repeater field has a heading field.

```twig
{% for feature in fields.features %}
    {{ feature.heading }}
{% endfor %}
```

## Menus

Menus are registered by og-core and can be added to the theme in the `config/theme.php` file.

```php
	'menus' => [
		'header' => __('Primary Menu', 'origins'),
		'footer' => __('Footer Menu', 'origins')
	],
```

It's important to note that these `menus` are actually "Locations". A new menu will still need to be created through the admin portal and assigned to the location.

This can be done by going to the admin portal:

`{your-site}/wp-admin/nav-menus.php`

**Tip:**
If the results of `dump()` yield no `menu` array, then most likely a menu has not been assigned to the location.

## Directory Structure

```text
Origins
┣ acf-json
┃   ┣ ...
┣ app
┃   ┣ Ajax
┃   ┃ ┗ ...
┃   ┣ ContextProviders
┃   ┃   ┗ ...
┃   ┣ Hooks
┃   ┃   ┗ ...
┃   ┣ Repositories
┃   ┃   ┗ ...
┃   ┣ Services
┃   ┃   ┗ ...
┃   ┣ TimberPosts
┃   ┃   ┗ ...
┃   ┣ Twig
┃   ┃   ┗ ...
┃   ┗ Main.php
┣ blocks
┃   ┗ ...
┣ config
┃   ┗ theme.php
┣ patterns
┃   ┗ ...
┣ resources
┃   ┣ assets
┃   ┃   ┣ fonts
┃   ┃   ┃   ┗ ...
┃   ┃   ┣ images
┃   ┃   ┃   ┗ ...
┃   ┃   ┣ scripts
┃   ┃   ┃   ┗ ...
┃   ┃   ┗ styles
┃   ┃       ┣ tailwind
┃   ┃       ┃   ┣ base.css
┃   ┃       ┃   ┣ components.css
┃   ┃       ┃   ┗ utilities.css
┃   ┃       ┣ wordpress
┃   ┃       ┃   ┣ block-library.css
┃   ┃       ┃   ┗ global-styles.css
┃   ┃       ┣ ...
┃   ┃       ┣ editor.css
┃   ┃       ┗ safelist.txt
┃   ┗ views
┃       ┣ components
┃       ┃    ┗ ...
┃       ┣ layouts
┃       ┃    ┗ ...
┃       ┣ macros
┃       ┃    ┗ ...
┃       ┣ pages
┃       ┃    ┗ ...
┃       ┣ partials
┃       ┃    ┗ ...
┃       ┣ svg
┃       ┃    ┗ ...
┃       ┗ base.twig
┣ ...
┣ functions.php
┣ index.php
┣ ...
┣ tailwind-typography.config.js
┣ tailwind.config.js
┣ theme.json
┗ ...

```

`acf-json` :arrow_right: Contains all of your Advanced Custom Fields json files. These files are automatically created/updated using ACF's Local JSON feature.

`app` :arrow_down:

- `Ajax` :arrow_right: Contains classes that provide AJAX request functionality to use in the application.

- `ContextProviders` :arrow_right: Contains classes that provide additional context to different parts of the site. 

- `Hooks` :arrow_right: Contains classes that create custom functionality in Wordpress. Make sure to add these actions in `Main.php`.

- `Repositories` :arrow_right: Contains classes responsible for interacting with the database, primarily queries. 

- `Services` :arrow_right: Contains classes of functions that can be called by `use`ing these classes elsewhere. 

- `TimberPosts` :arrow_right: Contains classes that extend Timbers Post objects. [See Reference](https://timber.github.io/docs/v2/guides/posts/#extending-timber-post)

- `Twig` :arrow_right: Create custom twig filters and functions to be used in twig files. 

- `Main.php` :arrow_right: The primary bootstrap class of the site. This class is responsible for registering actions and filters, both on init and on admin. 

`blocks` :arrow_right: Contains all of your site's blocks. These blocks are available to use on any page via the block editor. Each block has its own template, script and style files. Edit the `block.json` to extend block availability to specific post types.

`config` :arrow_right: Contains `theme.php` file which allows you to set various theme settings such as the menu locations that are registered for the site etc. Key/value pairs in this file can be accessed with the Og class like so ``Og::config('key.value')`` or ``config('key.value')``.

`patterns` :arrow_right: Contains all of the .php files generated when creating a pattern using the Pattern Manager plugin.

`resources` :arrow_right: Contains the assests folder holding all of the fonts, images, styles and scripts for the site. The `editor.js` file in `resoures/assets/scripts/` can be used to register additional styles for wordpress blocks like buttons for example. In `resources/assets/styles/` there are many important css files. `components.css` is for class-based styles or styling of default wordpress components or third-party components. `utilities.css` is for single-purpose utility classes that should always take precedence over any other styles. `safelist.txt` is for adding classes to tailwinds safelist separated from the `tailwind.config.js` file. Resources also contains the views folder which houses all of your Twig templates which are rendered by TimberRouter the `index.php` file.

`tailwind-typogrophy.config.js` :arrow_right: This file is for outlining global styles using the prose typography classes.

`tailwind.config.js` :arrow_right: This file is for extending the tailwind theme, such as adding custom colors or fonts.

`theme.json` :arrow_right: This file is for making customization tools available in the editor such as custom colors or spacing options as well as defining defaults for wordpress settings such as the content max-width. [See Reference](https://developer.wordpress.org/themes/global-settings-and-styles/)

All Wordpress core template files are located in the og-core package.

### Twig Helper Functions

Twig helper functions provided by og-core:

- `log_json($data)` // console logs data passed in as json
- `get_pattern('pattern-name')` // returns the pattern template
- `json($data)` // returns json encoded data
- `debug($data)` // adds data to query monitor
- `log_warn('string')` // console warn
- `log_error('string')` // console error
- `log_success('string')` // console success

// Example Usage

```twig

{% set data = {
    'foo': 'bar',
    'bar': 'baz'
} %}

{{ log_json(data) }}
```

In the console log:

```text
{
    "foo": "bar",
    "bar": "baz"
}
```

TODO:

- [ ] Add Tests
- [ ] Add Routes, timber 2 removes this (api folder, file directory inspired. Located on michaels catering site)
- [ ] Document Filters
- [ ] add twigcomponents



# Changelog
## 1.13.0 - 2024-2-19
### Added
- Live Search and search page template
- Function for ajax url building in Twig/Functions.php
### Changed
- Updated to current core packages
### Fixed
- Changed path for safelist.txt in tailwind.config.js
## 1.12.0 - 2024-2-2
### Added
- GenerateGlobalStyles Hook for building global styles css stylesheet
## 1.1.1 - 2024-1-24
### Added
- edit button styling in editor.css
- added titles/aria labels in navigation views
### Changed
- updated Readme with more current docs. 
## 1.1.0 - 2023-12-20
### Added
- added storage folder for assets
- added theme-provider.js to replace npm package, added functionality to pull fontfamily and size from theme.json
- default block-icon.svg for blocks
- wordpress styles folder, to test out dequeueing wordpress styles in favor of localizing styles
- better devserver, now rebuilds when the devserver is closed
### Changed
- updated tailwind to 3.4
- updated to current core packages
- vite.config.js to read from storage folder config
- default starter block to match current og-block template
### Fixed
- prettier
