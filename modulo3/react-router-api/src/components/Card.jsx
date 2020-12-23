
export default function Card(props) {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card bg-fondo h-100" style={{ width: '18rem' }}>
                <img src="/" alt="" />
                <div className="card-body d-flex flex-column justify-content-between">
                    {/* Del objeto props accedemos a la propiedad title en data.*/}
                    <h5>{props.title}</h5>
                    <p>{props.description }</p>
                    <img src={props.image} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}
