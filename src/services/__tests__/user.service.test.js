import test from 'ava'
import userService from '../user.service'

let sampleUser

test.beforeEach((t) => {
  sampleUser = {
    id: 1,
    description: "South Florida's Best Meetups on Youtube",
    url: 'https://www.youtube.com/bocajs',
    types: ['tutorial'],
    topics: ['js', 'html'],
    levels: ['beginner', 'intermediate', 'advanced']
  }
})

test('must add user', (t) => {
  const userId = 1
  const user = userService.addUser(sampleUser)
  t.is(user?.id, userId)
  t.deepEqual(user, { id: userId, ...sampleUser })
})

test('must retrieve user', (t) => {
  const userId = 1
  const user = userService.getUser(1)
  t.is(user?.id, userId)
  t.deepEqual(user, { id: userId, ...sampleUser })
})

test('must get all users', (t) => {
  const userId = 1
  const users = userService.getAllUsers()
  t.deepEqual(users[0], { id: userId, ...sampleUser })
})

test('must update user', (t) => {
  const userId = 1
  const updatedDetails = {
    id: 1,
    description: '.NET API',
    url: 'https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0&WT.mc_id=dotnet-35129-website',
    types: ['reference'],
    topics: ['back-end using .Net'],
    levels: ['beginner']
  }
  const user = userService.updateUser(userId, updatedDetails)
  t.is(user?.id, userId)
  t.deepEqual(user, { id: userId, ...updatedDetails })
})

test('must delete user', (t) => {
  const userId = 0
  const expected = userService.removeUser(userId)

  t.is(expected, undefined)
  const user = userService.getUser(userId)
  t.is(user, undefined)
})
