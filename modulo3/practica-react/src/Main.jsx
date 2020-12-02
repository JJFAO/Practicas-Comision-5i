import Card from './Card'
import './Main.scss'
import Photos from './Photos'

export default function Main(props) {
    // En el parámetro, el componente recibe el objeto props,
    // con los datos que se le pasen al llamarlo.

    const datos = [
        { title: 'manzanas', description: "otra descripcion" },
        { title: 'peras', description: "otra descripcion" },
        { title: 'naranjas', description: "otra descripcion" },
    ]

    // Map genera un array de jsx, a partir del array 'datos. Llamando y pasandole los datos necesarios al componente Card'
    const cards = datos.map((dato, i) => <Card data={dato} key={i} />)

    return (
        <main>
            {/* Una fila con una cantidad estática de cards */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card bg-fondo" style={{ width: '18rem' }}>
                            <img src="/" alt="" />
                            <div className="card-body">
                                {/* Del objeto props accedemos a la propiedad title en data.*/}
                                <h5>{props.data.title}</h5>
                                <p>{props.data.description}</p>
                                <a href="/" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card bg-fondo" style={{ width: '18rem' }}>
                            <img src="/" alt="" />
                            <div className="card-body">
                                {/* Del objeto props accedemos a la propiedad title en data.*/}
                                <h5>{props.data.title}</h5>
                                <p>{props.data.description}</p>
                                <a href="/" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card bg-fondo" style={{ width: '18rem' }}>
                            <img src="/" alt="" />
                            <div className="card-body">
                                {/* Del objeto props accedemos a la propiedad title en data.*/}
                                <h5>{props.data.title}</h5>
                                <p>{props.data.description}</p>
                                <a href="/" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Una fila con cantidad dinámica de cards, depende de la cantidad de elementos en 'datos'. */}
            <div className="container mt-5">
                <div className="row">
                    {cards}
                </div>
            </div>
            <div className="container mt-5">
                <Photos />
            </div>
        </main>
    )
}
