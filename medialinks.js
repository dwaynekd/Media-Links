// ==UserScript==
// @name         IMDb and Letterboxd Links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add IMDb specific links and Letterboxd sidebar
// @match        *://*.imdb.com/title/tt*
// @match        *://letterboxd.com/film/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a sidebar
    var sideBar = document.createElement('div');
    sideBar.style.position = 'fixed';
    sideBar.style.top = '0';
    sideBar.style.bottom = '0';
    sideBar.style.left = '0';
    sideBar.style.width = '200px';
    sideBar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black
    sideBar.style.padding = '10px';
    sideBar.style.boxShadow = '0px 0px 15px rgba(0,0,0,0.1)';
    sideBar.style.zIndex = '1000';
    sideBar.style.display = 'flex';
    sideBar.style.flexDirection = 'column';
    sideBar.style.justifyContent = 'center';

    if (window.location.hostname === 'www.imdb.com') {
        // Extract the IMDb ID from the URL
        var imdbId = window.location.pathname.split('/')[2];

        // Add links to the div
        var links = [
            { url: `https://www.imdb.com/title/${imdbId}/fullcredits`, text: 'Cast' },
            { url: `https://www.imdb.com/title/${imdbId}/companycredits`, text: 'Production Companies' },
            { url: `https://www.imdb.com/title/${imdbId}/releaseinfo/`, text: 'Release Info' },
            { url: `https://www.imdb.com/title/${imdbId}/technical/`, text: 'Technical Info' },
            { url: `https://www.imdb.com/title/${imdbId}/awards/`, text: 'Awards' }
        ];
        links.forEach(function(link) {
            var a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            a.style.marginBottom = '10px';
            a.style.color = '#ffffff'; // White text
            sideBar.appendChild(a);
        });
    } else if (window.location.hostname === 'letterboxd.com') {
        // Extract the film name from the URL
        var filmName = window.location.pathname.split('/')[2];

        // Add links to the div
        // A test
            var links = [
            { url: `https://letterboxd.com/film/${filmName}`, text: 'Main' },
            { url: `https://letterboxd.com/film/${filmName}/crew/`, text: 'Crew' },
            { url: `https://letterboxd.com/film/${filmName}/details/`, text: 'Details' },
            { url: `https://letterboxd.com/film/${filmName}/genres/`, text: 'Genres' },
            { url: `https://letterboxd.com/film/${filmName}/releases/`, text: 'Releases' }
        ];
        links.forEach(function(link) {
            var a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            a.style.marginBottom = '10px';
            a.style.color = '#ffffff'; // White text
            sideBar.appendChild(a);
        });
    }

    // Append the sidebar to the body
    document.body.appendChild(sideBar);
})();

