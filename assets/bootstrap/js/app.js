const input = document.getElementById("domain");
const form = document.querySelector('form');
const revereip = document.getElementById("l1");
const shodan = document.getElementById("link2");
const github = document.getElementById("link3");
const loginpages = document.getElementById("link4");
const secheader = document.getElementById("link5");
const waybackmachine = document.getElementById("link6");
const ssltest = document.getElementById("link7");
const wordpresssearch = document.getElementById("link8");
const wordpresscontents = document.getElementById("link9");
const whatcms = document.getElementById("link10");
const pastbin = document.getElementById("link11");
const stackoverflow = document.getElementById("link12");
const s3buckets = document.getElementById("link13");
const subdomains = document.getElementById("link14");
const phpinfo = document.getElementById("link15");
const backupfiles = document.getElementById("link16");
const configlogfiles = document.getElementById("link17");
const certsh = document.getElementById("link18");
const directorylisting = document.getElementById("link19");
const passwordfiles = document.getElementById("link20");
const robots = document.getElementById("link21");
const openredirect = document.getElementById("open");


form.addEventListener('submit', function(event) {
  event.preventDefault();
  revereip.href = `https://viewdns.info/reverseip/?host=${input.value}&t=1`;
  shodan.href = `https://www.shodan.io/search?query=${input.value}`;
  github.href = `https://github.com/search?q=${input.value}`;
  loginpages.href = `https://www.google.com/search?q=site:${input.value} inurl:login | inurl:signin | intitle:Login | intitle: signin | inurl:auth`;
  secheader.href = `https://securityheaders.com/?q=${input.value}&followRedirects=on`;
  waybackmachine.href = `https://web.archive.org/web/*/${input.value}/*`;
  ssltest.href = `https://www.ssllabs.com/ssltest/analyze.html?d=${input.value}`;
  wordpresssearch.href = `http://wwwb-dedup.us.archive.org:8083/cdx/search?url=${input.value}/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx=`;
  wordpresscontents.href = `https://google.com/search?q=site:${input.value} inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download`;
  whatcms.href = `https://whatcms.org/?s=${input.value}`;
  pastbin.href = `https://google.com/search?q=site:pastebin.com | site:paste2.org | site:pastehtml.com | site:slexy.org | site:snipplr.com | site:snipt.net | site:textsnip.com | site:bitpaste.app | site:justpaste.it | site:heypasteit.com | site:hastebin.com | site:dpaste.org | site:dpaste.com | site:codepad.org | site:jsitor.com | site:codepen.io | site:jsfiddle.net | site:dotnetfiddle.net | site:phpfiddle.org | site:ide.geeksforgeeks.org | site:repl.it | site:ideone.com | site:paste.debian.net | site:paste.org | site:paste.org.ru | site:codebeautify.org  | site:codeshare.io | site:trello.com '${input.value}'`;
  stackoverflow.href = `https://google.com/search?q=site:stackoverflow.com '${input.value}'`;
  s3buckets.href = `https://google.com/search?q=site:.s3.amazonaws.com '${input.value}'`;
  subdomains.href = `https://google.com/search?q=site:*.${input.value}`;
  phpinfo.href = `https://google.com/search?q=site:${input.value} ext:php intitle:phpinfo 'published by the PHP Group'`;
  backupfiles.href = `https://www.google.com/search?q=site:${input.value} ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup`;
  configlogfiles.href =  `https://www.google.com/search?q=site:${input.value} ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini | ext:log`;
  certsh.href =  `https://crt.sh/?q=${input.value}`;
  directorylisting = `https://www.google.com/search?q=site:${input.value} intitle:index.of  | 'parent directory'`;
  passwordfiles = `https://www.google.com/search?q=site:${input.value} 'password' filetype:doc | filetype:pdf | filetype:docx | filetype:xls | filetype:dat | filetype:log`;
  robots.href = `https://www.google.com/search?q=${input.value}+robots.txt`;
  openredirect.href = `https://www.google.com/search?q=site:${input.value} inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http`;

});




// CLICK TO GO TOP BUTTON -------------------------------


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}