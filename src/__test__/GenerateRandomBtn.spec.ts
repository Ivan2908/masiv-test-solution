import { mount } from '@vue/test-utils';
import { describe, expect } from '@jest/globals';
import GenerateRandomBtn from '../../src/components/GenerateRandomBtn.vue';

describe('RandomComicButton.vue', () => {
    it('should render the btn if isVisible  is true', async () => {
        const wrapper = mount(GenerateRandomBtn, {
            props: {
                isVisible: true
            }
        });

        expect(wrapper.find('button').exists()).toBe(true);
    });

    it('should not render the btn if isVisible is false', async () => {
        const wrapper = mount(GenerateRandomBtn, {
            props: {
                isVisible: false
            }
        });

        expect(wrapper.find('button').exists()).toBe(false);
    });

    it('should emit the event "generateRandomComic" when click the btn', async () => {
        const wrapper = mount(GenerateRandomBtn, {
            props: {
                isVisible: true
            }
        });

        await wrapper.find('button').trigger('click');

        expect(wrapper.emitted('generateRandomComic')).toBeTruthy();
    });
});
