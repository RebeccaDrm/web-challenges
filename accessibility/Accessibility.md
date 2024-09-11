# Accessibility

## Semantic HTML

Semantic HTML helps screen readers and other assistive technology get useful information on the structure of a Web site.
It is also important for SEO and improves readability of our HTML.

## Semantic Tags

Use elements like

header, nav, main, section, article, aside, footer

to structure every page.

Use only one h1 heading per page.

Do not skip heading levels (use h1 once, then for the next level of headings use h2, for the structurally next level of headings use h3).

## ARIA States and Properties

ARIA states and properties refer to similar features. They provide specific information on elements, their state and relationship to other elements. Assistive technology like screen readers use them to present content to users.

aria-label:

Defines a label for an interactive element. Use it when the accessible name of an element is missing, for example when a button contains no text but only an icon:

<button aria-label="Close" onclick="{}">
    <svg ...>path ... /></svg>
    </button>

## aria-labelledby:

    Identifies which element labels the element it is applied to. Some elements have a native way of referencing another element with its label (for example input elements and label elements which we will come to at a later point in time). If there is no native way to reference a labelling element use the aria-labelledby attribute:
