---
layout: default
title: Home
---

<h2 id="bio">Bio</h2>

{{ site.data.bio.bio_text }}

{% if site.data.publications %}
<h2 id="publications">Publications</h2>

<ul>
{% for pub in site.data.publications %}
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
{% endif %}

{% if site.data.works_in_progress %}
<h2 id="works-in-progress">Works in Progress</h2>

<ul>
{% for paper in site.data.works_in_progress %}
  <li>
    <strong>{{ paper.title }}</strong><br>
    With: {{ paper.coauthors }}<br>
    {{ paper.status }}
  </li>
{% endfor %}
</ul>
{% endif %}

{% if site.data.teaching %}
<h2 id="teaching">Teaching</h2>

<ul>
{% for course in site.data.teaching %}
  <li>
    <strong>{{ course.course }}</strong> ({{ course.semester }})
    {{ course.description | markdownify }}
  </li>
{% endfor %}
</ul>
{% endif %}

{% if site.data.other.other_text %}
<h2 id="other">Other</h2>

{{ site.data.other.other_text | markdownify }}
{% endif %}
