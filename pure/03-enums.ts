enum Directions {
  Up,
  Down,
  Left,
  Right
}

Directions.Up     // 0
Directions.Down   // 1
Directions.Left   // 2
Directions.Right  // 3

Directions[0] // 'Up'
Directions[1] // 'Down'
Directions[2] // 'Left'
Directions[3] // 'Right'

enum Directions2 {
  Up = 2,
  Down = 4,
  Left = 6,
  Right
}

Directions.Up     // 2
Directions.Down   // 4
Directions.Left   // 6
Directions.Right  // 7

Directions[2] // 'Up'
Directions[4] // 'Down'
Directions[6] // 'Left'
Directions[7] // 'Right'

// example
// enum create anonymous func, which is defined on initialization and returns and object
enum links1 {
  youtube = 'https://www.youtube.com',
  facebook = 'https://www.facebook.com',
  vk = 'https://www.vk.com',
}

links1.vk // 'https://www.facebook.com'

// if such enum is not going to use ???, we can constantize it
const enum links2 {
  youtube = 'https://www.youtube.com',
  facebook = 'https://www.facebook.com',
  vk = 'https://www.vk.com',
}
const arr = [links2.vk]
// it will generate (no object generation)
// const arr = ['https://www.vk.com']
