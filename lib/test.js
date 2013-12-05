// JavaScript Document
var maxLength = 20;
document.write(
	'<div data-role="page" id="home">'+
	'	<div data-role="panel" id="mypanel" data-position="right" data-display="overlay">'+
	'		<div class="ui-panel-inner">'+
	'			<ul data-role="listview" data-inset="false" data-dividertheme="d">'+
	'				<li data-role="list-divider" role="heading" class="header-list">Settings</li>'+
	'				<li data-role="listview" role="listbox"><a href="user_profile.html" rel="external">Profile</a></li>'+
	'				<li data-role="listview" role="listbox"><a href="#" rel="external">Configure</a></li>'+
	'				<li data-role="listview" role="listbox"><a href="#logout" data-rel="dialog">Logout</a></li>'+
	'			</ul>'+
	'		</div>'+
	'	</div><!-- /panel -->'+
		
	'<div data-role="content">'+
	'	<h1>Need a Help for Your Baby?</h1>'
)


document.write(
	'<div data-role="listview">' +
		'<ul data-role="listview" data-inset="true" id="article"List data-filter="true">'
);

for (var i=1;i <= maxLength;i++){
	document.write(
		'<li id ="'+i+'"><a href="#article'+i+'" id="link'+i+'"></a></li>'
	);
}

document.write(
		'</ul>'+
	'</div>'
);

document.write(
	'	<h3>Gambaran Isi :</h3>'+
	'	<p>Tips2 perawatan bayi</p>'+
	'	<p>Berita terbaru mengenai hal2 yg berkaitan tentang bayi</p>'+
	'	<p>Ask Doctor</p>'+
	'</div>'+
	
	'<div data-role="footer" data-id="foo1" data-position="fixed">'+
	'	<div data-role="navbar" data-iconpos="top"> '+
	'		<ul>'+
	'			<li><a href="home.html" data-icon="home" data-ajax="false">Home</a></li>'+
	'			<li><a href="baby.html" data-icon="star" data-ajax="false">Baby</a></li>'+
	'			<li><a href="tips.html" data-icon="info" class="ui-btn-active ui-state-persist" data-ajax="false">Tips</a></li>'+
	'			<li><a href="#mypanel" data-icon="gear" data-ajax="false">Settings</a></li>'+
	'		</ul>'+
	'	</div><!-- navbar -->'+
	'</div> <!-- Footer -->'+
	
	'</div><!-- Tips -->'
);

for(i=1; i<=maxLength; i++){
  document.write(
    '<div data-role="page" id="article' + i + '">' +
    '  <div data-role="header" data-position="inline">' +
    '    <a href="#home" data-role="button" data-icon="grid" data-back="true">back</a>' +
    '    <h1 id="articleHeader' + i + '">&nbsp;</h1>' +
    '    <a href="#" id="openButton' + i + '" data-role="button" data-icon="plus"' +
    '      class="ui-btn-right" rel="external">Open</a>' +
    '  </div>' +
	
    '  <div data-role="content">' +
    '    <div id="articleContent' + i + '" class="articleContent"></div>' +
    '    <div data-role="controlgroup" data-type="horizontal">' +
    '      <a href="#article' + String(i-1) + '" data-role="button" data-icon="arrow-l"' +
    '        data-inline="true" class="prevButton">Previous posts</a>' +
    '      <a href="#article' + String(i+1) + '" data-role="button" data-icon="arrow-r"' +
    '        data-inline="true" class="nextButton" data-iconpos="right">Next article</a>' +
    '    </div>' +
    '  </div>' +
    '</div>'
  );
}

/* JSONP */
$(function(){
  getOnlineFeed('http://feeds.feedburner.com/duniaibuanak?format=xml');
  getOnlineFeed('http://seputaranak.com/feed');
/*
  getOnlineFeed('http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=atom&topic=h');
  getOnlineFeed('http://www.appbank.net/feed');
  getOnlineFeed('http://japanese.engadget.com/rss.xml');
  getOnlineFeed('http://www.bebit.co.jp/index.xml');  
  getOnlineFeed('http://www.ntt.com/rss/release.rdf?link_id=ostop_service_rss');
  getOnlineFeed('http://feeds.feedburner.com/gapsis');
  getOnlineFeed('http://octoba.net/feed');
  getOfflineFeed('google_news_jsonp.js');
*/
});
/* functions */
var listEntries = function(json) {
  if (!json.responseData.feed.entries) return false;
  $('#widgetTitle').text(json.responseData.feed.title);
  var articleLength =json.responseData.feed.entries.length;
  articleLength = (articleLength > maxLength) ? maxLength : articleLength;
  for (var i = 1; i <= articleLength ; i++) {
    var entry = json.responseData.feed.entries[i-1];
    $('#link' + i).text(entry.title);
    $('#articleHeader' + i).text(entry.title);
    $('#openButton' + i).attr('href', entry.link);
    $('#articleContent' + i).append(entry.content);
  }
  $('#article1 .prevButton').remove();
  $('#article' + articleLength + ' .nextButton').remove();
  if (articleLength < maxLength) {
    for (i = articleLength + 1; i <= maxLength; i++) {
      $('#list' + i).remove();
      $('#article' + i).remove();
    }
  }
};
var getOnlineFeed = function(url) {
  var script = document.createElement('script');
  script.setAttribute('src', 'http://ajax.googleapis.com/ajax/services/feed/load?callback=listEntries&hl=ja&output=json-in-script&q='
                      + encodeURIComponent(url)
                      + '&v=1.0&num=' + maxLength);
  script.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(script);
};
var getOfflineFeed = function(url) {
  var script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(script);
};

document.write(
	'<div data-role="page" id="logout">'+
	'	<div data-role="header">'+
	'		<h1>Log Out</h1>'+
	'	</div>'+
	'<div data-role="content">'+
	'	<div id="out">'+
	'		<h3 align="center">Are You Sure want to log Out?</h3>'+
	'		<div align="center">'+
	'			<a href="login.html" rel="external" data-role="button" data-inline="true">Yes</a>'+
	'			<a href="#home" data-role="button" data-inline="true">No</a>'+
	'		</div>'+
	'	</div>'+
	'</div>'+
	'</div><!-- Logout -->'
);	
   
       
 
	
    	
    
    
	
    	
    		
           
        		
        		
            
        
    
    
 
        
   
    
    
			
        	
            	
            	           
            	
            	
        	
    	
	

        	
            	
                
                
                
           
        
	

	
    	
    	
    	
        
        	
            	
                      
        
        





