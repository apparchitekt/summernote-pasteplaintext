# Summernote Paste Plain Text
Plugin for [Summernote](https://github.com/summernote/summernote/) that removes HTML tags from pasted content.

# Installation
Insert the JS file after Summernote files:

```html
<script src="summernote-pasteplaintext.js"></script>
```

# Configuration
Per default this plugin will remove all HTML tags when you paste content into Summernote, except those that are specified in allowTags:

```javascript
$('textarea.summernote').summernote({
    allowTags: ['a', 'b', 'br', 'em', 'p', 'strong'],
});
```

The default list of allowed HTML tags:

- a
- abbr
- acronym
- b
- bdi
- bdo
- big
- br
- cite
- code
- del
- dfn
- em
- i
- ins
- mark
- p
- q
- s
- small
- strong
- sub
- sup
- time
- u
- tt
- var
- wbr

# Changelog
### 1.0.0
- Published to GitHub and npm
