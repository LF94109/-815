function Goods() {

}

Goods.prototype.load = function() {

	$.getJSON('file:///C:/Users/Administrator/Desktop/VIP-demo/-815/唯品会/json/goods.json', function(data) {

		var jingxuan = data.jingxuan

		for(var i = 0; i < jingxuan.length; i++) {

			console.log(jingxuan[i])

			var aGood = jingxuan[i]

			//创建商品对应的div
			$('<div class="aGood">').css({
				width: '50%',
				height: '317px',
				border: '1px red solid',
				paddingBottom: '10px',
				float: 'left',
				position: 'relative'
			}).appendTo($('.goods'))

			//往div上添加img
			.append($('<img>').attr('src', aGood.large_img).css({
				width: '100%',
				position: 'absolute'
			}))

			//往div上添加div显示鼠标悬停时的详情
			.append($("<div class='detailView'>").css({
				position: 'absolute',
				left: '20px',
				top: '20px',
				width: '460px',
				//				margin:'10px auto',
				height: '267px',
				backgroundColor: 'white',
				display: 'none'
			}))

			//控制商品div的悬停效果
			.hover(function() {

				$(this).find('img').css({
					filter: "blur(3px)"
				})
				$(this).find('.detailView').stop().fadeIn(300)

			}, function() {

				$(this).find('img').css({
					filter: "blur(0)"
				})
				$(this).find('.detailView').stop().fadeOut(300)

			})

			//奇数设置左边距
			$('aGood:odd').css({

				paddingLeft: '10px'
			}).find('.detailView').css({
				left: '30px'
			})

			//偶数设置左边距
			$('aGood:even').css({

				paddingRight: '10px'
			})
		}
	})

}