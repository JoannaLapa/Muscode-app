import BaseButton from '@/components/basicComponents/UI/BaseButton.vue';
import { shallowMount } from '@vue/test-utils';

describe('BaseButton', () => {
    it('Print given title', () => {
        const wrapper = shallowMount(BaseButton, {
            propsData: {
                title: 'Zapisz',
                variant: 'pure'
              }
            });
        
            expect(wrapper.text()).toMatch('Zapisz');
          });
})