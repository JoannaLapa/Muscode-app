import BaseErrorMsg from '@/components/basicComponents/UI/BaseErrorMsg.vue';
import { shallowMount } from '@vue/test-utils';

describe('BaseErrorMsg', () => {
  it('Prints the given description', () => {
    const wrapper = shallowMount(BaseErrorMsg, {
        propsData: {
            title: "Pole może zawierać tylko cyfry"
        }
    })

    expect(wrapper.text()).toMatch('Pole może zawierać tylko cyfry');
  })

  it('Prints the default description if props is not given', () => {
    const wrapper = shallowMount(BaseErrorMsg)

    expect(wrapper.text()).toMatch('Pole nie może być puste');
})
})