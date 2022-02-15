import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" status="correct" />
        <Cell value="E" />
        <Cell value="X" />
        <Cell value="A" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="L" status="present" />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is a fork of react-wordle, an open source project written in React, TypeScript, and Tailwind. The wordlist has been modified to match with my perspective of america. -{' '}
        <a
          href="https://github.com/gushint/wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
