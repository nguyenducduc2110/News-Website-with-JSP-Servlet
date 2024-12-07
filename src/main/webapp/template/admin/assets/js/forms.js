/* FORMS */

;(function ($) {
  $(document).ready(function () {

    
    Materialize.updateTextFields = function () {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea'
      $(input_selector).each(function (index, element) {
        if ($(element).val().length > 0 || element.autofocus || $(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
          $(this).siblings('label, i').addClass('active')
        }else {
          $(this).siblings('label, i').removeClass('active')
        }
      })
    }

    
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea'

    
    $(document).on('change', input_selector, function () {
      if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active')
      }
      validate_field($(this))
    })

    
    $(document).ready(function () {
      Materialize.updateTextFields()
    })

    
    $(document).on('reset', function (e) {
      var formReset = $(e.target)
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid')
        formReset.find(input_selector).each(function () {
          if ($(this).attr('value') === '') {
            $(this).siblings('label, i').removeClass('active')
          }
        })

        
        formReset.find('select.initialized').each(function () {
          var reset_text = formReset.find('option[selected]').text()
          formReset.siblings('input.select-dropdown').val(reset_text)
        })
      }
    })

    
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, i').addClass('active')
    })

    $(document).on('blur', input_selector, function () {
      var $inputElement = $(this)
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        $inputElement.siblings('label, i').removeClass('active')
      }

      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') !== undefined) {
        $inputElement.siblings('i').removeClass('active')
      }
      validate_field($inputElement)
    })

    window.validate_field = function (object) {
      var hasLength = object.attr('length') !== undefined
      var lenAttr = parseInt(object.attr('length'))
      var len = object.val().length

      if (object.val().length === 0 && object[0].validity.badInput === false) {
        if (object.hasClass('validate')) {
          object.removeClass('valid')
          object.removeClass('invalid')
        }
      }else {
        if (object.hasClass('validate')) {
          
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
            object.removeClass('invalid')
            object.addClass('valid')
          }else {
            object.removeClass('valid')
            object.addClass('invalid')
          }
        }
      }
    }

    
    var hiddenDiv = $('.hiddendiv').first()
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>')
      $('body').append(hiddenDiv)
    }
    var text_area_selector = '.materialize-textarea'

    function textareaAutoResize ($textarea) {
      

      var fontFamily = $textarea.css('font-family')
      var fontSize = $textarea.css('font-size')

      if (fontSize) { hiddenDiv.css('font-size', fontSize); }
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }

      if ($textarea.attr('wrap') === 'off') {
        hiddenDiv.css('overflow-wrap', 'normal')
          .css('white-space', 'pre')
      }

      hiddenDiv.text($textarea.val() + '\n')
      var content = hiddenDiv.html().replace(/\n/g, '<br>')
      hiddenDiv.html(content)

      
      

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width())
      }else {
        hiddenDiv.css('width', $(window).width() / 2)
      }

      $textarea.css('height', hiddenDiv.height())
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this)
      if ($textarea.val().length) {
        textareaAutoResize($textarea)
      }
    })

    $('body').on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this))
    })

    
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field')
      var path_input = file_field.find('input.file-path')
      var files = $(this)[0].files
      var file_names = []
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name)
      }
      path_input.val(file_names.join(', '))
      path_input.trigger('change')
    })

    /****************
    *  Range Input  *
    ****************/

    var range_type = 'input[type=range]'
    var range_mousedown = false
    var left

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>')
      $(this).after(thumb)
    })

    var range_wrapper = '.range-field'
    $(document).on('change', range_type, function (e) {
      var thumb = $(this).siblings('.thumb')
      thumb.find('.value').html($(this).val())
    })

    $(document).on('input mousedown touchstart', range_type, function (e) {
      var thumb = $(this).siblings('.thumb')
      var width = $(this).outerWidth()

      
      if (thumb.length <= 0) {
        thumb = $('<span class="thumb"><span class="value"></span></span>')
        $(this).after(thumb)
      }

      
      thumb.find('.value').html($(this).val())

      range_mousedown = true
      $(this).addClass('active')

      if (!thumb.hasClass('active')) {
        thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' })
      }

      if (e.type !== 'input') {
        if (e.pageX === undefined || e.pageX === null) { 
          left = e.originalEvent.touches[0].pageX - $(this).offset().left
        }else { 
          left = e.pageX - $(this).offset().left
        }
        if (left < 0) {
          left = 0
        }
        else if (left > width) {
          left = width
        }
        thumb.addClass('active').css('left', left)
      }

      thumb.find('.value').html($(this).val())
    })

    $(document).on('mouseup touchend', range_wrapper, function () {
      range_mousedown = false
      $(this).removeClass('active')
    })

    $(document).on('mousemove touchmove', range_wrapper, function (e) {
      var thumb = $(this).children('.thumb')
      var left
      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' })
        }
        if (e.pageX === undefined || e.pageX === null) { 
          left = e.originalEvent.touches[0].pageX - $(this).offset().left
        }else { 
          left = e.pageX - $(this).offset().left
        }
        var width = $(this).outerWidth()

        if (left < 0) {
          left = 0
        }
        else if (left > width) {
          left = width
        }
        thumb.addClass('active').css('left', left)
        thumb.find('.value').html(thumb.siblings(range_type).val())
      }
    })

    $(document).on('mouseout touchleave', range_wrapper, function () {
      if (!range_mousedown) {
        var thumb = $(this).children('.thumb')

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px'}, { duration: 100 })
        }
        thumb.removeClass('active')
      }
    })
  }); 

  /*******************
   *  Select Plugin  *
   ******************/
  $.fn.material_select = function (callback) {
    $(this).each(function () {
      var $select = $(this)

      if ($select.hasClass('browser-default')) {
        return; 
      }

      var multiple = $select.attr('multiple') ? true : false,
        lastID = $select.data('select-id') 

      if (lastID) {
        $select.parent().find('span.caret').remove()
        $select.parent().find('input').remove()

        $select.unwrap()
        $('ul#select-options-' + lastID).remove()
      }

      
      if (callback === 'destroy') {
        $select.data('select-id', null).removeClass('initialized')
        return
      }

      var uniqueID = Materialize.guid()
      $select.data('select-id', uniqueID)
      var wrapper = $('<div class="select-wrapper"></div>')
      wrapper.addClass($select.attr('class'))
      var options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
        selectChildren = $select.children('option, optgroup'),
        valuesSelected = [],
        optionsHover = false

      var label = $select.find('option:selected').html() || $select.find('option:first').html() || ''

      
      
      var appendOptionWithIcon = function (select, option, type) {
        
        var disabledClass = (option.is(':disabled')) ? 'disabled ' : ''

        
        var icon_url = option.data('icon')
        var classes = option.attr('class')
        if (!!icon_url) {
          var classString = ''
          if (!!classes) classString = ' class="' + classes + '"'

          
          if (type === 'multiple') {
            options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'))
          } else {
            options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span>' + option.html() + '</span></li>'))
          }
          return true
        }

        
        if (type === 'multiple') {
          options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'))
        } else {
          options.append($('<li class="' + disabledClass + '"><span>' + option.html() + '</span></li>'))
        }
      }

      /* Create dropdown structure. */
      if (selectChildren.length) {
        selectChildren.each(function () {
          if ($(this).is('option')) {
            
            if (multiple) {
              appendOptionWithIcon($select, $(this), 'multiple')
            } else {
              appendOptionWithIcon($select, $(this))
            }
          } else if ($(this).is('optgroup')) {
            
            var selectOptions = $(this).children('option')
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'))

            selectOptions.each(function () {
              appendOptionWithIcon($select, $(this))
            })
          }
        })
      }

      options.find('li:not(.optgroup)').each(function (i) {
        $(this).click(function (e) {
          
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
            var selected = true

            if (multiple) {
              $('input[type="checkbox"]', this).prop('checked', function (i, v) { return !v; })
              selected = toggleEntryFromArray(valuesSelected, $(this).index(), $select)
              $newSelect.trigger('focus')
            } else {
              options.find('li').removeClass('active')
              $(this).toggleClass('active')
              $newSelect.val($(this).text())
            }

            activateOption(options, $(this))
            $select.find('option').eq(i).prop('selected', selected)
            
            $select.trigger('change')
            if (typeof callback !== 'undefined') callback()
          }

          e.stopPropagation()
        })
      })

      
      $select.wrap(wrapper)
      
      var dropdownIcon = $('<span class="caret">&#9660;</span>')
      if ($select.is(':disabled'))
        dropdownIcon.addClass('disabled')

      
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;')

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID + '" value="' + sanitizedLabelHtml + '"/>')
      $select.before($newSelect)
      $newSelect.before(dropdownIcon)

      $newSelect.after(options)
      
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({'hover': false, 'closeOnClick': false})
      }

      
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'))
      }

      $select.addClass('initialized')

      $newSelect.on({
        'focus': function () {
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
            $('input.select-dropdown').trigger('close')
          }
          if (!options.is(':visible')) {
            $(this).trigger('open', ['focus'])
            var label = $(this).val()
            var selectedOption = options.find('li').filter(function () {
              return $(this).text().toLowerCase() === label.toLowerCase()
            })[0]
            activateOption(options, selectedOption)
          }
        },
        'touchend click': function (e) {
          e.stopPropagation()
        }
      })

      $newSelect.on('blur', function () {
        if (!multiple) {
          $(this).trigger('close')
        }
        options.find('li.selected').removeClass('selected')
      })

      options.hover(function () {
        optionsHover = true
      }, function () {
        optionsHover = false
      })

      $(window).on({
        'click': function () {
          multiple && (optionsHover || $newSelect.trigger('close'))
        }
      })

      
      if (multiple) {
        $select.find('option:selected:not(:disabled)').each(function () {
          var index = $(this).index()

          toggleEntryFromArray(valuesSelected, index, $select)
          options.find('li').eq(index).find(':checkbox').prop('checked', true)
        })
      }

      
      activateOption = function (collection, newOption) {
        if (newOption) {
          collection.find('li.selected').removeClass('selected')
          var option = $(newOption)
          option.addClass('selected')
          options.scrollTo(option)
        }
      }

      
      
      var filterQuery = [],
        onKeyDown = function (e) {
          
          if (e.which == 9) {
            $newSelect.trigger('close')
            return
          }

          
          if (e.which == 40 && !options.is(':visible')) {
            $newSelect.trigger('open')
            return
          }

          
          if (e.which == 13 && !options.is(':visible')) {
            return
          }

          e.preventDefault()

          
          var letter = String.fromCharCode(e.which).toLowerCase(),
            nonLetters = [9, 13, 27, 38, 40]
          if (letter && (nonLetters.indexOf(e.which) === -1)) {
            filterQuery.push(letter)

            var string = filterQuery.join(''),
              newOption = options.find('li').filter(function () {
                return $(this).text().toLowerCase().indexOf(string) === 0
              })[0]

            if (newOption) {
              activateOption(options, newOption)
            }
          }

          
          if (e.which == 13) {
            var activeOption = options.find('li.selected:not(.disabled)')[0]
            if (activeOption) {
              $(activeOption).trigger('click')
              if (!multiple) {
                $newSelect.trigger('close')
              }
            }
          }

          
          if (e.which == 40) {
            if (options.find('li.selected').length) {
              newOption = options.find('li.selected').next('li:not(.disabled)')[0]
            } else {
              newOption = options.find('li:not(.disabled)')[0]
            }
            activateOption(options, newOption)
          }

          
          if (e.which == 27) {
            $newSelect.trigger('close')
          }

          
          if (e.which == 38) {
            newOption = options.find('li.selected').prev('li:not(.disabled)')[0]
            if (newOption)
              activateOption(options, newOption)
          }

          
          setTimeout(function () { filterQuery = []; }, 1000)
      }

      $newSelect.on('keydown', onKeyDown)
    })

    function toggleEntryFromArray (entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex),
        notAdded = index === -1

      if (notAdded) {
        entriesArray.push(entryIndex)
      } else {
        entriesArray.splice(index, 1)
      }

      select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active')

      
      select.find('option').eq(entryIndex).prop('selected', notAdded)
      setValueToInput(entriesArray, select)

      return notAdded
    }

    function setValueToInput (entriesArray, select) {
      var value = ''

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select.find('option').eq(entriesArray[i]).text()

        i === 0 ? value += text : value += ', ' + text
      }

      if (value === '') {
        value = select.find('option:disabled').eq(0).text()
      }

      select.siblings('input.select-dropdown').val(value)
    }
  }
}(jQuery));

jQuery('select').siblings('input.select-dropdown').on('mousedown', function (e) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) {
      e.preventDefault()
    }
  }
});
