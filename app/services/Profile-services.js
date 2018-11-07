"use strict";
// two methonds needed getUserProfile and setUserProfile

function ProfileService ($location) {
    const self = this;
    self.userProfile = {
        name: "Rocket the Golden",
        contact: "Rocketdog2423@gmail.com",
        bio: "I love to sleep, eat, and sleep some more. I tend to enjoy the finer things in life, such as sleeping.",
    }
    self.getUserProfile = () => {
        console.log(self.userProfile);
        return self.userProfile;
    }
    self.setUserProfile = (newInfo) => {
        console.log(newInfo);
        self.userProfile = angular.copy(newInfo);
        $location.path("/user-profile");
    }

}

angular
    .module("App")
    .service("ProfileService", ProfileService);