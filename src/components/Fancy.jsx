
const Fancy = ({element}) => {
  return (
    <div className="card--container">

        <div className="">
            <h1 className="h3"><strong>{element.name}</strong></h1>
            <small className="h6">{element.count} ({element.name})</small>
        </div>
    </div>
  )
}

export default Fancy