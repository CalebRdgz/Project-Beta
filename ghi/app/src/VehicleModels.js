function VehicleModels(vehicles) {
    console.log(vehicles);
    return (
        <div>
            <div className='row' style={{paddingTop: '70px', paddingBottom: '20px'}}>
                <div className="container">
                    <h1>Vehicle Models</h1>
            </div>
        </div>
        <table className="my-5 table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.vehicles.models.map(model => {
                    return (
                        <tr key={model.href}>
                            <td>{model.name}</td>
                            <td>{model.manufacturer.name}</td>
                            <td><img src={model.picture_url} width={350} height={200}/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default VehicleModels
