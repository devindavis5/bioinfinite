# BioInfinite

### Video Demo:
 [BioInfinite Demo](https://www.youtube.com/watch?v=fyt5f4rThxE)

### Technical Description: 
A full-stack web application, created with:
- Server Side: Ruby on Rails
- Client Side: JavaScript React

### App Description:
Created by Devin Davis and Bree Warren, BioInfinite serves as an interactive learning tool that allows a user to gain knowledge in several subjects in the scope of Biology.

-----
## Instructions:
### Click [here](http://localhost:3000/) to begin the application!
----

## Models & Relationships

### User | Category | SubCategory

<br/>

### Category <br />
* A Category has many SubCategories 

### SubCategory
* A SubCategory belongs to a Category

#

## SQL Database Table Properties
### User Table Properties
* Name
* Email
* Password
* Image

### Categories Table Properties 
* Name
* Image
* Introduction

### SubCategory Table Properties
* Name
* Description
* CategoryID (Foreign Key)

#

## Component Hierarchy
* App - SignIn
* App - SignUp
* App - MainContainer
* MainContainer - SearchBar
* MainContainer - NavBar - UserShowPanel
* MainContainer - Carousel - Category
* MainContainer - TopicShowPage - SubCategoryShowPage
* TopicShowPage - TopicShowPageNavBar - UserShowPanel

#

## Functionality
* User Model with full CRUD Functionality
* User Login & Authentication with Token
* User Validations and Authorization 
* Carousel Feature with Dynamic Rendering
* Navigation Bar with:
  * Profile Panel, Logout, & Search Bar to narrow topics
    * Avatar selection and User info on profile panel
* Show page for each panel
  * Navbar, dynamically rendered header, icons, and lesson for each topic split into subtopics

#

## Related Information
<br/>

### Difficulties/Things Learned:
* Implementing JWT Authorization upon User login
* Passing state through props
* Accessing/changing deeply nested components

### Changes/Modifications/Additions:
* Add more lessons to database (everything is rendered dynamically to support growth)
* Add quiz feature at end of each lesson, record User scores
* Add visuals to topic show pages such as diagrams and interactive learning tools

### Highlights
* Popout Avatar selection feature
* Homepage & Login Aesthetic
* Accordion Feature for SubCategories
