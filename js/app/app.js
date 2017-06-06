/**
 * Created by Andres on 6/1/2017.
 */

(function () {
   "use strict";
    angular.module("myApp", ["ui.router"])
        .config(
            [
                "$stateProvider" ,
                "$urlRouterProvider",
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/');

                    $stateProvider
                        .state('home', {
                            url:'/',
                            templateUrl: 'views/home.html',
                            controller: 'HomeCtrl as vm'
                        })
                }
            ]
        )
        .controller('HomeCtrl', [HomeCtrl])
        .controller('NavCtrl', [NavCtrl])
        .controller('CardPanelCtrl', [CardPanelCtrl])
        .directive('cardPanel', function() {
            return {
                restrict: 'E',
                templateUrl: 'views/card-panel-views/cardPanelView.html'
            }
        })
        .directive('currentBal', function() {
            return {
                restrict: 'AEC',
                templateUrl: 'views/card-panel-views/components/currentBal.html'
            }
        })
        .directive('recentTrans', function() {
            return {
                restrict: 'AEC',
                templateUrl: 'views/card-panel-views/components/recentTrans.html'
            }
        })
        .directive('recentCash', function() {
            return {
                restrict: 'AEC',
                templateUrl: 'views/card-panel-views/components/recentCash.html'
            }
        });

    function HomeCtrl() {
        var vm = this;
        var person = {
            "firstName" :"John",
            "lastName" : "Smith"
        };
        var personText = "Hello " + person.firstName + "!";

        vm.home ={
            "card":[
                {"text" : personText},
                {"text" : "Signature Visa Card"}
            ],
            "selfService": {
                "title" : "Self Service Shortcuts"
            },
            "shortcuts" : [
                {
                    "text": "Turn Off Account",
                    "link": "#"
                },
                {
                    "text": "Turn Off Account",
                    "link": "#"
                },
                {
                    "text": "Turn Off Account",
                    "link": "#"
                },
                {
                    "text": "Turn Off Account",
                    "link": "#"
                },
            ]
        }

        vm.accountDetails = function () {
            alert("HI!!!")
        }
    }

    function NavCtrl() {
        var vm = this;

        vm.menu = {
            "menu":[
                {
                    "name": "Activity",
                    "link":"#"
                },
                {
                    "name": "Payments",
                    "link":"#"
                },
                {
                    "name": "Cash Back Rewards",
                    "link":"#"
                },
                {
                    "name": "Self Service",
                    "link":"#"
                }
            ],
            "logo": {
                "link": "/images/logo.gif",
                "alt": "State Department Federal Credit Union"
            },
            "account":[
                {
                    "icon":"fa fa-user",
                    "title":"Profile Settings",
                    "link":"#"
                },
                {
                    "icon":"fa fa-search",
                    "title":"Search",
                    "link":"#"
                },
                {
                    "icon":"fa fa-envelope",
                    "title":"Messages",
                    "link":"#"
                }
            ],
            "log": "log out"
        }

    }

    function CardPanelCtrl() {
        var vm = this;

        vm.components = {
            "dirs": [
                {
                    "id": "current-bal",
                    "title": "Current Card Balance",
                    "amount" : "2345",
                    "credTotal" : "10000",
                    "credAvail" : "7655",
                    "credSpent" : "2210.35",
                    "lastSpentDate" : "5/1/2017",
                    "dueDate" : "6/1/2017",
                    "buttonTitle":"Make a Payment",
                    "bodyHeaders": [
                        "Current Credit Available",
                        "Last Statement Available",
                        "Next Payment Due"
                    ]
                },
                {
                    "id": "recent-trans",
                    "title": "Recent Transaction",
                    "amount" : "147.72",
                    "buttonTitle":"Recent Transactions",
                    "trans" : [
                        {
                            "date" : "5/5/2016",
                            "merchant" : "Shell",
                            "amount" : "500"
                        },
                        {
                            "date" : "5/5/2016",
                            "merchant" : "Shell",
                            "amount" : "500"
                        },
                        {
                            "date" : "5/5/2016",
                            "merchant" : "Shell",
                            "amount" : "500"
                        },
                        {
                            "date" : "5/5/2016",
                            "merchant" : "Shell",
                            "amount" : "500"
                        }
                    ],
                    "transTotal" : "147.42"

                },
                {
                    "id": "recent-cash",
                    "title": "Recent Cash Balance",
                    "amount" : "72.42",
                    "buttonTitle":"Redeem Now",

                }
            ]
        }

        vm.payCurrentBal = function () {
            alert("Pay Up!");
        }


    }
}());