interface Child {
  id: number,
  name: string
}

export const passengers: any = [
  {
    id: 1,
    fullName: "Stephen",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [
      {id: 1, name: 'ww'},
      {id: 1, name: 'ww'},
    ]
  },
  {
    id: 2,
    fullName: "Rose",
    checkedIn: false,
    checkInDate: null,
  },
  {
    id: 3,
    fullName: "James",
    checkedIn: true,
    checkInDate: 1491606000000,
    children: [
      {id: 1, name: 'ww'},
      {id: 1, name: 'ww'},
    ]
  },
  {
    id: 4,
    fullName: "Louise",
    checkedIn: true,
    checkInDate: 1488412800000,
  },
  {
    id: 5,
    fullName: "Tina",
    checkedIn: false,
    checkInDate: null,
    children: [
      {id: 1, name: 'ww'},
      {id: 1, name: 'ww'},
    ]
  },
];
