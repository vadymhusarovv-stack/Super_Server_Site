---
layout: default
title: "Архів Організації"
---

# 📝 Секретні хроніки Super Server

Тут відображатимуться останні записи:

{% for post in site.posts %}
* {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url }})
{% endfor %}