function VehicleModels(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {props.models.map(model => {
                    return (
                        <tr key={model.href}>
                            <td>{model.name}</td>
                            <td>{model.bins}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default VehicleModels
