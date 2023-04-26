import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../App.vue'

describe('App Snapshots', () => {
  // Arrange

  it('Snapshot App Default', () => {
    //Arrange
    // Act
    const wrapper = mount(App, {
      props: {}
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
