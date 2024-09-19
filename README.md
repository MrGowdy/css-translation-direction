# CSS direction change after Google Translate

When using Google to translate your page to a language with a different reading direction, that direction is not changed automatically. This repository provides two simple css that will change the direction of your page based on the translation, alongside a demo of the concept. 

## How does it work?

When google translates a webpage, it adds a class to the html element. `translated-ltr` for a left-to-right language or `translated-rtl` for a right-to-left language. The classes provided in `change-direction.css` will change the direction based on those classes. Grab them from there and add them to a styling file that has access to the root `<html>` element. <strong>Note:</strong> this will not change the dir value in the `<html>` tag. If you wish to change the dir value, consider using a mutationObserver. An example is provided in the 'translate-test' repository.

## Additional 

Traditional margins and paddings will not work when changing the direction in your page. Please use inline-start, inline-end, block-start and block-end instead of left, right, top and bottom. An example of this concept is also shown in this page.

## Sources and More reading

https://github.com/Robbert/translate-test
https://medium.com/@kellycochrane2/why-you-should-stop-using-traditional-margin-and-padding-when-styling-with-css-21428c3ee7
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi