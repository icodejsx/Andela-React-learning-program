


export default function Home() {

  function ListItems() {
    const ints = [1, 2, 3,]
    return (
      <div>
        {
          ints.map(id => {
            return (
              <li>{id}</li>
            )
          })
        }
      </div>
    )
  }
  return (
    <ul>
      <ListItems />
    </ul>
  )
}
