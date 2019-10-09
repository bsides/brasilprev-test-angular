// In a real big app this would be separated by its own entities
// But for now this will work better

class UserDetailName {
  title: string
  first: string
  last: string
}

class UserDetailStreet {
  name: string
  number: number
}

class UserDetailAddress {
  street: UserDetailStreet
  city: string
  state: string
  country: string
  postcode: number
}

class UserDetailPicture {
  large: string
  medium: string
  thumbnail: string
}

class UserDetailBirthday {
  date: string
  age: number
}

class APIResultInfo {
  seed: string
  results: number
  page: number
  version: string
}

export class UserDetail {
  name: UserDetailName
  email: string
  location: UserDetailAddress
  phone: string
  cell: string
  picture: UserDetailPicture
  dob: UserDetailBirthday
}

export class User {
  name: UserDetailName['first']
  email: string
}

export class APIResult {
  results: UserDetail[]
  info: APIResultInfo
}

export class APIResultUser {
  results: User[]
  info: APIResultInfo
}
