# Angular-default directvie

This is a simple AngularJS directive built upon ng-model directive which let you specify a default value for the model.
It puts a watch on the same expression passed to ng-model attribute and, when the value is @undefined@, set it to the default value.

### Use `<es-default>` directive

```html
<input type="text" ng-model="name" es-default="getDefName()"/></p>
```

### License
MIT
