/*Admin options pannal data value*/
	function weblizar_option_data_save(name) 
	{ 	tinyMCE.triggerSave();
		var weblizar_settings_save= "#weblizar_settings_save_"+name;
		var weblizar_theme_options = "#weblizar_theme_options_"+name;
		var weblizar_settings_save_success = weblizar_settings_save+"_success";
		var loding_image ="#weblizar_loding_"+name;
		var weblizar_loding_image = loding_image +"_image";			
		
		jQuery(weblizar_loding_image).show();
		jQuery(weblizar_settings_save).val("1");        
	    jQuery.ajax({
				url:'themes.php?page=weblizar',
				type:'post',
				data : jQuery(weblizar_theme_options).serialize(),
				 success : function(data)
				 {  jQuery(weblizar_loding_image).fadeOut();						
					jQuery(weblizar_settings_save_success).show();
					jQuery(weblizar_settings_save_success).fadeOut(5000);
				}			
		});
	}	
/*Admin options value reset */
	function weblizar_option_data_reset(name) 
	{  
		var r=confirm("Do you want reset your theme setting!")
		if (r==true)
		{		var weblizar_settings_save= "#weblizar_settings_save_"+name;
				var weblizar_theme_options = "#weblizar_theme_options_"+name;
				var weblizar_settings_save_reset = weblizar_settings_save+"_reset";				
				jQuery(weblizar_settings_save).val("2");       
				jQuery.ajax({
				   url:'themes.php?page=weblizar',
				   type:'post',
				   data : jQuery(weblizar_theme_options).serialize(),
				   success : function(data){
					jQuery(weblizar_settings_save_reset).show();
					jQuery(weblizar_settings_save_reset).fadeOut(5000);
				}			
			});
		} else  {
		alert("Cancel! reset theme setting process");  }		
	}
// js to active the link of option pannel
 jQuery(document).ready(function() {
	if(getCookie('currentabChild')!=""){
		jQuery('ul.options_tabs li a#'+getCookie('currentabChild')).parent().addClass('currunt');
		jQuery('ul li.active ul').slideDown();
	}else if(getCookie('currentab')!=""){
		jQuery('ul.options_tabs li a#'+getCookie('currentab')).parent().addClass('currunt active');
		jQuery('ul.options_tabs li a#'+getCookie('currentab')).addClass('active');
		jQuery('ul.options_tabs li:first-child').removeClass('active');
	}else{
		jQuery('ul li.active ul').slideDown();
		}
	// menu click	
	jQuery('#nav > li > a').click(function(){		
		if (jQuery(this).attr('class') != 'active')
		{ 		
			jQuery('#nav li ul').slideUp(350);
			jQuery(this).next().slideToggle(350);
			jQuery('#nav li a').removeClass('active');
			jQuery(this).addClass('active');
		  
			jQuery('ul.options_tabs li').removeClass('active');
			jQuery(this).parent().addClass('active');		
			var divid =  jQuery(this).attr("id");
			document.cookie="currentabChild=;expires="+Date(jQuery.now());
			document.cookie="currentab="+divid;
			var add="div#option-"+divid;
			var strlenght = add.length;
			
			if(strlenght<17)
			{	
				var add="div#option-ui-id-"+divid;
				var ulid ="#ui-id-"+divid;
				jQuery('ul.options_tabs li li ').removeClass('currunt');
				jQuery(ulid).parent().addClass('currunt');	
			}			
			jQuery('div.ui-tabs-panel').addClass('deactive').fadeIn(1000);
			jQuery('div.ui-tabs-panel').removeClass('active');
			jQuery(add).removeClass('deactive');		
			jQuery(add).addClass('active');		
		}
	});
	
	// child submenu click
	jQuery('ul.options_tabs li li ').click(function() {			
		jQuery('ul.options_tabs li li ').removeClass('currunt');
		jQuery(this).addClass('currunt');
		var option_name =  jQuery(this).children("a").attr("id");
		document.cookie="currentab=;expires="+Date(jQuery.now());
		document.cookie="currentabChild="+option_name;
		var option_add="div#option-"+option_name;
		jQuery('div.ui-tabs-panel').addClass('deactive').fadeIn(1000);
		jQuery('div.ui-tabs-panel').removeClass('active');
		jQuery(option_add).removeClass('deactive');		
		jQuery(option_add).addClass('active');
		
	});
	if(getCookie('currentab')!=""){
			var divid = getCookie('currentab');
			var add="div#option-"+divid;
			var strlenght = add.length;
			
			if(strlenght<17)
			{	
				var add="div#option-ui-id-"+divid;
				var ulid ="#ui-id-"+divid;
				jQuery('ul.options_tabs li li ').removeClass('currunt');
				jQuery(ulid).parent().addClass('currunt');	
			}			
			jQuery('div.ui-tabs-panel').addClass('deactive').fadeIn(1000);;
			jQuery('div.ui-tabs-panel').removeClass('active');
			jQuery(add).removeClass('deactive');		
			jQuery(add).addClass('active');	
		}else if(getCookie('currentabChild')!=""){
			var option_name = getCookie('currentabChild');
			var option_add="div#option-"+option_name;
		jQuery('div.ui-tabs-panel').addClass('deactive').fadeIn(1000);;
		jQuery('div.ui-tabs-panel').removeClass('active');
		jQuery(option_add).removeClass('deactive');		
		jQuery(option_add).addClass('active');
		
		}
		
	/* Function to get cookie */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

	/********media-upload******/
	// media upload js
	var uploadID = ''; /*setup the var*/
	jQuery('.upload_image_button').click(function() {
		uploadID = jQuery(this).prev('input'); /*grab the specific input*/
		
		formfield = jQuery('.upload').attr('name');
		tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
		
		window.send_to_editor = function(html)
		{	imgurl = jQuery('img',html).attr('src');
			uploadID.val(imgurl); /*assign the value to the input*/
			tb_remove();
		};		
		return false;
	});	
	
});