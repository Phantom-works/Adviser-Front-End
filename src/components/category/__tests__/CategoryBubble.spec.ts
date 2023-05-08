import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CategoryBubble from '../CategoryBubble.vue'

describe('CategoryBubble Snapshots', () => {
  // Arrange

  it('Snapshot Bubble Default', () => {
    //Arrange
    const category = {}
    // Act
    const wrapper = mount(CategoryBubble, {
      props: {
        category: category
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
