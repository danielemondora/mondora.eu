---
title: mondora.eu
layout: base.webc
---

## Progetti:

<ul>
{% for progetto in progetti %}
<li>
    <a href="{{ progetto.url }}">{{ progetto.name }}</a>: {{ progetto.description }}
</li>
{% endfor %}
</ul>

## Contatti:

- [GitHub]({{ site.author.github }})
