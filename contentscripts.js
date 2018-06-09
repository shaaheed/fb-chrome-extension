document.addEventListener('DOMNodeInserted', function (e) {
	var applyContent = false
	var applyRightCol = false
	if (applyContent === false) {
		var content = $(document).find("#contentArea")
		if (content) {
			// console.log("content")
			content.attr("style","right: 0px; width:100% !important");
			applyContent = true
		}
	}
	if (applyRightCol === false) {
		var col = $(document).find("#rightCol");
		if (col) {
			// console.log("col")
			col.remove();
			applyRightCol = true
		}
	}
});