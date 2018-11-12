# mediastream-challenge-mobile

## Part 1:
Create a library or module for both Android and iOS, that simulates an online dictionary. This dictionary will have its own UI so the module must instantiate its own view.

The view should contain an input and a search button. The answer to this search will be the definition of the word, the sound if it has one, and a descriptive image.

For the search of definitions, you can use the following public api:

```
http://api.urbandictionary.com/v0/define?term=dog
```

For the image you can use the following:

```
https://api.flickr.com/services/feeds/photos_public.gne?tags=dog&tagmode=any&format=json
```

If there are no results, show some descriptive message maintaining the view structure.

You can use another API if you want to.

## Part 2:
Create a simple app, using the framework created in part 1. You must add the controls necessary to search for a word every time the user wants. Also add a share button, which displays the native share of the device. It is not necessary (for it) to share. It only needs to be shown.

## Part 3:
Similar to part 2, only on this occasion you should integrate the native frameworks in react-native and make them live together.

We attach mockups for you to use as a guide but it does not mean that they should be exact. Remember that the design should look good in both portrait or landscape mode.
