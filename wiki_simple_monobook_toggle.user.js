// ==UserScript==
// @name         Wikimedia Monobook Toggle
// @namespace    https://github.com/mattman00000
// @version      0.0.1
// @description  try to take over the world!
// @author       mattman00000
// @match        *://*.wikia.com/*
// @match        *://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	
	// Your code here...
	
	//javascript: //from bookmarklet version
	if (!window.location.search.includes("useskin=monobook")) {
		window.location.assign(window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search+((window.location.search?"&":"?")+"useskin=monobook")+window.location.hash
	}
})();