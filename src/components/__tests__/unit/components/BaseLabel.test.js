import BaseLabel from '@/components/basicComponents/UI/BaseLabel.vue';
import { shallowMount } from '@vue/test-utils';

describe('BaseLabel', () => {
  it('shows text with sale amount', () => {
    const wrapper = shallowMount(BaseLabel, {
    propsData: {
        element: {
          price: 800,
          sale: 600,
        }
      }
    });

    expect(wrapper.text()).toMatch('-25%');
  });
  it('shows nothing', () => {
    const wrapper = shallowMount(BaseLabel, {
        propsData: {
            element: {
                price: 800,
              }
        }
    })
    expect(wrapper.text()).toMatch('');
  })
});
