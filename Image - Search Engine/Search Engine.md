# Image - Search Engine
### 1. API Key & Elements: 
The code retrieves a user's input from an HTML search form and fetches images from the Unsplash API using the provided access key. Key elements like the search form, search box, and results container are targeted via DOM manipulation.
```
  const accessKey = "??";
  const searchForm = document.getElementById("search-form");
  const searchBox = document.getElementById("search-box");
  const searchresult = document.getElementById("search-result");
  const showMoreBtn = document.getElementById("show-more-btn");
```
### 2. Search Function:
The searchImages() function sends an API request to Unsplash based on the user's search term and current page. The results are parsed, and images are dynamically created and displayed as clickable links.

### 3. Pagination:
The "Show More" button is used to load additional images (incrementing the page number) when clicked, allowing for a paginated display of results.
```
  showMoreBtn.style.display = "block";
```
### 4. Event Listeners: 
Event listeners are added to the search form (to trigger a new search) and the "Show More" button (to load more results).
