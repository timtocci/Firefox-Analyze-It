let _DEBUG = true;

function onCreated() {
    if (_DEBUG) {
        if (browser.runtime.lastError) {
            console.log(`Error: ${browser.runtime.lastError}`);
        } else {
            console.log("Item created successfully");
        }
    }
}

function onRemoved() {
    if (_DEBUG) {
        console.log("Item removed successfully");
    }
}

function onError(error) {
    if (_DEBUG) {
        console.log(`Error: ${error}`);
    }
}

browser.menus.create({
    id: "analyze-it",
    title: "Analyze-It",
    contexts: ["page"],
    type: "normal",
    icons: {
        "16": "icons/icon_16.png",
        "32": "icons/icon_32.png"
    }
}, onCreated);

browser.menus.create({
    id: "scritch",
    title: "Scritch.org",
    contexts: ["page"],
    type: "normal",
    parentId: "analyze-it",
    icons: {
        "16": "icons/scritch_16.png",
        "32": "icons/scritch_32.png"
    }
}, onCreated);

browser.menus.create({
    id: "scritch-guess",
    title: "Guess CMS",
    contexts: ["page"],
    type: "normal",
    parentId: "scritch",
    onclick: openGuess,
    icons: {
        "16": "icons/scritch_16.png",
        "32": "icons/scritch_32.png"
    }
}, onCreated);

function openGuess(i, t) {
    browser.tabs.create({ url: encodeURI("http://guess.scritch.org/+guess/?url=" + i.pageUrl + '&useragent=analyze-it-Firefox&accept_encoding=') });
}
browser.menus.create({
    id: "scritch-fetch",
    title: "Fetch Pg Info",
    contexts: ["page"],
    type: "normal",
    parentId: "scritch",
    onclick: openFetch,
    icons: {
        "16": "icons/scritch_16.png",
        "32": "icons/scritch_32.png"
    }
}, onCreated);

function openFetch(i, t) {
    browser.tabs.create({ url: encodeURI("http://fetch.scritch.org/+fetch/?url=" + i.pageUrl + '&useragent=analyze-it-Firefox&accept_encoding=') });
}

browser.menus.create({
    id: "viewdns",
    title: "ViewDNS.info",
    contexts: ["page"],
    type: "normal",
    parentId: "analyze-it",
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

browser.menus.create({
    id: "reverseiplookup",
    title: "Reverse IP Lookup",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openRevIP,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openRevIP(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/reverseip/?host=" + encodeURIComponent(getDomain(i.pageUrl)) + "&t=1" });
}
browser.menus.create({
    id: "dnsreport",
    title: "DNS Report",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openDNSReport,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openDNSReport(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/dnsreport/?domain=" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "chinesefirewalltest",
    title: "Chinese Firewall Test",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openChineseFirewallTest,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openChineseFirewallTest(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/chinesefirewall/?domain=" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "iranfirewalltest",
    title: "Iran Firewall Test",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openIranFirewallTest,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openIranFirewallTest(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/iranfirewall/?siteurl=" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "dnsrecordlookup",
    title: "DNS Record Lookup",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openDNSRecordLookup,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openDNSRecordLookup(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/dnsrecord/?domain=" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "iphistory",
    title: "IP History",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openIPHistory,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openIPHistory(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/iphistory/?domain=" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "domainipwhois",
    title: "Domain / IP Whois",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openDomainIPWhois,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openDomainIPWhois(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/whois/?domain=" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "dnssectest",
    title: "DNSSEC Test",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openDNSSecTest,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openDNSSecTest(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/dnssec/?domain=" + encodeURIComponent(getDomain(i.pageUrl)) });
}
browser.menus.create({
    id: "vdnsping",
    title: "Ping",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openPing,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openPing(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/ping/?domain=" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "portscan",
    title: "Port Scan (common)",
    contexts: ["page"],
    type: "normal",
    parentId: "viewdns",
    onclick: openPortScan,
    icons: {
        "16": "icons/vdns_16.png",
        "32": "icons/vdns_32.png"
    }
}, onCreated);

function openPortScan(i, t) {
    browser.tabs.create({ url: "http://viewdns.info/portscan/?host=" + encodeURIComponent(getDomain(i.pageUrl)) });
}


browser.menus.create({
    id: "sefootprints",
    title: "Search Engine Footprints",
    contexts: ["page"],
    type: "normal",
    parentId: "analyze-it",
    icons: {
        "16": "icons/search_16.png",
        "32": "icons/search_32.png"
    }
}, onCreated);

browser.menus.create({
    id: "googlefootprint",
    title: "Google Footprint",
    contexts: ["page"],
    type: "normal",
    parentId: "sefootprints",
    onclick: openGoogleFootprint,
    icons: {
        "16": "icons/google_16.png",
        "32": "icons/google_32.png"
    }
}, onCreated);

function openGoogleFootprint(i, t) {
    browser.tabs.create({ url: "https://www.google.com/search?q=site:" + encodeURIComponent(getDomain(i.pageUrl)) + "&gws_rd=ssl" });
}

browser.menus.create({
    id: "bingfootprint",
    title: "Bing Footprint",
    contexts: ["page"],
    type: "normal",
    parentId: "sefootprints",
    onclick: openBingFootprint,
    icons: {
        "16": "icons/bing_16.png",
        "32": "icons/bing_32.png"
    }
}, onCreated);

function openBingFootprint(i, t) {
    browser.tabs.create({ url: "http://www.bing.com/search?q=site%3A" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "yahoofootprint",
    title: "Yahoo Footprint",
    contexts: ["page"],
    type: "normal",
    parentId: "sefootprints",
    onclick: openYahooFootprint,
    icons: {
        "16": "icons/yahoo_16.png",
        "32": "icons/yahoo_32.png"
    }
}, onCreated);

function openYahooFootprint(i, t) {
    browser.tabs.create({ url: "https://search.yahoo.com/search?p=site%3A" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "duckfootprint",
    title: "DuckDuckGo Footprint",
    contexts: ["page"],
    type: "normal",
    parentId: "sefootprints",
    onclick: openDuckFootprint,
    icons: {
        "16": "icons/duck_16.png",
        "32": "icons/duck_32.png"
    }
}, onCreated);

function openDuckFootprint(i, t) {
    browser.tabs.create({ url: "https://duckduckgo.com/?q=site%3A" + encodeURIComponent(getDomain(i.pageUrl)) });
}


browser.menus.create({
    id: "chinesefirewall",
    title: "Chinese Firewall",
    contexts: ["page"],
    type: "normal",
    parentId: "analyze-it",
    onclick: openChineseFirewall,
    icons: {
        "16": "icons/greatfirewallofchine_16.png",
        "32": "icons/greatfirewallofchina_32.png"
    }
}, onCreated);

function openChineseFirewall(i, t) {
    browser.tabs.create({ url: "http://www.greatfirewallofchina.org/index.php?siteurl=" + encodeURIComponent(getDomain(i.pageUrl)) });
}

browser.menus.create({
    id: "indexingenabled",
    title: "Directory Indexing Enabled?",
    contexts: ["page"],
    type: "normal",
    parentId: "analyze-it",
    onclick: openIndexingEnabled,
    icons: {
        "16": "icons/google_16.png",
        "32": "icons/google_32.png"
    }
}, onCreated);

function openIndexingEnabled(i, t) {
    browser.tabs.create({ url: 'https://www.google.com/search?hl=en&q="index+of+/"+site:' + encodeURIComponent(getDomain(i.pageUrl)) });
}

/**
 * getDomain - returns the domain from a url string passed to it
 * @param {string} url
 */
function getDomain(url) {
    var host;
    var exp = /^([a-z0-9+\.\-]+):\/\/(?:(?:([^:]*):([^@]*))@)?((?:[A-Za-z0-9_\.\-])+)(?::([0-9]+))?([^?]+)?(?:\?([^#]*))?(?:\#(.*))?$/;
    var matches = exp.exec(url);
    host = matches[4];
    var separr = host.split('.');
    if (separr.length > 2) {
        var templen = separr.length;
        for (i = 1; i < templen; i++) {
            if (separr.length > 2) {
                separr.shift();
            }
        }
    }
    return separr.join('.');
}