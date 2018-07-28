# Group-Project-July-2018

1. What problem are we solving?
To help user find content in new exciting ways.

Application Features: 
1. Literal Search - Users can search specifically a movie title.
2. Suggested Picks - Users can see recommendation for movies in theaters, movies on TV, or TV show on TV.
3. In Theaters Now - User can browse through 5 recommendation currently in theaters within their zip code. The user will get the movie title, short description, next show time and theater name where it's playing close by.
4. Currently on TV - User can browse through 10 recommendation playing within 3 hrs of the current time. The user will get the channel name, channel number, show title, short description and show time.
5. Discovery Quiz - User can select 2 fun options of discovering content in non-traditional ways.
* Celebrity Favorites - User can browse through their favorite celebrities' movies by clicking on celebrities' pictures and see the results.
* Rorschach - TBD
        

Technologies Used:  
1. HTML, CSS and JavaScript
2. Advanced CSS: BootStrap, Google fonts, Bootswatch
3. JQuery and Axios 
4. Advanced jQuery: Rawgit (flip effect)
5. AJAX and JSON for API
6. Firebase Authentication 
7. Moment.js
8. Git
9. Async/Await
    
APIs used: 
1. GraceNote - Movies in theaters, Movies on TV and TV show on TV
2. Open Movie Database - Returning posters for movies in theaters and on movies on TV
3. Geo IP Lookup - Returning the user's zip code
4. Moment.js - for current time
    

**MVP**

1. Who is your target audience?  People looking to find new ways of discovering content, and people looking for a way to discuss or even enjoy (via fandango or seat geek) an event together

2. What is the problem that the product will address? It is increasingly difficult for someone to find content that they like because there is so much content out there. People are looking for a recommendation from an algorithm (if you like x you may also like y), friends or peers (social network component), lists (academy award winning movies, emmy award winning shows, pulitzer prize winning novels, grammy award winning artists, etc), or by going and experiencing something new together (going to see a movie or a concert)

3. What is the primary goal of the product? Goal is to allow users to discover content in new and traditional ways, leverage their social network for discussion and recommendations on content, and enabled users to go and experience a movie or live-event together through the platform

4. Identify and prioritize essential user stories (limit this to 3 or fewer)?

    1. User setup - Present the user with various entertainment categories to build their profile and from there use the profile as a base for recommendations. Once user setup is complete - recommendations start coming in from rovicorp API, however the user can also look for recommendations based on their social network (not FB or IG but the network inside the platform)
     - from rovi api, pull all available mega entertainment categories (movies, music, books, etc.)
     - allow users to drill down into those categories to give you specific movies, books, artists, etc.

    2.  Build social network so that if you have common interests to your friend's, there will be some signal that this is the case

    3.  Leverage Fandango and Seat Geek to see if there are any live events bases on the users interests or recommendations that would make sense to present
