// namespace
namespace Utils {
  export const SECRET: string = '123456'
  export const PI: number = 3.14
  export const getPass = (): string => 'Some password'
}

// if Utils in other file use import
/// <reference path="Utils.ts" />
const myPass: string = Utils.getPass()

// es6
export const SECRET: string = '123456'
export const PI: number = 3.14
export const getPass = (): string => 'Some password'

// import { SECRET, PI, getPass } from './Utils'
// const myPass: string = getPass()
