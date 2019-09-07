let app = angular.module('myApp', []);

app.controller('headerCtrl', function($scope) {

    $scope.NavbarToggler = function(){
        let sidenav = document.getElementById("mySidenav");

      if(sidenav.style.width == "60px"){
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("fa-list").style.display = "block";
        document.getElementById("fa-close").style.display = "none";
      }
      else{
        document.getElementById("mySidenav").style.width = "60px";
        document.getElementById("main").style.marginLeft = "60px";
        document.getElementById("fa-list").style.display = "none";
        document.getElementById("fa-close").style.display = "block";
        document.getElementById("fa-list").style.paddingBottom = "25%";
        document.getElementById("fa-close").style.paddingBottom = "25%";
      }
    }
    
    $scope.UpperNav = function(){
      let uppNav = document.getElementById("collapseNav");

      if(uppNav.style.height== "40px"){
          document.getElementById("collapseNav").style.height = "0%";
          document.getElementById("dipa").style.display = "none";

      }
      else{
          document.getElementById("collapseNav").style.height = "40px";
          document.getElementById("dipa").style.display = "block";
      }
  }
});

