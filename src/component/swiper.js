import React, {
	Component
} from 'react'; 

import * as Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

class SwiperTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}; 
	}
	componentDidMount() {
var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',
			    loop: true, 
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    }, 
			    // 如果需要前进后退按钮
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    }, 
			    // 如果需要滚动条
			    scrollbar: {
			      el: '.swiper-scrollbar',
			    },
			  })        
		
	 	
	}

	componentWillUnmount() {
	 
	}
	render() {
		return(
			<div>
				<div className="swiper-container">
				    <div className="swiper-wrapper">
				        <div className="swiper-slide">Slide 1</div>
				        <div className="swiper-slide">Slide 2</div>
				        <div className="swiper-slide">Slide 3</div>
				    </div>
				    <div className="swiper-pagination"></div>
				    <div className="swiper-button-prev"></div>
				    <div className="swiper-button-next"></div>
				    <div className="swiper-scrollbar"></div>
				</div>
			</div>
		);
	}
	
}

export default SwiperTest