import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import GamePreview from '../GamePreview.vue'
import Game from '../../../Model/Game'

describe('GamePreview Snapshots', () => {
  // Arrange

  it('Snapshot Game factorio', () => {
    //Arrange
    const game = new Game(
      0,
      'factorio',
      'Joey',
      '10-10 -1010',
      'factory',
      ['pc'],
      'cool factorio image'
    )
    // Acts
    const wrapper = mount(GamePreview, {
      props: {
        game: game
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot Game empty', () => {
    //Arrange
    const game = new Game(0, '', '', '', '', [], '')
    // Acts
    const wrapper = mount(GamePreview, {
      props: {
        game: game
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('Snapshot Game long title', () => {
    //Arrange
    const game = new Game(
      0,
      '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y',
      '',
      '',
      '',
      [],
      ''
    )
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
