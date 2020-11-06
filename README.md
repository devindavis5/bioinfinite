# science-y app.

### Technical Description: 
description here

### App Description:
description here

-----
## Instructions:
### Click [here](http://localhost:3000/) to begin the application!
----

## Models & Relationships

### User | Quiz (Join Model) | Category | Question (Join Model) | SubCategory

<br/>

### User <br />
* A User has many Quizzes
* A User has many Categories, throguh Quizzes

### Category <br />
* A Category has many Quizzes (direct)
* A Category has many Users, through Quizzes
* A Category has many Questions
* A Category has many SubCategories 

### Quiz (Join Model) <br/>
* A Quiz belong to a User
* A Quiz belongs to a Category
* A Quiz has many Questions
* A Quiz has many Categories, through Questions

### Question (Join Model)
* A Question belongs to a Quiz
* A Question belongs to a Category

### SubCategory
* A SubCategory belongs to a Category

#

## SQL Database Table Properties
### User Table Properties
* First Name

### Categories Table Properties 
* Topic Name
* Topic Image URL
* Introduction
* Conclusion?

### Quiz Table Properties
* Score
* UserID (Foreign Key)
* CategoryID (Foreign Key)

### Question Table Properties
* Description
* Difficulty Level (default value unless time persists)
* Correct Answer
* Wrong Answer 1
* Wrong Answer 2
* Wrong Answer 3
* CategoryID (Foreign ID)
* QuizID (Foreign ID)

### Subcategory Table Properties
* Category Details
* CategoryID (Foreign Key)

#

## Component Hierarchy
* App - UserShowPage - UserQuizHistory
* App - NavBar
* App - Footer
* App - MainContainer
* MainContainer - SearchBar
* MainContainer - Carousel - TopicPanel
* MainContainer - TopicShowPage - SubCategoryShowPage
* TopicShowPage - QuizForm

#

## Functionality
* Search Bar
* Carousel for Panels
  * Uniform Icons related to Categories on each pane
* Show Page for each panel
  * Topic header, intro, visuals (pictures, videos?), lesson, teal layout with white
background for words
* Transitions
* Profile Avatar Selection (upon creation of cacount)
* Uniform Icons related to Categories on each panel
* Quizzes with full CRUD functionality

#
## Stretch Goals
* DNA Helix (AGCT, etc.)
  * Click and Drag feature
* Other interactive learning tools on each Cateogry/Lesson
-----

## Tenative Schedule

### Thursday
* environment > backend
* research themes
  * wire framing (balsamiq?)
  * bootstrap
* readme

### Friday
* finish backend (models, migrations, database, seeds, resources, etc)
* map out navigation of routing
* create basic static webpage
* navbar, header, footer

### Saturday
* build carousel and template for show pages

### Sunday
* fill in show pages

### Monday
* mvp

### Tuesday
* decide and begin on which stretch goals to pursue

### Wednesday
* final feature and stretch goal additions

### Thursday
* only css changes

### Friday
* record walkthrough video/voiceover
* update readme with any changes
  * finish things learned/highlights/difficulties, etc
* present
#
## Related Information
<br/>

### Video Demo:
 [Video Demo Link](https://video.com/blahblahblah)

### Difficulties/Things Learned:
* 

### Changes/Modifications/Additions:
* 


### Highlights
* 