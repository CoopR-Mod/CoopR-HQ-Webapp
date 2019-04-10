import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ToolBar from '@/components/ToolBar.vue';

describe('ToolBar.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ToolBar, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
