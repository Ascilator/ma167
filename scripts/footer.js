jQuery(function(){var isMobile={Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:function(){return navigator.userAgent.match(/IEMobile/i);},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows());}};$('input, textarea').placeholder();var
$headerCatalogBlock=$('.header-catalog-block'),HEADER_CATALOG_DISPLAY_CLASS='open',isCatalogShowed=$headerCatalogBlock.hasClass(HEADER_CATALOG_DISPLAY_CLASS);$('.toolbar-block-wrap').waypoint('sticky',{handler:function(direction){try{mq=window.matchMedia('(min-height: 695px) and (min-width: 1000px)');if(mq.matches){if(direction==='up'){if(isCatalogShowed){$headerCatalogBlock.addClass(HEADER_CATALOG_DISPLAY_CLASS);$('.left-column').addClass('catalog-opened');}}else{if(direction==='down'){$headerCatalogBlock.removeClass(HEADER_CATALOG_DISPLAY_CLASS);$('.left-column').removeClass('catalog-opened');}}}}catch(e){}}});$('#contacts-side-advisor-link').click(function(e){e.preventDefault();if(navigator.userAgent.toLowerCase().indexOf('opera')!=-1&&window.event.preventDefault){window.event.preventDefault();}this.newWindow=window.open(window.location.protocol+'//'+window.location.host+'/webim/client.php?locale=ru&url='+escape(document.location.href.replace('http://','').replace('https://',''))+'&referrer='+escape(document.referrer.replace('http://','').replace('https://','')),'webim','toolbar=0,scrollbars=0,location=0,status=1,menubar=0,width=640,height=480,resizable=1');this.newWindow.focus();this.newWindow.opener=window;});var popupFeedbackForm=$('#callback-form'),popupFeedbackMessage=$('#callback-message'),popupFeedbackLink=$('#callback-link');popupFeedbackLink.magnificPopup({items:{src:'#callback-form-block',type:'inline'},removalDelay:300,mainClass:'mfp-fade',callbacks:{close:function(){popupFeedbackMessage.html('');}}});popupFeedbackForm.ajaxForm({dataType:'json',success:function(data){if(!data.error){if(data.description){popupFeedbackMessage.html(data.description);}else{popupFeedbackMessage.html('Р’Р°С€ Р·Р°РїСЂРѕСЃ РїСЂРёРЅСЏС‚.');}}else{if(data.description){popupFeedbackMessage.html(data.description);}else{popupFeedbackMessage.html('РќРµ СѓРґР°Р»РѕСЃСЊ РІС‹РїРѕР»РЅРёС‚СЊ Р·Р°РїСЂРѕСЃ.');}}},error:function(){popupFeedbackMessage.html('РќРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РїСЂР°РІРёС‚СЊ Р·Р°РїСЂРѕСЃ. Р’РѕР·РјРѕР¶РЅРѕ, РЅРµС‚ РїРѕРґРєР»СЋС‡РµРЅРёСЏ Рє РРЅС‚РµСЂРЅРµС‚Сѓ (Рє СЃР°Р№С‚Сѓ), РёР»Рё РѕРЅРѕ Р·Р°С‚СЂСѓРґРЅРµРЅРѕ.');},beforeSubmit:function(){popupFeedbackMessage.html('').prepend('<span class="ajax-preloader"></span>').append('Р’С‹РїРѕР»РЅСЏРµС‚СЃСЏ Р·Р°РїСЂРѕСЃ...');}});var $SLIDER_CONTROLS=$('<a class="icon slider-arrow-prev active" href="javascript:void(0);"></a>'+'<span class="slider-pager"></span>'+'<a class="icon slider-arrow-next active" href="javascript:void(0);"></a>');if($('.actions-list').children().length>1){$('.actions-list-wrap').append($SLIDER_CONTROLS);$('.actions-list').cycle({fx:'fade',speed:1000,timeout:5000,pause:true,activePagerClass:'active',pager:'.actions-list-wrap .slider-pager',pagerAnchorBuilder:function(idx,slide){return'<a class="icon slider-pager-button" href="javascript:void(0);"></a>';},prev:'.actions-list-wrap .slider-arrow-prev',next:'.actions-list-wrap .slider-arrow-next',}).addClass('on');}$('body').append('<div id="b-page-scroll-bar" class="b-page-scroll-bar mini">'+'<a id="scroll-arrow-up" class="scroll-arrow arrow-up" href="javascript:void(0);" tabindex="0" title="РџСЂРѕРјРѕС‚Р°С‚СЊ СЌРєСЂР°РЅ РІРІРµСЂС…"></a>'+'<a id="scroll-arrow-down" class="scroll-arrow arrow-down" href="javascript:void(0);" tabindex="0" title="РџСЂРѕРјРѕС‚Р°С‚СЊ СЌРєСЂР°РЅ РІРЅРёР·"></a>'+'</div>');$('#scroll-arrow-up, #full-scroll-arrow-up').click(function(){$.scrollTo('0',500,{'axis':'y'});});$('#scroll-arrow-down, #full-scroll-arrow-down').click(function(){$.scrollTo('max',500,{'axis':'y'});});$('.authorization-link').click(function(){$('.authorization-form').slideToggle();});hs.graphicsDir='data/medalyans/';hs.outlineType='rounded';hs.showCredits=false;hs.loadingOpacity=1;hs.lang.restoreTitle='РќР°Р¶РјРёС‚Рµ РЅР° РєР°СЂС‚РёРЅРєСѓ С‡С‚РѕР±С‹ Р·Р°РєСЂС‹С‚СЊ РѕРєРЅРѕ';hs.lang.loadingText='Р—Р°РіСЂСѓР·РєР°...';hs.lang.loadingTitle='РћС‚РјРµРЅРёС‚СЊ Р·Р°РіСЂСѓР·РєСѓ';hs.lang.focusTitle='РќР°Р¶РјРёС‚Рµ РґР»СЏ РІРѕР·РІСЂР°С‚Р° Рє РєР°СЂС‚РёРЅРєРµ';hs.lang.fullExpandTitle='Р Р°Р·РІРµСЂРЅСѓС‚СЊ РІРѕ РІСЃСЋ РІРµР»РёС‡РёРЅСѓ';var $recommendationsListWrap=$('#recommendations-list-wrap');if($recommendationsListWrap.find('li').length>3){$('.recommendations-block').prepend('<a class="recommendations-arrow recommendations-arrow-left" href="javascript:void(0);" tabindex="0"></a>'+'<a class="recommendations-arrow recommendations-arrow-right" href="javascript:void(0);" tabindex="0"></a>');$recommendationsListWrap.jCarouselLite({btnPrev:'.recommendations-arrow-left',btnNext:'.recommendations-arrow-right',visible:3,circular:false,mouseWheel:true});}var FAQ_ITEMS_DISPLAYED=2,FAQ_WATCH_MORE_TEXT_TO_SHOW='Р’СЃРµ РІРѕРїСЂРѕСЃС‹ Рё РѕС‚РІРµС‚С‹',FAQ_WATCH_MORE_TEXT_TO_HIDE='РЎРєСЂС‹С‚СЊ',faqVisibleState=false,$faqItems=$('.faq-item'),faqHiddenItemsCount=$faqItems.length-FAQ_ITEMS_DISPLAYED,FAQ_FADE_TOGGLE_DURATION=800;$('#faq-watch-more').click(function(){if(faqVisibleState){faqVisibleState=false;$(this).fadeOut(FAQ_FADE_TOGGLE_DURATION).queue(function(){$(this).text(FAQ_WATCH_MORE_TEXT_TO_SHOW).dequeue();$('#faq-watch-more-count').text('('+faqHiddenItemsCount+')');});$faqItems.each(function(i){if(i>=FAQ_ITEMS_DISPLAYED){$(this).fadeOut(FAQ_FADE_TOGGLE_DURATION);}});$(this).fadeIn(FAQ_FADE_TOGGLE_DURATION);}else{faqVisibleState=true;$(this).fadeOut(FAQ_FADE_TOGGLE_DURATION/2).queue(function(){$(this).text(FAQ_WATCH_MORE_TEXT_TO_HIDE).dequeue();$('#faq-watch-more-count').text('');$faqItems.each(function(i){$(this).fadeIn(FAQ_FADE_TOGGLE_DURATION);});}).fadeIn(FAQ_FADE_TOGGLE_DURATION/2);}});var fagProcessingText='РРґС‘С‚ РѕР±СЂР°Р±РѕС‚РєР°',faqHasVoted='Р’С‹ СѓР¶Рµ РїСЂРѕРіРѕР»РѕСЃРѕРІР°Р»Рё';$('.faq-vote-yes').click(function(){var $this=$(this),$faqConfirmation=$this.parent('.faq-confirmation'),faqId=$faqConfirmation.data('faq-id');productId=$faqConfirmation.data('product-id'),$faqConfirmation.find('.ajax-preloader, .message').remove().end().append('<span class="ajax-preloader"></span><span class="message">'+fagProcessingText+'</span>');JsHttpRequest.query('index.php',{'ext_faq_id':faqId,'ext_faq_product_id':productId,'ext_faq_vote':'yes',},function(result,errors){if(result.ext_faq_has_voted){$faqConfirmation.find('.ajax-preloader, .message').remove().end().append('<span class="message">'+faqHasVoted+'</span>');}else{$faqConfirmation.find('.positive-vote-count').text(result.ext_faq_vote).end().find('.ajax-preloader, .message').remove().end();}},true);});$('.faq-vote-no').click(function(){var $this=$(this),$faqConfirmation=$this.parent('.faq-confirmation'),faqId=$faqConfirmation.data('faq-id');productId=$faqConfirmation.data('product-id'),$faqConfirmation.find('.ajax-preloader, .message').remove().end().append('<span class="ajax-preloader"></span><span class="message">'+fagProcessingText+'</span>');JsHttpRequest.query('index.php',{'ext_faq_id':faqId,'ext_faq_product_id':productId,'ext_faq_vote':'no',},function(result,errors){if(result.ext_faq_has_voted){$faqConfirmation.find('.ajax-preloader, .message').remove().end().append('<span class="message">'+faqHasVoted+'</span>');}else{$faqConfirmation.find('.negative-vote-count').text(result.ext_faq_vote).end().find('.ajax-preloader, .message').remove().end();}},true);});$('.add-to-cart').click(function(event){var $this=$(this),offerForm,productId,multyAddCount;if($this.hasClass('catalog')){productId=$this.data('product-id');offerForm=$('#catalog-offer-form-'+productId);multyAddCount=offerForm.find('.product-count-input').val();}else{offerForm=$this.parents('.offer-form');productId=$this.data('product-id');multyAddCount=offerForm.find('.product-count-input').val();}switch(CONF_CART_METHOD){default:case 0:offerForm.submit();break;case 1:open_window('index.php?do=cart&addproduct='+productId+'&multyaddcount='+multyAddCount,400,300);break;case 2:doLoad('do=cart&addproduct='+productId+'&xcart=yes&multyaddcount='+multyAddCount);break;}});$('.spoiler-header').find('.toggle').click(function(e){e.preventDefault();$(this).parent('.spoiler-header').parent('.spoiler-wrap').toggleClass('folded').toggleClass('unfolded').find('.spoiler-body:nth-child(2)').eq(0).stop(true).animate({height:'toggle',opacity:'toggle'},'slow');});$('.catalog-block.expandable').find('.level').prepend('<span class="toggle"></span>').end().find('.toggle').click(function(){$(this).nextAll('.sublevel-list').eq(0).stop(true).animate({height:'toggle',opacity:'toggle'},'slow');$(this).parent('.level').toggleClass('expanded').toggleClass('folded');}).end();$('.catalog-block-tabs-wrap').responsiveTabs({rotate:false,startCollapsed:'accordion',collapsible:'accordion',setHash:true});var $spinner=$('.cart-product-count-input');if(CONF_MULTI_CART){$spinner=$spinner.add('.product-count-input');}$spinner.wrap('<span class="spinner"></span>').before('<a class="decrease-value order-arrow left-arrow" href="javascript:void(0);" tabindex="0"></a>').after('<a class="increase-value order-arrow right-arrow" href="javascript:void(0);" tabindex="0"></a>').addClass('spinner-count-input');$(".decrease-value").click(function(){var count=$(this).parent().children(".spinner-count-input").val();if(count>1){count--;}else{count=1;}$(this).parent().children(".spinner-count-input").val(count);});$(".increase-value").click(function(){var count=$(this).parent().children(".spinner-count-input").val();$(this).parent().children(".spinner-count-input").val(++count);});if(CONF_MULTI_CART){$('.product-page').find('.product-block').find('.extra').find('.spinner').wrap('<span class="spinner-wrap"></span>').before('<label class="spinner-title" for="multyaddcount">РљРѕР»-РІРѕ</label> ').end().end().end();}var tempRating=0,rating=$('#evaluate-product').data('product-rating');function votescript(val){document.getElementById('markvalue').value=val;document.getElementById('VotingForm').submit();}$("#evaluate-product").mousemove(function(e){if(!e){e=window.event;}if(e.pageX){x=e.pageX;}else if(e.clientX){x=e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)-document.documentElement.clientLeft;}var posLeft=0;var obj=this;while(obj.offsetParent){posLeft+=obj.offsetLeft;obj=obj.offsetParent;}var offsetX=x-posLeft,modOffsetX=5*offsetX%this.offsetWidth;tempRating=parseInt(5*offsetX/this.offsetWidth);if(modOffsetX>0){tempRating+=1;}$(this).find(".rating-value").eq(0).css("width",tempRating*20+"%");});$("#evaluate-product").click(function(){rating=tempRating;votescript(rating);});$("#evaluate-product").mouseout(function(){$(this).find(".rating-value").eq(0).css("width",rating*20+"%");});var DETAILED_PARAMS_DISPLAYED=4;var CATALOG_PARAMS_DISPLAYED=6;var FADE_TOGGLE_DURATION=800;var paramsVisibleState=true;function hideExtraParams(el,params){$(".feature-list").children(".term").each(function(i){if(i>=params){$(this).fadeOut(FADE_TOGGLE_DURATION);}});$(".feature-list").children(".value").each(function(i){if(i>=params){$(this).fadeOut(FADE_TOGGLE_DURATION);}});$(el).fadeOut(FADE_TOGGLE_DURATION).queue(function(){$(this).text("Р’СЃРµ С…Р°СЂР°РєС‚РµСЂРёСЃС‚РёРєРё").fadeIn(Math.round(FADE_TOGGLE_DURATION/2)).dequeue();});paramsVisibleState=false;}function showExtraParams(el){$(el).fadeOut(Math.round(FADE_TOGGLE_DURATION/2)).queue(function(){$(this).text("РЎРєСЂС‹С‚СЊ");$(".feature-list").children(".term").each(function(i){$(this).fadeIn(FADE_TOGGLE_DURATION);});$(".feature-list").children(".value").each(function(i){$(this).fadeIn(FADE_TOGGLE_DURATION);});$(this).fadeIn(Math.round(FADE_TOGGLE_DURATION/2)).dequeue();});paramsVisibleState=true;}if(paramsVisibleState){if($(".catalog-position").length){params=CATALOG_PARAMS_DISPLAYED;}else{params=DETAILED_PARAMS_DISPLAYED;}$(".feature-list").each(function(){$(this).children(".term").each(function(i){if(i>=params){$(this).css("display","none");}});});$(".feature-list").each(function(){$(this).children(".value").each(function(i){if(i>=params){$(this).css("display","none");}});});paramsVisibleState=false;}$("#view-feature-link").click(function(){if(paramsVisibleState){hideExtraParams(this,DETAILED_PARAMS_DISPLAYED);}else{showExtraParams(this);}});});