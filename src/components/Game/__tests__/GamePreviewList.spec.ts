import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import GamePreviewList from '../GamePreviewList.vue'
import type Game from '../../../Model/Game'

describe('GamePreviewList Snapshots', () => {
  // Arrange

  it('Snapshot Empty List', () => {
    //Arrange
    const games = <Game[]>[]
    // Act
    const wrapper = mount(GamePreviewList, {
      props: {
        games: games
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
