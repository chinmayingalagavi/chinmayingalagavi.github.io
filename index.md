---
layout: default
title: Home
---

{% comment %}
AUTHOR: Chinmay and AI
Render sections from site.data.navigation in list order, using each entry's
name, URL anchor, and data source. Omit sections whose content is empty.
{% endcomment %}

{% for item in site.data.navigation %}
{% assign section_data = site.data[item.data_source] %}
{% if item.data_key %}
{% assign section_data = section_data[item.data_key] | default: '' | strip %}
{% endif %}
{% if section_data and section_data != empty %}
<h2 id="{{ item.url | remove_first: '#' | escape }}">{{ item.name | escape }}</h2>

{% if item.data_key %}
{{ section_data | markdownify }}
{% else %}
{% case item.data_source %}
{% when 'publications' %}

<ul>
{% for pub in section_data %}
  <li>
    <strong>{{ pub.title }}</strong>
    {% if pub.abstract %}
      <span class="abstract-toggle">[+] Abstract</span>
      <div class="abstract-content">
        <p>{{ pub.abstract }}</p>
      </div>
    {% endif %}
    <br>
    With: {{ pub.coauthors }}<br>
    <i>{{ pub.journal }}, {{ pub.date }}</i> <br>
    {% if pub.pdf %}
      [<a href="{{ pub.pdf }}" target="_blank" rel="noopener noreferrer">PDF</a>]
    {% endif %}
    {% if pub.link %}
      [<a href="{{ pub.link }}" target="_blank" rel="noopener noreferrer">Journal article</a>]
    {% endif %}
    {% if pub.code %}
      [<a href="{{ pub.code }}" target="_blank" rel="noopener noreferrer">Code</a>]
    {% endif %}
  </li>
{% endfor %}
</ul>
{% when 'works_in_progress' %}

<ul>
{% for paper in section_data %}
  <li>
    <strong>{{ paper.title }}</strong><br>
    With: {{ paper.coauthors }}<br>
    {{ paper.status }}
  </li>
{% endfor %}
</ul>
{% when 'teaching' %}

<ul>
{% for course in section_data %}
  <li>
    <strong>{{ course.course }}</strong> ({{ course.semester }})
    {{ course.description | markdownify }}
  </li>
{% endfor %}
</ul>
{% endcase %}
{% endif %}
{% endif %}
{% endfor %}
