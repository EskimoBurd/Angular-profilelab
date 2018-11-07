"use strict";

const editProfile = {
    template: `
    <form ng-submit="$ctrl.edit($ctrl.newInfo);" class="form-container">
        <h1 class="h1"> Use the form below to update your profile </h1>
            <label class= "namelabel">Name</label>
                <input type="text" ng-model="$ctrl.newInfo.name" class="nameinput">
            <label class="contactlabel">Contact</label>
                <input type="text" ng-model="$ctrl.newInfo.contact" class="contactinput">
            <label class="biolabel">Bio</label>
                <input type="text" ng-model="$ctrl.newInfo.bio" class="bioinput">
        <button class="savebtn"> Save </button>
    </form>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.edit = (newInfo) => {
            ProfileService.setUserProfile(newInfo);
        }
    }]
};



angular
    .module("App")
    .component("editProfile", editProfile)