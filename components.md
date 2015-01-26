---
layout: page
title: Components
permalink: /components/
slug: components
---

<div id="grid"></div>

## Flex Grid

The flex grid provides a new responsive method for laying out sections of a page
that provides more capabilities than the existing Bootstrap grid. It supports
both horizontal and vertical organization of items, has independently-scrolling
areas, and has automatically expanding items. It integrates with Bootstrap's
existing `.container` class.
{: .lead }

<div id="grid-concepts"></div>

### Concepts

Boxes are the building blocks of a page layout. The `.flex-box` class
establishes a flexible container that occupies the full width of its
parent element.

Within it, the `.flex-content` class is
applied to children elements to establish flexible behavior within the
container.

<div class="docs-example">
  <div class="flex-box">
    <div class="flex-content">1</div>
    <div class="flex-content">2</div>
  </div>
</div>

{% highlight html %}
<div class="flex-box">
  <div class="flex-content">1</div>
  <div class="flex-content">2</div>
</div>
{% endhighlight %}

Notice that the `.flex-content` class includes margins that behavior exactly
the same way as the standard Bootstrap grid columns within a row. You can
optionally disable this behavior by adding the `.flex-content-collapse` class.
You can also apply it to the parent `.flex-box` instead with the
`.flex-box-collapse` class.

<div id="grid-canvas"></div>

### Filling the Canvas

In most cases, you will want to start with a main grid layout that fills
the entire height of the browser window. Add the `.flex-grid-canvas` class
to your top-most `.flex-box` to achieve this.

<div class="docs-example">
  <a class="btn btn-default" href="/ex-flex-box-canvas" target="&#95;blank">View in new window</a>
</div>

{% highlight html %}
<div class="flex-box flex-box-canvas">
  <div class="flex-content"></div>
  <div class="flex-content"></div>
</div>
{% endhighlight %}

<div id="grid-auto-sizing"></div>

### Automatic Sizing

By default, the `.flex-box` class uses a horizontal layout for the children
items, and the `flex-content` elements automatically expand equally to fill
the available space. If the content within a `.flex-content` item requires
more space than is provided through the equal distribution, the grid
automatically adjusts proportions to accommodate this.

<div class="docs-example">
  <div class="flex-box">
    <div class="flex-content"></div>
    <div class="flex-content"></div>
    <div class="flex-content" style="min-width: 400px;">min-width: 400px</div>
    </div>
</div>

{% highlight html %}
<div class="flex-box">
  <div class="flex-content"></div>
  <div class="flex-content"></div>
  <div class="flex-content" style="min-width: 400px;"></div>
</div>
{% endhighlight %}

You can also specify that a child item should only be as large as is needed for
its content. Specify `.flex-shrink` to apply this.

<div class="docs-example">
  <div class="flex-box">
    <div class="flex-content"></div>
    <div class="flex-content"></div>
    <div class="flex-content flex-shrink">.flex-shrink</div>
  </div>
</div>

{% highlight html %}
<div class="flex-box">
  <div class="flex-content"></div>
  <div class="flex-content"></div>
  <div class="flex-content flex-shrink">.flex-shrink</div>
</div>
{% endhighlight %}

<div id="grid-orientation"></div>

### Orientation

To change organize children items vertically, add `.flex-box-vertical`.

<div class="docs-example">
  <div class="flex-box flex-box-vertical">
    <div class="flex-content"></div>
    <div class="flex-content"></div>
  </div>
</div>

{% highlight html %}
<div class="flex-box flex-box-vertical">
  <div class="flex-content"></div>
  <div class="flex-content"></div>
</div>
{% endhighlight %}

Additional classes are available to automatically change the orientation for
different viewport sizes. Bootstrap App uses the same breakpoints as Bootstrap's
grid system, along with a similar naming convention:

|                     | Horizontal                | Vertical                |
|---------------------|---------------------------|-------------------------|
| Extra small devices |                           | `.flex-box-vertical`    |
| Small devices       | `.flex-box-sm-horizontal` | `.flex-box-sm-vertical` |
| Medium devices      | `.flex-box-md-horizontal` | `.flex-box-md-vertical` |
| Large devices       | `.flex-box-lg-horizontal` | `.flex-box-lg-vertical` |
{: .table .table-bordered .table-striped }

<div id="grid-nesting"></div>

### Nesting

Flex boxes can be nested to create arbitrarily complex layouts. The key point
to remember is that the `.flex-box` class creates a container, whereas the
`.flex-content` does not.

<div class="docs-example">
  <div class="flex-box">
    <div class="flex-box flex-box-vertical">
      <div class="flex-content">A</div>
      <div class="flex-content">B</div>
    </div>
    <div class="flex-content">C</div>
  </div>
</div>

{% highlight html %}
<div class="flex-box">
  <div class="flex-box flex-box-vertical">
    <div class="flex-content">A</div>
    <div class="flex-content">B</div>
  </div>
  <div class="flex-content">C</div>
</div>
{% endhighlight %}

<div id="grid-manual-sizing"></div>

### Manual Sizing

Flex Grid provides sizing classes that work similar to the Bootstrap grid
12-column system. However, flex grid sizing classes work for both horizontal
and vertical orientations.

Sizing classes can be applied to elements that have either
the `.flex-box` or `.flex-content` class.

The main classes for specifying item sizes are as follows.

| Class Name       | Size within Container      |
|------------------|----------------------------|
| `.flex-1`        | One twelth                 |
| `.flex-2`        | Two twelths (one sixth)    |
| `.flex-3`        | Three twelths (one quarter)|
| `.flex-4`        | Four twelths (one third)   |
| `.flex-5`        | Five twelths               |
| `.flex-6`        | Six twelths (one half)     |
{: .table .table-bordered .table-striped }

There is no need to provide sizing classes beyond 6, because the default
behavior of items is to fill the remaining space.

Similarly to the Bootstrap grid, the sizing classes define a size that is
relative to its containing element.

With Flex Grid, you also have the ability to defining sizes relative to the
viewport when working with a horizontal orientation. This is especially useful
with nested layouts. Viewport based sizing classes add a `-vw` prefix:

| Class Name       | Width of Viewport |
|------------------|-------------------|
| `.flex-1-vw`     | One twelth        |
| `.flex-2-vw`     | Two twelths       |
| `.flex-3-vw`     | Three twelths     |
| `.flex-4-vw`     | Four twelths      |
| `.flex-5-vw`     | Five twelths      |
| `.flex-6-vw`     | Six twelths       |
{: .table .table-bordered .table-striped }

Sizing classes are also defined for each of the standard Bootstrap grid
breakpoints, so you can override with a new size at higher resolutions.
The table below shows the available classes, where `-n-` in the class
name represents the values 1 through 6.

|                     | Size of Container  | Width of Viewport  |
|---------------------|--------------------|--------------------|
| Extra small devices | `.flex-n`          | `.flex-n-vw`     |
| Small devices       | `.flex-sm-n`       | `.flex-sm-n-vw`  |
| Medium devices      | `.flex-md-n`       | `.flex-md-n-vw`  |
| Large devices       | `.flex-lg-n`       | `.flex-lg-n-vw`  |
{: .table .table-bordered .table-striped }

You can also apply standard CSS styles if fine grained control over the sizing
behavior is required.

<div id="grid-wrapping"></div>

### Wrapping Items

If you specify widths for items within a flex box, and those widths are more
than the container width allows, then wrapping automatically occurs.

<div class="docs-example">
  <div class="flex-box">
    <div class="flex-content flex-4">1</div>
    <div class="flex-content flex-4">2</div>
    <div class="flex-content flex-4">3</div>
    <div class="flex-content flex-4">4</div>
    <div class="flex-content flex-4">5</div>
  </div>
</div>

{% highlight html %}
<div class="flex-box">
  <div class="flex-content flex-4">1</div>
  <div class="flex-content flex-4">2</div>
  <div class="flex-content flex-4">3</div>
  <div class="flex-content flex-4">4</div>
  <div class="flex-content flex-4">5</div>
</div>
{% endhighlight %}

Convenience classes are provided to allow the size to be specified once on the
parent element instead of on each child.

<div class="docs-example">
  <div class="flex-box flex-children-4">
    <div class="flex-content">1</div>
    <div class="flex-content">2</div>
    <div class="flex-content">3</div>
    <div class="flex-content">4</div>
    <div class="flex-content">5</div>
  </div>
</div>

{% highlight html %}
<div class="flex-box flex-children-4">
  <div class="flex-content">1</div>
  <div class="flex-content">2</div>
  <div class="flex-content">3</div>
  <div class="flex-content">4</div>
  <div class="flex-content">5</div>
</div>
{% endhighlight %}

These classes are also defined for each of the standard Bootstrap grid
breakpoints, so you can override with a new size at higher resolutions.
The table below shows the available classes, where `-n-` in the class
name represents the values 1 through 6.

|                     | Size of Container     |
|---------------------|-----------------------|
| Extra small devices | `.flex-children`      |
| Small devices       | `.flex-children-sm-n` |
| Medium devices      | `.flex-children-md-n` |
| Large devices       | `.flex-children-lg-n` |
{: .table .table-bordered .table-striped }

## Off-Canvas

asdfaj skfjadsfjdfjfjfjjf  fd dfdfdf df

<div id="list"></div>

## Flex List

The flex list component provides an easy way to create a list of items useful for layout in a sidebar or slim vertical areas.
{: .lead }

<div id="list-basic"></div>

### Basic Syntax
A flex list is defined by applying the `.flex-list` class to a `<ul>` element.
Simple text and link items work in a flex list without any special consideration.
For layout an item with a more sophisticated layout, the `.flex-list-item`
class it applied to the element that requires flexible sizing.

By default, children of an element with the `.flex-list-item` class will
collapses to a small amount of space. Use the general purpose `.flex-grow`
class to make the text take up as much space as possible.

<div class="docs-example">
  <ul class="flex-list">
    <li>
      Text only
    </li>
    <li>
      <a href="#">Link</a>
    </li>
    <li>
      <a href="#" class="flex-list-item">
        <span class="flex-grow">Link with end icon</span>
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </li>
  </ul>
</div>

{% highlight html %}
<ul class="flex-list">
  <li>
    Text only
  </li>
  <li>
    <a href="#">Link</a>
  </li>
  <li>
    <a href="#" class="flex-list-item">
      <span class="flex-grow">Link with end icon</span>
      <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
  </li>
</ul>
{% endhighlight %}

<div id="list-app-prepend"></div>

## Appending / Prepending Items

You can put zero, one or more items before or after the item with the
`.flex-grow` class assigned. Everything adjusts dynamically. Check out these
examples.

<div class="docs-example">
  <ul class="flex-list">
    <li>
      <a href="" class="flex-list-item">
        <span class="glyphicon glyphicon-asterisk"></span>
        <span class="flex-grow">Link with both icons</span>
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </li>
    <li>
      <a href="" class="flex-list-item">
        <span class="glyphicon glyphicon-comment"></span>
        <span class="flex-grow">Another links with both icons and a lot of text causing wrapping across multiple lines</span>
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </li>
    <li>
      <a href="" class="flex-list-item">
        <span></span>
        <span class="flex-grow">Indented without an icon</span>
      </a>
    </li>
    <li>
      <a href="" class="flex-list-item flex-list-indent">
        <span class="flex-grow">Or you can indent with a class instead</span>
      </a>
    </li>
    <li>
      <a href="" class="flex-list-item flex-list-indent">
        <span class="flex-grow">How about multiple trailing icons?</span>
        <span class="glyphicon glyphicon-list-alt"></span>
        <span class="glyphicon glyphicon-signal"></span>
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </li>
  </ul>
</div>

{% highlight html %}
<ul class="flex-list">
  <li>
    <a href="" class="flex-list-item">
      <span class="glyphicon glyphicon-asterisk"></span>
      <span class="flex-grow">Link with both icons</span>
      <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
  </li>
  <li>
    <a href="" class="flex-list-item">
      <span class="glyphicon glyphicon-comment"></span>
      <span class="flex-grow">Another links with both icons and a lot of text causing wrapping across multiple lines</span>
      <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
  </li>
  <li>
    <a href="" class="flex-list-item">
      <span></span>
      <span class="flex-grow">Indented without an icon</span>
    </a>
  </li>
  <li>
    <a href="" class="flex-list-item flex-list-indent">
      <span class="flex-grow">Or you can indent using a class</span>
    </a>
  </li>
  <li>
    <a href="" class="flex-list-item flex-list-indent">
      <span class="flex-grow">How about multiple trailing icons?</span>
      <span class="glyphicon glyphicon-list-alt"></span>
      <span class="glyphicon glyphicon-signal"></span>
      <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
  </li>
</ul>
{% endhighlight %}

<div id="list-nesting"></div>

## Nesting

Use child lists to create simple hierarchies.

<div class="docs-example">
  <ul class="flex-list">
    <li>Child content can be indented
      <ul class="flex-list-indent">
        <li>The first item</li>
        <li>Item number two</li>
        <li>Last item</li>
      </ul>
    </li>
    <li>
      <span class="flex-list-item">
        <span class="glyphicon glyphicon-tasks"></span>
        <span class="flex-grow">This time with a start icon</span>
      </span>
      <ul class="flex-list-indent">
        <li>The first item</li>
        <li>Item number two</li>
        <li>Last item</li>
      </ul>
    </li>
  </ul>
</div>

{% highlight html %}
<ul class="flex-list">
  <li>Child content can be indented
    <ul class="flex-list-indent">
      <li>The first item</li>
      <li>Item number two</li>
      <li>Last item</li>
    </ul>
  </li>
  <li>
    <span class="flex-list-item">
      <span class="glyphicon glyphicon-tasks"></span>
      <span class="flex-grow">This time with a start icon</span>
    </span>
    <ul class="flex-list-indent">
      <li>The first item</li>
      <li>Item number two</li>
      <li>Last item</li>
    </ul>
  </li>
</ul>
{% endhighlight %}

<div id="list-collapsible"></div>

## Collapsible Children

Add a couple of lines of JavaScript to adjust the applied classes for an
animated collapsible action. The `.flex-list-collapsible` identifies an element to
be animated through a state change, and the `.flex-list-collapsed` is added
when the element is collapsed.

<div class="docs-example">
  <script>
    $(function() {
      $('.js-example-collapsible').on('click', function(e) {
        e.preventDefault();
        $(this).next().toggleClass('flex-list-collapsed');
        // Also rotate the arrow for the example
        $(this).find('.flex-grow').next().find('.glyphicon').css('transition', '0.5s')
          .css('transform', $(this).next().hasClass('flex-list-collapsed') ? 'rotate(180deg)' : '');
      });
    })
  </script>
  <ul class="flex-list">
    <li>Regular list item</li>
    <li>
      <a href="" class="flex-list-item js-example-collapsible">
        <span class="flex-grow">Collapsible list item</span>
        <span>
          <span class="glyphicon glyphicon-chevron-up"></span>
        </span>
      </a>
      <ul class="flex-list-collapsible">
        <li>The first item</li>
        <li>Item number two</li>
        <li>Last item</li>
      </ul>
    </li>
    <li>Regular list item</li>
  </ul>
</div>

{% highlight html %}
<script>
  $(function() {
    $('.js-example-collapsible').on('click', function(e) {
      e.preventDefault();
      $(this).next().toggleClass('flex-list-collapsed');
      // Also rotate the arrow for the example
      $(this).find('.flex-grow').next().find('.glyphicon').css('transition', '0.5s')
        .css('transform', $(this).next().hasClass('flex-list-collapsed') ? 'rotate(180deg)' : '');
    });
  })
</script>

<ul class="flex-list">
  <li>Regular list item</li>
  <li>
    <a href="" class="flex-list-item js-example-collapsible">
      <span class="flex-grow">Collapsible list item</span>
      <span class="glyphicon glyphicon-chevron-up"></span>
    </a>
    <ul class="flex-list-collapsible">
      <li>The first item</li>
      <li>Item number two</li>
      <li>Last item</li>
    </ul>
  </li>
  <li>Regular list item</li>
</ul>
{% endhighlight %}

<div id="list-widgets"></div>

## Form Widgets

HTML checkboxes and radio buttons can be converted can be integrated
nicely into the flex list component by using the `.check` class and a small
change to the markup. They work entirely without JavaScript.

Radio button lists can be presented in the main list or in a child list.

<div class="docs-example">
  <ul class="flex-list">
    <li class="flex-list-item">
      <span class="flex-grow">Apples</span>
      <span class="switch">
        <input type="radio" name="fruit" id="fruit-apples" checked="">
        <label for="fruit-apples"></label>
      </span>
    </li>
    <li class="flex-list-item">
      <span class="flex-grow">Bananas</span>
      <span class="switch">
        <input type="radio" name="fruit" id="fruit-bananas">
        <label for="fruit-bananas"></label>
      </span>
    </li>
    <li>Preferred color
      <ul class="flex-list-indent">
        <li class="flex-list-item">
          <span class="flex-grow">Red</span>
          <span class="switch">
            <input type="radio" name="color" id="color-red" checked="">
            <label for="color-red"></label>
          </span>
        </li>
        <li class="flex-list-item">
          <span class="flex-grow">Blue</span>
          <span class="switch">
            <input type="radio" name="color" id="color-blue">
            <label for="color-blue"></label>
          </span>
        </li>
      </ul>
    </li>
  </ul>
</div>

{% highlight html %}
<ul class="flex-list">
  <li class="flex-list-item">
    <span class="flex-grow">Apples</span>
    <span class="switch">
      <input type="radio" name="fruit" id="fruit-apples" checked="">
      <label for="fruit-apples"></label>
    </span>
  </li>
  <li class="flex-list-item">
    <span class="flex-grow">Bananas</span>
    <span class="switch">
      <input type="radio" name="fruit" id="fruit-bananas">
      <label for="fruit-bananas"></label>
    </span>
  </li>
  <li>Preferred color
    <ul class="flex-list-indent">
      <li class="flex-list-item">
        <span class="flex-grow">Red</span>
        <span class="switch">
          <input type="radio" name="color" id="color-red" checked="">
          <label for="color-red"></label>
        </span>
      </li>
      <li class="flex-list-item">
        <span class="flex-grow">Blue</span>
        <span class="switch">
          <input type="radio" name="color" id="color-blue">
          <label for="color-blue"></label>
        </span>
      </li>
    </ul>
  </li>
</ul>
{% endhighlight %}

Checkboxes look great in the flex list component.

<div class="docs-example">
  <ul class="flex-list">
    <li>
      <span class="flex-list-item">
        <span class="flex-grow">Toggle switch</span>
        <span class="switch">
          <input type="checkbox" id="switch-1">
          <label for="switch-1"></label>
        </span>
      </span>
    </li>
    <li>
      <span class="flex-list-item">
        <span class="flex-grow">Another toggle switch</span>
        <span class="switch">
          <input type="checkbox" id="switch-2" checked>
          <label for="switch-2"></label>
        </span>
      </span>
    </li>
  </ul>
</div>

{% highlight html %}
<ul class="flex-list">
    <li>
      <span class="flex-list-item">
        <span class="flex-grow">Toggle switch</span>
        <span class="switch">
          <input type="checkbox" id="switch-1">
          <label for="switch-1"></label>
        </span>
      </span>
    </li>
    <li>
      <span class="flex-list-item">
        <span class="flex-grow">Another toggle switch</span>
        <span class="switch">
          <input type="checkbox" id="switch-2" checked>
          <label for="switch-2"></label>
        </span>
      </span>
    </li>
</ul>
{% endhighlight %}

To ensure that switch work correctly, you must do the following

* Wrap the `<input>` with the `.switch` class (we use a `<span>` element)
* Provide an id for the `<input>`
* Add the `<label>` immediately **after** the input and set its `for` attribute to the id of the input
