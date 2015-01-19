---
layout: page
title: Components
permalink: /components/
slug: components
---

## <a name="grid"></a>Flex Grid

The grid provides a new responsive method for laying out sections of a page
that provides more capabilities than the existing Bootstrap grid. It supports
both horizontal and vertical organization of items, has independently-scrolling
areas, and has automatically expanding items. It integrates with Bootstrap's
existing `.container` class.
{: .lead }

### <a name="grid-concepts"></a>Concepts

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

### <a name="grid-canvas"></a>Filling the Canvas

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

### <a name="grid-auto-sizing"></a>Automatic Sizing

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


### <a name="grid-orientation"></a>Orientation

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

### <a name="grid-nesting"></a>Nesting

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

### <a name="grid-manual-sizing"></a>Manual Sizing

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

### <a name="grid-wrapping"></a>Wrapping Items

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

## Flex List

asdfaj skfjadsfjdfjfjfjjf  fd dfdfdf df
