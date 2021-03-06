const articles =[{
    "id": 1,
    "title": "Some cool and awesome JavaScript tricks",
    "author": "Kunal Tandon",
    "category": "javascript",
    "preview": "In this article, we will cover some of the cool and awesome JavaScript tricks which you may find useful at some point while coding in JavaScript.",
    "image": "https://miro.medium.com/max/700/1*H-25KB7EbSHjv70HXrdl6w.png",
    "firstParagraph": "There are primitive and non-primitive data types in Javascript. The primitive types include boolean, string, number, BigInt, null, Symbol and undefined. The non-primitive types include the Objects. \nOften we might need to identify what type of value is stored in a variable — Primitive or Non-Primitive?",
    "secondParagraph": "We are using the Object constructor to create a wrapper object for a value. If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. If the value is a primitive data type, the Object constructor creates a new wrapper object for the value.\n If the value is a non-primitive data type (an object), the Object constructor will give the same object.\nHence, a strict check (!== or ===) can help us identifying if a variable is of primitive or non-primitive type.",
    "postedOn": "21/07/2020"
},
{
    "id": 2,
    "title": "All the fundamental React.js concepts",
    "author": "Samer Buna",
    "category": "react",
    "preview": "An introduction to learn React’s Why, What, and How",
    "image": "https://www.onwebmax.com/wp-content/uploads/2019/08/ReactJS-768x321.png",
    "firstParagraph": "React is defined as a JavaScript library for building user interfaces. Let’s start by talking about the two different parts of this definition.\n React is a JavaScript “library”. It is not exactly a “framework”. It is not a complete solution and you will often need to use more libraries with React to form any solution.React does not assume anything about the other parts in any solution.\nFrameworks serve a great purpose, especially for young teams and startups. When working with a framework, many smart design decisions are already made for you, which gives you a clear path to focus on writing good application-level logic. However, frameworks come with some disadvantages. For experienced developers working on large codebases, these disadvantages are sometimes a deal breaker.\nFrameworks are not flexible, although some claim to be. A framework usually wants you to code everything a certain way. If you try to deviate from that way, the framework usually ends up fighting you about it. Frameworks are also usually large and full of features. If you need to use only a small piece of them, you have to include the whole thing anyway. Admittedly, this point is changing today but it is still not ideal. ",
    "secondParagraph": "React follows the Unix philosophy because it is a small library that focuses on just one thing and on doing that thing extremely well. That “one thing” is the second part of the React’s definition: Building User Interfaces.\nA User Interface (UI) is anything we put in front of users to have them interact with a machine. UIs are everywhere, from the simple buttons on a microwave to the dashboard of a space shuttle. If the device we are trying to interface can understand JavaScript, we can use React to describe a UI for it. Since Web browsers understand JavaScript, we can use React to describe Web UIs.\nI like to use the word describe here because that is what we basically do with React. We just tell it what we want! React will then build the actual UI, on our behalf, in the Web browser. Without React or similar libraries, we would need to manually build UIs with native Web APIs and JavaScript and that is not as easy.\nWhen you hear the statement that “React is declarative” this is exactly what it means. We describe UIs with React and tell it what we want (not how to do it). React will take care of the “how” and translate our declarative descriptions (which we write in the React language) to actual UIs in the browser. React shares this simple declarative power with HTML itself, but with React we get to be declarative for HTML UIs that represent dynamic data, not just static data.\nWhen React was released, there was a lot of buzz about its performance because it introduced the smart idea of a virtual DOM that can be used to reconcile the actual DOM (and we’ll talk about that in the next section).",
    "postedOn": "13/08/2020"
},
{
    "id": 3,
    "title": "React JS for Beginners — The Basics",
    "author": "Cem Eygi",
    "category": "react",
    "preview": "Learn more about the most popular JavaScript Library",
    "image": "https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    "firstParagraph": "React got that name for a reason. It’s a component-based JavaScript library that renders smartly and can seriously simplify your work.\nThis course is for React newbies and anyone looking to build a solid foundation. It’s designed to teach you everything you need to start building web applications in React right away. Each lesson in this 28-part course is a single index.html file. This keeps your focus on learning React, no distractions. \nWe’ll start with a blank file and add more complexity as we go along, wrapping the course with a lesson on how to move into a more production-ready development environment—and even deploy your app to a great service like Netlify.\nYou’ll build a solid understanding so when you come across JavaScript challenges down the road, you’ll know how to…react.",
    "secondParagraph": "Without React or similar libraries, we would need to manually build UIs with native Web APIs and JavaScript and that is not as easy.\nWhen you hear the statement that “React is declarative” this is exactly what it means. We describe UIs with React and tell it what we want (not how to do it). React will take care of the “how” and translate our declarative descriptions (which we write in the React language) to actual UIs in the browser. React shares this simple declarative power with HTML itself, but with React we get to be declarative for HTML UIs that represent dynamic data, not just static data.\nWhen React was released, there was a lot of buzz about its performance because it introduced the smart idea of a virtual DOM that can be used to reconcile the actual DOM (and we’ll talk about that in the next section).",
    "postedOn": "17/09/2020"
},
{
    "id": 4,
    "title": "How To Design Better JavaScript APIs",
    "author": "Rodney Rehm",
    "category": "javascript",
    "preview": "At some point or another, you will find yourself writing JavaScript code that exceeds the couple of lines from a jQuery plugin.",
    "image": "https://geomappando.com/wp-content/uploads/2017/08/JS_appl_geo-725x375.png",
    "firstParagraph": "This article covers the most important things that you will need to consider before and while writing your own utilities and libraries. We’ll focus on how to make your code accessible to other developers. A couple of topics will be touching upon jQuery for demonstration, yet this article is neither about jQuery nor about writing plugins for it.",
    "secondParagraph": "The Fluent Interface is often referred to as Method Chaining (although that’s only half the truth). To beginners it looks like the jQuery style. While I believe the API style was a key ingredient in jQuery’s success, it wasn’t invented by them — credits seem to go to Martin Fowler who coined the term back in 2005, roughly a year before jQuery was released. Fowler only gave the thing a name, though — Fluent Interfaces have been around for a much longer time.\nAside from major simplifications, jQuery offered to even out severe browser differences. It has always been the Fluent Interface that I have loved most about this extremely successful library. I have come to enjoy this particular API style so much that it became immediately apparent that I wanted this style for URI.js, as well. While tuning up the URI.js API, I constantly looked through the jQuery source to find the little tricks that would make my implementation as simple as possible. I found out that I was not alone in this endeavor. Lea Verou created chainvas — a tool to wrap regular getter/setter APIs into sweet fluent interfaces. Underscore’s _.chain() does something similar. In fact, most of the newer generation libraries support method chaining.",
    "postedOn": "12/07/2020"
},
{
    "id": 5,
    "title": "CSS3 Transitions: Thank God We Have A Specification!",
    "author": "Rodney Rehm",
    "category": "css",
    "preview": "This article is packed with a number of quirks and issues you should be aware of when working with CSS3 transitions. Please note that I’m not showing any workarounds or giving advice on how to circumvent the issues discussed. ",
    "image": "https://www.tutorialrepublic.com/lib/images/css-illustration.png",
    "firstParagraph": "A couple of weeks ago, I was tasked with developing a JavaScript module that would allow for the use of CSS transitions in a way that the JavaScript side would know nothing about the transitions taking place. The actual problem is the asynchronousity of transitions. After writing a bunch of tests, I gave up on the task. It cannot be done with a reasonable amount of code and initialization time. My test results are what this article is all about.Before getting started with transitions, we have to talk about a little, frequently used, helper function. getComputedStyle() is a JavaScript method that returns a CSS property’s value as the browser interprets it. This API goes back to “DOM Level 2: getComputedStyle()” and “CSS Level 2: Computed Values” — which basically specify that a computed style is an absolute value.",
    "secondParagraph": "This is fine for properties such as font-size, which take only one argument and are reliably converted to pixel values. However, it doesn’t cover how browsers should handle shorthand properties, such as margin — some browsers return nothing, others something semi-useful. Then there are properties with different but equivalent values to consider, such as font-weight’s bold and 700. WebKit also has a bug that extracts the computed value of properties from pseudo-elements.Without further ado, let’s dive into the specifications and implementations, a world riddled with misconceptions. Please note that in order to be concise, I’ve omitted vendor prefixes from the examples.",
    "postedOn": "12/09/2020"
},
{
    "id": 6,
    "title": "Making Accessibility Simpler, With Ally.js",
    "author": "Rodney Rehm",
    "category": "javascript",
    "preview": "I’ve been a web developer for 15 years, but I’d never looked into accessibility. I didn’t know enough people with (serious) disabilities to properly understand the need for accessible applications and no customer has ever required me to know what ARIA is. But I got involved with accessibility anyway – and that’s the story I’d like to share with you today. ",
    "image": "https://allyjs.io/assets/ally-js-logo.png",
    "firstParagraph": "I decided I needed to dig into ARIA – honestly not because I deeply cared about accessibility, but because I had no intention of reinventing the wheels they already had. One of the first things you’ll learn when looking at ARIA is that supporting keyboard navigation is fundamental. And the first step to understanding keyboard navigation is to understand what focus is. And this is where I tripped, because nobody knew (in detail) which elements could receive focus and which could not.Having had a bit of experience testing browser compatibility (“CSS3 Transitions: Thank God We Have A Specification!”), I decided I would spend some time investigating. An ebook covering my findings is in the works and will be ready to make you lose focus in early 2016. But more importantly, the JavaScript variant of that book is available today:",
    "secondParagraph": "",
    "postedOn": "5/09/2020"
}

]

export default articles;