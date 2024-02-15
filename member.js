function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    scope: {
      skills: '='
    },
    template: '<div class="skills-member">' +
    '<h3>Skills</h3>' +
    '<ul>' +
    '<li ng-repeat="skill in skills">{{skill}}</li>' +
    '</ul>' +
    '</div>'
  };
}