import { shallowMount } from '@vue/test-utils'
import HelloWord from '@/components/HelloWord.vue'
import Vue from 'vue'

//套件
describe('HelloWord.vue', () => {
	//用例
  it('renders props.msg when passed', () => {
	  
	  
	 // const msg = 'new message'
	 const wrapper = shallowMount(HelloWord, {
	   propsData: {
		      msg:"hello",
		   }
	 })
	// expect(wrapper.find('.helloword').innerHTML).toMatch(msg); 
	  //断言预期和结果是否一致
	  expect(wrapper.find('.helloword').text()).toContain("jesthello") 
	  
	  
	  
	  
	  
	  // let Sub = Vue.extend(HelloWord);
	  // 
	  // let vm = new Sub({
		 //  propsData:{
			//   msg:"hello"
		 //  }
	  // });
	  // 
	  // vm.$mount(); //如何没有el 会将挂载的结果 放到vm.$el属性上
	  // //jest文档
	  // expect(vm.$el.innerHTML).toContain("jesthello")  //是否包含字符串jesthello

	  
  
	
	
	
  })
})
