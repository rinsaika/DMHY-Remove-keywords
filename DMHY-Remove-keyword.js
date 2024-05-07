// ==UserScript==
// @name         DMHY 動漫花園 刪除特定關鍵字
// @namespace    http://your.namespace.com
// @version      0.3
// @description  刪除 DMHY 動漫花園 特定關鍵字
// @author       Saika
// @match        https://www.dmhy.org/*
// @match        https://share.dmhy.org/*
// @match        https://dmhy.b168.net/*
// @match        https://dmhy.org/*
// @match        https://dmhy.anoneko.com/*
// @match        https://dmhy.gate.flag.moe/*
// @icon         https://share.dmhy.org/favicon.ico
// @icon64       https://share.dmhy.org/favicon.ico
// @grant        none
// @license MIT
// ==/UserScript==
 
(function() {
    'use strict';
 
    // 輸入想封鎖的關鍵字
    var keywords = ["恋之星第六季"];
    // 根據需要增加更多關鍵字
    // 例如 var keywords = ["恋之星第六季", "羅莉"];
 
    // 尋找所有行
    var rows = document.querySelectorAll("tr");
 
    // Loop through each row
    rows.forEach(function(row) {
        // 檢查該行中是否 有出現關鍵字
        var containsKeyword = keywords.some(function(keyword) {
            return row.innerText.includes(keyword);
        });
 
        // 如果找到關鍵字，則刪除該行
        if (containsKeyword) {
            row.remove();
        }
    });
})();
