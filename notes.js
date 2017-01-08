/*
ANGULAR

  adds interactivity to HTML

  Directive: marker on html tag
   -> RUN JAVASCRIPT
  bind behavior to HTML

  Modules: encapsulate code
    maintainable, readable testable pieces of an app

  Controllers: define app behavior by defining functions and values
    app.controller('controllerName', function(){
      Add behavior here
    });

  WRAP YOUR JS IN A CLOSURE (IIFE)
*/


/*
WHAT WE'VE LEARNED SO FAR

  D - Directives - HTML annotations that trigger JavaScript behaviors
  M - Modules - Where our application components live
  C - Controllers - Where we add application behavior
  E - Expressions - How value get displayed within the page

*/

/*
Directives

  ng-app - attach app module to the page

  ng-controller - attach a controller function to the page

  ng-show / ng-hide - display a section based on an expression

  ng-repeat - repeat a section for each item in an array

  ng-source - display an image

  ng-init - evaluate an expression in the current scope
*/

/*
Custom Directives

  Template Expanding Directives
    create custom tags or attributes
    can include controller logic

  Can also
    express complex UI
    call events/register event handlers
    be reused as common UI components
*/

/*
FILTER
Filter recipe {{ data | filter:options}}

  Date
    {{ '1388123412323' | date:'MM/dd/yyyy @ h:mma' }}

  Currency
    {{ price | currency }}

  Upper/lowercase
    {{ 'octagon gem' | uppercase }}

  limitTo
    {{ 'My description' | limitTo:8 }}
    <li ng-repeat="product in store.products | limitTo:3">

  orderBy
    <li ng-repeat="product in store.products | orderBy:'-price'">
*/

/*
2 WAY DATA BINDING

  When ng-click changes the value of a tab, the {{ tab }} expression gets updates

  Expressions define a 2-way data BINDING
  this means the expressions are reevaluated when a property changes
*/
