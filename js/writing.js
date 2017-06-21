window.onload=function() {
(function() {
  var openComment, styles, time, writeStyleChar, writeStyles;

  styles = "/* \n * \"Website v2\"\n * Author - Devajith\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 11px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/* ...\n *\n * Oh, hey! Didn't see you there!\n *\n * I was upgrading this website.\n * Sure, you can watch.\n *\n *\n * But \n *\n * DONT CLICK THAT BUTTON ON TOP\n*/\n \n pre { \n  position: fixed; width: 60%;\n  top: 30px; bottom: 30px; left: 30%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px\n  rgba(0,0,0,0.1);\n}\n\n\n/* \n * Syntax highlighting \n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n *  Hang on, let me just move this a bit*/\n\n pre { left: 40%; }\n\n\n/*\n * Much better!\n * Aah I'm too tired... \n * You can wait here \n * I will go and have a coffee...*/";





  openComment = false;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      return setTimeout((function() {
        return writeStyles(message, index, interval);
      }), interval);
    }
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");

  time = window.innerWidth <= 578 ? 64 : 64;

  writeStyles(styles, 0, time);




}).call(this);




};


function validate(){

alert("Oh...WAIT.....\n\n\n'Deleting all....'");
alert("You ruined my work...\nYou could've waited.....\n\n\n'Press OK to continue'");
window.location = "home.html";

}

