---
title: "An Introduction to Markdown"
date: "2022-06-24"
---

# An Introduction to Markdown

**Markdown** is a standard syntax, or _markup language_, for adding formatting
such as headers, paragraphs, lists, italics, and boldface to plain text
documents, which can then be converted into other markup languages. The most
common conversion is HTML, which is used for displaying the formatted content on
the web.

This very article is written in plain text and formatted with Markdown! You can
<a target="_blank" rel="noreferrer" href="https://github.com/mattmuroya/mattmuroya.com/blob/main/posts/an-introduction-to-markdown.md?plain=1">view
the plain text document on GitHub</a>.

## Why not just write HTML?

Well, sometimes you do have to write HTML; in fact, most Markdown applications
allow you to insert blocks of HTML if your desired formatting can't be achieved
with Markdown. This gives you greater control over your webpage's semantic
structure, search engine optimization (SEO), and accessibility features.

However, Markdown was not designed to replace HTML for structuring entire
webpages; it was designed as a supplementary tool to make reading, writing, and
editing _text content_ on the web easier for humans, not just computers.

According to
<a target="_blank" rel="noreferrer" href="https://daringfireball.net/projects/markdown/">John
Gruber</a>, who invented Markdown with Aaron Swartz in 2004:

> "The overriding design goal for Markdown’s formatting syntax is to make it as
> readable as possible. The idea is that a Markdown-formatted document should be
> publishable as-is, as plain text, without looking like it’s been marked up
> with tags or formatting instructions."

This philosophy has inspired a wide variety of applications for Markdown. Many
organizations
(<a target="_blank" rel="noreferrer" href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax">GitHub</a>,
<a target="_blank" rel="noreferrer" href="https://www.reddit.com/wiki/markdown">Reddit</a>,
and
<a target="_blank" rel="noreferrer" href="https://stackoverflow.com/editing-help">Stackoverflow</a>,
for example) maintain their own unique "flavors" of Markdown syntax for
formatting user-generated content on their platforms.

## Example

To illustrate, let's look at a short example of where you might use Markdown and
how its syntax compares with HTML. Say you want to post a recipe to your blog:

<div class="callout">
<div class="h1">Fruit Salad Recipe</div>
<p>Enjoy this quick and easy fruit salad recipe just in time for summer!</p>
<ul>
  <li><strong>Prep time:</strong> 15 minutes</li>
  <li><strong>Servings:</strong> 10</li>
</ul>
<div class="h2">Ingredients</div>
<ul>
  <li>1 small watermelon</li>
  <li>1 small cantaloupe</li>
  <li>1 pineapple</li>
  <li>2 cups green grapes</li>
  <li>1 cup blueberries</li>
</ul>
<div class="h2">Directions</div>
<ol>
  <li>Cut the watermelon, cantaloupe, and pineapple into 2" cubes.</li>
  <li>Mix all ingredients together in a large mixing bowl.</li>
  <li><em>Serve and Enjoy!</em></li>
</ol>
</div>

Formatted with HTML, the post might look something like this:

```html
<h1>Fruit Salad Recipe</h1>
<p>Enjoy this quick and easy fruit salad recipe just in time for summer!</p>
<ul>
  <li><strong>Prep time:</strong> 15 minutes</li>
  <li><strong>Servings:</strong> 10</li>
</ul>
<h2>Ingredients</h2>
<ul>
  <li>1 small watermelon</li>
  <li>1 small cantaloupe</li>
  <li>1 pineapple</li>
  <li>2 cups green grapes</li>
  <li>1 cup blueberries</li>
</ul>
<h2>Directions</h2>
<ol>
  <li>Cut the watermelon, cantaloupe, and pineapple into 2" cubes.</li>
  <li>Mix all ingredients together in a large mixing bowl.</li>
  <li><em>Serve and Enjoy!</em></li>
</ol>
```

And here is the same post formatted with Markdown:

```md
# Fruit Salad Recipe

Enjoy this quick and easy fruit salad recipe just in time for summer!

- **Prep time:** 15 minutes
- **Servings:** 10

## Ingredients

- 1 small watermelon
- 1 small cantaloupe
- 1 pineapple
- 2 cups green grapes
- 1 cup blueberries

## Directions

1. Cut the watermelon, cantaloupe, and pineapple into 2" cubes.
2. Mix all ingredients together in a large mixing bowl.
3. _Serve and Enjoy!_
```

Both documents contain identical content and formatting, however the value of
Markdown over HTML _as a writing tool_ is clear. Markdown syntax is fast and
easy to read, write, and edit. Not only does HTML syntax look cluttered by
comparison (with nested "tags" like `<h1>`, `<p>`, `<ul>`, and `<li>` wrapping
every line), but using it to write formatted text is also tedious and
inefficient.

## Writing with Markdown

Now that you're acquainted with the philosophy and benefits of Markdown, it's
time to learn how to write it yourself! This section demonstrates a few of the
most common Markdown elements, as well as their HTML conversions and a preview
of the rendered output.

Note that this is a non-exhaustive guide; for a complete syntax reference, see
<a target="_blank" rel="noreferrer" href="https://daringfireball.net/projects/markdown/syntax">the
official documentation</a>.

### Headings

Define a heading by prefixing the line with one or more `# hashes`. The number
of hashes corresponds to the heading level.

#### Preview

<div class="callout">
  <div class=h1>This is a Level-1 Heading</div>
  <div class="h2">This is a Level-2 Heading</div>
  <div class="h3">This is a Level-3 Heading</div>
  <div class="h4">This is a Level-4 Heading</div>
  <div class="h5">This is a Level-5 heading</div>
</div>

#### Markdown

```md
# This is a Level-1 Heading

## This is a Level-2 Heading

### This is a Level-3 Heading

#### This is a Level-4 Heading

##### This is a Level-5 Heading
```

#### HTML

```html
<h1>This is a Level-1 Heading</h1>
<h2>This is a Level-2 Heading</h2>
<h3>This is a Level-3 Heading</h3>
<h4>This is a Level-4 Heading</h4>
<h5>This is a Level-5 heading</h5>
```

### Paragraphs

Define a paragraph by placing empty lines above and below one or more
consecutive lines of text.

#### Preview

<div class="callout">
  <p>This line is the FIRST paragraph.</p>
  <p>This line is the SECOND paragraph.</p>
  <p>These consecutive lines are the THIRD paragraph.</p>
</div>

#### Markdown

<!-- prettier-ignore-start -->
```md
This line is the FIRST paragraph.

This line is the SECOND paragraph.

These
consecutive
lines
are
the
THIRD
paragraph.
```
<!-- prettier-ignore-end -->

#### HTML

```html
<p>This line is the FIRST paragraph.</p>
<p>This line is the SECOND paragraph.</p>
<p>These consecutive lines are the THIRD paragraph.</p>
```

### Lists

Lists can be either unordered (bulleted) or ordered (numbered). Define an
unordered list by prefixing each line item with a `- hyphen`. Define an ordered
list by prefixing each line item with a `1. consecutive number and period`.

#### Preview

<div class="callout">
  <p>An unordered list can be rearranged without changing the meaning:</p>
  <ul>
    <li>Plain text can be formatted with Markdown.</li>
    <li>Markdown documents can be converted to HTML.</li>
    <li>HTML documents can be published on the web.</li>
  </ul>
  <p>An ordered list must have all items listed in a particular sequence:</p>
  <ol>
    <li>Create a text document formatted with Markdown.</li>
    <li>Convert the document from Markdown into HTML.</li>
    <li>Publish the HTML document to the web.</li>
  </ol>
</div>

#### Markdown

```md
An unordered list can be rearranged without changing the meaning:

- Plain text can be formatted with Markdown.
- Markdown documents can be converted to HTML.
- HTML documents can be published on the web.

An ordered list must have all items listed in a particular sequence:

1. Create a text document formatted with Markdown.
2. Convert the document from Markdown into HTML.
3. Publish the HTML document to the web.
```

#### HTML

```html
<p>An unordered list can be rearranged without changing the meaning:</p>
<ul>
  <li>Plain text can be formatted with Markdown.</li>
  <li>Markdown documents can be converted to HTML.</li>
  <li>HTML documents can be published on the web.</li>
</ul>
<p>An ordered list must have all items listed in a particular sequence:</p>
<ol>
  <li>Create a text document formatted with Markdown.</li>
  <li>Convert the document from Markdown into HTML.</li>
  <li>Publish the HTML document to the web.</li>
</ol>
```

### Blockquotes

Define a blockquote by prefixing one or more consecutive lines with a
`> greater-than symbol`.

#### Preview

<div class="callout">
  <blockquote>
    <p>Fear is the path to the dark side.
      Fear leads to anger. Anger leads to hate.</p>
    <p>Hate leads to suffering.</p>
  </blockquote>
  <p>Master Yoda</p>
</div>

#### Markdown

<!-- prettier-ignore-start -->

```md
> Fear is the path to the dark side. Fear leads to anger. Anger leads to hate.
>
> Hate leads to suffering.

Master Yoda
```

#### HTML

```html
<blockquote>
  <p>Fear is the path to the dark side.
    Fear leads to anger. Anger leads to hate.</p>
  <p>Hate leads to suffering.</p>
</blockquote>
<p>Master Yoda</p>
```
<!-- prettier-ignore-end -->

### Code

Code snippets can be formatted inline or as blocks. Define an inline code
snippets by placing `` `backticks` `` around the target text. Define a code
block by placing triple backticks (` ``` `) above and below one or more lines of
text.

#### Preview

<div class="callout">
  <p>Here is a function called <code>helloWorld()</code>:</p>
  <pre class="hljs"><code><span class="hljs-keyword">function</span> <span class="hljs-title function_">helloWorld</span>(<span class="hljs-params"></span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;Hello, World!&quot;</span>);
}
</code></pre>
</div>

#### Markdown

````md
Here is a function called `helloWorld()`:

```
function helloWorld() {
  console.log("Hello, World!");
}
```
````

#### HTML

```html
<p>Here is a function called <code>helloWorld()</code>:</p>
<pre><code>function helloWorld() {
  console.log("Hello, World!");
}</code></pre>
```

### Italics

Define italics by placing `_underscores_` around the target text.

#### Preview

<div class="callout">
<p><em>Italics</em> are used to place <em>emphasize a word or phrase</em>.</p>
</div>

#### Markdown

```md
_Italics_ are used to place _emphasize a word or phrase_.
```

#### HTML

```html
<p><em>Italics</em> are used to place <em>emphasize a word or phrase</em>.</p>
```

### Boldface

Define boldface by placing `**double asterisks**` around the target text.

#### Preview

<div class="callout">
  <p>
    <strong>Boldface</strong> is used to place
    <strong>strong emphasis on a word or phrase</strong>.
  </p>
</div>

#### Markdown

```md
**Boldface** is used to place **strong emphasis on a word or phrase**.
```

#### HTML

```html
<p>
  <strong>Boldface</strong> is used to place
  <strong>strong emphasis on a word or phrase</strong>.
</p>
```

### Links

Define links by placing the link text in `[brackets]` followed immediately by
the URL in `(parenthesis)`.

#### Preview

<div class="callout">
  <p>Visit <a href="https://github.com/mattmuroya">Matt Muroya's GitHub</a>!</p>
</div>

#### Markdown

```md
Visit [Matt Muroya's GitHub](https://github.com/mattmuroya)!
```

#### HTML

```html
<p>Visit <a href="https://github.com/mattmuroya">Matt Muroya's GitHub</a>!</p>
```
