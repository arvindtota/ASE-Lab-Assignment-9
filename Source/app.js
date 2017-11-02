'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {
                document.getElementById('div_ReviewList').style.display = 'none';
                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=01554RJBL4YDGA0HMQJ5YRSDNFD354HOV5RDNXUVILIQP5YH" +
                    "&client_secret=JVKM1IJVTPMM5LUHQ1R3ECXTGJN2O2HGGQATKLTEWYZ2AA5D" +
                    "&v=20160215&limit=10" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);
                handler.success(function (data) {

                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        for (var i = 0; i < data.response.venues.length; i++) {
                            $scope.venueList[i] = {
                                "name": data.response.venues[i].name,
                                "id": data.response.venues[i].id,
                                "location": data.response.venues[i].location
                            };
                        }
                    }

                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }

        $scope.getaudio = function(ddesc12)
        {

            var SpeechUrl='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=adde4405-d282-474e-9e33-42a61f8cc777&password=l62ntQRZxvqw&text='+ddesc12;


            document.getElementById("Audio").innerHTML= "<video controls='' autoplay='' name='media'><source src='"+SpeechUrl+"' type='audio/ogg'></video>";
        }
    });
