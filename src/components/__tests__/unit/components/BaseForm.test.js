import BaseForm from '@/components/basicComponents/UI/BaseForm.vue';
import { shallowMount } from '@vue/test-utils';

describe('BaseForm', () => {
    it('Print given title', () => {
        const wrapper = shallowMount(BaseForm, {
            propsData: {
                title: 'Nazwa produktu',
                element: 'iPhone 6s Plus 16GB'
              }
            });
        
            expect(wrapper.text()).toMatch('Nazwa produktu');
          });
})