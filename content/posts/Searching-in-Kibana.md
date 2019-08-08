---
title: Searching in Kibana
cover: "https://unsplash.it/1280/900/?random?Kibana"
author: "ahmedshuhel"
tags:
  - Kibana
  - Elastic Search
  - Lucene
  - Query
categories:
  - Self Help
date: 2018-03-02 23:46:27
---


Kibana helps visualizing Elasticsearch data. Since Elasticsearch is based on Lucene, it's no surprise that Kibana uses Lucene query syntax. The syntax is very intuitive in nature.

A query consists of `term` and `operator`:

```shell
res.statusCode: 200 AND req.user.name: "John Doe"

```
> `res.statusCode` and `req.user.id` are fields. `200` and `John Doe` are terms, `AND` is the operator.


We have regular query operators like `AND`,`OR`, `NOT` etc. There are other operators like `+` and `-` for specifying whither the term should or should not exists.

Terms can be further modified for better result. Few frequently used modifiers are:

- `?` and `*`: Wildcard search
- `~`: Fuzzy search
- `[ 2 To 5 ]`: Range queries.

Lucene offers a very powerful query language. For more details visit:
- https://lucene.apache.org/core/2_9_4/queryparsersyntax.html
- https://www.elastic.co/guide/en/elasticsearch/reference/6.0/query-dsl-query-string-query.html#query-string-syntax
