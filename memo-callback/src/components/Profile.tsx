import { memo } from 'react'

type Props = {
  firstname: string
  lastname: string
}

const Profile = ({ firstname, lastname }: Props) => {
  console.log("Rendered Profile Component")

  return (
    <div>
      <h3>First Name: {firstname}</h3>
      <h3>Last Name: {lastname}</h3>
    </div>
  )
}


export default memo(Profile)

