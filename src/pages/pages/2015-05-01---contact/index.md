---
title: "Contact me"
layout: page
path: "/contact"
---

<form id="contactform" method="POST">
	<div class="form-group">
		<input type="text" name="name" placeholder="Your name">
	</div>
	<div class="form-group">
		<input type="email" name="_replyto" placeholder="Your email">
	</div>
	<div class="form-group">
		<textarea name="message" placeholder="Your message"></textarea>
	</div>
    <input type="text" name="_gotcha" style="display:none" />
	<input type="hidden" name="_next" value="//vvasiloud.github.io/thanks" />
    <input type="hidden" name="_subject" value="Website contact" />
    <input id="submit-btn" class="btn btn--large btn--inverse" type="submit" value="Send">
</form>
<script>	
	document.getElementById('submit-btn').addEventListener("click", function(){
		var param = "dnZhc2lsb3VkaXNAZ21haWwuY29t";
		document.getElementById('contactform').setAttribute('action', '//formspree.io/' + atob(param));
	});

</script>