---
title:  "Anais's Thesis Home"
layout: home
---

# Home :D

<div class="coverflow">
{% for post in site.posts %}
	<div class="cover">
		<img src="{{ site.url }}/{{ post.image }}">
		<a href="{{ post.url }}">{{ post.title }}</a>
	</div>
{% endfor %}
</div>

## Titeltje

Wat meer uitleg
