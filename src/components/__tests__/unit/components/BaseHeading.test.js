import BaseHeading from '@/components/basicComponents/UI/BaseHeading.vue';
import { shallowMount } from '@vue/test-utils';

describe('BaseHeading', () => {
    it('Print given title', () => {
        const wrapper = shallowMount(BaseHeading, {
            propsData: {
                title: 'iPhone 6s Plus 16GB',
              }
            });
        
            expect(wrapper.text()).toMatch('iPhone 6s Plus 16GB');
          });
})