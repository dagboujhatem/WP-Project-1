<div class="input-group">
	 <form method="post" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>"> 	
		<input type="text" class="form-control"  name="s" id="s" placeholder="<?php esc_attr_e( "What do you want to find?", 'weblizar' ); ?>" />
		<span class="input-group-btn">
		<button class="btn btn-search" type="submit"><i class="fa fa-search"></i></button>
		</span>
	 </form> 
</div>