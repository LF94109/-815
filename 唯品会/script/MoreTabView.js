/*
 * 更多按钮的下拉框数据
 */
function MoreTabView(){
	
	TabView.call(this)
}

MoreTabView.prototype = Object.create(TabView.prototype)

MoreTabView.prototype.constructor = MoreTabView

MoreTabView.prototype.load = function(){
	
	//部分重写
	TabView.prototype.load.call(this)
	
	//获取更多按钮的右边和窗口的距离
	var moreRight = document.querySelector('.more-show').getBoundingClientRect().right
	
	var left = moreRight - $('.more-modal').innerWidth()  + 'px'
	
	$('.more-modal').show().css({
		
		left:left
	}).hover(function(){
		
		$(this).show()
	},function(){
		
		$(this).hide()
	})
	
	
	$('.more-modal li').hover(function(){
		
		$(this).find('p').stop().animate({top:'0'},200)
	},function(){
		
		$(this).find('p').stop().animate({top:'25%'},200)
	})
}

MoreTabView.prototype.unload = function(){
	
	$('.more-modal').hide()
}





























