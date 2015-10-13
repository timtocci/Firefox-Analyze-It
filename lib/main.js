// uses jpm
var cm = require("sdk/context-menu");
var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
var mitems = [	
    cm.Item({
		label: "Chinese Firewall",
		data: "Chinese Firewall",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
    cm.Item({
		label: "Internic WHOIS",
		data: "Internic WHOIS",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
    cm.Item({
		label: "Indexing Enabled? (Google)",
		data: "Indexing Enabled? (Google)",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	})
];
var scritchitems = [	
	cm.Item({
		label: "Fetch Page Info",
		data: "Fetch Page Info",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
    cm.Item({
		label: "Guess CMS",
		data: "Guess CMS",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	})
];
var viewdnsitems = [	
	cm.Item({
		label: "Reverse IP Lookup",
		data: "Reverse IP Lookup",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
    cm.Item({
		label: "DNS Report",
		data: "DNS Report",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
	cm.Item({
		label: "Chinese Firewall Test",
		data: "Chinese Firewall Test",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
    cm.Item({
		label: "Iran Firewall Test",
		data: "Iran Firewall Test",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
	cm.Item({
		label: "DNS Record Lookup",
		data: "DNS Record Lookup",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
    cm.Item({
		label: "IP History",
		data: "IP History",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
	cm.Item({
		label: "Domain / IP Whois",
		data: "Domain / IP Whois",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
    cm.Item({
		label: "DNSSEC Test",
		data: "DNSSEC Test",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
	cm.Item({
		label: "Ping",
		data: "Ping",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
	cm.Item({
		label: "Port Scan (common)",
		data: "Port Scan (common)",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	})
];
var sefootprintsitems = [	
	cm.Item({
		label: "Google Footprint",
		data: "Google Footprint",
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	}),
    cm.Item({
		label: "Bing Footprint",
		data: "Bing Footprint" ,
		contentScriptFile: data.url("menuscript.js"),
		onMessage: function(data){sendit(data);}
	})
];

var contextmenu = cm.Menu({
    label: "Analyze-it"
});

var scritchmenu = cm.Menu({
    label: "Scritch.org",
    items: scritchitems,
	parentMenu: contextmenu
});

var viewdnsmenu = cm.Menu({
    label: "ViewDNS.info",
    items: viewdnsitems,
	parentMenu: contextmenu
});

var sefootprintsmenu = cm.Menu({
    label: "SE Footprints",
    items: sefootprintsitems,
	parentMenu: contextmenu
});

var sep = cm.Separator();
contextmenu.addItem(sep);
for(var i=0;i<mitems.length;i++){
	contextmenu.addItem(mitems[i]);
}


function sendit(data){
	var url = "";
	var host = "";
    switch (data) {
        case "Fetch Page Info": 
			host = getHost();
			url = "http://fetch.scritch.org/+fetch/?url="+ encodeURIComponent(tabs.activeTab.url) + '&useragent=analyze-it+Mozilla&accept_encoding=';
            break;
        case "Guess CMS": 
			host = getHost();
			url = "http://guess.scritch.org/+guess/?url="+ encodeURIComponent(tabs.activeTab.url) + '&useragent=analyze-it+Mozilla&accept_encoding=';
            break;
		case "Internic WHOIS": 
			host = getHost();
			url = "http://reports.internic.net/cgi/whois?whois_nic=" + encodeURIComponent(host) + "&type=domain";
			break;
		case "Chinese Firewall": 
			host = getHost();
			url = "http://www.greatfirewallofchina.org/index.php?siteurl=" + encodeURIComponent(host);
			break;
		case "Indexing Enabled? (Google)": 
			host = getHost();
			url = 'https://www.google.com/search?hl=en&q="index+of+/"+site:' + encodeURIComponent(host);
			break;
		case "Reverse IP Lookup": 
			host = getHost();
			url = "http://viewdns.info/reverseip/?host=" + encodeURIComponent(host) + "&t=1";
			break;
		case "DNS Report": 
			host = getHost();
			url = "http://viewdns.info/dnsreport/?domain=" + encodeURIComponent(host);
			break;
		case "Chinese Firewall Test": 
			host = getHost();
			url = "http://viewdns.info/chinesefirewall/?domain=" + encodeURIComponent(host);
			break;
		case "Iran Firewall Test": 
			host = getHost();
			url = "http://viewdns.info/iranfirewall/?siteurl=" + encodeURIComponent(host);
			break;
		case "DNS Record Lookup": 
			host = getHost();
			url = "http://viewdns.info/dnsrecord/?domain=" + encodeURIComponent(host);
			break;
		case "IP History": 
			host = getHost();
			url = "http://viewdns.info/iphistory/?domain=" + encodeURIComponent(host);
			break;		
		case "Domain / IP Whois": 
			host = getHost();
			url = "http://viewdns.info/whois/?domain=" + encodeURIComponent(host);
			break;
		case "DNSSEC Test": 
			host = getHost();
			url = "http://viewdns.info/dnssec/?domain=" + encodeURIComponent(host);
			break;
		case "Ping": 
			host = getHost();
			url = "http://viewdns.info/ping/?domain=" + encodeURIComponent(host);
			break;
		case "Port Scan (common)": 
			host = getHost();
			url = "http://viewdns.info/portscan/?host=" + encodeURIComponent(host);
			break;
		case "Google Footprint": 
			host = getHost();
			url = "https://www.google.com/search?q=site:" + encodeURIComponent(host) + "&gws_rd=ssl";
			break;
		case "Bing Footprint": 
			host = getHost();
			url = "http://www.bing.com/search?q=site%3A" + encodeURIComponent(host);
			break;
			
		default:
            console.log("ERROR - UNKNOWN MENU COMMAND");
            break;
    };
	
    tabs.open({url: url});
}

function getHost(){
	var turl = tabs.activeTab.url;
	var host;
	var exp = /^([a-z0-9+\.\-]+):\/\/(?:(?:([^:]*):([^@]*))@)?((?:[A-Za-z0-9_\.\-])+)(?::([0-9]+))?([^?]+)?(?:\?([^#]*))?(?:\#(.*))?$/;
	var urlparts = exp.exec(turl);
	host = urlparts[4];
	var separr = host.split('.');
	if(separr.length > 2){
		var templen = separr.length;
		for(i=1;i < templen;i++){
			if(separr.length > 2){
				separr.shift();
			}
		}
	}
	host = separr.join('.');
	return host;
}