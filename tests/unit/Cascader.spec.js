import { shallowMount } from '@vue/test-utils'
import Cascader from '@/components/Cascader.vue'

describe('测试组件能否按预期进行', () => {
	
	it('测试当前close事件是否能正常触发',()=>{
		
		const wrapper = shallowMount(Cascader,{
			propsData:{
				isVisible:true
			},
			
		});
		wrapper.setData({ isVisible:true })
		expect(wrapper.vm.isVisible).toBeTruthy();
		wrapper.vm.close();
		
		
		expect(wrapper.vm.isVisible).toBeFalsy();
	})
	
	
})