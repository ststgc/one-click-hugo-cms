
import SubscribeIndex from "./subscribe/index";
import lazysizes from "lazysizes";
import bgset from "./lazysizes/bgset";
// import respimg from "lazysises/respimg";


// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// set loader
window.addEventListener("load", ()=>{
  document.body.classList.add('loaded');
});


// Lazysizes for background support
document.addEventListener('lazybeforeunveil', function(e){
  var bg = e.target.getAttribute('data-bg');
  if(bg){
      e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});

// function loadJS(u){var r=document.getElementsByTagName("script")[0],s=document.createElement("script");s.src=u;r.parentNode.insertBefore(s,r);}
// if(!window.HTMLPictureElement || !('sizes' in document.createElement('img'))){
//     loadJS(respimg);
// }

window.lazySizesConfig = window.lazySizesConfig || {};
//in case you want to use custom media query aliases in your markup, instead of full media queries
window.lazySizesConfig.customMedia = {
    '--small': '(max-width: 40em)',
    '--medium': '(max-width: 50em)',
    '--large': '(max-width: 60em)'
};