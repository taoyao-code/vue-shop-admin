export type UserLoginType = {
  name: string
  password: string
}

export type UserType = {
  name: string
  password: string
  role: string
  roleId: string
  permissions: string | string[]
}
