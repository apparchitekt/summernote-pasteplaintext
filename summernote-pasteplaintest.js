/**
 * Summernote Paste Plain Text
 *
 * Plugin for Summernote WYSIWYG editor (summernote.org) that removes all tags when pasting content into the editor
 * Use allowTags = […] for an array of allowed tags in Summernote settings
 *
 * @author  Nico Wenig
 * @version 1.0.0
 *
 */
(function(factory) {
    if(typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if(typeof module === 'object' && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
} (function($) {
    $.extend($.summernote.options, {
        allowTags: ['a', 'abbr', 'acronym', 'b', 'bdi', 'bdo', 'big', 'br', 'cite', 'code', 'del',' dfn', 'em', 'i', 'ins', 'mark', 'p', 'q', 's', 'small', 'strong', 'sub', 'sup', 'time', 'u', 'tt', 'var', 'wbr'],
    });

    $.extend($.summernote.plugins, {
        pastePlainText: function(context) {
            const note = context.layoutInfo.note;

            note.on('summernote.paste', function(element, event) {
                event.preventDefault();

                if(context.options.allowTags.length > 0) {
                    var content = event.originalEvent.clipboardData.getData('text/html').replace(/<(\/?)(\w+)[^>]*\/?>/g, (_, endMark, tag) => {
                        return context.options.allowTags.includes(tag) ? '<' + endMark + tag + '>' : '';
                    }).replace(/<!--.*?-->/g, '');
                } else {
                    var content = event.originalEvent.clipboardData.getData('text/plain');
                }

                note.summernote('pasteHTML', content);
            });
        }
    });
}));