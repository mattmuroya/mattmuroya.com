---
title: "An Introduction to Markdown"
date: "2022-06-24"
---

# An Introduction to Markdown

**Markdown** is a plan text formatting syntax, also referred to as a _markup language_, for adding content formatting such as headers, paragraphs, lists, italics, and boldface to plain text documents. Markdown differs from other common tag-based markup languages (like XML and HTML) in that it is designed primarily for human readability. According to <a target="_blank" rel="noreferrer" href="https://daringfireball.net/projects/markdown/">John Gruber</a>, who invented Markdown with Aaron Swartz in 2004:

> "The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions."

Alongside the Markdown syntax, Gruber also developed a software tool for converting Markdown into HTML, making it quite useful for web writers. Since its introduction, Markdown has inspired a plethora of variations and a wide variety of applications. Many of organizations, for example <a target="_blank" rel="noreferrer" href="https://github.github.com/gfm/">GitHub</a> and <a target="_blank" rel="noreferrer" href="https://www.reddit.com/wiki/markdown">Reddit</a>, maintain their own unique "flavors" of Markdown for publishing content on their platforms.

## Markdown and Technical Writing

Recently, Markdown has seen increased interest among technical writers as a tool for authoring documentation. Because Markdown lends itself quite well to a software development environment (plain text files, version control, automated publishing workflows, etc.) while maintaining a strong focus on ease of reading/writing, many writers have embraced it as a key component of the _<a>docs-as-code</a>_ philosophy, whereby documentation is developed using the same toolings and processes as code.

## Example

To give you an idea of what Markdown looks like and how it actually works, let's look at a short example. Say you want to publish a fruit salad recipe:

> # Fruit Salad Recipe
>
> Enjoy this quick and easy fruit salad recipe just in time for summer!
>
> - **Prep time:** 15 minutes
> - **Servings:** 10
>
> ## Ingredients
>
> - 1 small watermelon
> - 1 small cantaloupe
> - 1 pineapple
> - 2 cups green grapes
> - 1 cup blueberries
>
> ## Directions
>
> 1. Cut the watermelon, cantaloupe, and pineapple into 2" cubes.
> 2. Mix all ingredients together in a large mixing bowl.
> 3. _Serve and Enjoy!_

If you were to write such a post in HTML, it would look something like this:

```html
<h1>Fruit Salad Recipe</h1>
<p>Enjoy this quick and easy fruit salad recipe just in time for summer!</p>
<ul>
  <li><strong>Prep time:</strong>15 minutes</li>
  <li><strong>Servings:</strong>10</li>
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

And here is the same post written in Markdown:

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

Both documents contain identical content and formatting information, however the value of Markdown syntax is immediately apparent. Not only is Markdown more readable and visually representative of the final output, but it is also _much_ faster and easier to write than the equivalent HTML, reinforcing its appeal for writers pushing content to the web.

In fact, this very article is written and formatted using Markdown! You can <a target="_blank" rel="noreferrer" href="https://github.com/mattmuroya/mattmuroya.com/blob/main/posts/an-introduction-to-markdown.md?plain=1">view the plain text file on GitHub</a>.

## Syntax

Now that you understand what Markdown is and how it's used, let's take a look at the syntax for a few common formatting elements. This is a non-exhaustive guide meant to help you get started writing your own Markdown documents; for a complete reference, see <a target="_blank" rel="noreferrer" href="https://daringfireball.net/projects/markdown/syntax">the official documentation</a>.
