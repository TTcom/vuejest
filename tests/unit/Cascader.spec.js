import { shallowMount } from '@vue/test-utils'
import Cascader from '@/components/Cascader.vue'
import CascaderItem from '@/components/CascaderItem.vue'
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
	});
	
	it('测试handl 能否正常找到那一项',()=>{
		const wrapper = shallowMount(Cascader,{
			propsData:{
				options:[
					{
						id:1,
						label:'上海',
						children:[{id:2,label:'xxx'}],
					},
					{
						id:3,
						label:'北京',
						children:[{id:4,label:'昌平区'}],
					},
				]
			}
		});
		wrapper.vm.handle(1,[]);
		expect(wrapper.emitted()['update:options']).toBeTruthy
		wrapper.vm.handle(2,[]);
		expect(wrapper.emitted()['update:options']).toBeTruthy
		wrapper.vm.handle(5,[]);
		expect(wrapper.emitted()['update:options']).toBeFalsy
	});
	
	it('测试lazyload 是否能执行',()=>{
		let fn = jest.fn();
		const wrapper = shallowMount(Cascader,{
			propsData:{
				lazyload:fn
			}
		});
		
		wrapper.find('.title').trigger('click');//点击头
		wrapper.find(CascaderItem).vm.$emit('change',[{
			id:1,
			label:'上海',
			children:[{id:2,label:'xxx'}]
			
		}])
		
		expect(fn).toBeCalled();       //判断函数是否被执行
		
		
		
	})
	
	
	
})