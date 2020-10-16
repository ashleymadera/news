![gif](https://media.giphy.com/media/VgNctFELbNwdTNMWRs/giphy.gif)


# Wormy

# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Goals](#Goals)
  - [Libraries](#Libraries)
  - [Post-MVP](#Post-MVP)



### Overview

_**News App** is your number one source for news article research. _

News App is fueled by :

![With Search Results](NewsApi.org)
<br>
### How-To_Use


Enter a keywords or phrases to search for an article title and body.

Advanced search is supported here:

-Surround phrases with quotes (") for exact match.
-Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
-Prepend words that must not appear with a - symbol. Eg: -bitcoin
-Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.

<br>

### Goals

 - Search for articles (in language 'en') by a search string (the homepage of the app is simply a search bar)
  - Search results show the image, title, publish date, description and the url (as 'Read More' button) of the articles
  - Search results are sortable by either of the following criterias - date, relevance, popularity or none
  - Clicking the image or the 'Read More' button will open the article in a new tab
  - Responsiveness! For smaller screen sizes, show articles in a single column and hide the article description
  

<br>



<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | 
|    BootStrap    |  

<br>


#### Component Hierarchy



```
src
|__ App.js
|__ App.css
   |__ components/
      |__ ResultList.js
      |__ LiveNews.js
      
              
```



### Post-MVP


- _Add in Live New Feed to be the default display of the page._
- _Add an additional page to be redirected to on search to leave main landing page to host live feeds and second page to host search results._


<br>

***
