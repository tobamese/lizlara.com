/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-console' : '&#xe003;',
			'icon-link' : '&#xe004;',
			'icon-pen-alt-fill' : '&#xe073;',
			'icon-brush' : '&#xe074;',
			'icon-code' : '&#xe076;',
			'icon-design' : '&#xe077;',
			'icon-pen' : '&#xe020;',
			'icon-headphones' : '&#xe028;',
			'icon-camera' : '&#xe029;',
			'icon-code-2' : '&#xe000;',
			'icon-share' : '&#xe001;',
			'icon-arrow-right' : '&#xe002;',
			'icon-arrow-left' : '&#xe005;',
			'icon-flickr' : '&#xe006;',
			'icon-github' : '&#xe007;',
			'icon-left-quote' : '&#xe008;',
			'icon-right-quote' : '&#xe009;',
			'icon-info' : '&#xe00a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};