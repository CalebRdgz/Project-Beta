function Manufacturers(manufacturers) {
    console.log(manufacturers)
    return (
        <div>
            <div className='row' style={{paddingTop: '70px', paddingBottom: '20px'}}>
                <div className="container">
                    <h1>Vehicle Models</h1>
            </div>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.manufacturers.manufacturers.map(manufacturer => {
                    return (
                        <tr key={manufacturer.href}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default Manufacturers;
