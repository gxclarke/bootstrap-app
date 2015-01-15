---
layout: page
title: Components
permalink: /components/
slug: components
---

## Grid

The grid provides a new responsive method for laying out sections of a page
that provides more capabilities than the existing Bootstrap grid. It supports
both horizontal and vertical organization of items, has independently-scrolling
areas, and has automatically expanding items. It integrates with Bootstrap's
existing `.container` class.
{: .lead }

### Boxes and Items

Boxes are the building blocks of a page layout. The `.flex-box` class
establishes a flexible container that occupies the full width of its
parent element.

Within it, the `.flex-content` class is
applied to children elements to establish flexible behavior within the
container.

<div class="docs-example">
  <div class="flex-box">
    <div class="flex-content"></div>
    <div class="flex-content"></div>
  </div>
</div>

{% highlight html %}
<div class="flex-box">
  <div class="flex-content"></div>
  <div class="flex-content"></div>
</div>
{% endhighlight %}

Notice that the `.flex-content` class includes margins that behavior exactly
the same way as the standard Bootstrap grid columns within a row.

### Automatically Adjusting Widths

By default, the `.flex-box` class uses a horizontal layout for the children
items, and the `flex-content` elements automatically expand equally to fill
the available space. If the content within a `.flex-content` item requires
more space than is provided through the equal distribution, the grid
automatically adjusts proportions to accommodate this.

<div class="docs-example">
  <div class="flex-box">
    <div class="flex-content"></div>
    <div class="flex-content" style="min-width: 400px;"></div>
    </div>
</div>

{% highlight html %}
<div class="flex-box">
  <div class="flex-content"></div>
  <div class="flex-content" style="min-width: 400px;"></div>
</div>
{% endhighlight %}

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

### Orientation



## Off-Canvas

asdfaj skfjadsfjdfjfjfjjf  fd dfdfdf df

## List

asdfaj skfjadsfjdfjfjfjjf  fd dfdfdf df
