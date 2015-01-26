---
layout: page
title: Getting Started
permalink: /getting-started/
slug: getting-started
---

<div id="download"></div>

## Download

The Bootstrap App Framework has a few easy ways to quickly get started depending
on how you want to use it within your project:
{: .lead }

<a href="{{ site.dist }}/css/bootstrap-app.css" class="btn btn-lg btn-primary">Download CSS</a>
- or -
<a href="{{ site.dist }}/archive/bootstrap-app.zip" class="btn btn-lg btn-primary">Download Less Source</a>

### Download CSS

This is super easy. Just download the single CSS file, reference it in your
markup, and you're done.


### Download Less Source

Just like Bootstrap, the Bootstrap App Framework is built with Less, a
pre-processor for CSS.

The `bootstrap-app.less` file imports all the other Less files for generating
the `bootstrap-app.css` file.

If you are compiling Bootstrap from its Less file, then you should copy the
contents of `bootstrap-app.less` into one of your existing Less file, excluding
the `bootstrap-variable.less` file, since those will already be defined.

<div id="using-without-bootstrap"></div>

## Using Without Bootstrap

Bootstrap App follows the conventions of Bootstrap, references Bootstrap Less
variables, and includes styling where necessary to ensure Bootstrap App
components work well existing Bootstrap components and styles. However, use of
Bootstrap App is entirely optional. Regardless of whether you are downloading
the CSS or the Less source files, Bootstrap App will work correctly even when
Bootstrap is not included.

<div id="browser-compat"></div>

## Browser Compatibility

Bootstrap App uses CSS3 Flex Box capabilities to enable fine grained control
over the layout of items within a container. Since Flex Box is a relatively new
specification it is not supported by older browsers. Flex Box has also
undergone some syntax changes since its original proposal, so some older
browsers that included Flex Box support did so using a different syntax
than the final specification. Bootstrap App includes support for the older
syntaxes to maximize browser compatibility.

The minimum supported version of Internet Explorer is IE 10. Other browsers
update themselves automatically, and we support the latest versions of those.
Opera Mini is not supported.

See [caniuse.com](http://caniuse.com/#feat=flexbox) for more information on
Flex Box support.
