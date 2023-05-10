import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import GamePreview from '../GamePreview.vue'

describe('GamePreview Snapshots', () => {
  // Arrange

  it('Snapshot Empty Game', () => {
    //Arrange
    const game = {}
    // Acts
    const wrapper = mount(GamePreview, {
      props: {
        game: game
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
