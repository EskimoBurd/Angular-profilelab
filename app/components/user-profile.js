"use strict";

const userProfile = {
    template: `
    <section class= "parent-container">
        <section>
        <img src="rocket.jpg" alt="rocket" width="500" height="333" class="rocket">
        </section>
        <section>
        <h1> {{ $ctrl.info.name }}</h1>
        <p> {{ $ctrl.info.contact }} </p>
        <p> {{ $ctrl.info.bio }}</p>
        <a href="#!/edit-profile" stlye="button"> Edit </a>
    </section>
    `,

    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.info = ProfileService.getUserProfile();
    }]
}

angular
    .module("App")
    .component("userProfile", userProfile);