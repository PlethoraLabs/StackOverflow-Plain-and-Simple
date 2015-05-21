chrome.extension.sendMessage({}, function(response) {

	var readyStateCheckInterval = setInterval(function() {

		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			jQuery(function($){

				var qh      = $("#question-header");
				var answers = $("[id^='answer-']");

				$("#header").remove();
				$(".topbar").remove();
				$("#content").html("").append(qh).append(answers);

			});


		}

	}, 10);

});