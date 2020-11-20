import './Main.css'

export default function Main(props) {
    // En el parámetro, el componente recibe el objeto props,
    // con los datos que se le pasen al llamarlo.
    return (
        <main>
            <div className="card bg-fondo" style={{ width: '18rem' }}>
                <img src="/" alt="" />
                <div className="card-body">
                    {/* Del objeto props accedemos a la propiedad title en data.*/}
                    <h5>{props.data.title}</h5>
                    <p>{props.data.description}</p>
                    <a href="/" className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </main>
    )
}
